import { Modal } from "antd";
import { Form, Formik } from "formik";
import React, { useRef } from "react";
import * as Yup from "yup";
import InputForm from "../generalСomponents/inputForm/InputForm";

const today = new Date();
const nextWeek = new Date(today);
nextWeek.setDate(today.getDate() + 7);

const formatDate = (date) => date.toISOString().slice(0, 10);

const initialValue = {
  name: "",
  email: "",
  date: formatDate(today),
};

const Shema = Yup.object().shape({
  name: Yup.string().trim().required("Імя є обов'язковим "),
  email: Yup.string()
    .trim()
    .email("Невірний формат email")
    .required("Email є обов'язковим"),
  date: Yup.date()
    .min(formatDate(today), "Дата не може бути в минулому")
    .max(formatDate(nextWeek), "Дата не може бути більше ніж через тиждень")
    .required("Дата є обов'язковою"),
});

export default function BookPopup({
  state,
  title,
  open,
  submitHandler,
  showBookModal,
}) {
  const formikRef = useRef(null);

  return (
    <Modal
      title={title}
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
        innerRef={formikRef}
        initialValues={initialValue}
        onSubmit={submitHandler}
        validationSchema={Shema}
      >
        {() => (
          <Form>
            <InputForm
              name={"name"}
              type={"text"}
              id={"name"}
              placeholder={"Ваше ім'я"}
              component={"span"}
              textLabel={"Ваше ім'я : "}
            ></InputForm>
            <InputForm
              name={"email"}
              type={"email"}
              id={"email"}
              placeholder={"Ваш email"}
              component={"span"}
              textLabel={"Ваш email : "}
            ></InputForm>

            {state && (
              <InputForm
                name={"date"}
                type={"date"}
                id={"date"}
                component={"span"}
                textLabel={"Коли ви хочете почати читання : "}
              ></InputForm>
            )}
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
