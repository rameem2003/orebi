import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("orebiCart")
    ? JSON.parse(localStorage.getItem("orebiCart"))
    : [],
};

export const CartSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    cartReducer: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cart = [...state.cart, action.payload];
      localStorage.setItem("orebiCart", JSON.stringify(state.cart));
    },
  },
});

// Action creators are generated for each case reducer function
export const { cartReducer } = CartSlice.actions;

export default CartSlice.reducer;
