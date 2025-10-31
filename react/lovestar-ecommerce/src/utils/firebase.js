import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAHGbi5Tv95LkAFN1bsOV3PiRIDcAQbvrI",
    authDomain: "lovestar-ecommerce.firebaseapp.com",
    projectId: "lovestar-ecommerce",
    storageBucket: "lovestar-ecommerce.firebasestorage.app",
    messagingSenderId: "360171213211",
    appId: "1:360171213211:web:96cfa3fb33ec701682d13e",
    measurementId: "G-YGVKVS892C"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();
/* patrón singleton // instancia singleton que se usan durante todo el ciclo de vida */
export const db = getFirestore();

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
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};

export const signOutUser = async () => await signOut(auth);