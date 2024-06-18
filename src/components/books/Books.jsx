import React from "react";
import { useSelector } from "react-redux";
import ArtiklBlok from "../generalСomponents/ArtiklBlok";

export default function Books() {
  const { data: books, loading } = useSelector((state) => state.books);
  return <ArtiklBlok arr={books}></ArtiklBlok>;
}
