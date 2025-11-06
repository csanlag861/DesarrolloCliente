import stylesMembership from "./membership.module.css"
import FormInput from "../Input/Input"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const MembershipForm = () => {
    const navigate = useNavigate();

    const handleCancelar = () => {navigate("/home")}
    const handleConf = () => {toast.success("¡Bienvenido a la familia de Lovestar!")}

    return <div className={stylesMembership.container}>
        <div className={`${stylesMembership.text}`}>
            <h1>¡Lovestar Club!</h1>
            <p>Sé parte de algo distinto. Hazte miembro y accede a lanzamientos exclusivos, descuentos especiales y contenido que nadie más verá. <i>La familia se viste primero.</i></p>
        </div>
        <div className={stylesMembership.form}>
            <FormInput
                label="Nombre de Usuario"
                id="username"
                type="text"
/*                 ref={emailRef}
 */                required
            />
            <FormInput
                label="Email"
                id="email"
                type="text"
/*                 ref={emailRef}
 */                required
            />
            <FormInput
                label="Password"
                id="password"
                type="password"
/*                 ref={emailRef}
 */                required
            />
            <FormInput
                label="Fecha de Nacimiento"
                id="nacimiento"
                type="date"
/*                 ref={emailRef}
 */                required
            />
            <FormInput
                label="Teléfono"
                id="telefono"
                type="tel"
/*                 ref={emailRef}
 */                required
            />
        </div>
        <div className={stylesMembership.btns}>
            <button type="submit" onClick={handleConf}>CONFIRMAR</button>
            <button type="button" onClick={handleCancelar}>CANCELAR</button>
        </div>
    </div>
}

export default MembershipForm