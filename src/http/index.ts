import axios, { AxiosResponse } from "axios";
import qs from "qs";
import {
  AuthUser,
  LoginUserData,
  PostProperty,
  PropertyUpdateForm,
  RegisterUser,
  UpdateProfileProps,
} from "../types";
import { ReqProps } from "../components/property/EnquiryForm";

// Public Axios Instance
const publicApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Public Endpoints
// calling the same api to get all properties, if flters are not provided then it will fetch all properties and if filter is provided then it will fetch properties based on filter
export const getAllProperties = (filterParams: any) => {
  return publicApi.get("/api/v1/real-estate/properties/filter", {
    params: filterParams,
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: "repeat" });
    },
  });
};
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
export const sendEnquiry = (
  data : ReqProps,
  propertyId : string | undefined
) => publicApi.post(`api/v1/real-estate/properties/send-enquiry/${propertyId}`, data)

//AUTH API'S
export const registerUser = (data: RegisterUser) =>
  publicApi.post(`/api/v1/auth/register`, data);

export const loginUser = (data: AuthUser) =>
  publicApi.post(`api/v1/auth/login`, data);

// PRIVATE ROUTES

export const privateApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization:
      "Bearer " + JSON.parse(localStorage.getItem("access_token") as string),
  },
});

//LIST OF PRIVATE API ENDPOINTS
export const updateProfile = (
  role: string,
  userId: string,
  data: UpdateProfileProps
) => privateApi.put(`/api/v1/users/${role}/${userId}`, data);

// INTERCEPTOR

// Add interceptor for privateApi
privateApi.interceptors.response.use(
  (response) => {
    // Simply return the response if it is successful
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is a 401 and the request has not been retried
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        // Get refresh token from localStorage
        const refreshToken: string = JSON.parse(
          localStorage.getItem("refresh_token") as string
        );

        // Call refresh token API to get new access token
        const { data }: AxiosResponse<LoginUserData> = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/v1/auth/refresh`,
          { token: refreshToken }
        );

        // Update access token in localStorage
        localStorage.setItem("access_token", JSON.stringify(data.accessToken));
        localStorage.setItem(
          "refresh_token",
          JSON.stringify(data.refreshToken)
        );

        // Set the Authorization header with the new token
        privateApi.defaults.headers["Authorization"] =
          "Bearer " + data.accessToken;

        // Retry the original request with the new token
        originalRequest.headers["Authorization"] = "Bearer " + data.accessToken;
        return privateApi(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed", refreshError);
        // Optionally: Log out the user or redirect to the login page
        return Promise.reject(refreshError);
      }
    }

    // If error is not 401 or the retry failed, reject the promise
    return Promise.reject(error);
  }
);
