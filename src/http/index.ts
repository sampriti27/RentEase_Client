import axios from "axios";
import { PostProperty, PropertyUpdateForm } from "../types";

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
