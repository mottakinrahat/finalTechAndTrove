import { baseApi } from "./baseApi";

const headphoneApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createHeadphone: builder.mutation({
      query: (data) => ({
        url: "/headphone",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
    }),
    getHeadphone: builder.query({
      query: () => ({
        url: "/headphone",
        method: "GET",
      }),
      providesTags: ["headphone"],
    }),
  }),
});

export const { useGetHeadphoneQuery, useCreateHeadphoneMutation } =
  headphoneApi;
