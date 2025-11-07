import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import  productos  from "../data/productos";

export const uploadProducts = async () => {
    try {
        const productsRef = collection(db, "products");

        for (const prod of productos) {
            const docRef = doc(productsRef, `prod ${String(prod.id)}`);
            await setDoc(docRef, prod);
        }
    } catch (error) {
        console.error("Error al subir productos", error);
    }
}