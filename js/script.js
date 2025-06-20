const carousel = document.getElementById('carousel');
const images = carousel.querySelectorAll('img');
const total = images.length;
let index = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    index = (index - 1 + total) % total;
    updateCarousel();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    index = (index + 1) % total;
    updateCarousel();
});

// (Opcional) Auto play a cada 5s
setInterval(() => {
    index = (index + 1) % total;
    updateCarousel();
}, 5000);

const btn = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});