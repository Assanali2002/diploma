import React, { FC, ReactNode } from "react";
import styles from "./WhiteButton.module.scss";
interface WhiteButtonProps {
  children: ReactNode;
}
const WhiteButton: FC<WhiteButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default WhiteButton;
