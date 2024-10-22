//****création du plateau de jeu****
function initGame(game) {
  const nbreImages = 8; // taille du plateau / 2 : sera variabilisé
  let cardsArray = []; //création du tableau
  for (let index = 0; index < nbreImages; index++) {
    cardsArray.push({
      name: index + 1,
      img: `./images/cat-memes/${index + 1}.jpg`,
    });
  } //affectation des images dans le tableau, boucle sur chaque élément du tableau

  const grid = document.createElement("section"); //création d'une section qui correspond à chaque carte
  grid.setAttribute("class", "grid"); //attribution d'une classe et d'un attribut grid
  game.appendChild(grid); // ???

  let gameGrid = cardsArray.concat(cardsArray); //clonage du tableau pour créer le plateau avec les cartes en double
  gameGrid.sort(() => 0.5 - Math.random()); // randomisation de l'ordre des éléments dans le plateau

  gameGrid.forEach((item) => {
    //pour chaque élément du plateau, affecter l'image correspondante du tableau
    const card = document.createElement("div"); // création d'une div pour chaque carte
    card.classList.add("card"); //
    card.dataset.name = item.name; //récupération du nom puis du chemin de l'image en partant du tableau cardsArray*2

    //devant de la carte :
    const front = document.createElement("div");
    front.classList.add("front");

    //dos de la carte, avec les images

    const back = document.createElement("div");
    back.classList.add("back");
    card.style.backgroundImage = `url(${item.img})`;

    grid.appendChild(card); //rajouter card à la suite de grid, et ça pour chaque card
    card.appendChild(front); // pour chaque card, lui attribuer un devant et un dos
    card.appendChild(back);
  });

  //****faire apparaitre la sélection de la carte, et limiter à deux cartes sélectionnées****

  const match = () => {
    //fonction match appelée lorsque firstguess = secondguess
    let selected = document.querySelectorAll(".selected"); // variable qui va chercher tous les éléments sélectionnés
    selected.forEach((card) => {
      card.classList.add("match"); // pour chaque carte sélectionnée, lui donner l'attribut "match"
    });
  };

  const resetGuesses = () => {
    firstGuess = "";
    secondGuess = "";
    count = 0;

    let selected = document.querySelectorAll(".selected");
    selected.forEach((card) => {
      card.classList.remove("selected");
    });
  };

  let firstGuess = "";
  let secondGuess = "";
  let count = 0; //utilisé pour compter le nombre de cartes sélectionnées
  let previousTarget = null; //utilisé pour ne pas sélectionner deux fois la même carte
  let delay = 1200;
  let score = 0;

  /*let affScore = document.getElementById("score");
affScore = this.insertAdjacentHTML("afterbegin",`le score est de ${score}`)*/

  // Add event listener to grid
  grid.addEventListener("click", function (event) {
    //fonction appelée à chaque clic
    // The event target is our clicked item
    let clicked = event.target; //variable utilisée pour sélectionner l'élément cliqué

    // Do not allow the grid section itself to be selected; only select divs inside the grid
    if (
      clicked.nodeName === "SECTION" ||
      clicked === previousTarget ||
      clicked.parentNode.classList.contains("selected")
    ) {
      //
      return;
    }

    // Add selected class
    if (count < 2) {
      count++;
      if (count === 1) {
        // Assign first guess
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess); //afficher dans la console pour s'y retrouver
        clicked.parentNode.classList.add("selected"); // màj de la classe css en "card selected"
      } else {
        // Assign second guess
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.parentNode.classList.add("selected");
      }
      // If both guesses are not empty...
      if (firstGuess !== "" && secondGuess !== "") {
        // and the first guess matches the second match...
        if (firstGuess === secondGuess) {
          score++;
          console.log("score" + score);
          setTimeout(match, delay - 600);
          setTimeout(resetGuesses, delay - 600);
        } else {
          setTimeout(resetGuesses, delay);
        }
      }

      // Set previous target to clicked
      previousTarget = clicked;
    }
console.log("score = " +score);
  
  if (score == nbreImages) {
      alert("gagné");
    }
    
  });
  
}

export { initGame };
