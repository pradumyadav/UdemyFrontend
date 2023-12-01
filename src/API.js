import axios from "axios";
const BASE_URI = "http://localhost:4005";

const axiosInstance = axios.create({
  baseURL: BASE_URI,
}); 


axiosInstance.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("persist:root")) || null;

  config.headers.Authorization = `Bearer ${token.user.token}`;
  return config;
});

export default axiosInstance;
