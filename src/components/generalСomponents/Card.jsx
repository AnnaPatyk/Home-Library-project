import React from "react";
import style from "./card.module.css";
export default function Card({ obj }) {
  return (
    <div className={style.card}>
      <div className={style.imageBox}>
        <img
          className={style.img}
          src={Array.isArray(obj.image) ? obj.image[0] : obj.image}
          alt="description"
        />
      </div>
      <div className={style.content}>
        <h2>{obj.title}</h2>
        <p>{obj.author}</p>
        <p>{obj.publicationYear}</p>
        <p>{obj.genre}</p>
        <p>{obj.rating}</p>
      </div>
    </div>
  );
}
