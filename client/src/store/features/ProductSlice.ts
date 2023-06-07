import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  name: string;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
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
