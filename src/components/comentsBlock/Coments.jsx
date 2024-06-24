import { CommentOutlined } from "@ant-design/icons";
import { Modal, message } from "antd";
import { Form, Formik } from "formik";
import React, { Fragment, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import InputForm from "../generalСomponents/inputForm/InputForm";
import { updateBook } from "../../thunks/booksThunks";
import schema from "./schemsComments";

const initialValue = {
  userName: "",
  comment: "",
};

export default function Coments({ id, book }) {
  const [open, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const formikRef = useRef(null);

  const submitHandler = (values, formikBag) => {
    const newArr = [...book.comments, values];
    const update = { comments: newArr };
    dispatch(updateBook({ id, update }));
    showBookModal();
    info();
    formikBag.resetForm();
  };

  const showBookModal = () => {
    setOpen(!open);
  };
  const info = () => {
    messageApi.info("Запит відправлено");
  };
  return (
    <Fragment>
      <button onClick={showBookModal}>
        <CommentOutlined />
        {contextHolder}
      </button>
      <Modal
        title="Залишити коментар"
        open={open}
        onOk={() => {
          if (formikRef.current) {
            formikRef.current.submitForm();
          }
        }}
        onCancel={showBookModal}
        cancelText={"Вийти"}
        okText={"Відправити запит"}
      >
        <Formik
          initialValues={initialValue}
          innerRef={formikRef}
          onSubmit={submitHandler}
          validationSchema={schema}
        >
          {() => (
            <Form>
              <InputForm
                name={"userName"}
                type={"text"}
                id={"userName"}
                placeholder={"Ваше ім'я"}
                component={"span"}
                textLabel={"Ваше ім'я : "}
              ></InputForm>
              <InputForm
                name={"comment"}
                type={"text"}
                as={"textarea"}
                id={"comment"}
                placeholder={"Ваш коментар"}
                component={"span"}
                textLabel={"Ваш коментар"}
              ></InputForm>
            </Form>
          )}
        </Formik>
      </Modal>
      {contextHolder}
    </Fragment>
  );
}
