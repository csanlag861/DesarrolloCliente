import stylesLogin from "./login.module.css";
import { useState } from "react";
import { signInWithGooglePopup } from "../../../utils/firebase";

import { Link } from "react-router-dom";

import { Icon } from "@iconify/react";

const LoginForm = () => {
    const [user, setUser] = useState("");
    const [passwd, setPasswd] = useState("");


    const handleUser = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswd = (event) => {
        setPasswd(event.target.value);
    }

    const handleGoogle = async () => {
        try {
            const res = await signInWithGooglePopup();
        } catch (error) {
            console.error("Error a la hora de hacer login con Google", error);
        }
    }

    return (
        <form>
            <div className={stylesLogin.form}>
                <div className={stylesLogin.logo}>
                    <img src="img/alt-logo.svg" alt="Logo secundario de Lovestar" />
                </div>
                <div className={stylesLogin.inputs}>
                    <p>INICIAR SESIÓN</p>
                    <div className={stylesLogin.nombre}>
                        <p>Nombre de Usuario</p>
                        <input type="text" name="username" placeholder="Nombre de Usuario" onChange={handleUser} required />
                    </div>
                    <div className={stylesLogin.password}>
                        <p>Contraseña</p>
                        <input type="password" name="password" placeholder="Contraseña" onChange={handlePasswd} required />
                    </div>
                    <input type="submit" value="INICIAR SESIÓN" />
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
    )
}

export default LoginForm;