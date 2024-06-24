import { createSlice } from "@reduxjs/toolkit";
import { allNews, createNews } from "../thunks/newsThunk";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const newsSlise = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (bilder) => {
    bilder
      .addCase(allNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(allNews.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(allNews.rejected, (state) => {
        state.loading = false;
      })

      .addCase(createNews.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });
  },
});

export default newsSlise.reducer;
