import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import  articulos  from "../data/articulos";

export const uploadProducts = async () => {
    try {
        const productsRef = collection(db, "articulos");

        for (const prod of articulos) {
            const docRef = doc(productsRef, `art ${String(prod.id)}`);
            await setDoc(docRef, prod);
        }
    } catch (error) {
        console.error("Error al subir productos", error);
    }
}