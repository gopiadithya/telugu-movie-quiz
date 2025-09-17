import { auth, db, storage, protectPage } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

protectPage();

document.addEventListener('DOMContentLoaded', () => {
    const profileUsername = document.getElementById('profile-username');
    const userEmail = document.querySelector('.user-email');
    const highScoreDisplay = document.getElementById('high-score-display');
    const logoutButton = document.getElementById('logout-button');
    const profileAvatar = document.getElementById('profile-avatar');
    const avatarUploadInput = document.getElementById('avatar-upload');

    let currentUser = null;

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            currentUser = user;
            const userDocRef = doc(db, "users", user.uid);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                profileUsername.textContent = userData.username;
                userEmail.textContent = userData.email;
                highScoreDisplay.textContent = userData.highScore || 0;
                profileAvatar.src = userData.avatarUrl || 'photos/profile.jpg';
            } else {
                console.error("User document not found in Firestore!");
                profileUsername.textContent = "User Not Found";
                 userEmail.textContent = "Please sign up again.";
            }
        }
    });

    avatarUploadInput.addEventListener('change', async (event) => {
        const file = event.target.files[0];
        if (!file || !currentUser) return;
        
        const storageRef = ref(storage, `avatars/${currentUser.uid}/${file.name}`);

        try {
            const snapshot = await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(snapshot.ref);

            const userDocRef = doc(db, "users", currentUser.uid);
            await updateDoc(userDocRef, {
                avatarUrl: downloadURL
            });

            profileAvatar.src = downloadURL;

        } catch (error) {
            console.error("Avatar upload failed:", error);
            alert("Failed to upload profile picture.");
        }
    });

    logoutButton.addEventListener('click', async () => {
        try {
            await signOut(auth);
            sessionStorage.removeItem('movieGuessCurrentScore');
            window.location.href = 'index.html';
        } catch (error) {
            console.error("Logout failed:", error);
            alert("Failed to log out. Please try again.");
        }
    });
});