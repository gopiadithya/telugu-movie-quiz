import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const signupForm = document.querySelector('.login-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = signupForm.username.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;
    // NEW: Get the selected gender
    const gender = signupForm.gender.value;

    // NEW: Determine avatar URL based on gender
    const avatarUrl = gender === 'female' ? 'photos/female_avatar.png' : 'photos/male_avatar.png';

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Create a document in the 'users' collection with the avatar
        await setDoc(doc(db, "users", user.uid), {
            username: username,
            email: email,
            highScore: 0,
            avatar: avatarUrl // NEW: Save the avatar URL
        });

        console.log("Account created and user profile saved!");
        window.location.href = 'heros.html';

    } catch (error) {
        console.error("Signup failed:", error.message);
        alert(`Signup failed: ${error.message}`);
    }
});
