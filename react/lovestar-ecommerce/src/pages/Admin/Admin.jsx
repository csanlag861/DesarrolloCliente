  import { useState } from "react";
  import stylesAdmin from "./admin.module.css";

  import Usuario from "../../components/Dashboard/Usuario/Usuario";
  import Productos from "../../components/Dashboard/Producto/Producto";

  import { Icon } from "@iconify/react";
  import { useNavigate } from "react-router-dom";

  function Admin() {
    const [showPanelUsuario, setShowPanelUsuario] = useState(false);
    const [showPanelProductos, setShowPanelProductos] = useState(false);

    const navigate = useNavigate();

    const handleUsuario = () => {
      setShowPanelProductos(false);
      setShowPanelUsuario(true);
    };
    const handleProductos = () => {
      setShowPanelProductos(true);
      setShowPanelUsuario(false);
    };

    return (
      <div className={stylesAdmin.container}>
        <div className={stylesAdmin.texto}>
          <p onClick={handleUsuario}>Panel de Usuarios</p>
          <p onClick={handleProductos}>Panel de Productos</p>
        </div>
        <div className={stylesAdmin.panel}>
          {showPanelUsuario && <Usuario />}
          {showPanelProductos && (
            <div className={stylesAdmin.productos}>
              <div className={stylesAdmin.create} onClick={() => navigate("/crearProducto")}>
                <Icon icon="ic:baseline-plus" />
                <p>Crear Producto</p>
              </div>
              <Productos />
            </div>
          )}
        </div>
      </div>
    );
  }

  export default Admin;
