import stylesContacto from "./contacto.module.css";
import FormContacto from "../../components/Forms/Contacto/FormContacto";

function Contacto() {
  return (
    <main>
    <div className={stylesContacto.name}>
      <h1>Contacto</h1>
    </div>
      <div className={stylesContacto.main}>
        <FormContacto />
      </div>
    </main>
  );
}

export default Contacto;
