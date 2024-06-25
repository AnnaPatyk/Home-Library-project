import React from "react";
import { useSelector } from "react-redux";
import BlockNews from "./BlockNews";
import style from "./news.module.css";

const New = () => {
  const { data: news } = useSelector((state) => state.news);
  return (
    <article className={style.newsBlock}>
      <h2>Новини </h2>
      {news.map((obj) => (
        <BlockNews key={obj._id} obj={obj}></BlockNews>
      ))}
    </article>
  );
};
export default React.memo(New);
