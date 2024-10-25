import { API } from "../common/api/api-common";
import axiosInstance from "../interceptor";

export const citySearch = async () => {
  return await axiosInstance.get(`${API.CITY_SEARCH}`);
};

export const locCatSearch = async () => {
  return await axiosInstance.get(`${API.LOCATION_CAT_SEARCH}`);
};
