import React from "react";
import { Link } from "react-router-dom";

export default function LinkBook({ link, title }) {
  return (
    <>
      <Link to={link}>{title} </Link>
    </>
  );
}
