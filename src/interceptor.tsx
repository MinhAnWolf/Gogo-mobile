import axios, { InternalAxiosRequestConfig } from "axios";
import { getSecureStore, getStoreData } from "./common/utils/storage-utils";
import { isNull } from "./common/utils/helper-utils";
import { NotiModal } from "./component/modal/notification-modal";

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
    console.log(error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    } else return Promise.reject(response.data);
  },
  (error) => {
    console.log("catch interceptors");
    console.log(error);
    <NotiModal />;
    return Promise.reject(error);
  }
);

export default axiosInstance;
