import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-buiz.onrender.com/api", // backend base url
});
// https://backend-buiz.onrender.com


API.interceptors.request.use((req) => {
  const token = sessionStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
