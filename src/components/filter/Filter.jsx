import React from "react";
export default function Filter({ genre, clickHandler }) {
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
