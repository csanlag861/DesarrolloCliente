import stylesFormContacto from "./formcontacto.module.css";

import FormInput from "../Input/Input";


const FormContacto = () => {
    return (
        <section className={stylesFormContacto.container}>
            <h4>SI TIENES ALGUNAS PREGUNTAS, PUEDES CONTACTAR CON NUESTRO EQUIPO DE SOPORTE. RESPONDEREMOS LO ANTES POSIBLE.</h4>
            <form>
                <div className={stylesFormContacto.fila}>
                    <FormInput
                        label="Nombre y Apellido(s)"
                        id="name"
                        type="text"
                        placeholder="Nombre y Apellido(s)"
                        required
                    />
                    <FormInput
                        label="Email"
                        id="email"
                        type="text"
                        placeholder="Email"
/*                     ref={emailRef}
 */                    required
                    />
                </div>
                <FormInput
                    label="Número de Pedido"
                    id="pedido"
                    type="text"
                    placeholder="Número de Pedido"
                    required
                />
                <FormInput
                    label="Mensaje"
                    id="mensaje"
                    type="text"
                    placeholder="Mensaje"
                    required
                />

                <p>También puedes contactar por email a nuestro correo: <b><i>contacto.lovestar@gmail.com</i></b></p>
                <button>ENVIAR</button>
            </form>
        </section>
    )
}

export default FormContacto;