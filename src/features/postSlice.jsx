import { createSlice } from "@reduxjs/toolkit";
import { blogs } from "./Blogs";
const initialState = {
  products: blogs,
};

const postSlice = createSlice({
  name: "blogs",
  initialState,
});

export default postSlice.reducer;
