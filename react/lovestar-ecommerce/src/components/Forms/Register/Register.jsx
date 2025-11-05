import stylesRegister from "./register.module.css";
import '/src/styles/styleReusables.css';

import { signInWithGooglePopup, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../../utils/firebase";
import { validation } from "../../../utils/validationForm";

import { useNavigate } from "react-router-dom";

import { useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import FormInput from "../Input/Input";

function RegisterForm() {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const [serverError, setServerError] = useState(null);

  const [errors, setErrors] = useState({
    email: null,
    password: null,
    userName: null,
  });

  const debounceEmail = useDebouncedCallback(() => {
    setErrors((prev) => ({
      ...prev,
      email: validation.isValidEmail(emailRef.current.value)
        ? null
        : "Email incorrecto",
    }));
  }, 3000);

  const debouncePasswd = useDebouncedCallback(() => {
    setErrors((prev) => ({
      ...prev,
      password: validation.isValidPassword(passwordRef.current.value)
        ? null
        : "Contraseña incorrecta",
    }));
  }, 3000);

  const handleSignUp = async (event) => {
/*     event.preventDefault();
 */    if (serverError) setServerError(null);

    const name = userNameRef.current.value.trim();
    if (!name) {
      setErrors((prev) => ({
        ...prev,
        userName: "Nombre no puede estar vacío",
      }));
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );

      await createUserDocumentFromAuth(user, {
        displayName: userNameRef.current.value,
      });

      setTimeout(() => {
        navigate("/home")

      }, 1000)

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setServerError("El email ya está registrado");
      } else if (error.code === "auth/weak-password") {
        setServerError("La contraseña es demasiado débil");
      } else {
        setServerError("Error inesperado al registrar usuario");
        console.error(error);
      }
    }
  };

  const handleGoogle = async () => {
    try {
      const {user} = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
      
      setTimeout(() => {
        navigate("/home")
      }, 1000)
    } catch (error) {
      console.error("Error a la hora de hacer login con Google", error);
    }
  };
  return (
    <form action={handleSignUp}>
      <div className={stylesRegister.form}>
        <div className={stylesRegister.logo}>
          <img src="img/alt-logo.svg" alt="Logo secundario de Lovestar" />
        </div>
        <div className={stylesRegister.inputs}>
          <h3>REGISTRATE</h3>
          <FormInput
            label="Nombre y Apellido(s)"
            id="name"
            type="text"
            required
          />
          <FormInput
            label="Nombre de Usuario"
            id="username"
            type="text"
            ref={userNameRef}
            error={errors.userName}
            required
          />

          <FormInput
            label="Email"
            id="email"
            type="email"
            ref={emailRef}
            onChange={debounceEmail}
            error={errors.email}
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
          <button className="sheen" type="submit">REGISTRARME</button>
        </div>
        <div className={stylesRegister.opciones}>
          <Link to="/Login">
            <p>Iniciar Sesion...</p>
          </Link>
        </div>
        <div className={stylesRegister.google}>
          <button type="button" onClick={handleGoogle}>
            <Icon icon="material-icon-theme:google" />
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
