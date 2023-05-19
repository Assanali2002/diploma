import React from "react";
import styles from "@/styles/About.module.scss";
import Image from "next/image";
import asanali from "@/assets/images/asanali.png";
import karim from "@/assets/images/karim.png";
import dias from "@/assets/images/dias.jpg";
import goals from "@/assets/images/goals.jpg";

const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1>Біз туралы</h1>
        <p>
          Kitap Summary сайтына қош келдіңіз, онда біз сіздердің қазақ тіліндегі
          кітаптармен өзара қарым-қатынасыңызда төңкеріс жасаймыз. Біздің
          Стартапты қазақ тіліндегі кітаптардың оңай қол жетімді және түсінікті
          аннотацияларының қажеттілігін түсінген ынталы трио - Диас, Кәрім және
          Асанәлі құрды. Біз сізге уақытты үнемдеуге және инновациялық аудио
          аннотацияларымызбен сүйікті кітаптарыңыздың негізгі идеяларын үйренуге
          көмектесу үшін осындамыз.
        </p>
      </div>
      <article>
        <section>
          <div className={styles.imageSection}>
            <Image src={asanali} alt={"asanali"} fill className={styles.img} />
          </div>
          <div className={styles.content}>
            <div className={styles.heading}>
              <h3>Асанали Сайдикаримов</h3>
              <p className={styles.role}>CEO | Project Manager</p>
            </div>
            <p className={styles.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, quae assumenda explicabo magnam ipsam natus maiores
              reiciendis repudiandae tempora et rem aliquid, fugiat iure
              dignissimos sequi illum, earum debitis itaque.
            </p>
          </div>
        </section>
        <section>
          <div className={styles.imageSection}>
            <Image src={dias} alt={"dias"} fill className={styles.img} />
          </div>
          <div className={styles.content}>
            <div className={styles.heading}>
              <h3>Диас Сапарбеков</h3>
              <p className={styles.role}>CEO Assistant | Marketing Analyst</p>
            </div>
            <p className={styles.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, quae assumenda explicabo magnam ipsam natus maiores
              reiciendis repudiandae tempora et rem aliquid, fugiat iure
              dignissimos sequi illum, earum debitis itaque.
            </p>
          </div>
        </section>
        <section>
          <div className={styles.imageSection}>
            <Image src={karim} alt={"karim"} fill className={styles.img} />
          </div>
          <div className={styles.content}>
            <div className={styles.heading}>
              <h3>Карим Макаш</h3>
              <p className={styles.role}>Sound Designer | Content Creator</p>
            </div>
            <p className={styles.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, quae assumenda explicabo magnam ipsam natus maiores
              reiciendis repudiandae tempora et rem aliquid, fugiat iure
              dignissimos sequi illum, earum debitis itaque.
            </p>
          </div>
        </section>
      </article>
      <div className={styles.goals}>
        <h1>Біздің мақсатымыз</h1>
        <ul>
          <li>
            <p>
              Әдебиеттің кең әлемі мен қазақ тілді қоғамдастық арасындағы
              алшақтықты қысқа, мазмұнды және қызықты аудио-түйіндемелерді ұсына
              отырып жою.
            </p>
          </li>
          <li>
            <p>
              Біздің пайдаланушыларға білімдерін кеңейтуге, жеке өсуге ықпал
              етуге және оқуға және оқуға деген сүйіспеншілікке тәрбиелеуге
              мүмкіндік беру.
            </p>
          </li>
          <li>
            <p>
              Қазақ мәдениеті мен тілін дәріптейтін және олардың сақталуы мен
              өсуін ынталандыратын платформа құру.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default about;
