import * as Yup from "yup";


const today = new Date();
const nextWeek = new Date(today);
nextWeek.setDate(today.getDate() + 7);

const formatDate = (date) => date.toISOString().slice(0, 10);

export const initialValue = {
  name: "",
  email: "",
  date: formatDate(today),
};

export const Shema = Yup.object().shape({
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
