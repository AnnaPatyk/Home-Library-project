import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../app/http";

export const allBooks = createAsyncThunk("books.all", async () => {
  const response = await http.get("books");
  return response.data;
});

export const allBooksGenre = createAsyncThunk(
  "books.genre",
  async (payload) => {
    const response = await http.get(`books/genre/${payload}`);
    return response.data;
  }
);

export const getBook = createAsyncThunk("book.get", async (payload) => {
  const response = await http.get(`books/${payload}`);
  return response.data;
});

export const createBook = createAsyncThunk("book.create", async (payload) => {
  const response = await http.post("books/add", payload);
  return response.data;
});

export const updateBook = createAsyncThunk(
  "book.update",
  async ({ id, update }) => {
    const response = await http.put(`books/${id}`, update);
    return response.data;
  }
);

export const deleteBook = createAsyncThunk("book.update", async (payload) => {
  const response = await http.delete(`books/${payload}`);
  return response.data;
});
