import stylesRegister from "./register.module.css";

import { Link } from "react-router-dom";

import { Icon } from "@iconify/react";

function RegisterForm() {
    return (
        <div className={stylesRegister.form}>
            <div className={stylesRegister.logo}>
                <img src="img/alt-logo.svg" alt="Logo secundario de Lovestar" />
            </div>
            <div className={stylesRegister.inputs}>
                <p>REGISTRATE</p>
                <div className={stylesRegister.input}>
                    <p>Nombre y Apellidos</p>
                    <input type="text" name="nombreYapellidos" placeholder="Nombre y Appelidos" required />
                </div>
                <div className={stylesRegister.input}>
                    <p>Nombre de Usuario</p>
                    <input type="text" name="username" placeholder="Nombre de Usuario" required />
                </div>
                <div className={stylesRegister.input}>
                    <p>Email</p>
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className={stylesRegister.input}>
                    <p>Contraseña</p>
                    <input type="password" name="password" placeholder="Contraseña" required />
                </div>
                <input type="submit" value="REGISTRARME" />
            </div>
            <div className={stylesRegister.opciones}>
                <Link to="/Login">
                    <p>Iniciar Sesion...</p>
                </Link>
            </div>
            <div className={stylesRegister.google}>
                <Icon icon="material-icon-theme:google" />
            </div>
        </div>
    );
}

export default RegisterForm;