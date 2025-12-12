import stylesLogin from "./login.module.css";
import { useState, useRef, useContext } from "react";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../../utils/firebase";

import FormInput from "../Input/Input";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../../context/ContextUser";

import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [serverError, setServerError] = useState(null);

  const { setCurrentUser } = useContext(UserContext);

  const handleGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const res = await createUserDocumentFromAuth(user);

      setTimeout(() => {
        navigate("/home")
      }, 1000)
    } catch (error) {
      console.error("Error a la hora de hacer login con Google", error);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      
      toast.success("Usuario logeado con éxito.")
      navigate("/home")
    } catch (error) {
      console.error("Error al hacer login con email y passwd", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={stylesLogin.form}>
        <div className={stylesLogin.logo}>
          <img src="img/alt-logo.svg" alt="Logo secundario de Lovestar" />
        </div>
        <div className={stylesLogin.inputs}>
          <FormInput
            label="Email"
            id="email"
            placeholder="Email"
            type="text"
            ref={emailRef}
            required
          />

          <FormInput
            label="Password"
            placeholder="Password"
            id="password"
            type="password"
            ref={passwordRef}
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
          <button onClick={handleGoogle}>
            <Icon icon="material-icon-theme:google" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
