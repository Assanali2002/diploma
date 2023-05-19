import React, { FC, ReactNode } from "react";
import styles from "./PurpleButton.module.scss";
interface PurpleButtonProps {
  children: ReactNode;
}
const PurpleButton: FC<PurpleButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default PurpleButton;
