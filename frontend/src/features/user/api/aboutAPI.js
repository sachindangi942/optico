import axiosInstance from "../../../services/axiosInstance";

export const fetchAboutContentAPI = async () => {
  const res = await axiosInstance.get("/users/getAbout");
  return res.data.data;
};
