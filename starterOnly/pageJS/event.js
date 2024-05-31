let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-images img");
const totalSlides = slides.length; //9

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
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
const intervalId = setInterval(autoNextSlide, 3000);
showSlide(currentIndex);

function openSidebar() {
  document.querySelector(".imageSide").style.display = "block";
}

function closeSidebar() {
  document.querySelector(".imageSide").style.display = "none";
}

// pour afficher le content
function toggleContent(contentId) {
  var content = document.getElementById(contentId);
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function toggleDisplay(contenuId, chevron) {
  var contenu = document.getElementById(contenuId);
  //  const chevron = document.getElementsByClassName(chevron);
  if (contenu.style.display === "none") {
    contenu.style.display = "block";
    chevron.classList.remove("chevron__down");
    chevron.classList.add("chevron__up");
  } else {
    contenu.style.display = "none";
    chevron.classList.remove("chevron__up");
    chevron.classList.add("chevron__down");
  }
}
