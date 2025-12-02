import stylesCard from "./card-pedidos.module.css";

import { Icon } from "@iconify/react";

const Card = ({ idPedido, estado, fecha, total, url, items }) => {

  const fechaPedido = fecha?.toDate().toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return (
    <>
      <td><img src={url} alt="" /></td>
      <td>
        <div className={stylesCard.text}>
          <h3>{idPedido}</h3>
          <p>Items: {items}</p>
        </div>
      </td>
      <td>
        <div className={stylesCard.text}>
          <h3>{estado}</h3>
          <p>{fechaPedido}</p>
        </div>
      </td>
      <td>€{total}</td>
    </>
  );
};

export default Card;
