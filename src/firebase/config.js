// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhJ0s-wU2pDBXPAoOSg6A36IiT0WCWfsw",
  authDomain: "miniblog-cc8af.firebaseapp.com",
  projectId: "miniblog-cc8af",
  storageBucket: "miniblog-cc8af.appspot.com",
  messagingSenderId: "262724474344",
  appId: "1:262724474344:web:85ff0339285f5daab9c05d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};