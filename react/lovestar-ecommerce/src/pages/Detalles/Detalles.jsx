import stylesDetalles from "./detalles.module.css"

import Imagen from "../../components/Detalles/Imagen/Imagen";

function Detalles() {
  return (
    <section className={stylesDetalles.main}>
        <Imagen />
    </section>
  );
}

export default Detalles;
