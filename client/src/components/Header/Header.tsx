import React, { useState } from "react";
import styles from "./Header.module.scss";
import PurpleButton from "../PurpleButton/PurpleButton";
import WhiteButton from "../WhiteButton/WhiteButton";
import Image from "next/image";
import logo from "@/assets/images/KS.png";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserInfo } from "@/store/features/userSlice";
import { closeUser } from "@/store/features/authCheck";
import { useRouter } from "next/router";

const navs = [
  { name: "Басты Бет", slug: "/" },
  { name: "Біз Туралы", slug: "/about" },
  { name: "Кітаптар Каталогы", slug: "/catalog" },
  { name: "Таңдаулылар", slug: "/favourites" },
];
const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isUser } = useSelector((store: any) => store.authCheck);
  const [active, setActive] = useState(0);
  const { name } = useSelector((store: any) => store.user);
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href={"/"}>
        <Image src={logo} alt={"logo"} width={90} height={90} />
        <p>Kitap Summary</p>
      </Link>
      <ul className={styles.ul}>
        {navs.map((item, index) => {
          if (index === 3 && isUser) {
            return (
              <li
                className={`${styles.nav}`}
                onClick={() => setActive(index)}
                key={index}
              >
                <Link
                  href={"/favourites"}
                  // className={`${index === active && styles.active}`}
                >
                  Таңдаулылар
                </Link>
              </li>
            );
          }
          if (index === 3) {
            return;
          }
          return (
            <li
              className={styles.nav}
              key={index}
              onClick={() => setActive(index)}
            >
              <Link
                href={item.slug}
                // className={`${index === active && styles.active}`}
              >
                {item.name}{" "}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.auth}>
        {isUser ? (
          <>
            <div
              onClick={() => {
                dispatch(deleteUserInfo());
                dispatch(closeUser());
                router.push("/");
                setActive(0);
              }}
            >
              <PurpleButton>Шығу</PurpleButton>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link href={"/login"}>
                <PurpleButton>Авторизация</PurpleButton>
              </Link>
            </div>
            <div>
              <Link href={"/register"}>
                <WhiteButton>Регистрация</WhiteButton>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
