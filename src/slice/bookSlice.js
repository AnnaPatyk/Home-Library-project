import { createSlice } from "@reduxjs/toolkit";
import { getBook, updateBook } from "../thunks/booksThunks";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getBook.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default bookSlice.reducer;
