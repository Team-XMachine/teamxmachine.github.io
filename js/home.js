const phrases = [
  "Inovamos.",
  "Aprendemos.",
  "Competimos.",
  "Vencemos.",
  "Transformamos o futuro."
];

let phraseIndex = 0;
const rotatingText = document.getElementById('rotating-text');

function updatePhrase() {
  rotatingText.textContent = phrases[phraseIndex];
  phraseIndex = (phraseIndex + 1) % phrases.length;
}

setInterval(updatePhrase, 2500);
updatePhrase();


const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function updateSlidePosition() {
    const slideWidth = document.querySelector('.carousel').clientWidth;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidePosition();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlidePosition();
});

// Responsive fix
window.addEventListener('resize', updateSlidePosition);