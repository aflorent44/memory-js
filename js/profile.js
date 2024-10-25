//Fonction appelée lorsqu'on est sur la page jeu 

function displayProfile() {
  document.addEventListener("DOMContentLoaded", () => {
    const profileDiv = document.getElementById("profile");
    const linksDiv = document.getElementById("links");

    //Si l'utilisateur est connecté, on affiche ses infos et un lien pour se déconnecter 
    if (localStorage.getItem("currentUser") !== null) {
      let currentUserData = JSON.parse(localStorage.getItem("currentUser"));
      profileDiv.innerHTML = `<h2>Vous êtes connecté(e) en tant que : </h2>
            <p>Nom d'utilisateur : ${currentUserData[0].currentUsername}</p>
            <p>Email : ${currentUserData[0].currentMail}</p>
            `;
      linksDiv.innerHTML = `<a href="" class="link" id="logOut">Se déconnecter</a>`;
      const logOut = document.getElementById("logOut");
      logOut.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("currentUser");
        location.reload();
      });

    //Si l'utilisateur n'est pas connecté, on lui propose de se connecter ou de s'inscrire
    } else {
      profileDiv.innerHTML = `<h2>Vous n'êtes pas connecté(e). </h2>`;
      linksDiv.innerHTML = `
            <a href="sign-up.html" class="link">S'inscrire</a>
            <a href="log-in.html" class="link">Se connecter</a>
        `;
    }
  });
}

export { displayProfile };
