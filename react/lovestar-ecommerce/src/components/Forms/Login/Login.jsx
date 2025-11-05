import stylesLogin from "./login.module.css";
import { useState } from "react";
import { signInWithGooglePopup } from "../../../utils/firebase";

import FormInput from "../Input/Input";

import { Link } from "react-router-dom";

import { Icon } from "@iconify/react";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [passwd, setPasswd] = useState("");

  const handleUser = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswd = (event) => {
    setPasswd(event.target.value);
  };

  const handleGoogle = async () => {
    try {
      const res = await signInWithGooglePopup();
    } catch (error) {
      console.error("Error a la hora de hacer login con Google", error);
    }
  };

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
            error={errors.userName}
            required
          />

          <FormInput
            label="Password"
            id="password"
            type="password"
            ref={passwordRef}
            onChange={debouncePasswd}
            error={errors.password}
            required
          />

          <button className="sheen" type="submit">
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
          <button type="button" onClick={handleGoogle}>
            <Icon icon="material-icon-theme:google" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
