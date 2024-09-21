import axios, { InternalAxiosRequestConfig } from "axios";

var axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if ((config.url?.includes("login"), config.url?.includes("register"))) {
      return config;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
