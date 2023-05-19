import React from "react";
import styles from "@/styles/Catalog.module.scss";
import BookButton from "@/components/BookButton/BookButton";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next/types";
import axiosInstance, { baseURL } from "@/config/config";
import Image from "next/image";
import Link from "next/link";
interface catalogProps {
  books: any;
}
const catalog: React.FC<catalogProps> = ({ books }) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {books.map((item: any) => {
          const { _id, name, book_content, author_content } = item;
          return (
            <div className={styles.book} key={_id}>
              <div className={styles.image}>
                <Image
                  src={`${baseURL}images/${_id}`}
                  alt={name}
                  fill
                  className={styles.img}
                />
              </div>
              <div className={styles.right_section}>
                <h3>{name}</h3>
                <p>{book_content.substring(0, 120)}...</p>
                <Link href={`/books/${_id}`}>
                  <BookButton>Оқу</BookButton>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
//@ts-ignore
export const getStaticProps: GetStaticProps = async () => {
  const allBooks = await axiosInstance.get("books");
  console.log(allBooks);
  return {
    props: {
      books: allBooks.data.data,
    },
  };
};
export default catalog;
