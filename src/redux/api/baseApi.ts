import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tech-n-trove-server.vercel.app/api",
  }),

  endpoints: () => ({}),
  tagTypes: [
    "properties",
    "testimonial",
    "smartwatch",
    "products",
    "category",
    "user",
    "headphone",
    "cart",
  ],
});
