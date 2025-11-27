import { createContext, useState, useEffect } from "react";

import { useContext } from "react";
import { UserContext } from "./ContextUser"

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
            const carritoLocalStorage = JSON.parse(localStorage.getItem("UserCarrito")) || [];
            // Si no tengo usuario:
            if (currentUser === null) {
                setCarrito(carritoLocalStorage || []);
            }
            else {
                // Si tengo usuario, y tengo cosas en el local storage:
/*                 console.log("PRueba de que entra en el else del usuario");
 */                if (carritoLocalStorage.length !== 0) {
                    const hasMerge = JSON.parse(localStorage.getItem("Merge"));
                    // SI el usuario aún no ha hecho el merge
                    if (!hasMerge) {
                        try {
                            const ref = doc(db, "users", currentUser.uid, "carrito", "carritoActual");
                            const snapshot = await getDoc(ref);
                            // Si no existe la coleccion
                            if (!snapshot.exists()) {
                                console.log("Crear carrito en Firebase");
                                await setDoc(ref, { items: carritoLocalStorage });
                            } else {
                                await updateDoc(ref, { items: carritoLocalStorage });

                            }
                        } catch (error) {
                            console.error("Error al hacer el merge");
                        }

                        localStorage.setItem("Merge", true);
                    } else {
                        // Si el usuario ha hecho el merge: 
/*                         console.log("HAY MERGE");
 */                        try {
                            const ref = doc(db, "users", currentUser.uid, "carrito", "carritoActual");
                            const snapshot = await getDoc(ref);
                            // Si existe la coleccion
                            if (snapshot.exists()) {
/*                                 console.log("Actualizar carrito FIrebase cuando recargo");
 */                                await updateDoc(ref, { items: carrito });
                            }
                        } catch (error) {
                            console.error("Error al hacer el merge");
                        }
                    }


                } else {
                    // Si el usuario no tiene cosas en el local storage:
                    /*                     console.log("PRueba de que entra en el else del usuario y no tiene cosas en local storage");
                     */
                    try {
                        const ref = doc(db, "users", currentUser.uid, "carrito", "carritoActual");
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
    }, [currentUser])

    useEffect(() => {
        async function actualizarCarrito() {
            if (ultimoProducto !== null) {
                /*                 console.log("Esto no debería de salir porque no tenemos un Último Producto. Sólo sale cuando se actualice el estado del carrito")
                 */
                if (currentUser === null) {
/*                     console.log("Producto añadido");
 */                    localStorage.setItem("UserCarrito", JSON.stringify(carrito));
                }
                else {
/*                     console.log("Producto añadido con el usuario registrado");
 */                    localStorage.setItem("UserCarrito", JSON.stringify(carrito));
                    try {
                        const ref = doc(db, "users", currentUser.uid, "carrito", "carritoActual");
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
    }, [carrito])



    async function añadirCarrito(producto, tallaSeleccionada) {
        const productoCarrito = { ...producto, tallaSeleccionada, cantidad: 1 };
        const productoExistente = carrito?.find(prod => prod.id === productoCarrito.id && (prod?.tallaSeleccionada ?? null) === (productoCarrito?.tallaSeleccionada ?? null));
        let nuevoCarrito;

        if (productoExistente) {
            nuevoCarrito = carrito.map(prod => prod.id === productoExistente.id && (prod?.tallaSeleccionada ?? null) === (productoExistente?.tallaSeleccionada ?? null) ? { ...prod, cantidad: prod.cantidad + 1 } : prod);
/*             console.log(nuevoCarrito);
 */        } else {
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
            
        }
        localStorage.clear();
        setCarrito([]);
    }

    const ctxValue = {
        carrito,
        añadirCarrito,
        vaciarCarrito,
    }

    return (
        <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
    )
}


export { CartContext, CartContextProvider };
