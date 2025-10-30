import stylesRegister from "./register.module.css";
import { useState } from "react";
import { signInWithGooglePopup } from "../../../utils/firebase";

import { Link } from "react-router-dom";

import { Icon } from "@iconify/react";

function RegisterForm() {
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
        <form action="">
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
                    <button type="button" onClick={handleGoogle}>
                        <Icon icon="material-icon-theme:google" />
                    </button>
                </div>
            </div>
        </form>
    );
}

export default RegisterForm;