import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { createBook } from "../../thunks/booksThunks";
import { Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import InputForm from "../generalСomponents/inputForm/InputForm";
import { ShemaFormAddBook, genres, initialValue } from "./formAddBookShema";

export default function FormAddBook() {
  const dispatch = useDispatch();
  const [img, setImg] = useState("");
  const props = useMemo(
    () => ({
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
    }),
    []
  );

  const submitHandler = useCallback(
    (values, formikBag) => {
      if (img === "") {
        formikBag.setErrors({ image: "помилка" });
        return;
      }
      values.image = img;
      console.log(values);
      dispatch(createBook(values));
      formikBag.resetForm();
    },
    [img, dispatch]
  );
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
