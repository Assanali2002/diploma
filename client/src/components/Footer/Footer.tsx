import React from "react";
import {
  FaFacebookF,
  FaTelegram,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.share}>
        <FaFacebookF />
        <FaTelegram />
        <FaInstagram />
        <FaLinkedin />
      </div>
    </section>
  );
};

export default Footer;
