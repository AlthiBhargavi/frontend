import axios from "axios";

// Use Vite environment variable for backend URL, default to 5001
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5001/api",
  headers: { "Content-Type": "application/json" },
});

// Attach token from localStorage to every request
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // If backend expects "Bearer <token>", use this:
      // config.headers.Authorization = `Bearer ${token}`;
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
