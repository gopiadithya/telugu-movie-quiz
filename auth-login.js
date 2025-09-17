import { auth, db } from './firebase-config.js';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const forgotPasswordLink = document.getElementById('forgot-password-link'); // Get the link

    // --- Existing Login Form Logic ---
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = loginForm.email.value;
        const password = loginForm.password.value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User logged in successfully:", user);
            window.location.href = 'heros.html';
        } catch (error) {
            console.error("Login failed:", error);
            alert(`Login failed: ${error.message}`);
        }
    });

    // --- NEW: Forgot Password Logic ---
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the link from navigating

        const email = prompt("Please enter your email address to reset your password:");

        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    // Password reset email sent!
                    alert("Password reset email sent! Please check your inbox (and spam folder).");
                })
                .catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Password reset error:", errorCode, errorMessage);
                    if (errorCode === 'auth/user-not-found') {
                        alert("Error: No account found with that email address.");
                    } else {
                        alert(`Error: ${errorMessage}`);
                    }
                });
        }
    });
});