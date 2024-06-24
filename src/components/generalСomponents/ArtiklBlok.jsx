import style from "./article.module.css";
import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function ArtiklBlok({ title, arr, button, clickHandler }) {
  return (
    <article className={style.article}>
      <h4>{title}</h4>
      <div className={style.articleCards}>
        {arr.map((book) => (
          <Link
            className={style.cardLink}
            key={book._id}
            to={`/${book._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card obj={book}></Card>
          </Link>
        ))}
      </div>
      {button}
    </article>
  );
}
