//**** Formulaire connexion  ****//

import { getDatas } from "./app.js";

// Fonction pour récupérer un utilisateur par nom d'utilisateur
function getUser(username) {
  // Récupérer la liste des utilisateurs du local storage
  const datas = getDatas("users");
  //console.log(datas);

  // Vérifier si des utilisateurs existent
  if (!datas) {
    console.log("Aucun utilisateur trouvé.");
    return null;
  }

  // Utiliser filter pour trouver l'utilisateur correspondant
  const foundUser = datas.filter((user) => user.username === username);

  // Retourner le premier utilisateur trouvé ou null si aucun
  return foundUser.length > 0 ? foundUser[0] : null;
}

function signInForm(signInForm) {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signInForm");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const usernameSignIn = document.getElementById("username").value;
      const passwordSignIn = document.getElementById("password").value;

      // Recherche de l'utilisateur
      const user = getUser(usernameSignIn);

      if (user) {
        if (passwordSignIn === user.pwd) {
          alert("Connexion réussie !");
          form.reset();
          location = "./profile.html";
        } else {
          // Afficher un message d'erreur
          errorMessage.textContent = "Mot de passe erroné.";
          errorMessage.classList.remove("hidden");

          // Optionnel : reset l'input de mot de passe
          document.getElementById("password").value = "";
        }
      } else {
        errorMessage.textContent = "Utilisateur non trouvé.";
        errorMessage.classList.remove("hidden");
      }
    });
  });
}

export { signInForm };
