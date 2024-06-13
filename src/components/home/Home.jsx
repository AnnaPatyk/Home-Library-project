import React from "react";
import ArtiklBlok from "../generalСomponents/ArtiklBlok";

export default function Home() {
  return (
    <main>
      <ArtiklBlok title={"Топ книг"}></ArtiklBlok>
      <ArtiklBlok title={"Книги"}></ArtiklBlok>
      <ArtiklBlok title={"Новини"}></ArtiklBlok>
    </main>
  );
}
