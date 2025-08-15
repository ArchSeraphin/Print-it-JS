const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.getElementById('banner');
const bannerImg = banner.querySelector('.banner-img');
const bannerText = banner.querySelector('p');
const dotsContainer = banner.querySelector('.dots');
const arrowLeft = banner.querySelector('.arrow_left');
const arrowRight = banner.querySelector('.arrow_right');

// Index de la slide affichée
let currentIndex = 0;

// Crée les bullets en fonction du nombre d'éléments dans `slides`
function renderDots() {
  dotsContainer.innerHTML = '';
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');   // CSS: .dot / .dot_selected
    dot.classList.add('dot');
    if (i === currentIndex) dot.classList.add('dot_selected');
    dot.addEventListener('click', () => goToSlide(i)); // clic direct sur un point
    dotsContainer.appendChild(dot);
  }
}

// Met à jour l'état des bullets
function updateDots() {
  const allDots = dotsContainer.querySelectorAll('.dot');
  allDots.forEach((d, i) => {
    if (i === currentIndex) d.classList.add('dot_selected');
    else d.classList.remove('dot_selected');
  });
}

// Applique l’image + le texte de la slide courante
function applySlide() {
  const { image, tagLine } = slides[currentIndex];
  bannerImg.src = `./assets/images/slideshow/${image}`; // chemin correct
  bannerText.innerHTML = tagLine; // innerHTML pour conserver le <span>
  updateDots();
}

// Va à une slide (avec boucle infinie)
function goToSlide(index) {
  currentIndex = (index + slides.length) % slides.length;
  applySlide();
}

// Listeners flèches
arrowLeft.addEventListener('click',  () => goToSlide(currentIndex - 1));
arrowRight.addEventListener('click', () => goToSlide(currentIndex + 1));

// Init
renderDots();
applySlide();