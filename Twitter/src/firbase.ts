import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_NGkk578lpnsMbuhMZozo7e0bh9yrf8A",
  authDomain: "twitter-reloaded-b757d.firebaseapp.com",
  projectId: "twitter-reloaded-b757d",
  storageBucket: "twitter-reloaded-b757d.firebasestorage.app",
  messagingSenderId: "966955816705",
  appId: "1:966955816705:web:326d697730913ca8d1ad00",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
