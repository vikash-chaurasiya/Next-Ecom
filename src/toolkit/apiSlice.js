import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productAPi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: (limit) => ({
        url: `?limit=${limit}&skip=0`,
        method: "GET",
      }),
    }),
    getAllCategory: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
    }),
    getProductByCategory: builder.query({
      query: (categ) => ({
        url: `/category/${categ}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductQuery, useGetAllCategoryQuery, useGetProductByCategoryQuery } = productApi;
