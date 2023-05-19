import React, { useState } from "react";
import styles from "@/styles/Login.module.scss";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import axios from "axios";
import PurpleButton from "@/components/PurpleButton/PurpleButton";
import Loading from "@/components/Loading/Loading";
import axiosInstance from "@/config/config";
import { openUser } from "@/store/features/authCheck";
import { saveUserInfo } from "@/store/features/userSlice";
const LogIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async () => {
    setLoading(true);
    if (!email || !password) {
      return alert("Заполните все поля");
    }
    try {
      const res = await axiosInstance.post("users/login", {
        email: email,
        password: password,
      });
      if (!res.data.success) {
        return console.log(res.data.msg);
      }
      setEmail("");
      setPassword("");
      dispatch(openUser());
      dispatch(
        saveUserInfo({
          _id: res.data.user._id,
          name: res.data.user.name,
          email: res.data.user.email,
          likes: res.data.user.likes,
        })
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };
  if (loading) return <Loading />;
  return (
    <div className={styles.container}>
      <article>
        <h1>Авторизация</h1>
        <section>
          <label htmlFor="phone">Email аккаунты</label>
          <input
            type="email"
            id="email"
            placeholder="Email енгізіңіз"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            placeholder="Пароль енгізіңіз"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <div onClick={handleClick}>
          <PurpleButton>Авторизация</PurpleButton>
        </div>
      </article>
    </div>
  );
};

export default LogIn;
