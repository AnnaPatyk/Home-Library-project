import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "../slice/booksSlise";

export const store = configureStore({
  reducer: {
    // users: UsersProvider,
    books: BooksReducer,
  },
});
