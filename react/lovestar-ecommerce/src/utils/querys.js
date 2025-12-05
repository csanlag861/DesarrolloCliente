import { collection, doc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
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

    if (snapshot.exists()) {
        pedidosUsuario.push(await snapshot.data().pedido);
    }

    return pedidosUsuario.flat();
}

export const getAllUsers = async () => {
    const ref = await getDocs(collection(db, "users"));
    const usuarios = ref.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    return usuarios;
}

export const getAllProducts = async () => {
    const ref = await getDocs(collection(db, "products"));
    const productos = ref.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    return productos;
}

export const updateUserName = async (uid, displayName) => {
    try {
        const ref = doc(db, "users", uid);
        const snapshot = await getDoc(ref);

        if (!snapshot.exists()) return;

        const data = snapshot.data();

        const atributo = data?.displayName ? "displayName" : "username";

        await updateDoc(doc(db, "users", uid), {
            [atributo]: displayName
        })
    } catch (error) {
        console.error("Error a la hora de actualizar el nombre del usuario", error)
    }
}

export const updateUserRole = async (uid, rol) => {
    try {
        await updateDoc(doc(db, "users", uid), {
            rol: rol
        });
    } catch (error) {
        console.error("Error al actualizar el rol del usuario", error)
    }
};


export const deleteUser = async (uid) => {
    try {
        await deleteDoc(doc(db, "users", uid));
    } catch (error) {
        console.error("Error al eliminar el usaurio", error)
    }
}