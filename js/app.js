import { initGame } from "./game.js";
import { signUpForm } from "./sign-up-form.js";
import { logInForm } from "./log-in-form.js";
import { displayProfile } from "./profile.js";

//Si on est sur la page jeu
if (document.getElementById("board") !== null) {
  initGame(document.getElementById("board"));
}

//Si on est sur la page inscription
if (document.getElementById("signUpForm") !== null) {
  signUpForm(document.getElementById("signUpForm"));
}

//Si on est sur la page connexion
if (document.getElementById("logInForm") !== null) {
  logInForm(document.getElementById("logInForm"));
}

//Si on est sur la page profil
if (document.getElementById("profile") !== null) {
  displayProfile(document.getElementById("profile"));
}

//Fonction utilisées pour le traitement des données dans le localStorage
function getDatas(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function setData(key, data) {
  const oldDatas = getDatas(key);
  oldDatas.push(data);
  localStorage.setItem(key, JSON.stringify(oldDatas));

  return oldDatas;
}

export { getDatas, setData };
