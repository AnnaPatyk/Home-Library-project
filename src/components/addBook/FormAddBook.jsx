import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
//import image from "./9269766.png";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createBook } from "../../thunks/booksThunks";
const genres = [
  "Фантастика",
  "Пригоди",
  "Містика",
  "Романтика",
  "Детектив",
  "Фентезі",
  "Історичний роман",
  "Наукова література",
];

const initialValue = {
  title: "",
  author: "",
  publicationYear: 0,
  genre: "",
  rating: 0,
  description: "",
  image: "",
};
const ShemaFormAddBook = Yup.object().shape({
  title: Yup.string().required("Назва є обов'язкова"),
  author: Yup.string().required("Автор є обов'язковим"),
  publicationYear: Yup.number()
    .min(1900, "Рік видання повинен бути не раніше 1900")
    .max(
      new Date().getFullYear(),
      `Рік видання не може бути пізнішим за ${new Date().getFullYear()}`
    )
    .required("Рік видання обов'язковий"),
  genre: Yup.string().required("Жанр обов'язковий"),
  rating: Yup.number()
    .min(1, "Мінімальне значення 1")
    .max(5, `Максимальне значення 5`),
  description: Yup.string().max(
    1500,
    "Опис не може бути довшим за 500 символів"
  ),
  image: Yup.string()
    .url("Введіть коректне посилання")
    .required("Це поле є обов'язковим"),
});

export default function FormAddBook() {
  const dispatch = useDispatch();
  const submitHandler = (values, formikBag) => {
    dispatch(createBook(values));
    formikBag.resetForm();
  };
  return (
    <div>
      <h2>Додати книгу</h2>
      <Formik
        initialValues={initialValue}
        validationSchema={ShemaFormAddBook}
        onSubmit={submitHandler}
      >
        {() => (
          <Form>
            <div>
              <Field name="title" placeholder="Назва"></Field>
              <ErrorMessage name="title" component={"span"}></ErrorMessage>
            </div>

            <div>
              <Field name="author" placeholder="Автор"></Field>
              <ErrorMessage name="author" component={"span"}></ErrorMessage>
            </div>

            <div>
              <Field
                name="publicationYear"
                type="number"
                placeholder="Рік"
              ></Field>
              <ErrorMessage
                name="publicationYear"
                component={"span"}
              ></ErrorMessage>
            </div>

            <div>
              <Field as="select" name="genre">
                <option value="">Оберіть жанр</option>
                {genres.map((genre, index) => (
                  <option key={index} value={genre}>
                    {genre}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="genre" component={"span"}></ErrorMessage>
            </div>
            <div>
              <Field name="rating" type="number" placeholder="Рейтинг"></Field>
              <ErrorMessage name="rating" component={"span"}></ErrorMessage>
            </div>

            <div>
              <Field name="description" as="textarea" placeholder="Опис" />
              <ErrorMessage
                name="description"
                component={"span"}
              ></ErrorMessage>
            </div>

            <div>
              <label name="image">Додайте посилання на обкладинку</label>
              <Field id="image" name="image" type="text" />
              <ErrorMessage name="image" component={"span"}></ErrorMessage>
            </div>
            <button type="submit">Додати</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
/*  <input
                type="file"
                name="image"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  setFieldValue("image", file);
                }}


                 image: Yup.mixed()
    .test(
      "fileSize",
      "Розмір файлу занадто великий",
      (value) => value && value.size <= 2000000
    )
    .test(
      "fileFormat",
      "Неправильний формат файлу",
      (value) =>
        value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
    ),
              />*/
