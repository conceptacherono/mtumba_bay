import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductType } from "../interfaces/Product";

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], void>({
      query: () => "/products",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
