// Helper function for starting a new game with a random hero.
function playRandomHero() {
    sessionStorage.removeItem('movieGuessCurrentScore'); // A new game run starts, so reset the score.
    const heroKeys = Object.keys(heroesData);
    const randomHero = heroKeys[Math.floor(Math.random() * heroKeys.length)];
    window.location.href = `game.html?hero=${encodeURIComponent(randomHero)}`;
}


document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const mainTitle = document.getElementById("main-title");
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

    // --- Score variables ---
    let currentScore = parseInt(sessionStorage.getItem('movieGuessCurrentScore')) || 0;
    let highScore = parseInt(localStorage.getItem('movieGuessHighScore')) || 0;

    const params = new URLSearchParams(window.location.search);
    const heroName = params.get("hero");
    const heroData = heroesData[heroName];
    const songsForHero = heroData ? heroData.songs : [];

    let currentSong = songsForHero.length > 0 ? songsForHero[Math.floor(Math.random() * songsForHero.length)] : null;
    let timeLeft;
    let timerInterval;
    let initialTimeLeft; // To calculate score percentage

    function updateScore(points) {
        currentScore += points;
        sessionStorage.setItem('movieGuessCurrentScore', currentScore); 

        if (currentScore > highScore) {
            highScore = currentScore;
            localStorage.setItem('movieGuessHighScore', highScore);
        }
        
        currentScoreElement.textContent = currentScore;
        highScoreElement.textContent = highScore;
    }

    function startTimer() {
        timerElement.textContent = timeLeft;
        clearInterval(timerInterval);
        timerElement.classList.remove('danger');

        timerInterval = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;
            if (timeLeft <= 5 && !timerElement.classList.contains('danger')) {
                timerElement.classList.add('danger');
            }

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                audioPlayer.pause();
                musicAnimationContainer.classList.remove('playing'); 
                
                // --- NEW: Reset score when time runs out ---
                currentScore = 0;
                sessionStorage.setItem('movieGuessCurrentScore', '0');
                currentScoreElement.textContent = '0';
                
                showTimesUpScreen(currentSong.answer);
            }
        }, 1000);
    }

    audioPlayer.addEventListener('loadedmetadata', () => {
        const songDuration = Math.floor(audioPlayer.duration);
        timeLeft = Math.max(20, Math.min(songDuration, 45));
        initialTimeLeft = timeLeft; // Store the starting time for score calculation
        startTimer();
        audioPlayer.play();
        musicAnimationContainer.classList.add('playing'); 
    });

    function initializeGame() {
        const recordLabel = document.getElementById('record-label');
        if (recordLabel && heroData) {
            recordLabel.style.backgroundImage = `url(${heroData.image})`;
        }

        currentScoreElement.textContent = currentScore;
        highScoreElement.textContent = highScore;

        if (currentSong) {
            heroTitle.innerText = `Guess ${heroName}'s Movie!`;
            guessInput.disabled = false;
            buttonsContainer.querySelector('#guess-button').disabled = false;
            timerElement.textContent = '...';
            musicAnimationContainer.classList.remove('playing'); 
            audioPlayer.src = currentSong.file;
            resultMessage.innerText = "";
        } else {
            heroTitle.innerText = "❌ No songs available for this hero.";
            guessInput.disabled = true;
            buttonsContainer.querySelector('#guess-button').disabled = true;
            buttonsContainer.querySelector('#hint-button').disabled = true;
        }
    }
    
    function showSuccessScreen() {
        const mainContainer = document.querySelector('.game-container');
        if (mainContainer) mainContainer.style.display = 'none';
        if (successOverlay) {
            successOverlay.classList.add('visible');
        }
    }

    function showTimesUpScreen(correctAnswer) {
        const mainContainer = document.querySelector('.game-container');
        if (mainContainer) mainContainer.style.display = 'none';

        const overlay = document.createElement('div');
        overlay.className = 'success-overlay';
        
        const content = document.createElement('div');
        content.className = 'success-content';
        content.innerHTML = `
            <div class="animated-heading times-up-message">
                <span class="text-half left">Time's</span><span class="text-half right"> Up!</span>
            </div>
            <p style="font-size: 1.5rem; color: var(--text-secondary); margin-bottom: 2rem;">The correct answer was: ${correctAnswer}</p>
            <div class="button-group mt-8 space-y-4 w-full max-w-sm">
                <button onclick="playRandomHero()" class="action-button play-random-hero">
                    <span class="button-icon">⚡</span> Play Random Hero
                </button>
                <button onclick="sessionStorage.removeItem('movieGuessCurrentScore'); window.location.href='heros.html'" class="action-button select-another-hero">
                    <span class="button-icon">⬅️</span> Select Another Hero
                </button>
            </div>
        `;
        
        overlay.appendChild(content);
        document.body.appendChild(overlay);

        setTimeout(() => {
            overlay.classList.add('visible');
        }, 10);
    }

    function checkGuess() {
        if (!currentSong) return;
        const normalizedGuess = guessInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (normalizedGuess === "") return;
        const normalizedAnswer = currentSong.answer.toLowerCase().replace(/[^a-z0-9]/g, '');

        if (normalizedGuess === normalizedAnswer) {
            // --- NEW: Score is calculated based on remaining time, capped at 100 ---
            const points = Math.round((timeLeft / initialTimeLeft) * 100);
            updateScore(points);
            
            audioPlayer.pause();
            musicAnimationContainer.classList.remove('playing'); 
            clearInterval(timerInterval);
            showSuccessScreen();
        } else {
            resultMessage.innerText = "❌ Wrong, try again!";
            resultMessage.style.color = "#ff5252";
            guessInput.value = "";
        }
    }
    
    buttonsContainer.querySelector('#guess-button').addEventListener("click", checkGuess);
    buttonsContainer.querySelector('#hint-button').addEventListener("click", () => {
        if (currentSong) {
            hintText.innerText = "💡 Hint: " + currentSong.hint;
        }
    });

    guessInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            checkGuess();
        }
    });
    
    if (playRandomHeroButton) {
        playRandomHeroButton.addEventListener('click', () => {
            // Score persists as the user is continuing their game run.
            window.location.href = `game.html?hero=${encodeURIComponent(Object.keys(heroesData)[Math.floor(Math.random() * Object.keys(heroesData).length)])}`;
        });
    }

    if (selectAnotherHeroButton) {
        selectAnotherHeroButton.addEventListener('click', () => {
            // Score is reset here because the user is ending their game run.
            sessionStorage.removeItem('movieGuessCurrentScore');
            window.location.href = 'heros.html';
        });
    }

    initializeGame();
});