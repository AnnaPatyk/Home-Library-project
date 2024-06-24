import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBook, updateBook } from "../../thunks/booksThunks";
import { useParams } from "react-router-dom";
import BookPopup from "./BookPopup";
import { message } from "antd";
const star = "\u2605";

export default function Book() {
  const { data: book, loading } = useSelector((state) => state.book);
  const [open, setOpen] = useState(false);
  const [free, setFree] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info("Запит відправлено");
  };
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook(id));
  }, []);
  useEffect(() => {
    if (book && book.status) {
      setFree(book.status === "available");
    }
  }, [book]);

  const showBookModal = () => {
    setOpen(!open);
  };
  const submitHandler = (values, formikBag) => {
    console.log(values);
    let update;
    if (free) {
      update = {
        borrowedBy: values,
        status: "unavailable",
      };
    } else {
      let reservedBySet = new Set(book.reservedBy);
      reservedBySet.add(values);
      update = {
        waitlist: Array.from(reservedBySet),
      };
    }

    dispatch(updateBook({ id, update }));
    showBookModal();
    !loading && info();
    formikBag.resetForm();
  };

  return (
    <section>
      <article>
        <div>
          <title>{book.title}</title>
          <p>
            <span>Автор :</span> {book.author}
          </p>
          <p>
            {" "}
            <span>Рік видання :</span>
            {book.publicationYear}
          </p>
          <p>
            <span>Жанр :</span>
            {book.genre}
          </p>
          <p>
            <span>Рейтинг :</span>
            {(() => star.repeat(Math.floor(book.rating)))()}
          </p>
        </div>
        <div>
          <img
            src={Array.isArray(book.image) ? book.image[0] : book.image}
            alt="description"
          />
        </div>
        <div>
          <p>{book.description}</p>
        </div>
        <div>
          {free ? (
            <button onClick={showBookModal}>Замовити читання</button>
          ) : (
            <button onClick={showBookModal}>Сповістити про наявність</button>
          )}

          <button>Редагувати </button>
        </div>
      </article>
      {contextHolder}
      <BookPopup
        state={free}
        title={"Замовити читання"}
        open={open}
        submitHandler={submitHandler}
        showBookModal={showBookModal}
      ></BookPopup>
    </section>
  );
}
