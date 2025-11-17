import stylesLogin from "./login.module.css";
import LoginForm from "../../components/Forms/Login/Login";
import SigInForm from "../../components/firebase/SigInForm";

import { Link } from "react-router-dom";

function Login() {
  return (
    <section className={stylesLogin.login}>
      <div className={stylesLogin.form}>
        <LoginForm />
        {/* <SigInForm /> */}
      </div>
    </section>
  );
}

export default Login;
