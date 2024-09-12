import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/app/userSlice";

export const store = configureStore({
  reducer: {
    userSlice,
  },
});
