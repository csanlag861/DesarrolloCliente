import { useEffect, useRef, useState } from "react";
import stylesDialog from "./dialog.module.css"
import { Icon } from "@iconify/react";
import FormInput from "../Forms/Input/Input";
import { validation } from "../../utils/validationForm";


import { useDebouncedCallback } from "use-debounce";

const Dialog = () => {
    const dialogRef = useRef(null);
    const emailRef = useRef(null);

    useEffect(() => {
        dialogRef.current.showModal();
    }, [])

    const closeDialog = () => (dialogRef.current.close());

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


    return (
        <dialog ref={dialogRef} className={stylesDialog.dialog}>
            <div className={stylesDialog.imagen}>
                <img src="img/dialog-001.jpg" alt="Imagen de Lovestar" />
            </div>
            <div className={stylesDialog.content}>
                <div className={stylesDialog.icon}>
                    <Icon onClick={closeDialog} icon="material-symbols:close" width="24" height="24" />
                </div>
                <img src="img/favicon.svg" alt="" />
                <div className={stylesDialog.text}>
                    <h2>
                        10% DESCUENTO
                    </h2>
                    <h3>
                        En tu próxima compra.
                    </h3>
                </div>
                <FormInput
                    label="Email"
                    id="email"
                    type="email"
                    ref={emailRef}
                    onChange={debounceEmail}
                    error={errors.email}
                    placeholder="Email"
                    required
                />
                <div className={stylesDialog["form__policy"]}>
                    <input type="checkbox" name="terminos" />
                    <p>
                        He leído y acepto los Términos y Condiciones de Lovestar y
                        entiendo la información sobre el uso de mis datos personales tal
                        como se explica en la Política de Privacidad.
                    </p>
                </div>
            </div>
        </dialog>
    );
}

export default Dialog;