// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpsJThwx9qlXORfa3lRqGEYhAnkl7e6Lo",
  authDomain: "safetouchcare-df016.firebaseapp.com",
  projectId: "safetouchcare-df016",
  storageBucket: "safetouchcare-df016.appspot.com",
  messagingSenderId: "552656616601",
  appId: "1:552656616601:web:d2f9f8b9064d84a37d0c08",
  measurementId: "G-LH4H54X2GY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "gs://safetouchcare-df016.appspot.com");
const db = getFirestore(app);
export { db, storage };