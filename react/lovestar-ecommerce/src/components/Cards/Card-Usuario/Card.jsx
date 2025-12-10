import stylesCard from "./card.module.css";

import { Icon } from "@iconify/react";

import { useState } from "react";

import { updateUserName, updateUserRole, deleteUser } from "../../../utils/querys";
import { toast } from "react-toastify";

const Card = ({ id, displayName, username, rol }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [editRol, setEditRol] = useState(false);
  const [rolSeleccionado, setRolSeleccionado] = useState(rol);
  const [name, setName] = useState(() => { return displayName ? displayName : username });


  const confirmName = async () => {
    await updateUserName(id, name);
    setIsDisabled(true);
    toast.success("Nombre de usuario cambiado correctamente.")
  }

  const confirmRol = async () => {
    await updateUserRole(id, rolSeleccionado);
    setEditRol(false);
    toast.success("Rol del usuario cambiado correctamente.")
  }

  return (
    <div className={stylesCard.card}>
      {displayName ? (
        <div className={stylesCard.nombre}>
          <input
            
            type="text"
            onChange={(evento) => { setName(evento.target.value) }}
            value={name}
            disabled={isDisabled}
            autoComplete="username"
          ></input>
          <Icon
            icon="ri:edit-fill"
            onClick={() => setIsDisabled(!isDisabled)}
          />
          {!isDisabled && (<Icon icon="line-md:confirm-circle-filled" onClick={confirmName} />)}
        </div>
      ) : (
        <div className={stylesCard.nombre}>
          <input type="text" value={name} onChange={(evento) => { setName(evento.target.value) }} disabled={isDisabled}></input>
          <Icon
            icon="ri:edit-fill"
            onClick={() => setIsDisabled(!isDisabled)}
          />
          {!isDisabled && (<Icon icon="line-md:confirm-circle-filled" onClick={confirmName} />)}
        </div>
      )}
      <div className={stylesCard.rol}>
        {!editRol && <p>{rolSeleccionado}</p>}
        {editRol && (
          <select value={rolSeleccionado} onChange={(evento) => setRolSeleccionado(evento.target.value)}>
            <option value="user">Usuario</option>
            <option value="miembro">Miembro</option>
            <option value="admin">Administrador</option>
          </select>
        )}
        <Icon icon="ri:edit-fill" onClick={() => setEditRol(!editRol)} />
        {editRol && (<Icon icon="line-md:confirm-circle-filled" onClick={confirmRol} />)}
      </div>
      <Icon icon="streamline-block:basic-ui-delete-user" onClick={async ()  => {await deleteUser(id); toast.success("Usuario eliminado con éxito.")}}/>
    </div>
  );
};

export default Card;
