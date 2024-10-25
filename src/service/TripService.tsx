import { API } from "../common/api/api-common";
import axiosInstance from "../interceptor";
import { PageSearch } from "../type/type-api";

export const locationSearch = async (data: PageSearch) => {
  return await axiosInstance.post(`${API.LOCATION_SEARCH}`, data);
};

export const create = async (data: any) => {
  return await axiosInstance.post(`${API.TRIP_CREATE}`, data);
};
