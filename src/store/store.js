import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducer/root";

export const store = configureStore({
  reducer: rootReducer, // rootReducer 자리
  devTools: process.env.NODE_ENV === "development", // production 상황에서만 false
});
