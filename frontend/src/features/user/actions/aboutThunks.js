import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAboutContentAPI } from "../api/aboutAPI";

export const fetchAboutContent = createAsyncThunk(
  "about/fetchAboutContent",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchAboutContentAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Something went wrong");
    }
  }
);
