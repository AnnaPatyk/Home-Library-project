import * as Yup from "yup";

const BookSchema = Yup.object().shape({
  title: Yup.string().trim().required("Назва обов'язкова"),
  author: Yup.string().trim().required("Автор обов'язковий"),
  publicationYear: Yup.number().required("Рік публікації обов'язковий"),
  genre: Yup.string().required("Жанр обов'язковий"),
  status: Yup.string(),
  borrowedBy: Yup.object().shape({
    name: Yup.string().trim(),
    date: Yup.string().trim(),
    email: Yup.string().trim().email("Невірний email"),
  }),
  waitlist: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().trim(),
      email: Yup.string().email("Невірний email"),
    })
  ),
  image: Yup.string().required("URL зображення обов'язковий"),
  description: Yup.string(),
  rating: Yup.number(),
});
export default BookSchema;
