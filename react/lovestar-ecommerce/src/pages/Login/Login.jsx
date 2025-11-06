import stylesLogin from "./login.module.css";
import LoginForm from "../../components/Forms/Login/Login";
import SigInForm from "../../components/firebase/SigInForm";

import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={stylesLogin.login}>
      <main className={stylesLogin.form}>
        <LoginForm />
        {/* <SigInForm /> */}
      </main>
    </div>
  );
}

export default Login;
