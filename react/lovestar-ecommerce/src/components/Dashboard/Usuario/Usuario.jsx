import stylesUsuario from "./usuario.module.css";

import {getAllUsers} from "../../../utils/querys";
import { useEffect, useState } from "react";

import Card from "../../Cards/Card-Usuario/Card";

const Usuario = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [updateUsuario, setUpdateUsuario] = useState(false);

    useEffect(() => {
        const fetchUsuarios = async () => {
            console.log("ejecutandose el useEffect");
            const usuarios = await getAllUsers();
            console.log(usuarios);
            setUsuarios(usuarios);
        }

        fetchUsuarios();
    }, [updateUsuario]) 

    return (
    <div className={stylesUsuario.container}>
        <div className={stylesUsuario.titulo}>
            <p>Nombre</p>
            <p>Rol</p>
            <p>Eliminar usuario</p>
        </div>
        {usuarios.map((user, index) => (<Card key={user.id} id={user.id} displayName={user.displayName} username={user.username} rol={user.rol} setUpdateUsuario={setUpdateUsuario} />))}
    </div>)
}

export default Usuario;