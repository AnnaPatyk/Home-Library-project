import React from "react";
import style from "./card.module.css";
import { httpImg } from "../../app/http";

const Card = ({ obj }) => {
  const url = new URL(obj.image, httpImg);
  return (
    <div className={style.card}>
      <div className={style.imageBox}>
        <img
          className={style.img}
          src={Array.isArray(obj.image) ? obj.image[0] : url}
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
};
export default React.memo(Card);
