import { createContext, useState, useEffect } from "react";

import { useContext } from "react";
import { UserContext } from "./ContextUser"

import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

const CartContext = createContext({
    productos: null,
    setProductos: () => null,
});

function CartContextProvider({ children }) {
    const [carrito, setCarrito] = useState(null);

    const currentUser = useContext(UserContext);

    useEffect(() => {

        const carritoLocalStorage = JSON.parse(localStorage.getItem("UserCarrito")) || [];
        if (!currentUser) {
            setCarrito(carritoLocalStorage || []);
        }
        else {

            
            if (carritoLocalStorage.length !== 0) {
                // Merge

                setCarrito(carritoLocalStorage);
            } else {
                try {
                    const ref = doc(db, "users", currentUser.uid, "carrito");
                    const snapshot = onSnapshot(ref);

                    if (snapshot.exists()) {
                        setCarrito(snapshot.data().items || []);
                    } else {
                        setCarrito([]);
                    }
                } catch (error) {
                    console.error("Error al acceder a FIrebase", error);
                }
            }

        }
    }, [currentUser])



    async function añadirCarrito(producto, tallaSeleccionada) {
        const nuevoCarrito = [...carrito, publicProduct];
        setCarrito(nuevoCarrito);

        if (!currentUser) {
            localStorage.setItem("UserCarrito", JSON.stringify(nuevoCarrito));
        }
        else {
            const ref = doc(db, "users", currentUser.uid, "carrito");
            const snapshot = onSnapshot(ref);

            if (!snapshot.exists()) {
                await setDoc(ref, { items: [publicProduct] })
            } else {
                await updateDoc(ref, { items: nuevoCarrito });
            }
        }
    }

    const ctxValue = {
        carrito,
        añadirCarrito,
    }

    return (
        <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
    )
}


export { CartContext, CartContextProvider };