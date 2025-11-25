import stylesCarrito from "./carrito.module.css";
import { Icon } from "@iconify/react";

import { useState } from "react";

const Carrito = ({ closeCarrito }) => {
  const [cerrar, setCerrar] = useState(false);

  const handleClose = () => {
    setCerrar(true);

    // Espera a que termine la animación (300ms)
    setTimeout(() => {
      closeCarrito();
    }, 300);
  };

  const productsLocalStorage = JSON.parse(localStorage.getItem("UserCarrito"));
  console.log(productsLocalStorage);

  return (
    <div
      className={`${stylesCarrito.carrito} ${
        cerrar ? stylesCarrito.closing : ""
      }`}
    >
      <button className={stylesCarrito.cerrar} onClick={handleClose}>
        <Icon icon="material-symbols:close" />
      </button>
      <h2>CARRITO</h2>
      <hr />
      <img src="/img/favicon.svg" alt="" />
      {productsLocalStorage ? (
        <div>
          {productsLocalStorage.map((prod, index) => (
            <div key={index}>
              <h4>{prod.id}</h4>
              <h4>{prod.nombre}</h4>
              <h4>{prod?.talla}</h4>
              <h4>{prod.precio}</h4>
            </div>
          ))}
        </div>
      ) : (
        <div className={stylesCarrito.blankState}>
          <h3>Tú carrito está vacio</h3>
        </div>
      )}
    </div>
  );
};

export default Carrito;
