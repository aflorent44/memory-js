import { initGame } from "./game.js";
import { signUpForm } from "./sign-up-form.js";
import { signInForm } from "./sign-in-form.js";
import { displayProfile } from "./profile.js";

//const isLoggedIn = false;

function getDatas(key) {
  // Get data from LS in param and display it in nodeID
  return JSON.parse(localStorage.getItem(key)) || [];
}



export {getDatas}




if (document.getElementById("board") !== null) {
  initGame(document.getElementById("board"));
}

if (document.getElementById("signUpForm") !== null) {
  signUpForm(document.getElementById("signUpForm"));
}

if (document.getElementById("signInForm") !== null) {
  signInForm(document.getElementById("signInForm"));
}

if (document.getElementById("profile") !== null) {
  console.log("profil page");
  displayProfile(document.getElementById("profile"));
}