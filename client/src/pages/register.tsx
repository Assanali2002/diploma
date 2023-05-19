import React, { useState } from "react";
import styles from "@/styles/Register.module.scss";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import PurpleButton from "@/components/PurpleButton/PurpleButton";
import Loading from "@/components/Loading/Loading";
import axiosInstance from "@/config/config";
import { openUser } from "@/store/features/authCheck";
import { saveUserInfo } from "@/store/features/userSlice";
const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async () => {
    setLoading(true);
    if (!email || !password) {
      return alert("Заполните все поля");
    }
    try {
      const res = await axiosInstance.post("users/createUser", {
        name: name,
        email: email,
        password: password,
      });
      if (!res.data.success) {
        setLoading(false);
        return alert(res.data.msg);
      }
      setName("");
      setEmail("");
      setPassword("");
      router.push("/login");
      alert("Вы успешноно зарегистрировались, попробуйте зайти");
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };
  if (loading) return <Loading />;
  return (
    <div className={styles.container}>
      <article>
        <h1>Регистрация</h1>
        <section>
          <label htmlFor="name">Аты</label>
          <input
            type="text"
            id="name"
            placeholder="Атыңызды енгізіңіз"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </section>
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

export default Register;
