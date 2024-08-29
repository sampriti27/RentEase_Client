import axios from "axios";

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

// get all properties
export const getAllProperties = () =>
  api.get("/api/v1/real-estate/properties/filter");

// get single property by it's id
export const getPropertyById = (propertyId: string | undefined) =>
  api.get(`/api/v1/real-estate/properties/${propertyId}`);
