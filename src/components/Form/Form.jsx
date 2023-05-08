import React, { useState } from 'react';
import styles from "./Form.module.css";
import validation from './validation';

const Form = (props) => {
    const {login}= props;
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
        setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
    };

const handleSubmit = (e) => {
    e.preventDefault ();
    login(userData);
}


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Usuario</label>
                <input
                    type="text"
                    placeholder='Email'
                    name="email"
                    onChange={handleChange}
                    value={userData.email}
                />
                { errors.e1 ? (
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
                />
                { errors.p1 ? (
                    <p>{errors.p1}</p>
                ) : (
                    <p>{errors.p2}</p>
                )}

                <button>LOGIN</button>
            </form>

            <p>Datos de acceso Demo</p>
            <p>Email: ejemplo@gmail.com</p>
            <p>Contraseña: password123</p>
        </div>
    );
};

export default Form;
