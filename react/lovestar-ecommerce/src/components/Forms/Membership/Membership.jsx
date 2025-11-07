import stylesMembership from "./membership.module.css"
import FormInput from "../Input/Input"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { useContext } from "react"
import { UserContext } from "../../../context/ContextUser"
import { CardContext } from "../../../context/ContextCard"

const MembershipForm = () => {
    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);
    const { cardData, setCardData } = useContext(CardContext);

    const handleCancelar = () => { navigate("/home") }
    const handleConf = () => { toast.success("¡Bienvenido a la familia de Lovestar!") }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCardData((prev) => ({ ...prev, [name]: value }));
    }

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
                value={ currentUser?.username || currentUser?.displayName}
                /*                 ref={emailRef}
                 */
                onChange={handleChange}
                required
            />
            <FormInput
                label="Email"
                id="email"
                type="text"
                value={currentUser?.email}
                /*                 ref={emailRef}
                 */
                onChange={handleChange}
                required
            />
            {!currentUser && <FormInput
                label="Password"
                id="password"
                type="password"
                /*                 ref={emailRef}
                 */
                value={cardData?.password}
                onChange={handleChange}
                required
            />}

            <FormInput
                label="Fecha de Nacimiento"
                id="birthday"
                type="date"
                /*                 ref={emailRef}
                 */
                value={cardData?.birthday}
                onChange={handleChange}
                required
            />
            <FormInput
                label="Teléfono"
                id="telefono"
                type="tel"
                /*                 ref={emailRef}
                 */
                value={cardData?.telefono}
                onChange={handleChange}
                required
            />
        </div>
        <div className={stylesMembership.btns}>
            <button type="submit" onClick={handleConf}>CONFIRMAR</button>
            <button type="button" onClick={handleCancelar}>CANCELAR</button>
        </div>
    </div>
}

export default MembershipForm