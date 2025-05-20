import firebase from "firebase/compat/app";
//The ff. is used to get authentication service from the firebase
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfci7Z23vmdgouaJ8rgaIQf-GtNeNbXF4",
  authDomain: "clone-3dd35.firebaseapp.com",
  projectId: "clone-3dd35",
  storageBucket: "clone-3dd35.firebasestorage.app",
  messagingSenderId: "446527022418",
  appId: "1:446527022418:web:399ed7658ea306373c468b",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app); //to use it for others we export it.
export const db = app.firestore(); //export this to orders.jsx
