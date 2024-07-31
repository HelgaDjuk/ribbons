/* FÜr die Bildschau*/

let slideIndex = 0;
const slides = document.querySelectorAll(".schaubilder");
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  slideIndex = index;
}

function prevSlide() {
  showSlide(slideIndex - 1);
}
function nextSlide() {
    showSlide(slideIndex + 1);
  }

 /* prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);*/

  setInterval(nextSlide, 7000);