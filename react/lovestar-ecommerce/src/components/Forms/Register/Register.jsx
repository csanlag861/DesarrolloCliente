import stylesRegister from "./register.module.css";
import { useRef, useState , useContext} from "react";
import { signInWithGooglePopup } from "../../../utils/firebase";
import { useDebouncedCallback } from "use-debounce";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

function RegisterForm() {
   const navigate = useNavigate()
;    const emailRef = useRef(null);
    const displayNameRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const [serverError, setServerError] = useState(null);

    const [errors, setErrors] = useState({
        email: null,
        password: null,
        displayName: null,
    });

    const debounceEmail = useDebouncedCallback(() => {
        setErrors((prev) => ({
            ...prev,
            email: validation.isValidEmail(emailRef.current.value)
                ? null
                : "Email incorrecto",
        }));
    }, 3000);

    const debouncePasswd = useDebouncedCallback(() => {
        setErrors((prev) => ({
            ...prev,
            password: validation.isValidPassword(passwordRef.current.value)
                ? null
                : "Contraseña incorrecta",
        }));
    }, 3000);

    const handleSignUp = async (event) => {
        event.preventDefault();
        if (serverError) setServerError(null);

        const name = displayNameRef.current.value.trim();
        if (!name) {
            setErrors((prev) => ({
                ...prev,
                displayName: "Nombre no puede estar vacío",
            }));
            return;
        }

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            setErrors((prev) => ({
                ...prev,
                password: "Las contraseñas no coinciden",
            }));
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            );

            await createUserDocumentFromAuth(user, {
                displayName: displayNameRef.current.value,
                rol: "user",
            });

            console.log("User created:", user);
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setServerError("El email ya está registrado");
            } else if (error.code === "auth/weak-password") {
                setServerError("La contraseña es demasiado débil");
            } else {
                setServerError("Error inesperado al registrar usuario");
                console.error(error);
            }
        }
    };

    const handleGoogle = async () => {
        try {
            const res = await signInWithGooglePopup();
            navigate("/tienda");

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
                        <label>Nombre y Apellidos</label>
                        <input type="text" name="nombreYapellidos" placeholder="Nombre y Appelidos" required />
                    </div>
                    <div className={stylesRegister.input}>
                        <label>Nombre de Usuario</label>
                        <input type="text" name="username" placeholder="Nombre de Usuario" required />
                    </div>
                    <div className={stylesRegister.input}>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className={stylesRegister.input}>
                        <label>Contraseña</label>
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