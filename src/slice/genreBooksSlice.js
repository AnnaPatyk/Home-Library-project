import { createSlice } from "@reduxjs/toolkit";
import { allBooksGenre } from "../thunks/booksThunks";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const genreBookSlice = createSlice({
  name: "genreBook",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(allBooksGenre.pending, (state) => {
        state.loading = true;
      })
      .addCase(allBooksGenre.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(allBooksGenre.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default genreBookSlice.reducer;
