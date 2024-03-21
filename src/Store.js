import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";
import CartSlice from "./slices/CartSlice";
import PriceSlice from "./slices/PriceSlice";

export const Store = configureStore({
  reducer: {
    productArray: ProductSlice,
    cartArray: CartSlice,
    price: PriceSlice,
  },
});
