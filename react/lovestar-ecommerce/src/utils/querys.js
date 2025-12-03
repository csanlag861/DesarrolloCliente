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

export const getPedidosByUser = async (userUID) => {
    const ref = doc(db, "users", userUID, "pedidos", "pedidosUsuario");
    const snapshot = await getDoc(ref);

    let pedidosUsuario = [];

    if(snapshot.exists()){
        pedidosUsuario.push(await snapshot.data().pedido);
    }
    
    return pedidosUsuario.flat();
}