import stylesCarrito from "./carrito.module.css";
import { Icon } from "@iconify/react";

import { useState } from "react";

import { useContext } from "react";
import { CartContext } from "../../context/ContextCart";

import Card from "../Cards/Card-Carrito/Card";

const Carrito = ({ closeCarrito }) => {
  const [cerrar, setCerrar] = useState(false);
  const { carrito, vaciarCarrito } = useContext(CartContext);

  const handleClose = () => {
    setCerrar(true);

    // Espera a que termine la animación (300ms)
    setTimeout(() => {
      closeCarrito();
    }, 300);
  };


  return (
    <div
      className={`${stylesCarrito.carrito} ${cerrar ? stylesCarrito.closing : ""
        }`}
    >
      <button className={stylesCarrito.cerrar} onClick={handleClose}>
        <Icon icon="material-symbols:close" />
      </button>
      <h2>CARRITO</h2>
      <hr />
      <img src="/img/favicon.svg" alt="" />
      {carrito ? (
        <>
          <div className={stylesCarrito.cards} >
            {carrito.map((prod, index) => (
              <Card key={index} id={prod.id} nombre={prod.nombre} talla={prod?.tallaSeleccionada} precio={prod.precio_descuento ? prod.precio_descuento : prod.precio} cantidad={prod.cantidad} url={prod.url} alt={prod.alt} />
            ))}
          </div>
          <p onClick={() => vaciarCarrito()}>Vaciar carrito....</p>
        </>
      ) : (
        <div className={stylesCarrito.blankState}>
          <h3>Tú carrito está vacio</h3>
        </div>
      )}
    </div>
  );
};

export default Carrito;
