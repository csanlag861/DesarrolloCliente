import stylesContacto from "./contacto.module.css";
import FormContacto from "../../components/Forms/Contacto/FormContacto";

function Contacto() {
  return (
    <section className={stylesContacto.main}>
        <h1>Contacto</h1>
      <div className={stylesContacto.form}>
        <FormContacto />
      </div>
    </section>
  );
}

export default Contacto;
