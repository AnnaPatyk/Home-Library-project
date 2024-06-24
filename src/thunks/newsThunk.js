import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../app/http";

export const allNews = createAsyncThunk("news.all", async () => {
  const response = await http.get("news");
  return response.data;
});

export const itemNew = createAsyncThunk("news.item", async (payload) => {
  const response = await http.get(`news/${payload}`);
  return response.data;
});

export const createNews = createAsyncThunk("news.create", async (payload) => {
  const response = await http.post("news", payload);
  return response.data;
});

export const deleteNews = createAsyncThunk("news.delete", async (payload) => {
  const response = await http.delete(`news/${payload}`);
  return response.data;
});

export const updateNews = createAsyncThunk("news.update", async (payload) => {
  const response = await http.put(`news/${payload.id}`, payload);
  return response.data;
});
