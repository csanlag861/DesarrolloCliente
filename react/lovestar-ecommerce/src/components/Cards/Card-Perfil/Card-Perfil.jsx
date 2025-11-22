import stylesCard from "./card-perfil.module.css";

import { UserContext } from "../../../context/ContextUser";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


import { Icon } from "@iconify/react";

const Card = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const navigatePedidos = () => (navigate("/Pedidos"));
  return (
    <div className={stylesCard.perfil}>
      <div className={stylesCard.user}>
        <div className={stylesCard.info}>
          <p className={stylesCard.titulo}>Nombre</p>
          <p>{currentUser?.displayName}</p>
        </div>
        <div className={stylesCard.info}>
          <p className={stylesCard.titulo}>Email</p>
          <p>{currentUser?.email}</p>
        </div>
        <p className={stylesCard.pedidos} onClick={navigatePedidos}>Mis pedidos...</p>
      </div>
      <div className={stylesCard.user}>
        <div className={stylesCard.info}>
          <p className={stylesCard.titulo}>Direccion</p>
            {currentUser?.direccion ? (<p>{currentUser?.direccion}</p>) : (
              <div className={stylesCard.noDireccion}>
                <Icon icon="material-symbols:error" />
                <p>No se ha añadido una dirección.</p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Card;
