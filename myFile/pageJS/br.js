document.addEventListener("DOMContentLoaded", (event) => {
  console.log("Le DOM a été entièrement chargé et analysé");

  const Modal = document.getElementById("modal-dialog");
  var backdrop = document.getElementById("modal-backdrop");
  // var openModalButton = document.getElementById("openModal-button");
  var openModalButton = document.getElementById("open-modal-button");
  var closeModalButton = document.getElementById("close");

  function openModal() {
    Modal.style.display = "block";
    backdrop.style.display = "block";
  }
  // Fermer le modal lorsque l'utilisateur clique sur le X pour fermer
  
  function closeModal() {
    Modal.style.display = "none";
    backdrop.style.display = "none";
  }
  openModalButton.addEventListener("click", openModal);
  closeModalButton.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);
});
/////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", (event) => {
  var modalDisplay = document.getElementById("modal-display"); //backdrop
  const modalIdeal = document.getElementById("modal-ideal"); //Modal
  var openModalButt = document.getElementById("openModal-button"); //openModalButton
  var closeModalButton = document.getElementById("close");

  function openModal() {
    modalIdeal.style.display = "block";
    modalDisplay.style.display = "block";
    body.style.background = "rgba(0, 0, 0, 0.4)";
  }
  // Fermer le modal lorsque l'utilisateur clique sur le X
  function closeModal() {
    modalIdeal.style.display = "none";
    modalDisplay.style.display = "none";
  }
  openModalButt.addEventListener("click", openModal);
  closeModalButton.addEventListener("click", closeModal);
  modalDisplay.addEventListener("click", closeModal);
});
//////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", (event) => {
  const modalExample = document.getElementById("modal-exemple");
  var modalShow = document.getElementById("modal-show");
  var openModalButtonEmail = document.getElementById("openButtonEmail");
  var closeModalButton = document.getElementById("close");

  function openModal() {
    modalShow.style.display = "block";
    modalExample.style.display = "block";
    body.style.background = "rgba(0, 0, 0, 0.4)";
  }
  // Fermer le modal lorsque l'utilisateur clique sur le X
  function closeModal() {
    modalShow.style.display = "none";
    modalExample.style.display = "none";
  }
  openModalButtonEmail.addEventListener("click", openModal);
  closeModalButton.addEventListener("click", closeModal);
  modalExample.addEventListener("click", closeModal);
});

///////////////////////show menu version mobile /////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  var closeButton = document.getElementById("closebutton");

  function toggleMenu() {
    menu.style.display = "block";
    // menu.classList.toggle("show");
    hamburger.classList.toggle("show");
    closeButton.classList.toggle("show");
  }

  var closeModalButton = document.getElementById("close");
  function closeModal() {
    menu.style.display = "none";
    // closeModalButton.style.display = "none";
    closeButton.classList.toggle("show");
    hamburger.classList.toggle("show");
  }
  hamburger.addEventListener("click", toggleMenu);
  closeButton.addEventListener("click", closeModal);
});

let currentLanguage = "fr"; // Langue par défaut

async function loadLanguage(lang) {
  try {
    const response = await fetch(`../lang/${lang}.json`);
    if (!response.ok) {
      throw new Error(
        `Erreur de chargement du fichier de langue: ${response.statusText}`
      );
    }
    const translations = await response.json();
    return translations;
  } catch (error) {
    console.error(error);
    return {};
  }
}

// Fonction pour appliquer les traductions
async function changeLanguage(lang) {
  const translations = await loadLanguage(lang);
  localStorage.setItem("preferredLanguage", lang);

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[key] || key;
  });
}

// Initialiser les traductions au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  const preferredLanguage = localStorage.getItem("preferredLanguage") || "fr";
  changeLanguage(preferredLanguage);
});
