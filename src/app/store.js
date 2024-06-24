import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "../slice/booksSlice";
import GenreBookReducer from "../slice/genreBooksSlice";
import NewsReducer from "../slice/newsSlise";
import BookReducer from "../slice/bookSlice";

export const store = configureStore({
  reducer: {
    news: NewsReducer,
    books: BooksReducer,
    book: BookReducer,
    genreBook: GenreBookReducer,
  },
});
