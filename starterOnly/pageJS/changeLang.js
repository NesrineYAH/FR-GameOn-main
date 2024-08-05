const translations = {
  en: {
    welcome: "Welcome",
    description: "This is an example description.",
  },
  fr: {
    welcome: "Bienvenue",
    description: "Ceci est un exemple de description.",
  },
};

function changeLanguage(language) {
  // Vérifiez si la langue demandée est disponible

  if (!translations[language]) {
    console.error(`La langue ${language} n'est pas disponible.`);
    return;
  }

  const elements = document.querySelectorAll("[data-i18n]"); // Sélectionnez tous les éléments avec l'attribut `data-i18n`

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n"); // Obtenez la clé de traduction de l'attribut `data-i18n`

    element.textContent = translations[language][key]; // Changez le texte de l'élément avec la traduction correspondante
  });
}

// Exemple d'utilisation : changer la langue en français
changeLanguage("fr");

/*
// Fonction pour changer de langue
function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("preferredLanguage", lang);
  applyTranslations(lang);
}
*/
