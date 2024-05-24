function editNav() {
  var x = document.getElementById("myTopnav"); // récupère un élément HTML avec l'identifiant "myTopnav" et le stocke dans une variable appelée x.
  if (x.className === "topnav") {
    //vérifie si la classe actuelle de l'élément est "topnav".
    x.className += " responsive"; //ajoute " responsive" à la classe existante
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); //responsable d'affichage du form
const modalBtn = document.querySelectorAll(".modal-btn");
const modalSignin = document.querySelectorAll(".modal-signIN");
const formData = document.querySelectorAll(".formData");
const form = document.forms["reserve"]; //  une référence au formulaire HTML nommé "reserve"

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/////////////validation pour le prenom
function validateFirst(form) {
  const regexFirstName = /^[a-zA-ZÀ-ÿ]{2,35}([-' ,][a-zA-ZÀ-ÿ]+)*$/i;
  const validateFirst = document.querySelector(".first");
  const first = form["first"].value.trim();

  //Si le prénom est vide ou contient moins de 2 lettres
  if (first === "" || first.length < 2) {
    validateFirst.setAttribute("data-error-visible", "true");
    validateFirst.setAttribute("data-error", "Veuillez entrer votre Prénom");

    return false;
  } else if (!regexFirstName.test(first)) {
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
///////////////validation pour le nom
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
///////////////validation pour l'email
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
///////////////validation pour la date de naissance
function validateBirthdate(form) {
  const regexBirthdateISO =
    /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  const validateBirthdate = document.querySelector(".birthdate");
  const birthdate = form["birthdate"].value;
  const birthdateForAge = new Date(birthdate);
  //verifier l'age
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthdateForAge.getFullYear();

  if (birthdate === "") {
    validateBirthdate.setAttribute("data-error-visible", "true");
    validateBirthdate.setAttribute(
      "data-error",
      "vous devez entrer votre date de naissance"
    );

    return false;
    //l'age min 18ans
  } else if (age < 18) {
    validateBirthdate.setAttribute("data-error-visible", "true");
    validateBirthdate.setAttribute(
      "data-error",
      "Vous devez avoir au moins 18 ans"
    );

    return false;
  } else if (!regexBirthdateISO.test(birthdate)) {
    validateBirthdate.setAttribute("data-error-visible", "true");
    validateBirthdate.setAttribute(
      "data-error",
      "Veuillez corriger votre date de naissance"
    );

    return false;
  } else {
    validateBirthdate.setAttribute("data-error-visible", "false");
    validateBirthdate.removeAttribute(
      "data-error",
      "vous devez entrer votre date de naissance"
    );
    return true;
  }
}
/////////////validate la quantité
function validateQuantity(form) {
  const validateQuantity = document.querySelector(".quantity");
  const quantity = form["quantity"].value;
  if (isNaN(quantity) || quantity === "") {
    validateQuantity.setAttribute("data-error-visible", "true");
    validateQuantity.setAttribute(
      "data-error",
      "Veuiilez saisir une valeur numérique"
    );
    return false;

    //si la quantity est moin de 0
  } else if (quantity < 0) {
    validateQuantity.setAttribute("data-error-visible", "true");
    validateQuantity.setAttribute(
      "data-error",
      "la valeur ne peut pas etre négative"
    );
    return false;
    //si la quantity est plus de 99
  } else if (quantity > 99) {
    validateQuantity.setAttribute("data-error-visible", "true");
    validateQuantity.setAttribute("data-error", "le maximum est 99");
    return false;
  } else {
    validateQuantity.setAttribute("data-error-visible", "false");
    validateQuantity.removeAttribute(
      "data-error",
      "Veuillez saisir une valeur numérique"
    );
    return true;
  }
}
///////////////validate pour les options
function validateRadioButtons(form) {
  const validateRadioButtons = document.querySelector(".location");
  const radioButtons = document.getElementsByName("location");
  var isChecked = false;
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked) {
    validateRadioButtons.setAttribute("data-error-visible", "true");
    validateRadioButtons.setAttribute(
      "data-error",
      "Vous devez choisir une option."
    );
    return false;
  } else {
    validateRadioButtons.setAttribute("data-error-visible", "false");
    validateRadioButtons.removeAttribute(
      "data-error",
      "Veuillez saisir une valeur numérique"
    );
    return true;
  }
}
///////////////validate pour les conditions
function validateConditions(form) {
  const validateRadioConditions = document.querySelector(".checkboxCondition");
  const Conditions = document.getElementById("checkbox1");
  var isCheckedConditions = false;
  if (Conditions.checked) {
    isCheckedConditions = true;
    validateRadioConditions.setAttribute("data-error-visible", "false");
    validateRadioConditions.removeAttribute(
      "data-error",
      "Vous devez vérifier que vous acceptez les termes et conditions"
    );
    return true;
  } else {
    validateRadioConditions.setAttribute("data-error-visible", "true");
    validateRadioConditions.setAttribute(
      "data-error",
      "Vous devez vérifier que vous accepter les termes et conditions"
    );
    return false;
  }
}
const reserveForm = document.getElementById("reserve-form");

//declanche la validation de formulaire
reserveForm.addEventListener("submit", function (event) {
  event.preventDefault();
  validate();
  //alert("formulaire envoyé avec succes");
});

/////////////// Form validation
function validate() {
  const isFirstNameValid = validateFirst(form);
  const isLastNameValid = validateLast(form);
  const isEmailValid = validateEmail(form);
  const isBirthdateValid = validateBirthdate(form);
  const isQuantityValid = validateQuantity(form);
  const isRadioButtonsValid = validateRadioButtons(form);
  const isConditionsValid = validateConditions(form);

  //alert("formulaire ok");
  return (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isBirthdateValid &&
    isQuantityValid &&
    isRadioButtonsValid &&
    isConditionsValid
  );
}
////////  modal FOUR FERMER LE bground (form)
function modal() {
  //cree le 2 modal

  const modal = `
    <div class="modal-body">
    <div class="modal_text">
      <p>Merci pour </p>
      <p>votre inscription</p>
      </div>
      <input id="closeModal2" class="btn-submit" type="submit" value="Fermer" />
    </div>`;
  document.querySelector(".modal-body").innerHTML = modal;
  document
    .getElementById("closeModal2")
    .addEventListener("click", close_modal2);
}
////////// Fonction pour gérer  le bouton de soumission "cest parti"
function handleFormSubmit(e) {
  e.preventDefault(); // Empêche la soumission du formulaire

  if (validate()) {
    modal();
  }
}
//ecoute  le click de submit
document
  .getElementById("btn-submit")
  .addEventListener("click", handleFormSubmit);

//ferme le modal
function close_modal(e) {
  e.preventDefault;
  modalbg.style.display = "none";
}
//close modal 2 avec le rafraîchissement de la page
function close_modal2() {
  modalbg.style.display = "none";
  location.reload(false);
}
////ecoute  le click de closeModal
document.getElementById("closeModal").addEventListener("click", close_modal);

//////////////////////////////////////////////////////////////////

modalSignin.forEach((btn) => btn.addEventListener("click", login));

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
