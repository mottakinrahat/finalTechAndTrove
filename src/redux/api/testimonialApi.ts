import { baseApi } from "./baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTestimonial: builder.mutation({
      query: (data) => ({
        url: "/testimonial",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
    }),
    getTestimonial: builder.query({
      query: () => ({
        url: "/testimonial",
        method: "GET",
      }),
      providesTags: ["testimonial"],
    }),
  }),
});

export const { useGetTestimonialQuery, useCreateTestimonialMutation } =
  testimonialApi;
