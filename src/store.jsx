import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import postSlice from "./features/postSlice";
import userSlice from "./features/userSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    blog: postSlice,
    user: userSlice,
  },
});
