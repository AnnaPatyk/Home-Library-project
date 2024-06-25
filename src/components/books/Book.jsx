import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBook, updateBook } from "../../thunks/booksThunks";
import { useParams } from "react-router-dom";
import BookPopup from "./BookPopup";
import { message } from "antd";
import Coments from "../comentsBlock/Coments";
import CommentsCarousel from "../comentsBlock/CommentsCarousel";
import UpdateBook from "./UpdateBook";
import { httpImg } from "../../app/http";
import styles from "./book.module.css";
const star = "\u2605";

export default function Book() {
  const { data: book, loading } = useSelector((state) => state.book);
  const [login, setLogin] = useState(true);
  const [open, setOpen] = useState(false);
  const [free, setFree] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();
  const url = new URL(book.image, httpImg);
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

  const info = useCallback(() => {
    messageApi.info("Запит відправлено");
  }, [messageApi]);

  const showBookModal = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const submitHandler = useCallback(
    (values, formikBag) => {
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
    },
    [book.waitlist, dispatch, free, id, info, loading, showBookModal]
  );

  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <div className={styles.title}>
          <h2>{book.title}</h2>
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
        <div className={styles.image}>
          <img
            src={Array.isArray(book.image) ? book.image[0] : url}
            alt="description"
          />
        </div>
        <div className={styles.description}>
          <p>{book.description}</p>
        </div>
        <div className={styles.buttons}>
          {free ? (
            <button onClick={showBookModal}>Замовити читання</button>
          ) : (
            <button onClick={showBookModal}>Сповістити про наявність</button>
          )}
        </div>
        <div className={styles.comments}>
          {book.comments && (
            <CommentsCarousel arr={book.comments}></CommentsCarousel>
          )}
        </div>
        <Coments id={id} book={book}></Coments>
      </article>
      {contextHolder}

      {login && <UpdateBook></UpdateBook>}

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
