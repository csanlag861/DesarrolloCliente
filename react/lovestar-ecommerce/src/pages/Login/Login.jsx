import stylesLogin from "./login.module.css";
import LoginForm from "../../components/Forms/Login/Login";
import SigInForm from "../../components/firebase/SigInForm";

import { useContext, useEffect } from "react";
import { UserContext } from "../../context/ContextUser";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

function Login() {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/home");
    }
  }, [currentUser, navigate]);

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
