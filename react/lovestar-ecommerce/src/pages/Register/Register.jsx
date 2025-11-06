import stylesRegister from "./register.module.css";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/Forms/Register/Register";
import SigUpForm from "../../components/firebase/SignUpForm";

function Register() {
    return (
        <div className={stylesRegister.login}>
            <main className={stylesRegister.form}>
                <RegisterForm />
                {/*         <SigUpForm />
 */}            </main>
        </div>
    );
}

export default Register;