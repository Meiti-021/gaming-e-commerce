import { createSlice } from "@reduxjs/toolkit";
import { products } from "./products";
const initialState = {
  products: products,
  cartItems: [],
  wishList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems.splice(0, state.cartItems.length);
    },
    clearWishList: (state) => {
      state.wishList.splice(0, state.wishList.length);
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
    addAllToCart: (state) => {
      state.wishList.forEach((wishItem) => {
        const index = state.cartItems.findIndex((item) => {
          return item.id === wishItem.id;
        });
        if (index === -1) {
          state.cartItems.push(wishItem);
        }
      });
      state.wishList.splice(0, state.wishList.length);
    },
    addToWishList: (state, { payload }) => {
      const index = state.wishList.findIndex((item) => {
        return item.id === payload.id;
      });
      if (index === -1) {
        state.wishList.push(payload);
      } else {
        state.wishList[index] = payload;
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
    removeItem: (state, { payload }) => {
      const index = state.cartItems.findIndex((item) => item.id === payload);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
    removeWhisItem: (state, { payload }) => {
      const index = state.wishList.findIndex((item) => item.id === payload);
      if (index !== -1) {
        state.wishList.splice(index, 1);
      }
    },
  },
});

export const {
  clearCart,
  addToCart,
  addAmount,
  removeAmount,
  removeItem,
  addToWishList,
  removeWhisItem,
  clearWishList,
  addAllToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
