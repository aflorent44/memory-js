//**** Formulaire connexion  ****//

import { getDatas, setData } from "./app.js";

// Fonction pour récupérer un utilisateur par nom d'utilisateur
function getUser(username) {
  // Récupérer la liste des utilisateurs du local storage
  const datas = getDatas("users");

  // Vérifier si des utilisateurs existent
  if (!datas) {
    return null;
  }

  // Utiliser filter pour trouver l'utilisateur correspondant
  const foundUser = datas.filter((user) => user.username === username);

  // Retourner le premier utilisateur trouvé ou null si aucun
  return foundUser.length > 0 ? foundUser[0] : null;
}

let currentUserArray = [];

function logInForm(logInForm) {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("logInForm");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const usernamelogIn = document.getElementById("username").value;
      const passwordlogIn = document.getElementById("password").value;

      // Recherche de l'utilisateur
      const userToTest = getUser(usernamelogIn);

      if (userToTest) {
        if (passwordlogIn === userToTest.pwd) {
          const currentUserData = {
            currentUsername: usernamelogIn,
            currentMail: userToTest.mail,
          };

          currentUserArray = setData("currentUser", currentUserData);

          location = "./profile.html";
        } else {
          // Afficher un message d'erreur
          errorMessage.textContent = "Mot de passe erroné.";
          errorMessage.classList.remove("hidden");

          // Reset l'input de mot de passe
          document.getElementById("password").value = "";
        }
      } else {
        errorMessage.textContent = "Utilisateur non trouvé.";
        errorMessage.classList.remove("hidden");
      }
    });
  });
}

export { logInForm };
