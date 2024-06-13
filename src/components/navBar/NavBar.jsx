import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/books"}>Books</NavLink>
        <NavLink to={"/new"}>New</NavLink>
        <NavLink to={"/add-book"}>Add book</NavLink>
        <div>
          {" "}
          <NavLink to={"/login"}>login</NavLink>
        </div>
      </nav>
    </header>
  );
}
