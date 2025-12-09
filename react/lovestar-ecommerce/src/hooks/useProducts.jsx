import { useEffect, useState } from "react";
import { getAllProducts } from "../utils/querys"; // ajusta la ruta

export const useProductos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const unsubscribe = getAllProducts((productosActualizados) => {
            setProductos(productosActualizados);
        });

        return () => unsubscribe();
    }, []);

    return { productos };
};
