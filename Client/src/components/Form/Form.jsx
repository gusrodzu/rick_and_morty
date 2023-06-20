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
      <div className={["form"]}>
        <img src={require("../Img/rick.png")} />



        <form onSubmit={handleSubmit}>
          <h2>Inicia sesión</h2>
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

          <button className={styles["btn"]}>LOGIN</button>
        </form>

        {/* <p>Datos de acceso Demo</p>
                <p>Email: ejemplo@gmail.com</p>
                <p>Contraseña = password123</p> */}
      </div>
    </div>
  );
};

export default Form;
