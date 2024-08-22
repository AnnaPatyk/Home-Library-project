import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../thunks/loginThunks";
import { authUser } from "../thunks/authUserThunk";

const initialState = {
  data: null,
  token: null,
  loading: false,
  error: null,
  errore: false,
};

const loginUserSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.data = null;
      state.token = null;
      state.error = null;
      state.errore = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.token = null;
        state.error = null;
        state.errore = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.errore = false;
        state.data = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.errore = action.payload.errore;
        state.error = action.payload;
      })
      .addCase(authUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.token = action.meta.arg;
        state.loading = false;
        state.errore = false;
        state.data = action.payload;
      });
  },
});
export const { resetUser } = loginUserSlice.actions;
export default loginUserSlice.reducer;
