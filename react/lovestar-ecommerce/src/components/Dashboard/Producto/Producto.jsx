import stylesProducto from "./producto.module.css";

import { useProductos } from "../../../hooks/useProducts";

import Card from "../../Cards/Card-Producto/Card";

const Producto = () => {
    const { productos } = useProductos();

    return (
        <div className={stylesProducto.container}>
            <div className={stylesProducto.titulo}>
                <p>Imagen</p>
                <p>Nombre del Producto</p>
                <p>Categoria</p>
                <p>Precio</p>
                <p>Opciones</p>
            </div>
            {productos.map((prod, index) => (<Card key={index} producto={prod} />))}
        </div>)
}

export default Producto;