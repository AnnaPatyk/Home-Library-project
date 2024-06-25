import React from "react";
import { Link } from "react-router-dom";

const LinkBook = ({ link, title }) => {
  return (
    <>
      <Link to={link}>{title} </Link>
    </>
  );
}
export default React.memo(LinkBook)