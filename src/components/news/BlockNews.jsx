import React from "react";
import style from "./blockNews.module.css";

const BlockNews = ({ obj }) => {
  return (
    <section className={style.blockNews}>
      <h3>{obj.title}</h3>
      <div className={style.content}>
        <p>{obj.content}</p>
      </div>
      <div className={style.blockImg}>
        <img src={obj.image[0]} alt="img" />
      </div>
      <p className={style.info}>
        <span>{obj.author}</span>
        <span>{obj.publishedDate}</span>
      </p>
      {obj.tags && (
        <p className={style.tags}>
          {obj.tags.map((tag) => (
            <span>#{tag}, </span>
          ))}
        </p>
      )}
    </section>
  );
};
export default React.memo(BlockNews);
