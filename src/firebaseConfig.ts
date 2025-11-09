
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-53KgZ4MiVGNz7uaKUtDtW9nCeWSc430",
    authDomain: "cs5709-88d76.firebaseapp.com",
    projectId: "cs5709-88d76",
    storageBucket: "cs5709-88d76.firebasestorage.app",
    messagingSenderId: "994828033375",
    appId: "1:994828033375:web:e8e886fd24daaa95f86aea",
    measurementId: "G-G897WS6170"
};



const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);