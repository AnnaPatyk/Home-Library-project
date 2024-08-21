import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../app/http";

export const authUser = createAsyncThunk(
  "authUser",
  async (token, thunkAPI) => {
    try {
      const response = await http.get("authorization/get-auth-user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
