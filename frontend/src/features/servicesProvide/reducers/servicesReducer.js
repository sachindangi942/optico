import { createSlice } from "@reduxjs/toolkit";
import {
  fetchServices,
  fetchServiceById,
  createService,
  updateService,
  deleteService,
} from "../actions/servicesThunks";

const initialState = {
  items: [],
  selectedService: null,
  loading: false,
  error: null,
};

const servicesSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch All
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Fetch By ID
      .addCase(fetchServiceById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServiceById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedService = action.payload;
      })
      .addCase(fetchServiceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Create
      .addCase(createService.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // Update
      .addCase(updateService.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (s) => s._id === action.payload._id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })

      // Delete
      .addCase(deleteService.fulfilled, (state, action) => {
        state.items = state.items.filter((s) => s._id !== action.payload._id);
      });
  },
});

export default servicesSlice.reducer;
