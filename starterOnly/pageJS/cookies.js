//mettre en place une fonction de cookies

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// fonction d'avoir de cookies //Lire les cookies en JavaScript

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
  //   return decodeURIComponent(value);
}

function eraseCookie(name) {
  //document.cookie = name + "=; Max-Age=-99999999;";
  document.cookie = name + "= je suis un cookie;";
}

// Ajouter un cookie
setCookie("username", "NesrineYAH", 7); // Le cookie "username" avec la valeur "JohnDoe" qui expire dans 7 jours

// Lire un cookie
let user = getCookie("username"); // Lire le cookie
console.log("Username: " + user); // Afficher la valeur du cookie
eraseCookie("username"); // Supprimer le cookie

// Supprimer un cookie
eraseCookie("username");

// Function to change language and store preference in a cookie
function changeLanguage(lang) {
  currentLanguage = lang;
  setCookie("preferredLanguage", lang, 7); // Store for 7 days
  applyTranslations(lang);
}

// Initialize translations on page load with preferred language from cookie
document.addEventListener("DOMContentLoaded", () => {
  const preferredLanguage = getCookie("preferredLanguage") || "fr";
  changeLanguage(preferredLanguage);
});

// Fonction pour accepter les cookies
function accepterLesCookies() {
  // Sélectionner le bouton d'acceptation des cookies
  var boutonAcceptation = document.querySelector(
    "#onetrust-accept-btn-handler"
  );
  var blocCookies = document.querySelector(".ot-sdk-container");

  // Vérifier si le bouton existe
  if (boutonAcceptation) {
    // Simuler un clic sur le bouton
    boutonAcceptation.click();
    if (blocCookies) {
      masquerBlocCookies();
    }
    // Arrêter l'intervalle une fois que le bouton est cliqué
    clearInterval(intervalID);
  } else {
    console.log("Le bouton d'acceptation des cookies n'a pas été trouvé.");
  }
}

// Fonction pour refuser les cookies
function refuserLesCookies() {
  // Sélectionner le bouton de refus des cookies
  var boutonRefus = document.querySelector("#onetrust-reject-all-handler");
  var blocCookies = document.querySelector(".ot-sdk-container");

  // Vérifier si le bouton existe
  if (boutonRefus) {
    // Simuler un clic sur le bouton
    boutonRefus.click();
    // Masquer le bloc de cookies
    if (blocCookies) {
      masquerBlocCookies();
    }
    clearInterval(intervalID);
  } else {
    console.log("Le bouton de refus des cookies n'a pas été trouvé.");
  }
}
/*
function ParamCookies() {
  var boutonParam = document.querySelector("#onetrust-pc-btn-handler");
  var blocCookies = document.querySelector(".ot-sdk-container");

  if (boutonParam) {
    boutonParam.click();
    if (blocCookies) {
      masquerBlocCookies();
    }
    clearInterval(intervalID);
    console.log("Bouton des paramètres de cookies cliqué.");
  } else {
    console.log("Bouton des paramètres de cookies non trouvé.");
  }
}*/
function ParamCookies() {
  // Sélectionner le bouton de refus des cookies
  var boutonParam = document.querySelector("#onetrust-pc-btn-handler");
  var blocCookies = document.querySelector(".ot-sdk-container");

  // Vérifier si le bouton existe
  if (boutonParam) {
    // Simuler un clic sur le bouton
    boutonParam.addEventListener("click", ParamCookies);
    // Masquer le bloc de cookies
    if (blocCookies) {
      masquerBlocCookies();
    }
    clearInterval(intervalID);
  } else {
    console.log("Le bouton de refus des cookies n'a pas été trouvé.");
  }
}

boutonRefus.addEventListener("click", refuserLesCookies);
boutonAcceptation.addEventListener("click", accepterLesCookies);
boutonParam.addEventListener("click", ParamCookies);
// Définir l'intervalle pour vérifier la présence du bouton
// Exécuter les fonctions à intervalle régulier

var intervalID = setInterval(function () {
  accepterLesCookies();
  refuserLesCookies();
  ParamCookies();
}, 1000);
// Exécuter les fonctions immédiatement au chargement de la page
accepterLesCookies();
refuserLesCookies();
ParamCookies();

////////masquer le block cookies
function masquerBlocCookies() {
  var blocCookies = document.querySelector(".ot-sdk-container");
  if (blocCookies) {
    blocCookies.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var blocCookies = document.querySelector(".ot-sdk-container");
  setTimeout(() => {
    blocCookies.classList.remove("hidden");
    blocCookies.classList.add("visible");
  }, 1000); // Attendre 1 seconde avant d'afficher le bloc

  document
    .getElementById("onetrust-accept-btn-handler")
    .addEventListener("click", function () {
      blocCookies.classList.remove("visible");
      setTimeout(() => {
        blocCookies.classList.add("hidden");
      }, 500);
    });
  document
    .getElementById("onetrust-reject-btn-handler")
    .addEventListener("click", function () {
      blocCookies.classList.remove("visible");
      setTimeout(() => {
        blocCookies.classList.add("hidden");
      }, 500);
    });
  document
    .getElementById("onetrust-pc-btn-handler")
    .addEventListener("click", function () {
      blocCookies.classList.remove("visible");
      setTimeout(() => {
        blocCookies.classList.add("hidden");
      }, 500);
    });
});
// Appeler la fonction (par exemple, après le chargement de la page)
window.onload = function () {
  ParamCookies();
};
