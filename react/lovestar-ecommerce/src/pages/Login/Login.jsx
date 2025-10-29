import stylesLogin from "./login.module.css";
import LoginForm from "../../components/Forms/Login/Login";

import { Link } from "react-router-dom";


function Login() {
    return (
        <div className={stylesLogin.login}>
            <div className={stylesLogin.logo}>
                <Link to="/Home">
                    <img src="./img/lovestarlogo.svg" alt="Logo de Lovestar" />
                </Link>
            </div>
            <div className={stylesLogin.form}>
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;