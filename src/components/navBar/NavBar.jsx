import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./navBar.module.css";
import { Modal } from "antd";
import Login from "../login/LoginForm";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../thunks/loginThunks";
import { authUser } from "../../thunks/authUserThunk";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const formikRef = useRef(null);
  const token = useSelector((state) => state.loginUser.token);
  const user = useSelector((state) => state.loginUser.data);
  const error = useSelector((state) => state.loginUser.error);
  const errore = useSelector((state) => state.loginUser.errore);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (token) {
      dispatch(authUser(token));
    }
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    if (errore && formikRef.current) {
      formikRef.current.setFieldError(error.errorField, error.message);
    }
  }, [errore, formikRef.current]);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const handleOk = async () => {
    if (formikRef.current) {
      await formikRef.current.submitForm();
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const sabmitHandler = async () => {
    await dispatch(loginUser(formikRef.current.values));
    if (!errore && formikRef.current) {
      formikRef.current.resetForm();
      setIsModalOpen(false);
    }
  };

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
          {token ? (
            <div className={style.navLinks}>{user.name}</div>
          ) : (
            <button
              style={{ all: "unset" }}
              className={style.navLinks}
              onClick={showModal}
            >
              <UserOutlined />
            </button>
          )}
          <Modal
            title="Вхід"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Login formikRef={formikRef} sabmitHandler={sabmitHandler}></Login>
          </Modal>
        </div>
      </nav>
    </header>
  );
};
export default React.memo(NavBar);
