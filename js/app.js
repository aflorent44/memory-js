import { initGame } from "./game.js";

const game = document.getElementById("board"); //récupération de la div board dans le DOM
console.log(game);

if (game !== null) {
  initGame(game);
}

