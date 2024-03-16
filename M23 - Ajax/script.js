document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const userNameElement = document.querySelector('#username');
    const locationElement = document.querySelector('#location');
    const avatarElement = document.querySelector('#avatar');
    const repositoryElement = document.querySelector('#repository');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/Thiago-Almeida23')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            userNameElement.innerText = json.login;
            locationElement.innerText = json.location;
            avatarElement.src = json.avatar_url;
            repositoryElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.href = json.html_url;
        })
        .catch(function(erro) {
            alert("Ocorreu um erro. Tente novamente, mais tarde.")
        })
})
