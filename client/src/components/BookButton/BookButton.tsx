import React, { FC, ReactNode } from "react";
import styles from "./BookButton.module.scss";
interface PurpleButtonProps {
  children: ReactNode;
}
const BookButton: FC<PurpleButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default BookButton;
