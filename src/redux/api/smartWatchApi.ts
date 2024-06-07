import { baseApi } from "./baseApi";

const smartWatchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSmartWatch: builder.mutation({
      query: (data : any) => {
        // console.log("redux data",data);
        return {
        url: "/smartwatch",
        method: "POST",
        body: data,
      }
    },
    }),
    deleteSmartWatch: builder.mutation({
      query: (id) => ({
        url: `/smartwatch/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["smartwatch"],
    }),
    getSmartWatch: builder.query({
      query: () => ({
        url: "/smartwatch",
        method: "GET",
      }),
      providesTags: ["smartwatch"],
    }),
    getSmartWatchWithReview: builder.query({
      query: (id) => ({
        url: `/smartwatch/${id}/reviews`,
        method: "GET",
      }),
      providesTags: ["smartwatch"],
    }),
  }),
});

export const {
  useGetSmartWatchQuery,
  useGetSmartWatchWithReviewQuery,
  useCreateSmartWatchMutation, useDeleteSmartWatchMutation,
} = smartWatchApi;
