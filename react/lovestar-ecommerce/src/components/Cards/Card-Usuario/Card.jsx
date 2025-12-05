import stylesCard from "./card.module.css";

import { Icon } from "@iconify/react";

import { useState } from "react";

const Card = ({ displayName, username, rol }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [editRol, setEditRol] = useState(false);
  const [rolSeleccionado, setRolSeleccionado] = useState(null);

  return (
    <div className={stylesCard.card}>
      {displayName ? (
        <div className={stylesCard.nombre}>
          <input
            name="username"
            type="text"
            value={displayName}
            disabled={isDisabled}
          ></input>{" "}
          <Icon
            icon="ri:edit-fill"
            onClick={() => setIsDisabled(!isDisabled)}
          />
        </div>
      ) : (
        <div className={stylesCard.nombre}>
          <input type="text" value={username} disabled={isDisabled}></input>
          <Icon
            icon="ri:edit-fill"
            onClick={() => setIsDisabled(!isDisabled)}
          />
        </div>
      )}
      <div className={stylesCard.rol}>
        {!editRol && <p>{rol}</p>}
        {editRol && (
          <select value={rol} onChange={(evento) => setRolSeleccionado(evento.target.value)}>
            <option value="user">Usuario</option>
            <option value="miembro">Miembro</option>
            <option value="admin">Administrador</option>
          </select>
        )}
        <Icon icon="ri:edit-fill" onClick={() => setEditRol(!editRol)} />
      </div>
      <Icon icon="streamline-block:basic-ui-delete-user" />
    </div>
  );
};

export default Card;
