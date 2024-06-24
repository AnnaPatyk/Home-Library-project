import * as Yup from "yup";

const schema = Yup.object().shape({
  userName: Yup.string()
    .trim()
    .min(2, "Від 2 символів")
    .max(20, "Занадто довге ім'я")
    .required("Ім'я обов'язкове"),
  comment: Yup.string()
    .trim()
    .min(20, "Коментар занадто короткий")
    .max(2000, "Обмежена кільеість символів")
    .required("Коментар обов'язковий"),
});

export default schema;
