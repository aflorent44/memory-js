function initGame(board) {
    const selectedValue = localStorage.getItem("currentUser") ? showMenu() : 2; // valeur par défaut
    build(selectedValue, board);
}

function showMenu() {
    const favoriteTheme = document.getElementById("favorite-theme");
    favoriteTheme.innerHTML = `<h2>Sélectionnez votre thème préféré</h2>`;
    const select = createSelectMenu();
    document.getElementById("menu-deroulant").appendChild(select);
    return handleMenuSelection(select);
}

function createSelectMenu() {
    const select = document.createElement("select");
    const options = [
        { value: "", text: "--Sélectionnez--" },
        { value: "1", text: "Dinosaures" },
        { value: "2", text: "Chats" },
    ];

    options.forEach(({ value, text }) => {
        const opt = document.createElement("option");
        opt.value = value;
        opt.textContent = text;
        select.appendChild(opt);
    });
    
    select.addEventListener("change", () => {
        console.log("selectedValue = " + select.value);
        build(select.value,document.getElementById("board"))
    });
    
    return select;
}

function handleMenuSelection(select) {
    return select.value || 2; // valeur par défaut
}

function build(param, game) {
  console.log(param);
  
    const nbreImages = 8;
    const cardsArray = createCardsArray(param, nbreImages);
    const grid = createGameGrid(cardsArray);
    game.appendChild(grid);
    setupGameLogic(grid, nbreImages);
}

function createCardsArray(param, nbreImages) {
  console.log(param);
  
    return Array.from({ length: nbreImages }, (_, index) => ({
        name: index + 1,
        img: `./images/${param}/${index + 1}.jpg`
    }));
}

function createGameGrid(cardsArray) {
  console.log(cardsArray);
  document.getElementById("board").innerHTML=""
    const grid = document.createElement("section");
    grid.classList.add("grid");
    const gameGrid = [...cardsArray, ...cardsArray].sort(() => 0.5 - Math.random());

    gameGrid.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.name = item.name;
        card.style.backgroundImage = `url(${item.img})`;
        card.appendChild(createCardFace("front"));
        card.appendChild(createCardFace("back"));
        grid.appendChild(card);
    });

    return grid;
}

function createCardFace(face) {
    const cardFace = document.createElement("div");
    cardFace.classList.add(face);
    return cardFace;
}

function setupGameLogic(grid, nbreImages) {
    let firstGuess = "", secondGuess = "";
    let count = 0, previousTarget = null, nbGuess = 0, score = 0;
    const $affScore = document.getElementById("score");
    const delay = 1200;

    grid.addEventListener("click", event => {
        const clicked = event.target.closest('.card');

        if (!clicked || clicked === previousTarget || clicked.classList.contains("selected")) return;

        handleCardSelection(clicked, delay);
        previousTarget = clicked;

        if (firstGuess && secondGuess) {
            checkForMatch(firstGuess, secondGuess, grid, delay, $affScore, nbreImages);
        }
    });

    function handleCardSelection(clicked, delay) {
        count++;
        if (count === 1) {
            firstGuess = clicked.dataset.name;
        } else {
            secondGuess = clicked.dataset.name;
            clicked.classList.add("selected");
        }
        clicked.classList.add("selected");
    }

    function checkForMatch(first, second, grid, delay, $affScore, nbreImages) {

        if (first === second) {
            score++;
            nbGuess++;
            $affScore.innerHTML = `Nombre de coups : ${nbGuess}`;
            setTimeout(() => {
                document.querySelectorAll(".selected").forEach(card => card.classList.add("match"));
                resetGuesses();
            }, delay - 600);
        } else {
          nbGuess++;
          $affScore.innerHTML = `Nombre de coups : ${nbGuess}`;
            setTimeout(resetGuesses, delay);
        }
        if (score === nbreImages) {
            $affScore.innerHTML = `<h2>Bravo, tu as gagné en ${nbGuess} coups ! Appuie sur la barre d'espace pour rejouer.</h2>`;
            setupRestart();
        }
    }

    function resetGuesses() {
        firstGuess = secondGuess = "";
        count = 0;
        document.querySelectorAll(".selected").forEach(card => card.classList.remove("selected"));
    }

    function setupRestart() {
        document.addEventListener("keydown", event => {
            if (event.code === "Space") {
                event.preventDefault();
                location.reload();
            }
        });
    }
}

// Exporte les fonctions
export { initGame, build };
