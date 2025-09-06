document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const mainTitle = document.getElementById("main-title");
    const audioPlayer = document.getElementById("game-audio");
    const heroTitle = document.getElementById("hero-title");
    const guessInput = document.getElementById("guess-input");
    const hintText = document.getElementById("hint-text");
    const resultMessage = document.getElementById("result-message");
    const playAgainButton = document.getElementById("play-again-button");
    const timerElement = document.getElementById("timer");
    
    const timerContainer = document.getElementById("timer-container");
    const buttonsContainer = document.getElementById("buttons-container");
    const backLink = document.getElementById("back-link");

    const params = new URLSearchParams(window.location.search);
    const heroName = params.get("hero");
    const heroData = heroesData[heroName];
    const songsForHero = heroData ? heroData.songs : [];

    let currentSong = songsForHero.length > 0 ? songsForHero[Math.floor(Math.random() * songsForHero.length)] : null;
    let timeLeft;
    let timerInterval;

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
                showTimesUpScreen(currentSong.answer);
            }
        }, 1000);
    }

    audioPlayer.addEventListener('loadedmetadata', () => {
        const songDuration = Math.floor(audioPlayer.duration);
        timeLeft = Math.max(20, Math.min(songDuration, 45));
        startTimer();
        audioPlayer.play();
    });

    function initializeGame() {
        if (currentSong) {
            mainTitle.classList.remove('hidden'); 
            heroTitle.classList.remove('hidden');
            timerContainer.classList.remove('hidden');
            audioPlayer.classList.remove('hidden');
            guessInput.classList.remove('hidden');
            buttonsContainer.classList.remove('hidden');
            hintText.classList.remove('hidden');
            backLink.classList.remove('hidden');
            
            heroTitle.innerText = `Guess ${heroName}'s Movie!`;
            guessInput.disabled = false;
            buttonsContainer.querySelector('#guess-button').disabled = false;
            timerElement.textContent = '...';
            timerElement.classList.remove('danger');
            audioPlayer.src = currentSong.file;
            
            resultMessage.innerText = "";
            playAgainButton.classList.add('hidden');
        } else {
            heroTitle.innerText = "❌ No songs available for this hero.";
            mainTitle.classList.add('hidden');
            guessInput.disabled = true;
            buttonsContainer.querySelector('#guess-button').disabled = true;
            buttonsContainer.querySelector('#hint-button').disabled = true;
        }
    }
    
    function spawnConfetti() {
        const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f', '#fff', '#ff5733', '#ffd700'];
        const confettiCount = 150; 
        const startX = window.innerWidth / 2;
        const startY = window.innerHeight / 2;

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            const size = Math.random() * 12 + 4;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';

            confetti.style.left = `${startX}px`;
            confetti.style.top = `${startY}px`;
            
            const x = (Math.random() - 0.5) * window.innerWidth * 1.5;
            const y = (Math.random() - 0.5) * window.innerHeight * 1.5;
            const deg = Math.random() * 1080;
            
            confetti.style.setProperty('--x', `${x}px`);
            confetti.style.setProperty('--y', `${y}px`);
            confetti.style.setProperty('--deg', `${deg}deg`);
            
            document.body.appendChild(confetti);
            
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    }

    function createActionButtons() {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'success-actions';

        const randomButton = document.createElement('button');
        randomButton.textContent = '⚡ Play Random Song';
        randomButton.className = 'play-again-button random-play-button';
        randomButton.addEventListener('click', () => {
            const allHeroes = Object.keys(heroesData);
            const randomHeroName = allHeroes[Math.floor(Math.random() * allHeroes.length)];
            window.location.href = `game.html?hero=${encodeURIComponent(randomHeroName)}`;
        });

        playAgainButton.textContent = '⬅️ Select Hero Manually';
        playAgainButton.classList.remove('hidden');

        buttonContainer.appendChild(randomButton);
        buttonContainer.appendChild(playAgainButton);
        
        return buttonContainer;
    }

    function showSuccessScreen() {
        const mainContainer = document.querySelector('.max-w-xl');
        if (mainContainer) mainContainer.style.display = 'none';

        const overlay = document.createElement('div');
        overlay.className = 'success-overlay';

        const successText = document.createElement('div');
        successText.className = 'success-text';
        successText.textContent = '🎉 Congratulations! 🎉';

        const actionButtons = createActionButtons();
        
        overlay.appendChild(successText);
        overlay.appendChild(actionButtons);
        document.body.appendChild(overlay);

        setTimeout(() => overlay.classList.add('visible'), 10);
        spawnConfetti();
    }

    function showTimesUpScreen(correctAnswer) {
        const mainContainer = document.querySelector('.max-w-xl');
        if (mainContainer) mainContainer.style.display = 'none';

        const overlay = document.createElement('div');
        overlay.className = 'success-overlay';

        const textContainer = document.createElement('div');
        
        const timesUpHeading = document.createElement('div');
        timesUpHeading.className = 'times-up-heading';
        timesUpHeading.textContent = '⏰ Time\'s Up!';

        const timesUpAnswer = document.createElement('div');
        timesUpAnswer.className = 'times-up-answer';
        timesUpAnswer.textContent = `The answer was: ${correctAnswer}`;
        
        textContainer.appendChild(timesUpHeading);
        textContainer.appendChild(timesUpAnswer);

        const actionButtons = createActionButtons();
        
        overlay.appendChild(textContainer);
        overlay.appendChild(actionButtons);
        document.body.appendChild(overlay);

        setTimeout(() => overlay.classList.add('visible'), 10);
    }

    // ✅ UPDATED: This function is now fully case-insensitive and ignores spaces/special characters.
    function checkGuess() {
        if (!currentSong) return;

        // 1. Create a "normalized" version of the user's guess.
        // It's converted to lowercase and all non-alphanumeric characters are removed.
        const normalizedGuess = guessInput.value
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '');

        if (normalizedGuess === "") return;

        // 2. Create a "normalized" version of the correct answer.
        const normalizedAnswer = currentSong.answer
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '');

        // 3. Compare the two normalized strings.
        if (normalizedGuess === normalizedAnswer) {
            audioPlayer.pause();
            clearInterval(timerInterval);
            showSuccessScreen();
        } else {
            resultMessage.innerText = "❌ Wrong, try again!";
            resultMessage.style.color = "#ff5733";
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

    playAgainButton.addEventListener("click", () => {
        window.location.href = 'index.html';
    });

    initializeGame();

});
