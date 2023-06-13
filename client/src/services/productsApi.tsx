import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductType } from "../interfaces/Product";

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], void>({
      query: () => "/products?limit=8",
    }),
    getCategories: builder.query<string[], void>({
      query: () => "/products/categories",
    }),
    getProductById: builder.query<ProductType, string>({
      query: (id) => `/products/${id}`,
    }),
    getProductsByCategory: builder.query<ProductType[], string>({
      query: (categoryName) => `/products/category/${categoryName}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
} = productsApi;
