import axios from "axios";
import { env } from "../../config/env";

export const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  withCredentials: true
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
