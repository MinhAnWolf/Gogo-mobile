import { API } from "../common/api/api-common";
import axiosInstance from "../interceptor";
import { RequestAuthentication } from "../type/type-api";

export const login = async (data: RequestAuthentication) => {
  return await axiosInstance.post(`${API.AUTHENTICATION}`, data);
};
