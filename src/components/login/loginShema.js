import * as Yup from "yup";

export const initialValue = {
  email: "",
  password: "",
};

export const Shema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Невірний формат email")
    .required("Email є обов'язковим"),
  password: Yup.string()
    .min(6, "Мінімальна кількість символів 6")
    .matches(/[A-Z]/, "Має містити велику букву ")
    .matches(/[a-z]/, "Має містити маленьку букву ")
    .matches(/[0-9]/, "Має містити цифру ")
    .required("Поле є обовязковим")
});
