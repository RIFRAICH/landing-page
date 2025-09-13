import axios from "axios";
import { API_URL } from "../config";

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(
      "Erreur API:",
      error.response?.data?.message || error.message,
    );
    return Promise.reject(error);
  },
);

export default apiClient;
