
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeqyk4fGqe9Fb0NJ7kcT52v8uePEIZY1w",
    authDomain: "cs5709assignment.firebaseapp.com",
    projectId: "cs5709assignment",
    storageBucket: "cs5709assignment.firebasestorage.app",
    messagingSenderId: "537457801604",
    appId: "1:537457801604:web:05b6a9b04709c4239785d1"
};



const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);