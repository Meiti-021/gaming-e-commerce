import { createSlice } from "@reduxjs/toolkit";
import { products } from "./products";
const initialState = {
  products: products,
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export default cartSlice.reducer;
