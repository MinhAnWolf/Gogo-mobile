import { API } from "../common/api/api-common";
import axiosInstance from "../interceptor";

export const addCommentService = async (data: any) => {
  return await await axiosInstance.post(API.ADD_COMMENT, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
