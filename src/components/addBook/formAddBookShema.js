import * as Yup from "yup";
export const genres = [
  "Фантастика",
  "Пригоди",
  "Містика",
  "Романтика",
  "Детектив",
  "Фентезі",
  "Історичний роман",
  "Наукова література",
  "Біографія",
  "Поезія",
  "Самодопомога",
  "Трилер",
  "Горор",
  "Класика",
  "Драма",
  "Сатира",
  "Мемуари",
  "Психологія",
  "Філософія",
  "Релігія",
  "Дитяча література",
  "Юмористична література",
  "Спортивна література",
  "Графічний роман",
  "Сучасна література",
  "Науково-фантастична література",
];

export const initialValue = {
  title: "",
  author: "",
  publicationYear: 0,
  genre: "",
  status: "",
  rating: 0,
  description: "",
  image: "",
};
export const ShemaFormAddBook = Yup.object().shape({
  title: Yup.string().trim().required("Назва є обов'язкова"),
  author: Yup.string().trim().required("Автор є обов'язковим"),
  publicationYear: Yup.number()
    .min(1900, "Рік видання повинен бути не раніше 1900")
    .max(
      new Date().getFullYear(),
      `Рік видання не може бути пізнішим за ${new Date().getFullYear()}`
    )
    .required("Рік видання обов'язковий"),
  genre: Yup.string().trim().required("Жанр обов'язковий"),
  status: Yup.string().trim().required("Статус обов'язковий"),
  rating: Yup.number()
    .min(1, "Мінімальне значення 1")
    .max(5, `Максимальне значення 5`),
  description: Yup.string()
    .trim()
    .max(1500, "Опис не може бути довшим за 500 символів"),
});
