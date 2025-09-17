document.addEventListener('DOMContentLoaded', () => {
    const heroChart = document.getElementById('hero-chart');

    // Function to create and display hero cards
    function renderHeroes() {
        heroChart.innerHTML = '';
        for (const heroName in heroesData) {
            const hero = heroesData[heroName];
            const card = document.createElement('div');
            card.className = 'hero-card';
            card.innerHTML = `
                <img src="${hero.image}" alt="${heroName}" class="hero-image">
                <div class="hero-name">${heroName}</div>
            `;

            card.addEventListener('click', () => {
                window.location.href = `game.html?hero=${encodeURIComponent(heroName)}`;
            });
            
            heroChart.appendChild(card);
        }
    }

    // Initial render of heroes
    renderHeroes();
});