import React from "react";
import styles from "@/styles/Favourites.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "@/config/config";
import Image from "next/image";
import PurpleButton from "@/components/PurpleButton/PurpleButton";
import { deleteLike, updateLikes } from "@/store/features/userSlice";
const Favourites = () => {
  const dispatch = useDispatch();
  const { likes } = useSelector((store: any) => store.user);
  const handleClick = (book: any) => {
    dispatch(deleteLike(book._id));
    //@ts-ignore
    dispatch(updateLikes(book._id));
  };
  if (likes.length < 1) {
    return (
      <div className={styles.noLikes}>
        <p>Сізде таңдаулы кітаптар жоқ</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {likes.map((book: any) => {
        return (
          <section key={book._id}>
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
                <div>
                  <audio controls>
                    <source
                      src={`${baseURL}audio/${book._id}`}
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                </div>
                <div
                  className={styles.button}
                  onClick={() => handleClick(book)}
                >
                  <PurpleButton>Таңдаулылардан алып тастау</PurpleButton>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Favourites;
