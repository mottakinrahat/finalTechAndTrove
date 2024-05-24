import { baseApi } from "./baseApi";

const smartWatchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSmartWatch: builder.mutation({
      query: (data) => ({
        url: "/smartwatch",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
    }),
    getSmartWatch: builder.query({
      query: () => ({
        url: "/smartwatch",
        method: "GET",
      }),
      providesTags: ["smartwatch"],
    }),
  }),
});

export const { useGetSmartWatchQuery, useCreateSmartWatchMutation } =
  smartWatchApi;
