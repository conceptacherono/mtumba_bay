import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../interfaces/Product";
// import { ProductType } from "../../interfaces/Product";
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
    updateCartProducts: (state, action: PayloadAction<ProductType>) => {
      state.cart = state.cart.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        } else {
          return product;
        }
      });
    },
    ///// todo:: Update filter logic
    removeProductFromCart: (state, action: PayloadAction<ProductType>) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export default ProductSlice;
export const { addProductToCart, updateCartProducts, removeProductFromCart } =
  ProductSlice.actions;
