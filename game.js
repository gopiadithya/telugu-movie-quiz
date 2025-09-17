import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.playRandomHero = function() {
    const heroKeys = Object.keys(heroesData);
    const randomHero = heroKeys[Math.floor(Math.random() * heroKeys.length)];
    window.location.href = `game.html?hero=${encodeURIComponent(randomHero)}`;
};

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DEFINE ALL ELEMENTS AND VARIABLES ---
    const audioPlayer = document.getElementById("game-audio");
    const heroTitle = document.getElementById("hero-title");
    const guessInput = document.getElementById("guess-input");
    const hintText = document.getElementById("hint-text");
    const resultMessage = document.getElementById("result-message");
    const timerElement = document.getElementById("timer");
    const musicAnimationContainer = document.getElementById("music-animation-container");
    const currentScoreElement = document.getElementById('current-score');
    const highScoreElement = document.getElementById('high-score');
    const buttonsContainer = document.getElementById("buttons-container");
    const successOverlay = document.getElementById('success-overlay');
    const playRandomHeroButton = document.getElementById('play-random-hero-button');
    const selectAnotherHeroButton = document.getElementById('select-another-hero-button');
    
    let currentScore = parseInt(sessionStorage.getItem('movieGuessCurrentScore')) || 0;
    const params = new URLSearchParams(window.location.search);
    const heroName = params.get("hero");
    const heroData = heroesData[heroName];
    const songsForHero = heroData ? heroData.songs : [];
    let currentSong = songsForHero.length > 0 ? songsForHero[Math.floor(Math.random() * songsForHero.length)] : null;
    let timeLeft, timerInterval, initialTimeLeft;
    let currentUser = null;

    // --- 2. DEFINE ALL GAME FUNCTIONS ---
    
    function startRound(song) {
        if (!song) {
            heroTitle.innerText = "❌ No songs available for this hero.";
            return;
        }

        guessInput.value = '';
        hintText.innerText = '';
        resultMessage.innerText = '';
        heroTitle.innerText = `Guess ${heroName}'s Movie!`;
        guessInput.disabled = false;
        buttonsContainer.querySelector('#guess-button').disabled = false;
        timerElement.textContent = '...';
        musicAnimationContainer.classList.remove('playing');

        audioPlayer.src = song.file;
    }

    async function updateScore(points) {
        currentScore += points;
        sessionStorage.setItem('movieGuessCurrentScore', currentScore);
        currentScoreElement.textContent = currentScore;

        if (!currentUser) return;
        try {
            const userDocRef = doc(db, "users", currentUser.uid);
            const userDocSnap = await getDoc(userDocRef);
            if (userDocSnap.exists()) {
                const userHighScore = userDocSnap.data().highScore || 0;
                if (currentScore > userHighScore) {
                    await updateDoc(userDocRef, { highScore: currentScore });
                    highScoreElement.textContent = currentScore;
                }
            }
        } catch (error) {
            console.error("Error updating high score:", error);
        }
    }

    function checkGuess() {
        if (!currentSong) return;
        const normalizedGuess = guessInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (normalizedGuess === "") return;
        const normalizedAnswer = currentSong.answer.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        if (normalizedGuess === normalizedAnswer) {
            const points = Math.round((timeLeft / initialTimeLeft) * 100);
            updateScore(points);
            audioPlayer.pause();
            musicAnimationContainer.classList.remove('playing');
            clearInterval(timerInterval);
            resultMessage.innerText = "";
            showSuccessScreen();
        } else {
            audioPlayer.pause();
            musicAnimationContainer.classList.remove('playing');
            clearInterval(timerInterval);
            showRoundFailedScreen(currentSong.answer);
        }
    }

    async function initializeGame(user) {
        currentUser = user;
        currentScoreElement.textContent = currentScore;
        if (user) {
            const userDocRef = doc(db, "users", user.uid);
            const userDocSnap = await getDoc(userDocRef);
            highScoreElement.textContent = userDocSnap.exists() ? (userDocSnap.data().highScore || 0) : 0;
        } else {
            highScoreElement.textContent = '0';
        }
        
        startRound(currentSong);
    }
    
    function startTimer() {
        timerElement.textContent = timeLeft;
        clearInterval(timerInterval);
        timerElement.classList.remove('danger');

        timerInterval = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;
            if (timeLeft <= 5) {
                timerElement.classList.add('danger');
            }
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                audioPlayer.pause();
                musicAnimationContainer.classList.remove('playing');
                showTimesUpScreen(currentSong.answer);
            }
        }, 1000);
    }

    function showSuccessScreen() {
        document.querySelector('.game-container').style.display = 'none';
        successOverlay.classList.add('visible');
    }
    
    function showRoundFailedScreen(correctAnswer) {
        document.querySelector('.game-container').style.display = 'none';
        const overlay = document.createElement('div');
        overlay.className = 'success-overlay';
        overlay.innerHTML = `
            <div class="success-content">
                <h1 style="font-size: 3rem; margin-bottom: 1rem;">Incorrect!</h1>
                <p style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 2rem;">The correct answer was: ${correctAnswer}</p>
                <div class="button-group">
                    <button onclick="playRandomHero()" class="action-button play-random-hero">⚡ Play Random Hero</button>
                    <a href="heros.html" class="action-button select-another-hero">⬅️ Select Another Hero</a>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        setTimeout(() => overlay.classList.add('visible'), 10);
    }

    function showTimesUpScreen(correctAnswer) {
        document.querySelector('.game-container').style.display = 'none';
        sessionStorage.setItem('movieGuessCurrentScore', '0');
        currentScore = 0;

        const overlay = document.createElement('div');
        overlay.className = 'success-overlay';
        overlay.innerHTML = `
            <div class="success-content">
                <h1 style="font-size: 3rem; margin-bottom: 1rem;">Time's Up!</h1>
                <p style="font-size: 1.5rem; color: var(--text-primary);">Your score has been reset.</p>
                <p style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 2rem;">The correct answer was: ${correctAnswer}</p>
                <div class="button-group">
                    <a href="heros.html" class="action-button select-another-hero">🎮 Start New Game</a>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        setTimeout(() => overlay.classList.add('visible'), 10);
    }
    
    // --- 3. ATTACH ALL EVENT LISTENERS ---
    audioPlayer.addEventListener('loadedmetadata', () => {
        const songDuration = Math.floor(audioPlayer.duration);
        if (songDuration > 45) {
            timeLeft = 40;
        } else {
            timeLeft = songDuration < 20 ? 20 : songDuration;
        }
        initialTimeLeft = timeLeft;
        startTimer();
        audioPlayer.play();
        musicAnimationContainer.classList.add('playing');
    });

    buttonsContainer.querySelector('#guess-button').addEventListener("click", checkGuess);
    buttonsContainer.querySelector('#hint-button').addEventListener("click", () => {
        if (currentSong) hintText.innerText = "💡 Hint: " + currentSong.hint;
    });
    guessInput.addEventListener('keydown', (event) => { if (event.key === 'Enter') checkGuess(); });
    playRandomHeroButton.addEventListener('click', () => window.playRandomHero());
    selectAnotherHeroButton.addEventListener('click', () => { window.location.href = 'heros.html'; });

    onAuthStateChanged(auth, (user) => {
        initializeGame(user);
    });
});