import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNVqkdGkj-t2wSgVSoysGRtMWOB4jrbSA",
  authDomain: "sneaker-react-coderhouse.firebaseapp.com",
  projectId: "sneaker-react-coderhouse",
  storageBucket: "sneaker-react-coderhouse.appspot.com",
  messagingSenderId: "734125612597",
  appId: "1:734125612597:web:5505762f57027e2aa45b7c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
