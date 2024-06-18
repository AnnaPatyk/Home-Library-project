import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { http } from "../app/http";

export const allBooks = createAsyncThunk("books.all", async () => {
  const response = await http.get("");
  return response.data;
});

export const getBook = createAsyncThunk("book.get", async (payload) => {
  const response = await http.get(`/${payload}`);
  return response.data;
});

export const createBook = createAsyncThunk("book.create", async (payload) => {
  const response = await http.post("/add", payload);
  return response.data;
});

export const uodateBook = createAsyncThunk("book.update", async (payload) => {
  const response = await http.put(`/${payload.id}`, payload);
  return response.data;
});

export const deleteBook = createAsyncThunk("book.update", async (payload) => {
  const response = await http.delete(`/${payload}`);
  return response.data;
});
