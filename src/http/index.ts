import axios, { AxiosResponse } from "axios";
import {
  AuthUser,
  LoginUserData,
  PostProperty,
  PropertyUpdateForm,
  RegisterUser,
  UpdateProfileProps,
} from "../types";
import { enqueueSnackbar } from "notistack";

//axios instances
const publicApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const privateApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${JSON.parse(
      localStorage.getItem("access_token") as string
    )}`,
  },
});

//LIST OF PUBLIC API ENDPOINTS
export const getAllProperties = () =>
  publicApi.get("/api/v1/real-estate/properties/filter");
export const addProperties = (data: PostProperty, landlord: string) =>
  publicApi.post(`/api/v1/real-estate/properties/${landlord}`, data);
export const getAllPropertyOfLandlord = (landlord: string) =>
  publicApi.get(`/api/v1/real-estate/properties/landlord/${landlord}`);
export const deleteProperty = (propertyId: string) =>
  publicApi.delete(`/api/v1/real-estate/properties/${propertyId}`);
export const getPropertyById = (propertyId: string | undefined) =>
  publicApi.get(`/api/v1/real-estate/properties/${propertyId}`);
export const updateProperty = (
  data: PropertyUpdateForm,
  propertyId: string | undefined
) => publicApi.put(`/api/v1/real-estate/properties/${propertyId}`, data);

//AUTH API'S
export const registerUser = (data: RegisterUser) =>
  publicApi.post(`/api/v1/auth/register`, data);

export const loginUser = (data: AuthUser) =>
  publicApi.post(`api/v1/auth/login`, data);

//LIST OF PRIVATE API ENDPOINTS

export const updateProfile = (
  role: string,
  userId: string,
  data: UpdateProfileProps
) => privateApi.put(`/api/v1/users/${role}/${userId}`, data);

// Private API Interceptor
privateApi.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: any) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const refreshToken = JSON.parse(
          localStorage.getItem("refresh_token") as string
        );
        if (!refreshToken) {
          throw new Error("No refresh token found");
        }

        const { data }: AxiosResponse<LoginUserData> = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/v1/auth/refresh`,
          { token: refreshToken }, // Send an empty object as the body if no data is needed
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        console.log(data);

        if (data) {
          localStorage.setItem("access_token", data.accessToken);
          localStorage.setItem("refresh_token", data.refreshToken);
        }

        // Update the Authorization header in privateApi instance
        privateApi.defaults.headers.Authorization = `Bearer ${data.accessToken}`;

        // Retry the original request with the new token
        return privateApi.request(originalRequest);
      } catch (refreshError: any) {
        enqueueSnackbar(
          refreshError.response?.data?.message || "Token refresh failed",
          {
            variant: "error",
          }
        );
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default privateApi;
