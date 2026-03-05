
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAru7AcCgrzbO84HZl3HOrBNp1dyfcmZM",
  authDomain: "global-trade-hab.firebaseapp.com",
  projectId: "global-trade-hab",
  storageBucket: "global-trade-hab.firebasestorage.app",
  messagingSenderId: "1060533692264",
  appId: "1:1060533692264:web:be4acd89a3399fbd4998dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);