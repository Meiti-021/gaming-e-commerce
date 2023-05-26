import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export default cartSlice.reducer;
