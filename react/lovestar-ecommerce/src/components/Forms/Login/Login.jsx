import stylesLogin from "./login.module.css";

import { Link } from "react-router-dom";

import { Icon } from "@iconify/react";

const LoginForm = () => {
    return (
        <div className={stylesLogin.form}>
            <div className={stylesLogin.logo}>
                <img src="img/alt-logo.svg" alt="Logo secundario de Lovestar" />
            </div>
            <div className={stylesLogin.inputs}>
                <p>INICIAR SESIÓN</p>
                <div className={stylesLogin.nombre}>
                    <p>Nombre de Usuario</p>
                    <input type="text" name="username" placeholder="Nombre de Usuario" required />
                </div>
                <div className={stylesLogin.password}>
                    <p>Contraseña</p>
                    <input type="password" name="password" placeholder="Contraseña" required />
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
                <Icon icon="material-icon-theme:google" />
            </div>
        </div>
    )
}

export default LoginForm;