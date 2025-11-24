import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase.js"; // tu instancia


export const getAllProductoByID = async (productId) => {
    const ref = doc(db, "products", `prod ${productId}`);
    const snapshot = await getDoc(ref);

    if (!snapshot.exists()) {
        throw new Error("Producto no encontrado");
    }

    return { id: snapshot.id, ...snapshot.data() };
}