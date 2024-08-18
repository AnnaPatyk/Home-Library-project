import { createSlice } from "@reduxjs/toolkit";
import { registration } from "../thunks/registrationThunks";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.loading = true;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(registration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default registrationSlice.reducer;
