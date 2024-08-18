import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./navBar.module.css";
import { Modal } from "antd";
import Login from "../login/LoginForm";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../thunks/loginThunks";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const formikRef = useRef(null);
  const user = useSelector((state) => state.loginUser.data);
  const error = useSelector((state) => state.loginUser.error);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if (formikRef.current) {
      await formikRef.current.submitForm();
      if (!error) {
        formikRef.current.resetForm();
        setIsModalOpen(false);
      }
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const sabmitHandler = async () => {
    await dispatch(loginUser(formikRef.current.values));
  };

  useEffect(() => {
    if (error.errorFiled && formikRef.current) {
      formikRef.current.setErrors({ [error.errorFiled]: error.message });
    }
  }, [error]);

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
          <button
            style={{ all: "unset" }}
            className={style.navLinks}
            onClick={showModal}
          >
            <UserOutlined />
          </button>
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
