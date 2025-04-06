const slide = document.querySelector('.carousel-slide');
const items = document.querySelectorAll('.carousel-item');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let counter = 0;

function updateSlide() {
  slide.style.transform = `translateX(-${counter * 100}%)`;
}

next.addEventListener('click', () => {
  counter = (counter + 1) % items.length;
  updateSlide();
});

prev.addEventListener('click', () => {
  counter = (counter - 1 + items.length) % items.length;
  updateSlide();
});

// Auto slide
setInterval(() => {
  counter = (counter + 1) % items.length;
  updateSlide();
}, 5000);
