// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD35pISj5C_arjtn2Tm5WZFmnSur0bOI6k",
  authDomain: "realtor-clone-project-aa4f9.firebaseapp.com",
  projectId: "realtor-clone-project-aa4f9",
  storageBucket: "realtor-clone-project-aa4f9.appspot.com",
  messagingSenderId: "855417100918",
  appId: "1:855417100918:web:9da23e5a376bb205481d57"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();