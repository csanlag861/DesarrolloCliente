import { useState } from "react";
import { signInWithGooglePopup } from "../../utils/firebase";
import { validation } from "../../utils/validationForm";
import { useDebouncedCallback } from "use-debounce";

import FormInput from "./FormInput";

function SigInForm() {
    const [email, setEmail] = useState(undefined);
    const [passwd, setPasswd] = useState(undefined);

    const [errorEmail, setErrorEmail] = useState(undefined);
    const [errorPasswd, setErrorPasswd] = useState(undefined);


    const useDebounceEmail = useDebouncedCallback((currentEmail) => {
        if (!validation.isValidEmail(currentEmail)) {
            setErrorEmail("Email invalido");
        } else {
            setErrorEmail(undefined);
        }
    }, 1000);

    const useDebouncePasswd = useDebouncedCallback((currentPasswd) => {
        /* LE PASO EL CURRENTPASSWD PORQUE EL PASSWD: NO ESTÁ ACTUALIZADO, Y EL CURRENTPASSWD SI QUE ACTUALIZA. */
        if (!validation.isValidPassword(currentPasswd)) {
            setErrorPasswd("Contraseña incorrecta;")
        } else {
            setErrorPasswd(undefined);
        }
    }, 1000)


    const handleEmail = (event) => {
        const currentEmail = event.target.value;
        setEmail(currentEmail);
        useDebounceEmail(currentEmail);
    }

    const handlePasswd = (event) => {
        const currentPasswd = event.target.value;
        setPasswd(currentPasswd);
        useDebouncePasswd(currentPasswd);
    }

    const handleGoogle = async () => {
        try {
            const res = await signInWithGooglePopup();
            console.log(res);

        } catch (error) {
            console.error("Error a la hora de hacer login con Google", error);
        }
    }
    return (
        <form action="">
            <FormInput
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={handleEmail}
                error={errorEmail}
                required
            />

            <FormInput
                label="Password"
                id="passwd"
                type="password"
                value={passwd}
                onChange={handlePasswd}
                error={errorPasswd}
                required
            />

            <div>
                <button type="submit">Login con Usuario y Password</button>
                <button type="button" onClick={handleGoogle}>Login con Google</button>
            </div>
        </form>
    );
}

export default SigInForm;