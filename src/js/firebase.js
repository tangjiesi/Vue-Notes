import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8SQlwXm_Xadb0yJIz_6hVcXdUuq1PkGo",
  authDomain: "noteballs-3e8e0.firebaseapp.com",
  projectId: "noteballs-3e8e0",
  storageBucket: "noteballs-3e8e0.firebasestorage.app",
  messagingSenderId: "233523351116",
  appId: "1:233523351116:web:82d50d96e2ae8d00d6eee9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
