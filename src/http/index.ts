import axios from "axios";
import {
  AuthUser,
  PostProperty,
  PropertyUpdateForm,
  RegisterUser,
} from "../types";

//axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

//List of all api endpoints
export const getAllProperties = () =>
  api.get("/api/v1/real-estate/properties/filter");
export const addProperties = (data: PostProperty, landlord: string) =>
  api.post(`/api/v1/real-estate/properties/${landlord}`, data);
export const getAllPropertyOfLandlord = (landlord: string) =>
  api.get(`/api/v1/real-estate/properties/landlord/${landlord}`);
export const deleteProperty = (propertyId: string) =>
  api.delete(`/api/v1/real-estate/properties/${propertyId}`);
export const getPropertyById = (propertyId: string | undefined) =>
  api.get(`/api/v1/real-estate/properties/${propertyId}`);
export const updateProperty = (
  data: PropertyUpdateForm,
  propertyId: string | undefined
) => api.put(`/api/v1/real-estate/properties/${propertyId}`, data);

//auth apis
export const registerUser = (data: RegisterUser) =>
  api.post(`/api/v1/auth/register`, data);

export const loginUser = (data: AuthUser) =>
  api.post(`api/v1/auth/login`, data);
