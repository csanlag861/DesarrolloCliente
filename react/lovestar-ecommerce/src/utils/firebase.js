import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { supabase } from "./supabaseClient";

const firebaseConfig = {
  apiKey: "AIzaSyAHGbi5Tv95LkAFN1bsOV3PiRIDcAQbvrI",
  authDomain: "lovestar-ecommerce.firebaseapp.com",
  projectId: "lovestar-ecommerce",
  storageBucket: "lovestar-ecommerce.firebasestorage.app",
  messagingSenderId: "360171213211",
  appId: "1:360171213211:web:96cfa3fb33ec701682d13e",
  measurementId: "G-YGVKVS892C",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();
/* patrón singleton // instancia singleton que se usan durante todo el ciclo de vida */
export const db = getFirestore(firebaseApp);

const BUCKET = "Products";

/* conexion a google */
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  try {
    if (!email || !password) return;
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = response.user;

    const userData = await getUser(user.uid);
    return userData;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};

export const getUser = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, "users", uid));

    if (userDoc.exists()) {
      const userData = userDoc.data();
      return userData;
    }
  } catch (error) {
    console.error(error);
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        rol: "user",
        descuento: true,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

   const userDoc = await getUser(userAuth.uid);

  console.log("userDoc", userDoc);
    return userDoc;
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export async function uploadProductImage(file, folder = "") {
  const filePath = `${folder ? folder + "/" : ""}${Date.now()}-${file.name}`;

  const { data, error: uploadError } = await supabase.storage
    .from(BUCKET)
    .upload(filePath, file, { cacheControl: "3600", upsert: false });

  if (uploadError) throw uploadError;
  if (!data || !data.path)
    throw new Error("No se obtuvo la ruta del archivo subido.");

  const { data: publicData } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(data.path);
  return publicData.publicUrl;
}

export const aplicarDescuento = async (userID) => {
  try {
    const ref = doc(db, "users", userID);

    await updateDoc(ref, {
      descuento: false,
    });
  } catch (error) {
    console.error("Error al aplicar descuento", error);
  }
};

export const crearDescuento = async (userID) => {
  try {
    const ref = doc(db, "users", userID);

    await updateDoc(ref, {
      descuentoDialog: true,
    });
  } catch (error) {
    console.error("Error al aplicar descuento", error);
  }
};

export const registrarMiembro = async ({
  email,
  password,
  username,
  additionalData = {},
}) => {
  try {
    // 1️⃣ Creamos el usuario en Firebase Auth
    const userCredential = await createAuthUserWithEmailAndPassword(
      email,
      password
    );
    const userAuth = userCredential.user;

    // 2️⃣ Creamos el documento en Firestore con rol "miembro"
    const userDocRef = await createUserDocumentFromAuth(userAuth, {
      displayName: username,
      rol: "miembro",
      ...additionalData, // otros campos que quieras añadir
    });

    return userDocRef; // devuelves la referencia al documento
  } catch (error) {
    console.error("Error registrando usuario miembro:", error);
    throw error;
  }
};

export const actualizarMiembro = async (uid, additionalData = {}) => {
  try {
    const userRef = doc(db, "users", uid);

    await updateDoc(userRef, {
      rol: "miembro",
      ...additionalData, // otros campos que quieras actualizar
    });

  } catch (error) {
    console.error("Error actualizando rol a miembro:", error);
    throw error;
  }
};
