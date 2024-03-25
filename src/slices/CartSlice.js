import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("orebiCart")
    ? JSON.parse(localStorage.getItem("orebiCart"))
    : [],
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    cartReducer: (state, action) => {
      let findindex = state.cart.findIndex(
        (item) => item.id == action.payload.id
      );

      if (findindex == -1) {
        state.cart = [...state.cart, action.payload];
        localStorage.setItem("orebiCart", JSON.stringify(state.cart));
      } else {
        state.cart[findindex].qun++;
        localStorage.setItem("orebiCart", JSON.stringify(state.cart));
      }
    },

    removeProduct: (state, action) => {
      state.cart.splice(action.payload.id, 1);
      localStorage.setItem("orebiCart", JSON.stringify(state.cart));
    },

    updateQuntity: (state, action) => {
      // console.log(action.payload);

      state.cart[action.payload.id].qun += action.payload.n;

      if (state.cart[action.payload.id].qun == 0) {
        state.cart[action.payload.id].qun = 1;
      }

      localStorage.setItem("orebiCart", JSON.stringify(state.cart));
    },
  },
});

// Action creators are generated for each case reducer function
export const { cartReducer, removeProduct, updateQuntity } = CartSlice.actions;

export default CartSlice.reducer;
