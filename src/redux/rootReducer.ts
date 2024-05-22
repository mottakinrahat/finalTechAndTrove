import { baseApi } from "./api/baseApi";
import themeReducer from "../redux/themeSlice/themeSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  theme: themeReducer,
};
