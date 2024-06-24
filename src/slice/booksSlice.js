import { createSlice } from "@reduxjs/toolkit";
import { allBooks, createBook, getBook } from "../thunks/booksThunks";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(allBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(allBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(allBooks.rejected, (state) => {
        state.loading = false;
      })

      .addCase(createBook.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });
  },
});

export default booksSlice.reducer;
