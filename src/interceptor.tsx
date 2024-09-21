import axios, { InternalAxiosRequestConfig } from "axios";
import { getSecureStore, getStoreData } from "./common/utils/storage-utils";
import { isNull } from "./common/utils/helper-utils";

var axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (config.url?.includes("login") || config.url?.includes("register")) {
      return config;
    }
    if (
      (await isNull(getSecureStore("token"))) &&
      (await isNull(getStoreData("uid")))
    ) {
      return Promise.reject("Can't request");
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
