import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArtiklBlok from "../generalСomponents/ArtiklBlok";
import Filter from "../filter/Filter";
import { allBooksGenre } from "../../thunks/booksThunks";

export default function Books() {
  const { data: books, loading } = useSelector((state) => state.genreBook);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(books);
    dispatch(allBooksGenre("all"));
  }, []);
  return (
    <main>
      <ArtiklBlok arr={books}></ArtiklBlok>
      <Filter></Filter>
    </main>
  );
}
