import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlN9MhlUOos1xfNAfAsLDzSUCOZzA_rRk",
  authDomain: "cateringdatabase.firebaseapp.com",
  projectId: "cateringdatabase",
  storageBucket: "cateringdatabase.appspot.com",
  messagingSenderId: "719336408687",
  appId: "1:719336408687:web:54cefdb9af16c6ee15ef9a",
  measurementId: "G-L9GDB47S3E"
};

export const app = initializeApp(firebaseConfig);