import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textSearch: "",
  sortOrder: "desc",
  ganreSearch: "all",
  flag: true,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTextSearch: (state, action) => {
      state.textSearch = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setGenreSearch: (state, action) => {
      state.ganreSearch = action.payload;
    },
    setFilterFlag: (state, action) => {
      state.flag = action.payload;
    },
  },
});

export const { setTextSearch, setSortOrder, setGenreSearch, setFilterFlag } =
  filterSlice.actions;

export default filterSlice.reducer;
