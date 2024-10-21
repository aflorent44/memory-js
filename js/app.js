//générer tableau de cartes
const nbreImages = 8;
let cardsArray = [];
for (let index = 0; index < nbreImages; index++) {
  cardsArray.push({ name: index+1, img: `./images/dinosaures/${index + 1}.jpg` });
}

console.log(cardsArray.name);

const game = document.getElementById("board");
const grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid)

cardsArray.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = item.name;
  card.style.backgroundImage = `./images/dinosaures/1.jpg`;
  grid.appendChild(card);
});
