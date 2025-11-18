import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  fetchCurrentUser,
  updateUser,
  logoutUser,
} from "../actions/userThunks";

import { toast } from "react-toastify";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        toast.success("User updated");
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.currentUser = null;
        state.loading = false;
        toast.success("Logged out");
      });
  },
});

export default userSlice.reducer;
