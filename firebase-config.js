// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// --- NEW --- Import Storage SDK
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANnVJfKmCUI1_-RAU9s7nULtb13BcsW9M",
  authDomain: "telugu-movie-quiz-1f349.firebaseapp.com",
  projectId: "telugu-movie-quiz-1f349",
  storageBucket: "telugu-movie-quiz-1f349.firebasestorage.app",
  messagingSenderId: "641114101092",
  appId: "1:641114101092:web:351ae912b25b6e48fe1671",
  measurementId: "G-B29P8LRRJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
// --- NEW --- Initialize Firebase Storage and export it
export const storage = getStorage(app);


// --- Page Protection ---
// This function checks if a user is logged in. If not, it redirects them to the login page.
export function protectPage() {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            // No user is signed in.
            console.log("No user signed in. Redirecting to login page.");
            // Redirect to index.html if not already there
            if (window.location.pathname !== '/index.html' && window.location.pathname !== '/signup.html') {
                window.location.href = 'index.html';
            }
        }
    });
}