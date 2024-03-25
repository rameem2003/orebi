import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";
import CartSlice from "./slices/CartSlice";

export const Store = configureStore({
  reducer: {
    productArray: ProductSlice,
    cartArray: CartSlice,
  },
});
