//**** Formulaire inscription  ****//


import {
  emailValidator,
  passwordValidator,
} from "./validators.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signUpForm");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const errors = [];

    
    if (!emailValidator(email)) {
      errors.push("L'email n'est pas valide.");
    }

    if (!passwordValidator(password)) {
      errors.push(
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un caractère spécial."
      );
    }

    // Si j'ai des erreurs
    if (errors.length > 0) {
      // Je les affiche
      errorMessage.textContent = errors.join("<br>");
      errorMessage.classList.remove("hidden");

      //Timer erros
      setTimeout(() => {
        errorMessage.classList.add("hidden")
      }, 3000);

    } else {
      // sinon je save
      // Contruction de l'objet pour l'envoi
      const userData = {
        username: username,
        mail: email,
        pwd: password,
      };

      // Je l'enregistre
      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Inscription réussie !");
      form.reset();
      errorMessage.classList.add("hidden");
    }
  });
});