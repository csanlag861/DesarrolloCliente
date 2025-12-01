import stylesDetalles from "./detalles.module.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/ContextUser";

import FormInput from "../../Forms/Input/Input";

const Detalles = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <section className={stylesDetalles.section}>
            <Link to="/Home" >
                <img src="/img/alt-logo.svg" alt="Logo de Lovestar" />
            </Link>
            <div className={stylesDetalles.entrega}>
                <h2>Entrega</h2>
                <form action="">
                    {currentUser ?? (<>
                        <FormInput
                            id="name"
                            type="text"
                            placeholder="Nombre y Apellido(s)"
                            required
                        />
                        <FormInput
                            id="email"
                            type="email"
                            placeholder="Email"
                            required
                        />

                    </>)}
                    <FormInput
                        id="email"
                        type="text"
                        placeholder="Email"
                        required
                    />
                </form>
            </div>
            <h2>Pago</h2>
        </section>
    )
}

export default Detalles;