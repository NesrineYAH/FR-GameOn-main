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
  // Fermer le modal lorsque l'utilisateur clique sur le X
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
  console.log("Le DOM a été entièrement chargé et analysé");

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
  console.log("Le DOM a été entièrement chargé et analysé");

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
/*
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("Le DOM a été entièrement chargé et analysé");

  const Modal = document.getElementById("modal-dialog");
  var backdrop = document.getElementById("modal-backdrop");
  var openModalButton = document.getElementById("open-modal-button");
  var closeModalButton = document.getElementById("close");

  function openModal() {
    Modal.style.display = "block";
    backdrop.style.display = "block";
  }
  // Fermer le modal lorsque l'utilisateur clique sur le X
  function closeModal() {
    Modal.style.display = "none";
    backdrop.style.display = "none";
  }
  openModalButton.addEventListener("click", openModal);
  closeModalButton.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);
});

 */

//////////////////////////////////////////////////////////////////
/*modalSignin.forEach((btn) => btn.addEventListener("click", login));
async function login(username, password) {
  const url = "https://example.com/api/login"; // Remplacez par l'URL de votre serveur

  //currentUser
  const currentUser = {
    username: username,
    password: password,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentUser),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    console.log("Login successful:", data);

    // Vous pouvez stocker le token de session ou d'autres informations de connexion ici
    // localStorage.setItem('token', data.token);
  } catch (error) {
    console.error("There was a problem with the login request:", error);
  }
}
*/
const texts = {
  en: {
    title: "Welcome",
    description: "This is a multi-language example.",
  },
  fr: {
    title: "Bienvenue",
    description: "Ceci est un exemple multilingue.",
  },
  es: {
    title: "Bienvenido",
    description: "Este es un ejemplo multilingüe.",
  },
};

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[id]");
  elements.forEach((element) => {
    const key = element.id;
    if (texts[lang] && texts[lang][key]) {
      element.textContent = texts[lang][key];
    }
  });
}

// Initialisation avec une langue par défaut
window.onload = () => changeLanguage("en");
