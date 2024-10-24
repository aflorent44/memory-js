//**** Formulaire inscription  ****//

import {
  usernameValidator,
  emailValidator,
  passwordValidator,
} from "./validators.js";

import { getDatas, setData } from "./app.js"



function signUpForm(signUpForm) {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signUpForm");
    const errorMessage = document.getElementById("errorMessage");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const messageDiv = document.getElementById("message");
      const confirmPassword = document.getElementById("confirmPassword").value;

      let strength = "";
      const errors = [];

      if (!usernameValidator(username)) {
        errors.push(
          "Le nom d'utilisateur doit contenir au moins 3 caractères, et ne doit pas contenir de caractère spécial"
        );
      }

      if (!emailValidator(email)) {
        errors.push("L'email n'est pas valide.");
      }

      if (password.length < 6) {
        strength =
          "Faible : Le mot de passe doit contenir au moins 6 caractères.";
      } else if (
        password.length >= 6 &&
        (/\d/.test(password) || /[!@#$%^&*(),.?":{}|<>]/.test(password))
      ) {
        strength =
          "Moyen : Le mot de passe contient plus de 6 caractères, avec un symbole ou un nombre.";
      } else if (
        password.length > 9 &&
        /\d/.test(password) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(password)
      ) {
        strength =
          "Fort : Le mot de passe contient plus de 9 caractères, avec un symbole et un nombre.";
      } else {
        strength = "Faible : Le mot de passe ne respecte pas les critères.";
      }

      messageDiv.textContent = strength;

      if (confirmPassword !== password) {
        errors.push("Les deux mots de passe doivent être identiques.");
      }

      // Si j'ai des erreurs
      if (errors.length > 0) {
        // Je les affiche
        errorMessage.textContent = errors.join(` `);
        errorMessage.classList.remove("hidden");

        //Timer erros
        setTimeout(() => {
          errorMessage.classList.add("hidden");
        }, 3000);
      } else {
        // sinon je save
        // Contruction de l'objet pour l'envoi
        const user = {
          username: username,
          mail: email,
          pwd: password,
        };

        setData("users", user);
        messageDiv.textContent = "Inscription réussie !";
        form.reset();
        errorMessage.classList.add("hidden");
        
        // Redirection après une courte pause (pour laisser le temps de voir le message)
        setTimeout(() => {
          location = "./log-in.html";
        }, 1000);
      }
    });
  });
}

export { signUpForm };
