import { configureStore} from "@reduxjs/toolkit";
import ProductSlice from "./features/ProductSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { productsApi } from "../services/productsApi";

export const store = configureStore({
  reducer: {
    product: ProductSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

// infer RootState and AppDispatch type from store
export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch
