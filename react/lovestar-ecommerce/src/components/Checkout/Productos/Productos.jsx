import stylesProductos from "./productos.module.css";

import Card from "../../../components/Cards/Card-Checkout/Card";

import { useContext } from "react";
import { CartContext } from "../../../context/ContextCart";

const Productos = () => {
    const {carrito} = useContext(CartContext);
    console.log(carrito);
  return (
    <section className={stylesProductos.section}>
        {carrito.map((prod, index) => (
            <Card key={index} url={prod.url} nombre={prod.nombre} precio={prod.precio} alt={prod.alt} talla={prod.tallaSeleccionada} cantidad={prod.cantidad} />
        ))}
    </section>
  );
};

export default Productos;
