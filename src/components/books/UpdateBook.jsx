import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateBook } from "../../thunks/booksThunks";
import { Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import InputForm from "../generalСomponents/inputForm/InputForm";
import BookSchema from "./updateBookSchema";
import { useParams } from "react-router-dom";
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

export default function UpdateBook() {
  const book = useSelector((state) => state.book.data);
  let { id } = useParams();
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
    formikBag.setFieldValue("image", img);
    const update = values;
    console.log(values, update, id);
    dispatch(updateBook({ id, update }));
    formikBag.resetForm();
  };
  return (
    <div>
      <h2>Редагувати книгу</h2>
      <Formik
        initialValues={book}
        validationSchema={BookSchema}
        onSubmit={submitHandler}
        enableReinitialize
      >
        {({ values }) => (
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

            <InputForm
              name={"rating"}
              type={"number"}
              id={"rating"}
              placeholder={"Рейтинг"}
              component={"span"}
              textLabel={"Рейтинг: "}
            ></InputForm>
            <InputForm
              name="borrowedBy.name"
              type="text"
              id="borrowedBy.name"
              placeholder="Запозичено (Ім'я)"
              textLabel="Запозичено (Ім'я): "
            />
            <InputForm
              name="borrowedBy.date"
              type="text"
              id="borrowedBy.date"
              placeholder="Запозичено (Дата)"
              textLabel="Запозичено (Дата): "
            />
            <InputForm
              name="borrowedBy.email"
              type="email"
              id="borrowedBy.email"
              placeholder="Запозичено (Email)"
              textLabel="Запозичено (Email): "
            />

            <FieldArray name="waitlist">
              {({ push, remove }) => (
                <div>
                  {values.waitlist &&
                    values.waitlist.length > 0 &&
                    values.waitlist.map((waitlistItem, index) => (
                      <div key={index}>
                        <InputForm
                          name={`waitlist.${index}.name`}
                          type="text"
                          placeholder="Ім'я"
                          textLabel="Ім'я: "
                        />
                        <InputForm
                          name={`waitlist.${index}.email`}
                          type="email"
                          placeholder="Email"
                          textLabel="Email: "
                        />
                        <button type="button" onClick={() => remove(index)}>
                          Видалити
                        </button>
                      </div>
                    ))}
                  <button
                    type="button"
                    onClick={() => push({ name: "", email: "" })}
                  >
                    Додати до списку очікування
                  </button>
                </div>
              )}
            </FieldArray>

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
