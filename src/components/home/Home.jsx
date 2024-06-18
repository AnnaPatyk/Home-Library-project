import React from "react";
import ArtiklBlok from "../generalСomponents/ArtiklBlok";
import { useSelector } from "react-redux";

export default function Home() {
  const { data: books } = useSelector((state) => state.books);

  return (
    <main>
      <ArtiklBlok title={"Топ книг"} arr={books}></ArtiklBlok>
      <ArtiklBlok title={"Книги"} arr={books} link={"/books"}></ArtiklBlok>
      <ArtiklBlok title={"Новини"} arr={books}></ArtiklBlok>
    </main>
  );
}
