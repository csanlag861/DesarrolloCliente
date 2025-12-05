import stylesUsuario from "./usuario.module.css";

import {getAllUsers} from "../../../utils/querys";
import { useEffect, useState } from "react";

import Card from "../../Cards/Card-Usuario/Card";

const Usuario = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            const usuarios = await getAllUsers();
            setUsuarios(usuarios);
        }

        fetchUsuarios();
    }, [usuarios])    

    return (
    <div className={stylesUsuario.container}>
        <div className={stylesUsuario.titulo}>
            <p>Nombre</p>
            <p>Rol</p>
            <p>Eliminar usuario</p>
        </div>
        {usuarios.map((user, index) => (<Card key={index} id={user.id} displayName={user.displayName} username={user.username} rol={user.rol} />))}
    </div>)
}

export default Usuario;