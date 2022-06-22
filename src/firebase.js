import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBcU6lz5AQSGWQkEizigh31Y_a0hqcridQ",
  authDomain: "fir-crud-9117e.firebaseapp.com",
  projectId: "fir-crud-9117e",
  storageBucket: "fir-crud-9117e.appspot.com",
  messagingSenderId: "434452768130",
  appId: "1:434452768130:web:3825190a7f2504b2b41b9b",
  measurementId: "G-YDB5R0B4C0",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
