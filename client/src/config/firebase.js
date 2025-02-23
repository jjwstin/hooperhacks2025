// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyxw6OOpu0RynsnywT2YGvzrCPvSMuN0A",
    authDomain: "hooperhacks2025.firebaseapp.com",
    projectId: "hooperhacks2025",
    storageBucket: "hooperhacks2025.firebasestorage.app",
    messagingSenderId: "886577083535",
    appId: "1:886577083535:web:6d555e26db78e404d7acfa",
    measurementId: "G-PTQYJV7KJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (if needed)
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { app, analytics, db };
