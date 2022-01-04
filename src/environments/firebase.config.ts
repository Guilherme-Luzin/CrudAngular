// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgBmaTcDwUdm8DlbK3Wa432Ipu7uu6wh0",
  authDomain: "crudclienteangular.firebaseapp.com",
  projectId: "crudclienteangular",
  storageBucket: "crudclienteangular.appspot.com",
  messagingSenderId: "945405551770",
  appId: "1:945405551770:web:baf71f7314ee56a8c8eb23",
  measurementId: "G-LXJMRCZQ08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);