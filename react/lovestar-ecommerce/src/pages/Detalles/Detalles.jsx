import stylesDetalles from "./detalles.module.css"

import Imagen from "../../components/Detalles/Imagen/Imagen";
import Info from "../../components/Detalles/Informacion/Info";

function Detalles() {
  return (
    <section className={stylesDetalles.main}>
        <Imagen />
        <Info />
    </section>
  );
}

export default Detalles;
