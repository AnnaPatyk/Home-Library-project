import React from "react";
import style from "./filter.module.css";
const Filter = ({ genre, clickHandler }) => {
  return (
    <aside className={style.filterBlok}>
      <h4>Жанр</h4>
      {genre.map((genre, index) => (
        <button key={index} onClick={() => clickHandler(genre)}>
          {genre}
        </button>
      ))}
      <button onClick={() => clickHandler("all")}> Всі книги</button>
    </aside>
  );
};
export default React.memo(Filter);
