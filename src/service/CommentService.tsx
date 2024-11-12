import { API } from "../common/api/api-common";
import axiosInstance from "../interceptor";
import { CommentProp } from "../type/type";

export const addCommentService = async (data: CommentProp) => {
  return await axiosInstance.post(`${API.ADD_COMMENT}`, data);
};
