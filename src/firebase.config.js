import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASBORqzHmCmJoB2fnOC6NWL5IH5k7gpjo",
  authDomain: "house-marketplace-app-a03d8.firebaseapp.com",
  projectId: "house-marketplace-app-a03d8",
  storageBucket: "house-marketplace-app-a03d8.appspot.com",
  messagingSenderId: "942939951362",
  appId: "1:942939951362:web:ef32ae0f3ccc7ef96cb21b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();