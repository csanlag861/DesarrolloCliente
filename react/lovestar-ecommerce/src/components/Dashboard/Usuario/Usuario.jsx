import stylesUsuario from "./usuario.module.css";

import {getAllUsers} from "../../../utils/querys";
import { useEffect, useState } from "react";

const Usuario = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            const usuarios = await getAllUsers();
            setUsuarios(usuarios);
        }

        fetchUsuarios();
    }, [])

    console.log(usuarios);
    

    return (
    <div className={stylesUsuario.container}>
        {usuarios.map((user) => (<p>{user?.displayName || user?.username}</p>))}
    </div>)
}

export default Usuario;