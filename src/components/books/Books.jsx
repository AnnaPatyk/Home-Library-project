import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArtiklBlok from "../generalСomponents/ArtiklBlok";
import Filter from "../filter/Filter";
import { allBooksGenre } from "../../thunks/booksThunks";
import { useSearchParams } from "react-router-dom";
import {
  setTextSearch,
  setSortOrder,
  setGenreSearch,
  setFilterFlag,
} from "../../slice/filterSlice";

export default function Books() {
  const { data: books } = useSelector((state) => state.genreBook);
  const dispatch = useDispatch();
  const [search, setSearch] = useSearchParams();

  const { textSearch, sortOrder, ganreSearch, flag } = useSelector(
    (state) => state.filter
  );

  const allGenresRef = useRef([]);

  useEffect(() => {
    if (books) {
      const genres = [...new Set(books.map((book) => book.genre))];
      allGenresRef.current = genres;
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(search);
    dispatch(setTextSearch(params.get("q") || ""));
    dispatch(setFilterFlag(params.get("filter") === "author" ? false : true));
    dispatch(setSortOrder(params.get("sort") || "desc"));
    dispatch(setGenreSearch(params.get("ganre") || "all"));
    dispatch(allBooksGenre(params.get("ganre") || "all"));
  }, []);

  const clickHandler = (value) => {
    dispatch(allBooksGenre(value));
    dispatch(setGenreSearch(value));
    setSearch({
      q: textSearch,
      filter: flag ? "title" : "author",
      sort: sortOrder,
      ganre: value,
    });
  };

  const filterBooks = (book) => {
    const filterParams = flag ? book.title : book.author;
    return new RegExp(textSearch, "i").test(filterParams);
  };

  const sortBooks = (books) => {
    return books.sort((a, b) => {
      if (sortOrder === "desc") {
        return b.rating - a.rating;
      } else {
        return a.rating - b.rating;
      }
    });
  };

  const searchHandler = (e) => {
    dispatch(setTextSearch(e.target.value));
    setSearch({
      q: e.target.value,
      filter: flag ? "title" : "author",
      sort: sortOrder,
      ganre: ganreSearch,
    });
  };

  const handleSortOrderChange = (order) => {
    dispatch(setSortOrder(order));
    setSearch({
      q: textSearch,
      filter: flag ? "title" : "author",
      sort: order,
      ganre: ganreSearch,
    });
  };

  const handleFilterChange = (isTitle) => {
    dispatch(setFilterFlag(isTitle));
    clearSearch();
    setSearch({ q: "", filter: isTitle ? "title" : "author", sort: sortOrder });
  };

  const clearSearch = () => {
    dispatch(setTextSearch(""));
    setSearch({ q: "" });
  };

  return (
    <main>
      <ArtiklBlok arr={sortBooks(books.filter(filterBooks))}></ArtiklBlok>
      <div>
        <input type="text" value={textSearch} onChange={searchHandler}></input>
        <button onClick={() => handleFilterChange(true)}>За назвою</button>
        <button onClick={() => handleFilterChange(false)}>За автором</button>
      </div>
      <div>
        <button onClick={() => handleSortOrderChange("desc")}>
          За рейтингом (спадання)
        </button>
        <button onClick={() => handleSortOrderChange("asc")}>
          За рейтингом (зростання)
        </button>
      </div>
      <Filter genre={allGenresRef.current} clickHandler={clickHandler}></Filter>
    </main>
  );
}
