import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";

import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createBook } from "../../thunks/booksThunks";
import { Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import InputForm from "../generalСomponents/inputForm/InputForm";
const genres = [
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

const initialValue = {
  title: "",
  author: "",
  publicationYear: 0,
  genre: "",
  status: "",
  rating: 0,
  description: "",
  image: "",
};
const ShemaFormAddBook = Yup.object().shape({
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

export default function FormAddBook() {
  const dispatch = useDispatch();
  const [img, setImg] = useState("");
  const props = {
    name: "image",
    action: "http://localhost:4000/upload-img",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
        setImg(info.file.name);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const submitHandler = (values, formikBag) => {
    if (img === "") {
      formikBag.setErrors({ image: "помилка" });
      return;
    }
    values.image = img;
    console.log(values);
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
            <InputForm
              name={"title"}
              type={"text"}
              id={"title"}
              placeholder={"Назва"}
              component={"span"}
              textLabel={"Назва книги : "}
            ></InputForm>
            <InputForm
              name={"author"}
              type={"text"}
              id={"author"}
              placeholder={"Автор"}
              component={"span"}
              textLabel={"Автор : "}
            ></InputForm>
            <InputForm
              name={"publicationYear"}
              type={"number"}
              id={"publicationYear"}
              placeholder={"Рік видавництва"}
              component={"span"}
              textLabel={"Рік видавництва: "}
            ></InputForm>
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
              <Field as="select" name="status">
                <option value="">Оберіть статус</option>
                <option value="available">{"Доступна"}</option>
                <option value="soon">{"Незабаром у доступі"}</option>
              </Field>
            </div>

            <InputForm
              name={"rating"}
              type={"number"}
              id={"rating"}
              placeholder={"Рейтинг"}
              component={"span"}
              textLabel={"Рейтинг: "}
            ></InputForm>

            <InputForm
              name={"description"}
              as={"textarea"}
              id={"description"}
              placeholder={"Опис"}
              component={"span"}
              textLabel={"Опис : "}
            ></InputForm>

            <div>
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
              <ErrorMessage name="image" component={"span"}></ErrorMessage>
            </div>

            <button type="submit">Додати</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
