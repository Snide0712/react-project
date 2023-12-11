import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCL9RNEfHYD1gI4QiR3clxY9kfsinWodJo",
  authDomain: "react-7bf87.firebaseapp.com",
  projectId: "react-7bf87",
  storageBucket: "react-7bf87.appspot.com",
  messagingSenderId: "799162160249",
  appId: "1:799162160249:web:96ffaeaeda5b34f832b0a8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;
