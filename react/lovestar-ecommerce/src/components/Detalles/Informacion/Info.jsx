import styleInfo from "./info.module.css";

import { useParams } from "react-router-dom";

import { getAllProductoByID } from "../../../utils/querys.js";
import { useEffect, useState } from "react";

function Detalles() {
    const styleColor = {
        width: "35px",
        height: "35px",
        borderRadius: "1000px",
        gap: "4px",
    };

    const { productID } = useParams();
    const [product, setProducto] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getAllProductoByID(productID);
                console.log(data);
                setProducto(data);
            } catch (error) {
                console.error("Error al cargar los productos: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [productID]);

    if (loading) return <p>Cargando...</p>;
    if (!product) return <p>No se han encontrado productos...</p>;

    return (
        <div className={styleInfo.container}>
            <h1>{product?.nombre}</h1>
            {product?.precio_descuento ? <h3>{product.precio_descuento} €</h3> : <h3>{product.precio} €</h3>}
            {product?.colores > 1 && (
                <div className={styleInfo.colores}>
                    <h3>Colores: </h3>
                    {product.colores.map((color, id) => (
                        <div
                            key={id}
                            style={{ ...styleColor, backgroundColor: color }}
                        ></div>
                    ))}
                </div>
            )}

            {product?.tallas && (
                <div className={styleInfo.tallas}>
                    {Object.entries(product.tallas).map(([talla, info]) => {
                        const stock = info.stock;
                        const noStock = stock < 1;

                        return (
                            <div key={talla} className={noStock ? styleInfo.noStock : styleInfo.stock}>
                                <p>{talla}</p>
                            </div>
                        );
                    })}
                </div>
            )}

            <div className={styleInfo.button}>
                <button type="submit">AÑADIR AL CARRITO</button>
            </div>

        </div>
    );
}

export default Detalles;
