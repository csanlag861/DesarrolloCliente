import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import  productos  from "../data/productos";

export const uploadProducts = async () => {
    try {
        const productsRef = collection(db, "products");

        for (const prod of productos) {
            await addDoc(productsRef, prod);
        }
    } catch (error) {
        console.error("Error al subir productos", error);
    }
}
