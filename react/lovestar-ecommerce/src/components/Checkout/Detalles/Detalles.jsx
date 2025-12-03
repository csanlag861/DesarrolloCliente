import stylesDetalles from "./detalles.module.css";

import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/ContextUser";
import { CartContext } from "../../../context/ContextCart";

import FormInput from "../../Forms/Input/Input";

import { doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase";

import { toast } from "react-toastify";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Detalles = () => {
  const { currentUser } = useContext(UserContext);
  const [direccion, setDireccion] = useState(() => (""));
  const [codigoPostal, setCodigoPostal] = useState(() => (""));
  const [ciudad, setCiudad] = useState(() => (""));
  const [provincia, setProvincia] = useState(() => (""));

  console.log(direccion);


  const { carrito, vaciarCarrito } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setDireccion(currentUser?.direccion || "");
      setCodigoPostal(currentUser?.codigoPostal || "");
      setCiudad(currentUser?.ciudad || "");
      setProvincia(currentUser?.provincia || "");
    }
  }, [currentUser])

  const confirmarPedido = async () => {
    const idPedido = `LOV-${Date.now()}`;

    const pedido = {
      id: idPedido,
      items: carrito,
      fecha: new Date(),
      direccion: { direccion, codigoPostal, ciudad, provincia },
      estado: "En preparación",
      total: carrito.reduce((total, producto) => { return total + (producto.precio_descuento ? (Number(producto.precio_descuento)) : (Number(producto.precio))) * Number(producto.cantidad) }, 0)
    }

    try {
      const ref = doc(
        db,
        "users",
        currentUser.uid,
        "pedidos",
        "pedidosUsuario"
      );
      const snapshot = await getDoc(ref);

      if (!snapshot.exists()) {
        await setDoc(ref, { pedido: [pedido] });
      } else {
        const pedidosRealizados = snapshot.data().pedido || [];
        const nuevosPedidos = [...pedidosRealizados, pedido];
        await updateDoc(ref, { pedido: nuevosPedidos });
      }

      const userDoc = doc(db, "users", currentUser.uid);
      await updateDoc(userDoc, { direccion, codigoPostal, ciudad, provincia });


      restarStockFireBase();
      vaciarCarrito();
      toast.success("Pedido realizado y dirección guardada");
      navigate("/Home");
    } catch (error) {
      console.error("Error al crear el pedido", error);
      toast.error("Error al realizar el pedido, porfavor, inténtalo de nuevo.");
    }
  };

  const restarStockFireBase = async () => {
    try {

      const productsRef = collection(db, "products");
      const snapshot = await getDocs(productsRef);

      const carritoFirebase = snapshot.data();
      const carritoActualizado = [...carritoFirebase];

      carrito.forEach((itemCarrito) => {
        const existente = carritoFirebase.find((item) => item.id === itemCarrito.id && (item.tallaSeleccionada ?? null) === (itemCarrito.tallaSeleccionada ?? null))

        if (existente) {
          existente.cantidad -= itemCarrito.cantidad;
        }
      })
      await updateDoc(ref, { items: carritoActualizado });
    } catch (error) {

    }

  }

  return (
    <section className={stylesDetalles.section}>
      <Link to="/Home">
        <img src="/img/alt-logo.svg" alt="Logo de Lovestar" />
      </Link>
      <div className={stylesDetalles.entrega}>
        <h2>Entrega</h2>
        <form>
          {!currentUser && (
            <>
              <FormInput
                id="name"
                type="text"
                placeholder="Nombre y Apellido(s)"
                required
              />
              <FormInput id="email" type="email" placeholder="Email" required />
              <FormInput
                id="telefono"
                type="tel"
                placeholder="Teléfono"
                required
              />
            </>
          )}
          <FormInput
            id="direccion"
            type="text"
            placeholder="Direccion"
            onChange={(event) => setDireccion(event.target.value)}
            value={direccion}
            required
          />
          <FormInput
            id="codigo_postal"
            type="text"
            placeholder="Código Postal"
            onChange={(event) => setCodigoPostal(event.target.value)}
            value={codigoPostal}
            required
          />
          <FormInput
            id="ciudad"
            type="text"
            placeholder="Ciudad"
            onChange={(event) => setCiudad(event.target.value)}
            value={ciudad}
            required
          />
          <FormInput
            id="provincia"
            type="text"
            placeholder="Provincia"
            onChange={(event) => setProvincia(event.target.value)}
            value={provincia}
            required
          />
        </form>
      </div>
      <div className={stylesDetalles.pago}>
        <div className={stylesDetalles.text}>
          <h2>Pago</h2>
          <p>Todas las transacciones son seguras y encriptadas.</p>
        </div>

        <form action="">
          <FormInput
            id="numero_tarjeta"
            type="text"
            placeholder="Número de Tarjeta"
            required
          />
          <FormInput
            id="provincia"
            type="date"
            placeholder="Número de Tarjeta"
            required
          />
          <FormInput
            id="cvv"
            type="text"
            placeholder="CVV / Código Secreto"
            required
          />
          <FormInput
            id="nombre_tarjeta"
            type="text"
            placeholder="Titular de la cuenta"
            required
          />
        </form>
      </div>
      <div className={stylesDetalles.button}>
        <button type="submit" onClick={confirmarPedido}>
          CONFIRMAR
        </button>
      </div>
    </section>
  );
};

export default Detalles;
