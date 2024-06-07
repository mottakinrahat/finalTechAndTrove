import { baseApi } from "./api/baseApi";
import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../redux/themeSlice/themeSlice";

export const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  theme: themeReducer,
});
