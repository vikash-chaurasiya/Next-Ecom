import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productAPi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products/" }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
    getAllCategory : builder.query({
      query : () => ({
        url : "categories",
        method : "GET"
      }),
    })
  }),
});


export const {useGetAllProductQuery, useGetAllCategoryQuery} = productApi