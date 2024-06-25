import style from "./article.module.css";
import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import classNames from "classnames";

const ArtiklBlok = ({ title, arr, button }) => {
  return (
    <article className={style.article}>
      <h4>{title}</h4>
      <div className={style.articleCards}>
        {arr.map((book) =>
          title !== "Новини" ? (
            <Link
              className={classNames(style.cardLink)}
              key={book._id}
              to={`/${book._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card obj={book}></Card>
            </Link>
          ) : (
            <Card obj={book}></Card>
          )
        )}
      </div>
      {button}
    </article>
  );
};
export default React.memo(ArtiklBlok);
