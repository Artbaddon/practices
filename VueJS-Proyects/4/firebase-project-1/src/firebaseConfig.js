// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkyy8ONDbxfLJppiO_8DLODDc-2u5Rw1U",
  authDomain: "fir-vue3-practice.firebaseapp.com",
  projectId: "fir-vue3-practice",
  storageBucket: "fir-vue3-practice.appspot.com",
  messagingSenderId: "634058091261",
  appId: "1:634058091261:web:1e447bd4818972bc666c94",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
export { auth };
