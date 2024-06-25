import { ErrorMessage, Field } from "formik";
import React from "react";

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
    <div>
      <label htmlFor={name}>{textLabel} </label>
      <Field
        id={id}
        type={type}
        as={as}
        name={name}
        placeholder={placeholder}
      ></Field>
      <ErrorMessage name={name} component={component}></ErrorMessage>
    </div>
  );
};
export default React.memo(InputForm);
