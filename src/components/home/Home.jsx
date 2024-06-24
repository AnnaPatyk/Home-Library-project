import React from "react";
import ArtiklBlok from "../generalСomponents/ArtiklBlok";
import { useSelector } from "react-redux";
import LinkBook from "../generalСomponents/LinkBook";
import CarouselBlok from "./carousel/CarouselBlok";

export default function Home() {
  const { data: books } = useSelector((state) => state.books);
  const { data: news } = useSelector((state) => state.news);

  return (
    <main>
      <CarouselBlok
        arr={books.filter((obj) => obj.status === "soon")}
      ></CarouselBlok>
      <ArtiklBlok
        title={"Топ книг"}
        arr={books.filter((book) => book.rating === 5).slice(0, 4)}
        button={<LinkBook link={"/books"} title={"Більше >>"}></LinkBook>}
      ></ArtiklBlok>
      <ArtiklBlok
        title={"Книги"}
        arr={books.slice(0, 4)}
        button={<LinkBook link={"/books"} title={"Більше >>"}></LinkBook>}
      ></ArtiklBlok>
      <ArtiklBlok
        title={"Новини"}
        arr={news.slice(0, 4)}
        button={<LinkBook link={"/new"} title={"Більше >>"}></LinkBook>}
      ></ArtiklBlok>
    </main>
  );
}
