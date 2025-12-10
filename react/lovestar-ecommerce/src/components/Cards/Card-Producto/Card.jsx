import stylesCard from "./card.module.css";

import { Icon } from "@iconify/react";

import { useEffect, useState } from "react";

import { useUpdateProduct, useDeleteProduct } from "../../../utils/react-query";

import { toast } from "react-toastify";

const Card = ({ producto }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [nombreProducto, setNombreProduct] = useState(producto.nombre);
  const [precioProducto, setPrecioProducto] = useState(producto.precio);
  const [categoriaProducto, setCategoriaProducto] = useState(
    producto.categoria
  );

  useEffect(() => {
    setNombreProduct(producto.nombre);
    setPrecioProducto(producto.precio);
    setCategoriaProducto(producto.categoria);
  }, [producto]);

  const updateProduct = useUpdateProduct();

  const deleteProduct = useDeleteProduct();

  const handleSave = () => {
    updateProduct.mutate(
      { id: producto.id, data: { nombre: nombreProducto } },
      {
        onSuccess: () => {
          toast.success("Producto actualizado correctamente");
          setIsDisabled(true);
        },
        onError: () => {
          toast.error("Error al actualizar el producto.");
        },
      }
    );
  };

  const handleDelete = () => {
    deleteProduct.mutate(
      { id: producto.id },
      {
        onSuccess: () => {
          toast.success("Producto eliminado correctamente.");
        },
        onError: (error) => {
          console.error("Error al eliminar el producto", error);
          toast.error("Error al eliminar el producto.");
        },
      }
    );
  };

  return (
    <div className={stylesCard.card}>
      <img src={producto.url} alt={producto.alt} />
      <input
        type="text"
        name="nombreProducto"
        value={nombreProducto}
        disabled={isDisabled}
        onChange={(evento) => setNombreProduct(evento.target.value)}
      />
      {isDisabled && <p>{categoriaProducto}</p>}
      {!isDisabled && (
        <select
          value={categoriaProducto}
          onChange={(evento) => setCategoriaProducto(evento.target.value)}
          disabled={isDisabled}
        >
          <option value="Gorros">Gorros</option>
          <option value="Sudaderas">Sudaderas</option>
          <option value="Jerseys">Jerseys</option>
          <option value="Pantalones">Pantalones</option>
          <option value="Camisetas">Camisetas</option>
        </select>
      )}

      <input
        type="text"
        name="precio"
        value={precioProducto}
        disabled={isDisabled}
        onChange={(evento) => setPrecioProducto(evento.target.value)}
      />
      <div className={stylesCard.opciones}>
        <Icon icon="ri:edit-fill" onClick={() => setIsDisabled(!isDisabled)} />
        <Icon icon="line-md:confirm-circle-filled" onClick={handleSave} />
        <Icon icon="mdi:bin" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Card;
