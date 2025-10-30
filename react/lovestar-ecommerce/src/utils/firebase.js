import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

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