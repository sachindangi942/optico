import axiosInstance from "../../../services/axiosInstance";

//  Login
export const loginUserAPI = async (credentials) => {
  const res = await axiosInstance.post("/admin/adminLogin", credentials);
  return res.data;
};

//  Get current user
export const getUserAPI = async () => {
  const res = await axiosInstance.get("/admin/getAdmin");
  return res.data;
};

//  Update user profile
export const userUpdateAPI = async (user) => {
  const res = await axiosInstance.put("/admin/updateAdminProfile", user);
  return res.data;
};

// Logout
export const logoutUserAPI = async (credentials) => {
  const res = await axiosInstance.post("/admin/adminLogout", credentials);
  return res.data;
};
