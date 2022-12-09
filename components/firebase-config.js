import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCmmjurdBPzfUbHRK-DWQuugfLanC_SO6o",
  authDomain: "chow-d2355.firebaseapp.com",
  databaseURL: "https://chow-d2355-default-rtdb.firebaseio.com",
  projectId: "chow-d2355",
  storageBucket: "chow-d2355.appspot.com",
  messagingSenderId: "198229983686",
  appId: "1:198229983686:web:78a01555cbce0cd40032c7",
  measurementId: "G-LQE87NLBYJ",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
