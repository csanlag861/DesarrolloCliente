import stylesImagen from "./imagen.module.css";

import { useParams } from "react-router-dom";

import { getAllProductoByID } from "../../../utils/querys.js";
import { useEffect, useState } from "react";

function Detalles() {
  const { productID } = useParams();
  const [product, setProducto] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAllProductoByID(productID);
        // console.log(data);
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
    <div className={stylesImagen.container}>
      {product && <img src={`${product?.url}`} alt={product?.alt} />}
      {product && <img src={`${product?.url_r}`} alt={product?.alt} />}
    </div>
  );
}

export default Detalles;
