import stylesCard from "./card-pedidos.module.css";

import { UserContext } from "../../../context/ContextUser";
import { useContext } from "react";

import { Icon } from "@iconify/react";

const Card = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className={stylesCard.pedidos}>
      <div className={stylesCard.user}>
        {currentUser?.pedidos ? (
          "Pedidos hehe"
        ) : (
          <div className={stylesCard.info}>
            <p className={stylesCard.titulo}>No hay pedidos aún.</p>
            <p className={stylesCard.texto}>Explora nuestra tienda y encuentra algo especial.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
