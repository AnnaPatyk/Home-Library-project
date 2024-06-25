import React, { useCallback, useEffect, useMemo, useRef } from "react";
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
import style from "./books.module.css";

const Books = () => {
  const { data: books } = useSelector((state) => state.genreBook);
  const { data: booksAll } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [search, setSearch] = useSearchParams();
  const { textSearch, sortOrder, ganreSearch, flag } = useSelector(
    (state) => state.filter
  );
  const allGenresRef = useRef([]);

  useEffect(() => {
    const genres = [...new Set(booksAll.map((book) => book.genre))];
    allGenresRef.current = genres;
  }, [booksAll]);

  useEffect(() => {
    const params = new URLSearchParams(search);
    dispatch(setTextSearch(params.get("q") || ""));
    dispatch(setFilterFlag(params.get("filter") === "author" ? false : true));
    dispatch(setSortOrder(params.get("sort") || "desc"));
    dispatch(setGenreSearch(params.get("ganre") || "all"));
    dispatch(allBooksGenre(params.get("ganre") || "all"));
  }, []);

  const clickHandler = useCallback(
    (value) => {
      dispatch(allBooksGenre(value));
      dispatch(setGenreSearch(value));
      setSearch({
        q: textSearch,
        filter: flag ? "title" : "author",
        sort: sortOrder,
        ganre: value,
      });
    },
    [dispatch, setSearch, textSearch, flag, sortOrder]
  );

  const filterBooks = useCallback(
    (book) => {
      const filterParams = flag ? book.title : book.author;
      return new RegExp(textSearch, "i").test(filterParams);
    },
    [textSearch, flag]
  );

  const sortBooks = useCallback(
    (books) => {
      return books.sort((a, b) => {
        if (sortOrder === "desc") {
          return b.rating - a.rating;
        } else {
          return a.rating - b.rating;
        }
      });
    },
    [sortOrder]
  );

  const searchHandler = useCallback(
    (e) => {
      dispatch(setTextSearch(e.target.value));
      setSearch({
        q: e.target.value,
        filter: flag ? "title" : "author",
        sort: sortOrder,
        ganre: ganreSearch,
      });
    },
    [dispatch, setSearch, flag, sortOrder, ganreSearch]
  );

  const handleSortOrderChange = useCallback(
    (order) => {
      dispatch(setSortOrder(order));
      setSearch({
        q: textSearch,
        filter: flag ? "title" : "author",
        sort: order,
        ganre: ganreSearch,
      });
    },
    [dispatch, setSearch, textSearch, flag, ganreSearch]
  );

  const clearSearch = useCallback(() => {
    dispatch(setTextSearch(""));
    setSearch({ q: "" });
  }, [dispatch, setSearch]);

  const handleFilterChange = useCallback(
    (isTitle) => {
      dispatch(setFilterFlag(isTitle));
      clearSearch();
      setSearch({
        q: "",
        filter: isTitle ? "title" : "author",
        sort: sortOrder,
      });
    },
    [dispatch, setSearch, sortOrder, clearSearch]
  );

  const filteredAndSortedBooks = useMemo(() => {
    return sortBooks(books.filter(filterBooks));
  }, [books, sortBooks, filterBooks]);

  return (
    <main className={style.books}>
      <h2 className={style.title}>Бібліотека</h2>
      <ArtiklBlok
        className={style.main}
        arr={filteredAndSortedBooks}
      ></ArtiklBlok>
      <div className={style.filter}>
        <h4>Фільтрувати</h4>
        <div className={style.inputBlock}>
          <input
            type="text"
            value={textSearch}
            onChange={searchHandler}
          ></input>
          <div>
            <button onClick={() => handleFilterChange(true)}>За назвою</button>
            <button onClick={() => handleFilterChange(false)}>
              За автором
            </button>
          </div>
        </div>

        <Filter
          genre={allGenresRef.current}
          clickHandler={clickHandler}
        ></Filter>
        <h4>Сортувати</h4>
        <div>
          <button onClick={() => handleSortOrderChange("desc")}>
            За рейтингом (спадання)
          </button>
          <button onClick={() => handleSortOrderChange("asc")}>
            За рейтингом (зростання)
          </button>
        </div>
      </div>
    </main>
  );
};
export default React.memo(Books);
