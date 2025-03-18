const imagesModale = document.querySelectorAll('.bouton');
const modale = document.querySelector('.modale');

for (let i = 0; i < imagesModale.length; i++) {
    imagesModale[i].addEventListener('click', openModale);
}

function openModale() {
    const chemin = this.previousElementSibling.getAttribute("src");
    const image = document.createElement('img');
    image.setAttribute('src', chemin);
    image.classList.add('zoom');
    modale.appendChild(image);
    modale.classList.add('visible');
}