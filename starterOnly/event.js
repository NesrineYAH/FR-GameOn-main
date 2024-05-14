let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-images img");
const totalSlides = slides.length; //9

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${1600 * (i - index)}%)`;
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}
function autoNextSlide() {
  nextSlide(); // Appel de la fonction nextSlide
}
// Appeler autoNextSlide toutes les 3 secondes (par exemple) à reactiver la ligne 24
//const intervalId = setInterval(autoNextSlide, 10000);
showSlide(currentIndex);

function openSidebar() {
  document.querySelector(".imageSide").style.display = "block";
}

function closeSidebar() {
  document.querySelector(".imageSide").style.display = "none";
}
