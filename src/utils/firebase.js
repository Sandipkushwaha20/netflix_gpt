// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8EHwFqkNDslCPx9IZcpY5gdDvQtHFgZk",
  authDomain: "netflixgpt-7ea05.firebaseapp.com",
  projectId: "netflixgpt-7ea05",
  storageBucket: "netflixgpt-7ea05.appspot.com",
  messagingSenderId: "726227734301",
  appId: "1:726227734301:web:efe111b5521ee1b56a1bf4",
  measurementId: "G-N93K8X4837"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);