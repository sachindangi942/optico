import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { loginUserAPI, getUserAPI, userUpdateAPI } from "../api/userAPI";

// Login Admin User
export const loginUser = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginUserAPI(credentials);
      const user = response.data;

      if (user.userType === "Admin") {
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Admin login successful");
        return user;
      } else {
        toast.error("Unauthorized: Not an admin");
        return rejectWithValue("Unauthorized");
      }
    } catch (error) {
      toast.error("Login failed");
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Fetch current admin user
export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrent",
  async (_, { rejectWithValue }) => {
    try {
      const user = await getUserAPI();
      return user;
    } catch (error) {
      toast.error("Failed to fetch admin");
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Update admin profile
export const updateUser = createAsyncThunk(
  "user/update",
  async (userData, { rejectWithValue }) => {
    try {
      const updated = await userUpdateAPI(userData);
      localStorage.setItem("user", JSON.stringify(updated));
      toast.success("Profile updated successfully");
      return updated;
    } catch (error) {
      toast.error("Update failed");
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Logout admin user
export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      toast.success("Logged out successfully!");
      return true;
    } catch (error) {
      toast.error("Something went wrong during logout");
      return rejectWithValue(error.message);
    }
  }
);
