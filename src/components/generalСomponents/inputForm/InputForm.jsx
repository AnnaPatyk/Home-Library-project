import { ErrorMessage, Field } from "formik";
import React from "react";
import styles from "./inputForm.module.css";

const InputForm = ({
  name,
  type,
  id,
  placeholder,
  component,
  textLabel,
  as,
}) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {textLabel}
      </label>
      <Field
        id={id}
        type={type}
        as={as}
        name={name}
        placeholder={placeholder}
        className={styles.inputField}
      ></Field>
      <ErrorMessage
        name={name}
        component={component}
        className={styles.error}
      ></ErrorMessage>
    </div>
  );
};
export default React.memo(InputForm);
