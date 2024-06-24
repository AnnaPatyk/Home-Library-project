import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Books from "../components/books/Books";
import New from "../components/news/New";
import AddBook from "../components/addBook/AddBook";
import Login from "../components/login/Login";
import App from "../App";
import Book from "../components/books/Book";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/new",
        element: <New />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/:id", element: <Book /> },
    ],
  },
]);
