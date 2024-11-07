import { API } from "../common/api/api-common";
import axiosInstance from "../interceptor";

export const createSearchHistory = async (data: any) => {
  return await axiosInstance.post(`${API.SAVE_SEARCH_HISTORY}`, data);
};

export const fetchSearchHistory = async () => {
  return await axiosInstance.get(`${API.FETCH_SEARCH_HISTORY}`);
};
