import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../thunks/loginThunks";

const initialState = {
  data: null,
  token: null,
  loading: false,
  error: null,
};

const loginUserSlice = createSlice({
  name: "loginUser",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.token = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default loginUserSlice.reducer;
