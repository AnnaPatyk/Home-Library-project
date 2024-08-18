import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "../slice/booksSlice";
import GenreBookReducer from "../slice/genreBooksSlice";
import NewsReducer from "../slice/newsSlise";
import BookReducer from "../slice/bookSlice";
import FilterReducer from "../slice/filterSlice";
import Registration from "../slice/registrationSlice";
import LoginReducer from "../slice/loginUserSlice";

export const store = configureStore({
  reducer: {
    news: NewsReducer,
    books: BooksReducer,
    book: BookReducer,
    genreBook: GenreBookReducer,
    filter: FilterReducer,
    registration: Registration,
    loginUser: LoginReducer,
  },
});
