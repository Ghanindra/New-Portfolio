

import axios from "axios";

const adminAPI = axios.create({
  baseURL: "http://localhost:5000/api",
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


// import axios from "axios";

// const adminAPI = axios.create({
//   baseURL: "http://localhost:5000/api/admin",
// });

// // Add JWT token automatically to protected requests
// adminAPI.interceptors.request.use((config) => {
//   const token = localStorage.getItem("adminToken");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default adminAPI;
