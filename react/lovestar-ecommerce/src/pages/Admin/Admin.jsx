import { useState } from "react";
import stylesAdmin from "./admin.module.css";

import Usuario from "../../components/Dashboard/Usuario/Usuario"
import Productos from "../../components/Dashboard/Producto/Producto"

function Admin() {
    const [showPanelUsuario, setShowPanelUsuario] = useState(false);
    const [showPanelProductos, setShowPanelProductos] = useState(false);

    const handleUsuario = () => {setShowPanelProductos(false); setShowPanelUsuario(true)}
    const handleProductos = () => {setShowPanelProductos(true); setShowPanelUsuario(false)}
    
    return (
        <div className={stylesAdmin.container}>
            <div className={stylesAdmin.texto}>
                <p onClick={handleUsuario}>Panel de Usuarios</p>
                <p onClick={handleProductos}>Panel de Productos</p>
            </div>
            <div className={stylesAdmin.panel}>
                {showPanelUsuario && (<Usuario/>)}
                {showPanelProductos && (<Productos/>)}
            </div>
        </div>
    );
}

export default Admin;