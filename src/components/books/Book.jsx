import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBook, updateBook } from "../../thunks/booksThunks";
import { Outlet, useParams } from "react-router-dom";
import BookPopup from "./BookPopup";
import { message } from "antd";
import Coments from "../comentsBlock/Coments";
import CommentsCarousel from "../comentsBlock/CommentsCarousel";
const star = "\u2605";

export default function Book() {
  const { data: book, loading } = useSelector((state) => state.book);
  const [login, setLogin] = useState(true);
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
    let update;
    if (free) {
      update = {
        borrowedBy: values,
        status: "unavailable",
      };
    } else {
      let reservedBySet = new Set(book.waitlist);
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
        </div>
        <Coments id={id} book={book}></Coments>
        {book.comments && (
          <CommentsCarousel arr={book.comments}></CommentsCarousel>
        )}
      </article>
      {contextHolder}

      {login && <button>Редагувати </button>}

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
