import { build, initGame } from "./game.js";
import { signUpForm } from "./sign-up-form.js";
import { logInForm } from "./log-in-form.js";
import { displayProfile } from "./profile.js";

//const isLoggedIn = false;

function getDatas(key) {
  // Get data from LS in param and display it in nodeID
  return JSON.parse(localStorage.getItem(key)) || [];
}

function setData(key, data) {
  // Get datas
  const oldDatas = getDatas(key);
  // Add datas
  oldDatas.push(data);
  // Get data from LS in param and display it in nodeID
  localStorage.setItem(key, JSON.stringify(oldDatas));

  return oldDatas;
}


export {getDatas, setData}



if (document.getElementById("board") !== null) {
  initGame(document.getElementById("board"));
}

if (document.getElementById("signUpForm") !== null) {
  signUpForm(document.getElementById("signUpForm"));
}

if (document.getElementById("logInForm") !== null) {
  logInForm(document.getElementById("logInForm"));
}

if (document.getElementById("profile") !== null) {
  console.log("profil page");
  displayProfile(document.getElementById("profile"));
}


