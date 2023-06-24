import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductType } from "../interfaces/Product";

export const productsApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], string>({
      query: (categoryName) =>
        categoryName === "all"
          ? "/products?limit=8"
          : `/products/category/${categoryName}`,
    }),
    getCategories: builder.query<string[], void>({
      query: () => "/products/categories",
    }),
    getProductById: builder.query<ProductType, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductByIdQuery,
} = productsApi;
