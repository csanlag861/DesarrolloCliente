import stylesLogin from "./login.module.css";
import { useState, useRef } from "react";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../../utils/firebase";

import FormInput from "../Input/Input";
import { useNavigate, Link } from "react-router-dom";

import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [serverError, setServerError] = useState(null);

  const handleGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
      
      setTimeout(() => {
        navigate("/home")
      }, 1000)
    } catch (error) {
      console.error("Error a la hora de hacer login con Google", error);
    }
  }

  const handleSubmit = async (event) => {
    /*     event.preventDefault(); */
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      await signInAuthUserWithEmailAndPassword(email, password);
      toast.success("Usuario logeado con éxito.")

      setTimeout(() => {
        navigate("/home")
      }, 1000)
    } catch (error) {
      console.error("Error al hacer login con email y passwd", error);
    }
  }

  return (
    <form action={handleSubmit}>
      <div className={stylesLogin.form}>
        <div className={stylesLogin.logo}>
          <img src="img/alt-logo.svg" alt="Logo secundario de Lovestar" />
        </div>
        <div className={stylesLogin.inputs}>
          <FormInput
            label="Email"
            id="email"
            type="text"
            ref={emailRef}
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
