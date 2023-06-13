import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../interfaces/Product";

export interface Product {
  id: number;
  name: string;
}

interface ProductState {
  products: Product[];
  product: ProductType | null;
}

const initialState: ProductState = {
  products: [],
  product: null,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<{ name: string }>) => {
      state.products.push({
        id: state.products.length,
        name: action.payload.name,
      });
    },
  },
});

export default ProductSlice;
export const { addProduct } = ProductSlice.actions;
