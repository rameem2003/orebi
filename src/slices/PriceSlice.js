import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 0,
};

export const PriceSlice = createSlice({
  name: "Price",
  initialState,
  reducers: {
    priceReducer: (state, action) => {
      state.price = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { priceReducer } = PriceSlice.actions;

export default PriceSlice.reducer;
