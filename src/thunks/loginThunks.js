import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../app/http";

export const loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkAPI) => {
    try {
      const response = await http.post("authorization/login", payload);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
