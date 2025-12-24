// ======================= services/api.js =======================
import axios from "axios";
console.log("API URL before:", import.meta.env.VITE_API_URL); // should show URL

const api = axios.create({
baseURL: import.meta.env.VITE_API_URL,
});
// console.log("API URL:", import.meta.env.VITE_API_URL)
// alert(import.meta.env.VITE_API_URL);


export default api;