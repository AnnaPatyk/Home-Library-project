import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const UsersSlise = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (bilder) => {
    bilder.addCase();
  },
});

//export const { functionIsReduser } = UsersSlise.actions;
//export default UsersSlise.reducer;
