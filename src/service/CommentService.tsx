import { API } from "../common/api/api-common";
import axiosInstance from "../interceptor";

export const addCommentService = async (data: any) => {
  console.log(API.ADD_COMMENT);

  return await axiosInstance.post(`${API.ADD_COMMENT}`, data);
};
