import { createSlice } from "@reduxjs/toolkit";
import { products } from "./products";
const initialState = {
  products: products,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems.splice(0, state.cartItems.length);
    },
    addToCart: (state, { payload }) => {
      const index = state.cartItems.findIndex((item) => {
        return item.id === payload.id;
      });
      if (index === -1) {
        state.cartItems.push(payload);
      } else {
        state.cartItems[index] = payload;
      }
    },
    addAmount: (state, { payload }) => {
      const index = state.cartItems.findIndex((item) => {
        return item.id === payload.id;
      });
      if (index !== -1) {
        state.cartItems[index].quantity++;
      }
    },
    removeAmount: (state, { payload }) => {
      const index = state.cartItems.findIndex((item) => {
        return item.id === payload.id;
      });
      if (index !== -1 && state.cartItems[index].quantity > 1) {
        state.cartItems[index].quantity--;
      }
    },
  },
});

export const { clearCart, addToCart, addAmount, removeAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
