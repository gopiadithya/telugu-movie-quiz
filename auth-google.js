import { auth, db } from './firebase-config.js';
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const googleLoginButton = document.getElementById('google-login-button');

googleLoginButton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Check if the user already exists in Firestore
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
            // User is new, create a document for them in Firestore
            console.log("New user detected. Creating profile in Firestore.");
            await setDoc(userDocRef, {
                username: user.displayName, // Use their Google display name
                email: user.email,
                highScore: 0 // Initialize high score
            });
        } else {
            console.log("Existing user logged in.");
        }

        // Redirect to the hero selection page
        window.location.href = 'heros.html';

    } catch (error) {
        console.error("Google login failed:", error);
        // Handle specific errors, like popup closed by user
        if (error.code === 'auth/popup-closed-by-user') {
            alert('The sign-in window was closed before completing. Please try again.');
        } else {
            alert(`An error occurred during Google sign-in: ${error.message}`);
        }
    }
});
