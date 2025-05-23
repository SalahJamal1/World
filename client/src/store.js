import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./components/userSlice";

export const store = configureStore({
  reducer: {
    userSlice,
  },
});
