import stylesLogin from "./login.module.css";
import { useState, useRef } from "react";
import { signInWithGooglePopup } from "../../../utils/firebase";

import FormInput from "../Input/Input";

import { Link } from "react-router-dom";

import { Icon } from "@iconify/react";

const LoginForm = () => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const [serverError, setServerError] = useState(null);

  const handleGoogle = async () => {
    try {
      const resAuth = await signInWithGooglePopup();
    } catch (error) {
      console.error("Error a la hora de hacer login con Google", error);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await signInAuthUserWithEmailAndPassword(email, passwd);
      console.log(res);
    } catch (error) {
      console.error("Error al hacer login con email y passwd", error);
    }
  }

  return (
    <form>
      <div className={stylesLogin.form}>
        <div className={stylesLogin.logo}>
          <img src="img/alt-logo.svg" alt="Logo secundario de Lovestar" />
        </div>
        <div className={stylesLogin.inputs}>
          <FormInput
            label="Nombre de Usuario"
            id="username"
            type="text"
            ref={userNameRef}
            required
          />

          <FormInput
            label="Password"
            id="password"
            type="password"
            ref={passwordRef}
            required
          />

          <button className="sheen" type="submit" onClick={handleSubmit}>
            ENTRAR
          </button>
        </div>
        <div className={stylesLogin.opciones}>
          <p>¿Has olvidado la contraseña?</p>
          <Link to="/Register">
            <p>Registrarse</p>
          </Link>
        </div>
        <div className={stylesLogin.google}>
          <button onClick={handleGoogle}>
            <Icon icon="material-icon-theme:google" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
