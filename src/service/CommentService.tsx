import { API } from "../common/api/api-common";
import axiosInstance from "../interceptor";

export const addCommentService = async (data: any) => {
  return await await axiosInstance.post(
    API.ADD_COMMENT,
    data, // Dữ liệu gửi lên server
    {
      headers: {
        "Content-Type": "multipart/form-data", // Hoặc 'application/x-www-form-urlencoded' tùy vào loại nội dung bạn cần gửi
      },
    }
  );
};
