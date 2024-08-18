import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../app/http";

export const registration = createAsyncThunk(
  "registration",
  async (payload, thunkAPI) => {
    try {
      const response = await http.post("authorization/register", payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
