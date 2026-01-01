

import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
// console.log("api", API_URL)
const adminAPI = axios.create({
  baseURL: API_URL,
  withCredentials: true, // allow cookies if backend uses them
});

// Function to set JWT token in headers
export const setAdminToken = (token) => {
  if (token) {
    adminAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete adminAPI.defaults.headers.common["Authorization"];
  }
};

export default adminAPI;

