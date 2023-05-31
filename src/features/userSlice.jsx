import { createSlice } from "@reduxjs/toolkit";
import { clients } from "./Clients";

const initialState = {
  users: clients,
  isLogin: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
});

export default userSlice.reducer;
