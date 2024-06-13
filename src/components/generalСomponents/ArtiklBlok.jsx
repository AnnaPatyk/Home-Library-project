import style from "./article.module.css";
import React from "react";
import Card from "./Card";
import { book } from "../../homeLibraryBD";

export default function ArtiklBlok({ title }) {
  return (
    <article className={style.article}>
      <h4>{title}</h4>
      <div className={style.articleCards}>
        <Card obj={book}></Card>
        <Card obj={book}></Card>
        <Card obj={book}></Card>
        <Card obj={book}></Card>
      </div>
      <button>Показати більше >> </button>
    </article>
  );
}
