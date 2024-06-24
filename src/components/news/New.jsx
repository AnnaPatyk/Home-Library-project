import React from "react";
import { useSelector } from "react-redux";
import BlockNews from "./BlockNews";

export default function New() {
  const { data: news } = useSelector((state) => state.news);
  return (
    <article>
      {news.map((obj) => (
        <BlockNews key={obj._id} obj={obj}></BlockNews>
      ))}
    </article>
  );
}
