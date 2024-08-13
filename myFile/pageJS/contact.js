const formData = document.querySelectorAll(".formData");

// Fonction de validation du prénom
function validateFirst(form) {
  const firstName = form["firstName"].value.trim();
  const regexFirstName = /^[a-zA-ZÀ-ÿ]{2,35}([-' ,][a-zA-ZÀ-ÿ]+)*$/i;

  if (
    firstName === "" ||
    firstName.length < 2 ||
    !regexFirstName.test(firstName)
  ) {
    // Définir un attribut d'erreur pour afficher le message d'erreur
    const errorField = form.querySelector(".firstName");
    errorField.setAttribute("data-error-visible", "true");
    errorField.setAttribute("data-error", "Erreur dans le prénom.");
    return false;
  } else {
    // Retirer l'attribut d'erreur
    const errorField = form.querySelector(".firstName");
    errorField.removeAttribute("data-error-visible");
    errorField.removeAttribute("data-error");
    return true;
  }
}

// Fonction de validation du nom
function validateLast(form) {
  const last = form["last"].value.trim();
  const regexLastName = /^[a-zA-ZÀ-ÿ]{2,35}([-' ,][a-zA-ZÀ-ÿ]+)*$/i;

  if (last === "" || last.length < 2 || !regexLastName.test(last)) {
    const errorField = form.querySelector(".last");
    errorField.setAttribute("data-error-visible", "true");
    errorField.setAttribute("data-error", "Erreur dans le nom.");
    return false;
  } else {
    const errorField = form.querySelector(".last");
    errorField.removeAttribute("data-error-visible");
    errorField.removeAttribute("data-error");
    return true;
  }
}

// Fonction de validation de l'e-mail
function validateEmail(form) {
  const email = form["email"].value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "" || !regexEmail.test(email)) {
    const errorField = form.querySelector(".email");
    errorField.setAttribute("data-error-visible", "true");
    errorField.setAttribute("data-error", "Adresse e-mail invalide.");
    return false;
  } else {
    const errorField = form.querySelector(".email");
    errorField.removeAttribute("data-error-visible");
    errorField.removeAttribute("data-error");
    return true;
  }
}

// Fonction de validation du message
function validateMessage(form) {
  const message = form["message"].value.trim();
  const regexMessage = /^[a-zA-Z\s]+$/;
  // const regexMessage = /^[a-zA-ZÀ-ÿ]{2,35}([-' ,][a-zA-ZÀ-ÿ]+)*$/i;

  if (message === "" || regexMessage.test(message)) {
    const errorField = form.querySelector(".message");
    errorField.setAttribute("data-error-visible", "true");
    errorField.setAttribute("data-error", "Texte du message invalide.");
    return false;
  } else {
    const errorField = form.querySelector(".message");
    errorField.removeAttribute("data-error-visible");
    errorField.removeAttribute("data-error");
    return true;
  }
}

// Récupération du formulaire
const form = document.getElementById("contactForm");

// Gestionnaire d'événement pour le formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const isFormValid = Validation();

  if (isFormValid) {
    alert("Votre message a été envoyé avec succès !");
    console.log("Nom :", form["firstName"].value);
    console.log("Prénom :", form["last"].value);
    console.log("E-mail :", form["email"].value);
    console.log("Message :", form["message"].value);

    // Réinitialiser le formulaire après l'envoi
    form.reset();
    modal();
  } else {
    alert(
      "Certaines informations sont incorrectes. Veuillez les corriger et réessayer."
    );
  }
});
function Validation() {
  const isFirstNameValid = validateFirst(form);
  const isLastNameValid = validateLast(form);
  const isEmailValid = validateEmail(form);
  const isMessageValid = validateMessage(form);

  return isFirstNameValid && isLastNameValid && isEmailValid && isMessageValid;
}
function handleFormSubmit(e) {
  e.preventDefault();
  if (Validation()) {
    modal();
  }
}
document
  .getElementById("btn-submit")
  .addEventListener("submit", handleFormSubmit);

function modal() {
  const modalScript = `
    <div id="modalBody">
  <div class="modal_textI">
      <p>Merci pour votre contact </br>
          Nous reviendrons vers vous dès que possible</p>

      <input id="closeModal4" class="btn-submit" type="submit" value="Fermer" />

  </div>
</div>`;

  document.getElementById("modalBody").innerHTML = modalScript;
  document
    .getElementById("closeModal4")
    .addEventListener("click", close_modal2);
}
function close_modal(e) {
  e.preventDefault;
  modalBody.style.display = "none";
}
//close modal 2 avec le rafraîchissement de la page
function close_modal2() {
  modalBody.style.display = "block";
  location.reload(false);
}
////ecoute  le click de closeModal
document.getElementById("closeModal2").addEventListener("click", close_modal);
