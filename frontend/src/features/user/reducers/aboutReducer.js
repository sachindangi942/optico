import { createSlice } from "@reduxjs/toolkit";
import { fetchAboutContent } from "../actions/aboutThunks";

const initialState = {
  about: null,
  loading: false,
  error: null,
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutContent.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAboutContent.fulfilled, (state, action) => {
        state.loading = false;
        state.about = action.payload;
      })
      .addCase(fetchAboutContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default aboutSlice.reducer;
