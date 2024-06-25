import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navBar.module.css";

const NavBar = () => {
  return (
    <header className={style.navbar}>
      <nav className={style.nav}>
        <div>
          {" "}
          <NavLink className={style.navLinks} to={"/"}>
            Home
          </NavLink>
          <NavLink className={style.navLinks} to={"/books"}>
            Books
          </NavLink>
          <NavLink className={style.navLinks} to={"/new"}>
            New
          </NavLink>
          <NavLink className={style.navLinks} to={"/add-book"}>
            Add book
          </NavLink>
        </div>
        <div className={style.login}>
          {" "}
          <NavLink className={style.navLinks} to={"/login"}>
            login
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
export default React.memo(NavBar);
