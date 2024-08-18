import React, { useEffect } from "react";
import InputForm from "../generalСomponents/inputForm/InputForm";
import { Form, Formik } from "formik";
import { initialValue, Shema } from "./registrationFormShema";

import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../thunks/registrationThunks";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.registration.error);

  const sabmitHandler = async (value, formikBag) => {
    await dispatch(registration(value));
    formikBag.resetForm();
  };

  return (
    <section
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h3>Реєстрація</h3>
      <p>{error}</p>
      <Formik
        initialValues={initialValue}
        validationSchema={Shema}
        onSubmit={sabmitHandler}
      >
        {() => (
          <Form>
            <InputForm
              name={"email"}
              type={"email"}
              id={"email"}
              placeholder={"Email"}
              component={"span"}
              textLabel={" Введіть email"}
            ></InputForm>
            <InputForm
              name={"password"}
              type={"password"}
              id={"password"}
              placeholder={"Password"}
              component={"span"}
              textLabel={" Введіть пароль"}
            ></InputForm>
            <InputForm
              name={"name"}
              type={"name"}
              id={"name"}
              placeholder={"Ім'я"}
              component={"span"}
              textLabel={" Введіть ім'я"}
            ></InputForm>
            <button type="submit">Реєстрація</button>
          </Form>
        )}
      </Formik>
    </section>
  );
}
