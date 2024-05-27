//const form = document.forms["contactForm"];
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêcher l'envoi par défaut du formulaire
  validate();
  alert("Votre message a été envoyé avec succès !");
  console.log("contactForm", buttonClicked);

  document
    .getElementById("btn-submit")
    .addEventListener("click", handleFormSubmit);
  console.log("contactForm", buttonClicked);

  // Simuler l'envoi des données à un serveur
  console.log("Nom :", Name);
  console.log("firstName:", firstName);
  console.log("E-mail :", email);
  console.log("Message :", message);
  document.getElementById("contactForm").reset(); // Réinitialiser le formulaire après l'envoi
});

function validateFirst(form) {
  const regexFirstName = /^[a-zA-ZÀ-ÿ]{2,35}([-' ,][a-zA-ZÀ-ÿ]+)*$/i;
  const validateFirst = document.querySelector(".firstName").value;
  const firstName = form["firstName"].value.trim();

  //Si le prénom est vide ou contient moins de 2 lettres
  if (firstName === "" || firstName.length < 2) {
    validateFirst.setAttribute("data-error-visible", "true");
    validateFirst.setAttribute("data-error", "Veuillez entrer votre Prénom");

    return false;
  } else if (!regexFirstName.test(firstName)) {
    validateFirst.setAttribute("data-error-visible", "true");
    validateFirst.setAttribute(
      "data-error",
      "Erreur de votre prénom, veuillez le corriger "
    );
    return false;
  } else {
    validateFirst.setAttribute("data-error-visible", "false");
    validateFirst.removeAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du Prénom"
    );
    return true;
  }
}
function validateLast(form) {
  const regexLastName = /^[a-zA-ZÀ-ÿ]{2,35}([-' ,][a-zA-ZÀ-ÿ]+)*$/i;
  const validateLast = document.querySelector(".last");
  const last = form["last"].value.trim();
  //Si le nom est vide ou contient moins de 2 lettres
  if (last === "" || last.length < 2) {
    validateLast.setAttribute("data-error-visible", "true");
    validateLast.setAttribute("data-error", "Veuillez entrer votre nom");

    return false;
    //Si le prénom est correctement rempli
  } else if (!regexLastName.test(last)) {
    validateLast.setAttribute("data-error-visible", "true");
    validateLast.setAttribute(
      "data-error",
      "Erreur de votre nom, veuillez le corriger "
    );

    return false;
  } else {
    validateLast.setAttribute("data-error-visible", "false");
    validateLast.removeAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom"
    );
    return true;
  }
}
function validateEmail(form) {
  const validateEmailField = document.querySelector(".email");
  const email = form["email"].value;
  // Utilisation d'une expression régulière pour valider le format de l'email
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //si l'email est vide
  if (email === "") {
    validateEmailField.setAttribute("data-error-visible", "true");
    validateEmailField.setAttribute(
      "data-error",
      "Veuillez saisir votre email"
    );
    return false;
    // si l'email n'ai pas valide
  } else if (!emailRegex.test(email)) {
    validateEmailField.setAttribute("data-error-visible", "true");
    validateEmailField.setAttribute(
      "data-error",
      "Veuillez saisir une adresse email valide"
    );
    return false;
  } else {
    validateEmailField.setAttribute("data-error-visible", "false");
    validateEmailField.removeAttribute("data-error");
    return true;
  }
}
function validateMessage(form) {
  const message = document.querySelector("message").value;
  const textarea = form["message"].value.trim();
  const regexMessage = /^[a-zA-Z\s]+$/;
  if (message === "") {
    alert("Veuillez remplir tous les champs.");
    textarea.style.border = "2px solid red";
    return false;
  } else if (regexMessage.test(message)) {
    alert("Texte valide!");
    textarea.style.border = "2px solid blue";
  } else {
    alert(
      "Texte invalide! Veuillez n'utiliser que des lettres et des espaces."
    );
  }
}
function validate() {
  const isFirstNameValid = validateFirst(form);
  const isLastNameValid = Name(form);
  const isEmailValid = validateEmail(form);
  const isMessageValid = validateMessage(form);

  alert("formulaire ok");

  return isFirstNameValid && isLastNameValid && isEmailValid && isMessageValid;
}

/**
function(e) {
  var t = e.currentTarget;
  i("share", {
    method: t.dataset.gaValue,
    content_type: "Page",
    item_id: window.location.href
  })
} 
 */
