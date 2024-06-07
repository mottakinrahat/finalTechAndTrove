import { baseApi } from "./baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCart: builder.mutation({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
    }),
    getCart: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
      providesTags: ["cart"],
    }),
  }),
});

export const { useGetCartQuery, useCreateCartMutation } = cartApi;
