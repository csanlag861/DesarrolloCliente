import stylesCrear from "./crear.module.css";

import { useState } from "react";
import { useCreateProduct } from "../../utils/react-query";
import { uploadProductImage } from "../../utils/firebase";
import { toast } from "react-toastify";

import { getAllProducts } from "../../utils/querys";

import FormInput from "../../components/Forms/Input/Input";
import { useNavigate } from "react-router-dom";

function Crear() {
  const [file, setFile] = useState(null);
  const [fileReverso, setFileReverso] = useState(null);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");

  const createProduct = useCreateProduct();

  const navigate = useNavigate();

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    try {
      const imageURL = file ? await uploadProductImage(file, "products") : null;
      const imageURL_R = file ? await uploadProductImage(fileReverso, "products") : null;

      const products = await getAllProducts();
      const totalProductos = products.length;

      const producto = {
        id: totalProductos + 1,
        nombre: nombre,
        url: imageURL,
        url_r: imageURL_R,
        precio: precio,
        categoria: categoria,
        activo: true,
        membership: true,
        informacion: "Novedad",
        tallas: {
          XS: { stock: 10 },
          S: { stock: 10 },
          M: { stock: 10 },
          L: { stock: 10 },
          XL: { stock: 10 },
        },
        colores: [],
      };

      await createProduct.mutateAsync({
        producto,
        totalProductos,
      });

      toast.success("Producto creado correctamente.");
      navigate("/lovestar");
    } catch (error) {
      toast.error("Error al crear el producto.");
      console.error("Error al crear el producto", error);
    } finally {
      setNombre("");
      setFile(null);
      setPrecio("");
      setCategoria("");
    }
  };

  return (
    <form className={stylesCrear.container} onSubmit={handleSubmit}>
      <div className={stylesCrear.form}>
        <div className={stylesCrear.imagen}>
          <FormInput
            type="file"
            label="Frontal"
            accept="image/*"
            onChange={(evento) => setFile(evento.target.files[0])}
          />
          {file && <img src={URL.createObjectURL(file)}></img>}
          <FormInput
            type="file"
            label="Dorsal"
            accept="image/*"
            onChange={(evento) => setFileReverso(evento.target.files[0])}
          />
          {fileReverso && <img src={URL.createObjectURL(file)}></img>}
        </div>

        <FormInput
          type="text"
          label="Nombre del Producto"
          name="nombreProducto"
          placeholder="Introduce el nombre del producto"
          onChange={(evento) => setNombre(evento.target.value)}
        />
        <FormInput
          type="text"
          name="precio"
          label="Precio"
          placeholder="Introduce el precio del producto"
          onChange={(evento) => setPrecio(evento.target.value)}
        />
        <FormInput
          type="text"
          name="categoria"
          label="Categoria"
          placeholder="Introduce la categoría del producto"
          onChange={(evento) => setCategoria(evento.target.value)}
        />
      </div>
      <button type="submit">Crear</button>
    </form>
  );
}

export default Crear;
