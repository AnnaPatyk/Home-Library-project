import React from "react";

export default function BlockNews({ obj }) {
  return (
    <section>
      <h3>{obj.title}</h3>
      <div>
        <p>{obj.content}</p>
        <img src={obj.image[0]} />
      </div>
      <p>
        <span>{obj.author}</span>
        <span>{obj.publishedDate}</span>
      </p>
      {obj.tags && (
        <p>
          {obj.tags.map((tag) => (
            <span>#{tag}, </span>
          ))}
        </p>
      )}
    </section>
  );
}
