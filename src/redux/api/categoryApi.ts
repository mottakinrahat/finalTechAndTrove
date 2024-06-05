import { baseApi } from "./baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
    }),
    getCategory: builder.query({
      query: (query) => ({
        url: `/${query}`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),
  }),
});

export const { useGetCategoryQuery, useCreateCategoryMutation } = categoryApi;
