import axiosInstance, { baseURL } from "@/config/config";
import { GetServerSideProps } from "next/types";
import React, { useEffect, useState } from "react";
import styles from "@/styles/SingleBook.module.scss";
import Image from "next/image";
import PurpleButton from "@/components/PurpleButton/PurpleButton";
import {
  FaFacebookF,
  FaTelegram,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  pushLike,
  saveUserInfo,
  updateLikes,
} from "@/store/features/userSlice";
interface bookProps {
  book: any;
}
const SingleBook: React.FC<bookProps> = ({ book }) => {
  const dispatch = useDispatch();
  const { isUser } = useSelector((store: any) => store.authCheck);
  const { likes } = useSelector((store: any) => store.user);
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    if (likes.length === 0) {
      return;
    }
    if (likes.some((element: any) => element._id === book._id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [isUser, likes]);
  const handleClick = () => {
    if (!isUser) {
      return alert("Зарегистрируйтесь сначала");
    }
    if (isLiked) {
      return alert("Книга уже в избранном");
    }
    dispatch(pushLike(book));
    setIsLiked(true);
    //@ts-ignore
    dispatch(updateLikes(book._id));
    alert("Вы добавили новую книгу в избранное");
  };
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.image}>
          <Image
            src={`${baseURL}images/${book._id}`}
            alt={book.name}
            fill
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.name}>{book.name}</h1>
          <p className={styles.aboutBook}>Кітап туралы</p>
          <p>{book.book_content}</p>
          <div className={styles.buttonSection}>
            {isUser ? (
              <div>
                <audio controls>
                  <source
                    src={`${baseURL}audio/${book._id}`}
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ) : (
              <div>
                <audio controls>
                  <source
                    src={`${baseURL}audio/short-${book._id}`}
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}

            <div className={styles.button} onClick={handleClick}>
              <PurpleButton>Таңдаулыларға қосу</PurpleButton>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.secondSection}>
        <div className={styles.aboutAuthor}>
          <h3>Автор Туралы</h3>
          <p>{book.author_content}</p>
        </div>
        <div className={styles.share}>
          <h3>Әлеуметтік желілерде бөліс</h3>
          <div>
            <FaFacebookF />
            <FaTelegram />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axiosInstance.get(`books/${context.query.book}`);
  return {
    props: {
      book: res.data.data,
    },
  };
};
export default SingleBook;
