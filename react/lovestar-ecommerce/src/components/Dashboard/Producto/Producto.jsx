import stylesProducto from "./producto.module.css";

import {getAllProducts} from "../../../utils/querys";
import { useEffect, useState } from "react";

import Card from "../../Cards/Card-Producto/Card";

const Producto = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchproductos = async () => {
            const productos = await getAllProducts();
            setProductos(productos);
        }
        
        fetchproductos();
    }, [productos])    
    
    console.log(productos);
    
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