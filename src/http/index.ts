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
export const getAllProperties = () => api.get("/api/v1/real-estate/properties/filter");
