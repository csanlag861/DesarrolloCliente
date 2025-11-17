import stylesRegister from "./register.module.css";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/Forms/Register/Register";
import SigUpForm from "../../components/firebase/SignUpForm";

function Register() {
  return (
    <section className={stylesRegister.login}>
      <div className={stylesRegister.form}>
        <RegisterForm />
        {/*         <SigUpForm /> */}
      </div>
    </section>
  );
}

export default Register;
