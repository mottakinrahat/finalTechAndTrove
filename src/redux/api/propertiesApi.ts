import { baseApi } from "./baseApi";

const propertiesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProperties: builder.mutation({
      query: (data) => ({
        url: "/properties",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
    }),
    getProperties: builder.query({
      query: () => ({
        url: "/properties",
        method: "GET",
      }),
      providesTags: ["properties"],
    }),
    getSingleProperty: builder.query({
      query: (options) => ({
        url: `/properties/${options?.id}`,
        method: "GET",
      }),
      providesTags: ["properties"],
    }),
  }),
});

export const {
  useCreatePropertiesMutation,
  useGetPropertiesQuery,
  useGetSinglePropertyQuery,
} = propertiesApi;
