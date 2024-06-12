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
  document.cookie = name + "=; Max-Age=-99999999;";
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

/*
Pour nous soutenir, acceptez les cookies

Avec votre accord, nous et nos 285 partenaires utilisons des cookies ou technologies similaires pour stocker, consulter et traiter des données personnelles telles que votre visite sur ce site internet, les adresses IP et les identifiants de cookie. Certains partenaires ne demandent pas votre consentement pour traiter vos données et se fondent sur leur intérêt commercial légitime. À tout moment, vous pouvez retirer votre consentement ou vous opposer au traitement des données fondé sur l'intérêt légitime en cliquant sur « En savoir plus » ou en allant dans notre politique de confidentialité sur ce site internet.
Vos données personnelles sont traitées pour les finalités suivantes:
Contenus cartographiques/infographiques , Contenus vidéo et audio, Données de géolocalisation précises et identification par analyse de l’appareil, Mesure d'audience, Publicités et contenu personnalisés, mesure de performance des publicités et du contenu, études d’audience et développement de services, Réseaux sociaux, Stocker et/ou accéder à des informations sur un appareil
 */
