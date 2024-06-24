import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allBooksGenre } from "../../thunks/booksThunks";

export default function Filter() {
  const { data: books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const genre = [
    ...new Set(
      books.map((book) => {
        return book.genre;
      })
    ),
  ];
  const clickHandler = (value) => {
    dispatch(allBooksGenre(value));
  };

  return (
    <aside>
      {genre.map((genre, index) => (
        <button key={index} onClick={() => clickHandler(genre)}>
          {genre}
        </button>
      ))}
      <button onClick={() => clickHandler("all")}> Всі книги</button>
    </aside>
  );
}
