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
  const [tallaSeleccionada, setTallaSeleccionada] = useState(null);
  //   const [colorSeleccionado, setcolorSeleccionado] = useState(null);

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

  const addProductLocalStorage = () => {
    const carritoLocalStorage = JSON.parse(localStorage.getItem("UserCarrito")) || [];
    
    const publicProduct = {
      id: product.id,
      nombre: product.nombre,
      talla: tallaSeleccionada,
      // color: colorSeleccionado,
      precio: product.precio_descuento
        ? product.precio_descuento
        : product.precio,
    };

    carritoLocalStorage.push(publicProduct);
    localStorage.setItem("UserCarrito", JSON.stringify(carritoLocalStorage));
  };
  

  if (loading) return <p>Cargando...</p>;
  if (!product) return <p>No se han encontrado productos...</p>;

  const orden = ["XS", "S", "M", "L", "XL"];

  return (
    <div className={styleInfo.container}>
      <h1>{product?.nombre}</h1>
      {product?.precio_descuento ? (
        <div className={styleInfo.precio}>
          <p>Precio: </p>
          <h4 className={styleInfo.descuento}>{product.precio} €</h4>
          <h3>{product.precio_descuento} €</h3>
        </div>
      ) : (
        <div className={styleInfo.precio}>
          <p>Precio: </p>
          <h3>{product.precio} €</h3>
        </div>
      )}
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
          {Object.entries(product.tallas)
            .sort(([a], [b]) => orden.indexOf(a) - orden.indexOf(b))
            .map(([talla, info]) => {
              const stock = info.stock;
              const noStock = stock < 1;

              const isSelected = tallaSeleccionada === talla;

              return (
                <div
                  key={talla}
                  className={`${
                    noStock ? styleInfo.noStock : styleInfo.stock
                  } ${isSelected ? styleInfo.tallaSeleccionada : ""}`}
                  onClick={() => !noStock && setTallaSeleccionada(talla)}
                >
                  <p>{talla}</p>
                </div>
              );
            })}
        </div>
      )}

      <div className={styleInfo.button}>
        <button type="submit" onClick={addProductLocalStorage}>
          AÑADIR AL CARRITO
        </button>
      </div>
    </div>
  );
}

export default Detalles;
