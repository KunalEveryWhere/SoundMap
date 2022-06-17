import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCyim_pHKW-PR3r4_q4i8XATzUYSP1b4ls",
  authDomain: "soundmap-a35e2.firebaseapp.com",
  databaseURL: "https://soundmap-a35e2-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "soundmap-a35e2",
  storageBucket: "soundmap-a35e2.appspot.com",
  messagingSenderId: "1039963990044",
  appId: "1:1039963990044:web:a33770670eb8193fd6d7d9",
  measurementId: "G-HDC3E9QW8P"
  };
  

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);