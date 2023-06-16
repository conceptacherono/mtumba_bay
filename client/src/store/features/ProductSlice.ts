import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../interfaces/Product";
// import { ProductType } from "../../interfaces/Product";

export interface Product {
  id: number;
  name: string;
}

interface ProductState {
  products: Product[];
  cart: ProductType[];
}

const initialState: ProductState = {
  products: [],
  cart: [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<ProductType>) => {
      state.cart.push(action.payload);
    },
    // todo:: Update filter logic
    removeProductFromCart: (state, action: PayloadAction<ProductType>) => {
      state.cart = state.cart.filter(
        (product) => product.quantity !== action.payload.quantity
      );
    },
  },
});

export default ProductSlice;
export const { addProductToCart, removeProductFromCart } = ProductSlice.actions;
