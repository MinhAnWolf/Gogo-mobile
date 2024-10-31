import { API } from "../common/api/api-common";
import axiosInstance from "../interceptor";
import { EateriesProp } from "../type/type";

export const citySearch = async () => {
  return await axiosInstance.get(`${API.CITY_SEARCH}`);
};

export const locCatSearch = async () => {
  return await axiosInstance.get(`${API.LOCATION_CAT_SEARCH}`);
};

export const provinceSearch = async () => {
  return await axiosInstance.get(`${API.PROVINCE_SEARCH}`);
};

export const districtSearch = async (pCode: string) => {
  return await axiosInstance.get(`${API.DISTRICT_SEARCH}`, {
    params: { pCode: pCode },
  });
};

export const wardSearch = async (pCode: string, dCode: string) => {
  return await axiosInstance.get(`${API.WARD_SEARCH}`, {
    params: { pCode: pCode, dCode: dCode },
  });
};

export const searchEateries = async (eateries: EateriesProp) => {
  return await axiosInstance.get(`${API.EATERIES_SEARCH}`, {
    params: { name: eateries.name, page: eateries.page, size: eateries.size },
  });
};
