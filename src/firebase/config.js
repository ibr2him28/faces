// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4f828S77ZhDSo_Bz9HbPVcUjtbUb7peY",
  authDomain: "faces-5cf26.firebaseapp.com",
  projectId: "faces-5cf26",
  storageBucket: "faces-5cf26.appspot.com",
  messagingSenderId: "381986892028",
  appId: "1:381986892028:web:94f4adb965834e7ae5cf79",
  measurementId: "G-YX0DD4E84X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default db
