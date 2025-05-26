
const slideshow = document.querySelector(".slideshow");
const imageCount = 10;
let currentImage = 1;

function changeBackground() {
  slideshow.style.backgroundImage = `url('img/${currentImage}.jpg')`;
  currentImage = (currentImage % imageCount) + 1;
}

changeBackground(); // ilk görseli hemen yükle
setInterval(changeBackground, 5000); // sonra 5 saniyede bir değiştir
