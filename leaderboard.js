import { db } from './firebase-config.js';
import { collection, query, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', async () => {
    const leaderboardList = document.getElementById('leaderboard-list');

    try {
        // 1. Create a query to get users
        const usersRef = collection(db, 'users');
        const q = query(usersRef, orderBy('highScore', 'desc'), limit(20)); // Get top 20 users

        // 2. Execute the query
        const querySnapshot = await getDocs(q);

        // Clear the "Loading..." message
        leaderboardList.innerHTML = '';

        if (querySnapshot.empty) {
            leaderboardList.innerHTML = '<p class="loading-text">No players on the leaderboard yet!</p>';
            return;
        }

        // 3. Loop through the results and display them
        let rank = 1;
        querySnapshot.forEach((doc) => {
            const user = doc.data();
            const score = user.highScore || 0;

            const entry = document.createElement('div');
            entry.className = 'leaderboard-entry';
            // Add a special class for the top 3
            if (rank === 1) entry.classList.add('gold');
            if (rank === 2) entry.classList.add('silver');
            if (rank === 3) entry.classList.add('bronze');

            entry.innerHTML = `
                <span class="rank">${rank}</span>
                <span class="player">
                    <img src="${user.avatarUrl || 'photos/profile.jpg'}" alt="avatar" class="player-avatar">
                    ${user.username}
                </span>
                <span class="score">${score}</span>
            `;

            leaderboardList.appendChild(entry);
            rank++;
        });

    } catch (error) {
        console.error("Error fetching leaderboard:", error);
        leaderboardList.innerHTML = '<p class="loading-text">Could not load leaderboard. See console for details.</p>';
        // The console will likely show an error about needing an index.
    }
});