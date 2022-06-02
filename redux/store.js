import { configureStore } from "@reduxjs/toolkit";
import bascketReducer from "./slices/basketSlice";

export const store = configureStore({
  reducer: {
    basket: bascketReducer,
  },
});
