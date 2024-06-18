import style from "./article.module.css";
import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function ArtiklBlok({ title, arr, link }) {
  return (
    <article className={style.article}>
      <h4>{title}</h4>
      <div className={style.articleCards}>
        {arr.map((book) => (
          <Card key={book._id} obj={book}></Card>
        ))}
      </div>
      <Link to={link}>Показати більше >> </Link>
    </article>
  );
}
