import stylesContacto from "./contacto.module.css";
import FormContacto from "../../components/Forms/Contacto/FormContacto";

function Contacto() {
  return (
    <main className={stylesContacto.main}>
      <div className={stylesContacto.name}>
        <h1>Contacto</h1>
      </div>
      <div className={stylesContacto.form}>
        <FormContacto />
      </div>
    </main>
  );
}

export default Contacto;
