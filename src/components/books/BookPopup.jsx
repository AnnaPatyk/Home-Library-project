import { Modal } from "antd";
import { Form, Formik } from "formik";
import React, { useRef } from "react";

import InputForm from "../generalСomponents/inputForm/InputForm";
import { Shema, initialValue } from "./bookShema";

function BookPopup({ state, title, open, submitHandler, showBookModal }) {
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
export default React.memo(BookPopup);
