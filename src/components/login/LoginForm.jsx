import { Form, Formik } from "formik";
import React, { Fragment } from "react";
import InputForm from "../generalСomponents/inputForm/InputForm";
import { initialValue, Shema } from "./loginShema";

export default function Login({ formikRef, sabmitHandler }) {
  return (
    <Fragment>
      <Formik
        innerRef={formikRef}
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
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}
