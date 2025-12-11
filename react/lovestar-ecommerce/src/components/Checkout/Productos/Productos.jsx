import stylesProductos from "./productos.module.css";

import Card from "../../../components/Cards/Card-Checkout/Card";

import { CartContext } from "../../../context/ContextCart";
import { useContext } from "react";
import { UserContext } from "../../../context/ContextUser";

const Productos = () => {
  const { carrito } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  
  return (
    <section className={stylesProductos.section}>
      {carrito.map((prod, index) => (
        <Card
          key={index}
          url={prod.url}
          nombre={prod.nombre}
          precio={prod.precio}
          alt={prod.alt}
          talla={prod.tallaSeleccionada}
          cantidad={prod.cantidad}
        />
      ))}
      {currentUser?.descuento === false && <div className={stylesProductos.descuento}><p>Descuento de miembro: </p><p>-10%</p></div>}
      {currentUser?.descuentoDialog === true && <div className={stylesProductos.descuento}><p>Descuento de miembro: </p><p>-10%</p></div>}
      
      <div className={stylesProductos.total}><p>Total:</p><p>€{calcularTotal(currentUser, carrito)}</p></div>
    </section>
  );
};

export default Productos;

function calcularTotal(currentUser, carrito){
  const totalCarrito = carrito.reduce((total, producto) => { return total + (producto.precio_descuento ? (Number(producto.precio_descuento)) : (Number(producto.precio))) * Number(producto.cantidad) }, 0)
  const descuento = (currentUser?.descuento ===false ? 0.10 : 0) + (currentUser?.descuentoDialog === true ? 0.10 : 0); 
  
  const total = (currentUser?.rol === "miembro" || currentUser?.rol === "admin") ? (totalCarrito * (1-descuento)) : totalCarrito;
  return total
}
