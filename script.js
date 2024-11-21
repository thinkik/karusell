const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalItems = carouselItems.length;

// Funktion zum Aktualisieren der Carousel-Position
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

// Event-Listener für die "Vorherige" Schaltfläche
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
    updateCarousel();
    resetInterval();
});

// Event-Listener für die "Nächste" Schaltfläche
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
    updateCarousel();
    resetInterval();
});

// Optional: Automatisches Wechseln alle 5 Sekunden
let interval = setInterval(() => {
    nextButton.click();
}, 5000);

// Funktion zum Zurücksetzen des Intervalls bei manueller Navigation
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
        nextButton.click();
    }, 5000);
}

// Zusätzliche Funktionalitäten für Barrierefreiheit und Benutzerfreundlichkeit

// Stoppt das automatische Wechseln, wenn der Benutzer mit der Maus über das Karussell fährt
const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(interval);
});

carouselContainer.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
        nextButton.click();
    }, 5000);
});

// Tastaturnavigation (Pfeiltasten)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevButton.click();
    } else if (e.key === 'ArrowRight') {
        nextButton.click();
    }
});

// Optional: Indikatoren hinzufügen (falls implementiert)
/*
const indicators = document.querySelectorAll('.indicator');

function updateIndicators() {
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[currentIndex].classList.add('active');
}

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        currentIndex = parseInt(indicator.getAttribute('data-index'));
        updateCarousel();
        resetInterval();
    });
});
*/
