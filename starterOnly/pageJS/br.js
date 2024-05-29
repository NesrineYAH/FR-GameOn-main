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
