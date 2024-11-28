import axios, { InternalAxiosRequestConfig } from "axios";
import {
  getSecureStore,
  getStoreData,
  setSecureStore,
  setStoreData,
} from "./common/utils/storage-utils";
import { isNull } from "./common/utils/helper-utils";
import { NotiModal } from "./component/modal/notification-modal";
import { API } from "./common/api/api-common";
import { setItemAsync } from "expo-secure-store";

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
    const clientId = await getStoreData("client-id");
    const authorization = await getStoreData("authorization");
    config.headers.Authorization = authorization;
    config.headers.id = clientId;
    console.log("====================================");
    console.log("By pass interceptor request");
    console.log("====================================");
    return config;
  },
  (error) => {
    console.log("This is error request: " + error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response) => {
    if (response.status === 200 && response.data.errCode === 0) {
      if (response.config.url?.includes(API.AUTHENTICATION)) {
        await setStoreData("client-id", response.data.uid);
        await setStoreData("authorization", response.data.token);
      }
      return response;
    } else return Promise.reject(response.data);
  },
  (error) => {
    console.log("catch interceptors");
    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
