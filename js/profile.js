let isLoggedIn = false

function displayProfile() {
    const profileDiv = document.getElementById('profile');
    const linksDiv = document.getElementById('links');

    if (isLoggedIn) {
        profileDiv.innerHTML = `
            <p>Nom d'utilisateur : ${user.username}</p>
            <p>Email : ${user.email}</p>
        `;
    } else {
        profileDiv.innerHTML = `<h2>Vous n'êtes pas connecté(e). </h2>`;
        linksDiv.innerHTML = `
            <a href="sign-up.html" class="link">S'inscrire</a>
            <a href="sign-in.html" class="link">Se connecter</a>
        `;
    }
}

export { displayProfile }