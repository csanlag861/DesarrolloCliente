import stylesContacto from "./contacto.module.css";
import FormContacto from "../../components/Forms/Contacto/FormContacto"

function Contacto() {
    return (
        <main className={stylesContacto.container}>
            <h1>Contacto</h1>
            <FormContacto />
        </main>
    );
}

export default Contacto;