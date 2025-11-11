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
                        required
                    />
                    <FormInput
                        label="Email"
                        id="email"
                        type="text"
/*                     ref={emailRef}
 */                    required
                    />
                </div>
                <FormInput
                    label="Número de Pedido"
                    id="pedido"
                    type="text"
                    required
                />
                <FormInput
                    label="Mensaje"
                    id="mensaje"
                    type="text"
                    required
                />

                <p>También puedes contactar por email a nuestro correo: contacto.lovestar@gmail.com</p>
                <button>Enviar</button>
            </form>
        </section>
    )
}

export default FormContacto;