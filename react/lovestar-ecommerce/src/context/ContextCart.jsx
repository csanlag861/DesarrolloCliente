import { createContext, useState, useEffect } from "react";

import { useContext } from "react";
import { UserContext } from "./ContextUser";

import { doc, getDoc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

const CartContext = createContext({
  productos: null,
  setProductos: () => null,
});

function CartContextProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [ultimoProducto, setUltimoProducto] = useState(null);

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    async function cargarCarrito() {
      const carritoLocalStorage =
        JSON.parse(localStorage.getItem("UserCarrito")) || [];
      // Si no tengo usuario:
      if (currentUser === null) {
        setCarrito(carritoLocalStorage || []);
      } else {
        // Si tengo usuario, y tengo cosas en el local storage:
        /*                 console.log("PRueba de que entra en el else del usuario");
         */ if (carritoLocalStorage.length !== 0) {
          const hasMerge = JSON.parse(localStorage.getItem("Merge"));
          // SI el usuario aún no ha hecho el merge
          if (!hasMerge) {
            try {
              const ref = doc(
                db,
                "users",
                currentUser.uid,
                "carrito",
                "carritoActual"
              );
              const snapshot = await getDoc(ref);
              // Si no existe la coleccion
              if (!snapshot.exists()) {
                console.log("Crear carrito en Firebase");
                await setDoc(ref, { items: carritoLocalStorage });
              } else {
                const carritoFirebase = snapshot.data().items;
                const carritoMerge = [...carritoFirebase];

                carritoLocalStorage.forEach((itemLS) => {
                  const existente = carritoFirebase.find((item) => item.id === itemLS.id && (item.tallaSeleccionada ?? null) === (itemLS.tallaSeleccionada ?? null))

                  if (existente) {
                    existente.cantidad += itemLS.cantidad;
                  } else {
                    carritoMerge.push(itemLS);
                  }
                })
                await updateDoc(ref, { items: carritoMerge });
                setCarrito(carritoMerge);
              }
            } catch (error) {
              console.error("Error al hacer el merge");
            }

            localStorage.setItem("Merge", true);
          } else {
            try {
              const ref = doc(
                db,
                "users",
                currentUser.uid,
                "carrito",
                "carritoActual"
              );
              const snapshot = await getDoc(ref);

              if (snapshot.exists()) {
                await updateDoc(ref, { items: carrito });
              }
            } catch (error) {
              console.error("Error al hacer el merge");
            }
          }
        } else {
          try {
            const ref = doc(
              db,
              "users",
              currentUser.uid,
              "carrito",
              "carritoActual"
            );
            const snapshot = await getDoc(ref);

            if (snapshot.exists()) {
              setCarrito(snapshot.data().items || []);
            }
          } catch (error) {
            console.error("Error al acceder a FIrebase", error);
          }
        }
      }
    }
    cargarCarrito();
  }, [currentUser]);

  useEffect(() => {
    async function actualizarCarrito() {
      if (ultimoProducto !== null) {
        /*                 console.log("Esto no debería de salir porque no tenemos un Último Producto. Sólo sale cuando se actualice el estado del carrito")
         */
        if (currentUser === null) {
          /*                     console.log("Producto añadido");
           */ localStorage.setItem("UserCarrito", JSON.stringify(carrito));
        } else {
          /*                     console.log("Producto añadido con el usuario registrado");
           */ localStorage.setItem("UserCarrito", JSON.stringify(carrito));
          try {
            const ref = doc(
              db,
              "users",
              currentUser.uid,
              "carrito",
              "carritoActual"
            );
            const snapshot = await getDoc(ref);

            if (!snapshot.exists()) {
              await setDoc(ref, { items: carrito });
            } else {
              await updateDoc(ref, { items: carrito });
            }
          } catch (error) {
            console.error("Error al actualizar carrito en a Firebase", error);
          }
        }
      }
    }
    actualizarCarrito();
  }, [carrito]);

  async function añadirCarrito(producto, tallaSeleccionada) {
    if (producto.tallas && !tallaSeleccionada) {
      alert("Selecciona una talla.");
      return;
    }

    const productoEnCarrito = carrito?.find(
      (prod) =>
        prod.id === producto.id &&
        prod.tallaSeleccionada === tallaSeleccionada
    );

    const stockDisponible = producto.tallas ? producto.tallas[tallaSeleccionada].stock : 10;
    const cantidadEnCarrito = productoEnCarrito?.cantidad ?? 0;

    if (cantidadEnCarrito >= stockDisponible) {
      alert("No hay suficiente stock para esta talla");
      return;
    }

    const productoCarrito = { ...producto, tallaSeleccionada, cantidad: 1 };
    const productoExistente = carrito?.find(
      (prod) =>
        prod.id === productoCarrito.id &&
        (prod?.tallaSeleccionada ?? null) ===
        (productoCarrito?.tallaSeleccionada ?? null)
    );
    let nuevoCarrito;

    if (productoExistente) {
      nuevoCarrito = carrito.map((prod) =>
        prod.id === productoExistente.id &&
          (prod?.tallaSeleccionada ?? null) ===
          (productoExistente?.tallaSeleccionada ?? null)
          ? { ...prod, cantidad: prod.cantidad + 1 }
          : prod
      );
    } else {
      nuevoCarrito = [...carrito, productoCarrito];
    }

    setCarrito(nuevoCarrito);
    setUltimoProducto(productoCarrito);
  }

  async function vaciarCarrito() {
    try {
      const ref = doc(db, "users", currentUser.uid, "carrito", "carritoActual");
      const snapshot = await getDoc(ref);

      if (snapshot.exists()) {
        await deleteDoc(ref);
      }
    } catch (error) {
      console.error("Error al vaciar el carrito", error);
    }
    localStorage.clear();
    setCarrito([]);
  }

  async function borrarItemCarrito(id, tallaSeleccionada) {
    const nuevoCarrito = carrito?.filter(
      (prod) =>
        prod.id !== id ||
        (prod?.tallaSeleccionada ?? null) !==
        (tallaSeleccionada ?? null)
    );


    setCarrito(nuevoCarrito);
    localStorage.setItem("UserCarrito", JSON.stringify(nuevoCarrito));
  }

  async function restarCantidad(id, tallaSeleccionada, currentUser) {
    const productoExistente = carrito?.find(
      (prod) =>
        prod.id === id &&
        (prod?.tallaSeleccionada ?? null) ===
        (tallaSeleccionada ?? null)
    );
    let nuevoCarrito;

    if (productoExistente && productoExistente.cantidad === 1) {
      borrarItemCarrito(id, tallaSeleccionada);
    }

    if (productoExistente && productoExistente.cantidad > 1) {
      nuevoCarrito = carrito.map((prod) =>
        prod.id === productoExistente.id &&
          (prod?.tallaSeleccionada ?? null) ===
          (productoExistente?.tallaSeleccionada ?? null)
          ? { ...prod, cantidad: prod.cantidad > 1 ? prod.cantidad - 1 : prod.cantidad }
          : prod
      );

      if (currentUser) {
        try {
          const ref = doc(db, "users", currentUser.uid, "carrito", "carritoActual");
          const snapshot = await getDoc(ref);

          if (snapshot.exists()) {
            await updateDoc(ref, { items: nuevoCarrito });
          }
        } catch (error) {
          console.error("Error al vaciar el carrito", error);
        }
      }

      setCarrito(nuevoCarrito);
      localStorage.setItem("UserCarrito", JSON.stringify(nuevoCarrito))
    }
  }

  async function sumarCantidad(id, tallaSeleccionada, currentUser) {
    const productoExistente = carrito?.find(
      (prod) =>
        prod.id === id &&
        (prod?.tallaSeleccionada ?? null) ===
        (tallaSeleccionada ?? null)
    );
    let nuevoCarrito;

    if (productoExistente) {
      const talla = productoExistente.tallaSeleccionada;
      const stockMaximo = productoExistente.tallas[talla]?.stock ?? 0;
      nuevoCarrito = carrito.map((prod) =>
        prod.id === productoExistente.id &&
          (prod?.tallaSeleccionada ?? null) ===
          (productoExistente?.tallaSeleccionada ?? null)
          ? { ...prod, cantidad: prod.cantidad < stockMaximo ? prod.cantidad + 1 : prod.cantidad }
          : prod
      );
      if (currentUser) {
        try {
          const ref = doc(db, "users", currentUser.uid, "carrito", "carritoActual");
          const snapshot = await getDoc(ref);

          if (snapshot.exists()) {
            await updateDoc(ref, { items: nuevoCarrito });
          }
        } catch (error) {
          console.error("Error al vaciar el carrito", error);
        }
      }

      setCarrito(nuevoCarrito);
      localStorage.setItem("UserCarrito", JSON.stringify(nuevoCarrito))
    }

  }

  const ctxValue = {
    carrito,
    añadirCarrito,
    vaciarCarrito,
    borrarItemCarrito,
    restarCantidad,
    sumarCantidad,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
