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

function toggleShow(contenuId, button) {
  var contenu = document.getElementById(contenuId);
  var Chevron = button.querySelector(".Chevron");

  if (contenu.style.display === "none") {
    contenu.style.display = "block";
    Chevron.classList.remove("Chevron__down");
    Chevron.classList.add("Chevron__up");
    button.innerHTML = '<span class="Chevron Chevron__up"></span> -';
  } else {
    contenu.style.display = "none";
    Chevron.classList.remove("Chevron__up");
    Chevron.classList.add("Chevron__down");
    button.innerHTML = '<span class="Chevron Chevron__down"></span> +';
  }
}
document.addEventListener("DOMContentLoaded", (event) => {
  var closeIdButton = document.getElementById("Close");
  var AllCookieCategory = document.querySelector("#allCookieCategory");
  var allCookie = document.querySelector(".allCookieCategory");

  // Fermer le modal lorsque l'utilisateur clique sur le X
  function closeModalII() {
    AllCookieCategory.style.display = "none";
    allCookie.style.display = "none";
  }
  closeIdButton.addEventListener("click", closeModalII);
});
