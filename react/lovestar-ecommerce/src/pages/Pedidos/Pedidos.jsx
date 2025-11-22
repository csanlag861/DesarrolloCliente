import stylesPedidos from "./pedidos.module.css";

import Card from "../../components/Cards/Card-Pedidos/Card-Pedidos";

function Pedidos() {
  return (
    <section className={stylesPedidos.main}>
      <h1>Pedidos</h1>
      <div className={stylesPedidos.form}>
        <Card />
      </div>
    </section>
  );
}

export default Pedidos;
