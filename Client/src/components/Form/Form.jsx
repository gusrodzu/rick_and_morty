import React, { useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";

const Form = (props) => {
  const { login } = props;
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className={styles["main-content"]}>
    <div className={styles["form"]}>
      <form onSubmit={handleSubmit}>
        <img src={require("../Img/rick.png")} />
        <h2>Inicia sesión</h2>
        <h5>No se requiere usuario para ingresar</h5>
        <label htmlFor="">Usuario</label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={userData.email}
          className={styles["form__input"]}
        />
        {errors.e1 ? (
          <p>{errors.e1}</p>
        ) : errors.e2 ? (
          <p>{errors.e2}</p>
        ) : (
          <p>{errors.e3}</p>
        )}

        <label htmlFor="">Contraseña</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={userData.password}
          className={styles["form__input"]}
        />
        {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}

        <button className={styles["btn"]}>SQUANCH!</button>
      </form>
    </div>
  </div>
  );
};

export default Form;
