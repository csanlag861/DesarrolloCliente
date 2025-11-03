import { useState, useRef } from "react";
import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from "../../utils/firebase";
import { validation } from "../../utils/validationForm";

import { useDebouncedCallback } from "use-debounce";

import FormInput from "./FormInput";

function SigUpForm() {
    const [errorEmail, setErrorEmail] = useState(undefined);
    const [errorPasswd, setErrorPasswd] = useState(undefined);

    const confPasswdRef = useRef(null);
    const emailRef = useRef(null);
    const displayNameRef = useRef(null);
    const passwdRef = useRef(null);




    const useDebounceEmail = useDebouncedCallback(() => {
        if (!validation.isValidEmail(emailRef)) {
            setErrorEmail("Email invalido");
        } else {
            setErrorEmail(undefined);
        }
    }, 1000);

    const handleEmail = () => {
        useDebounceEmail(emailRef);
    }

    const useDebouncePasswd = useDebouncedCallback(() => {
        if (!validation.isValidPassword(passwdRef)) {
            setErrorPasswd("Contraseña incorrecta;")
        } else {
            setErrorPasswd(undefined);
        }
    }, 1000)


    const handlePasswd = () => {
        useDebouncePasswd(passwdRef);
    }

    const handleSignUp = async (event) => {
        event.preventDefault();
        if (passwdRef !== confPasswdRef) {
            setErrorPasswd("password no coinciden");
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                emailRef.current.value,
                passwdRef.current.value
            );
            await createUserDocumentFromAuth(user, {
                displayName: displayNameRef.current.value,
                rol: "user",
            });
            console.log("User created:", user);
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in use");
            } else if (error.code === "auth/weak-password") {
                alert("Password too weak, at least 3 characters");
            } else {
                console.log("Error creating user:", error);
            }
        }
    };



    return (
        <form onSubmit={handleSignUp} >
            <FormInput
                label="Email"
                id="email"
                type="email"
                ref={emailRef}
                onChange={handleEmail}
                error={errorEmail}
                required
            />

            <FormInput
                label="displayName"
                id="displayName"
                type="text"
                ref={displayNameRef}
                required
            />

            <FormInput
                label="Password"
                id="passwd"
                type="password"
                ref={passwdRef}
                onChange={handlePasswd}
                error={errorPasswd}
                required
            />

            <FormInput
                label="ConfirmPassword"
                id="confirmPasswd"
                type="password"
                ref={confPasswdRef}
                required
            />

            <div>
                <button type="submit">Registrarse</button>
            </div>
        </form>
    );
}


export default SigUpForm;