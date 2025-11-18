import { configureStore } from "@reduxjs/toolkit";
import { servicesReducer } from "../features/servicesProvide";
import { aboutReducer, userReducer } from "../features/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
    service: servicesReducer,
    about: aboutReducer,
  },
});

