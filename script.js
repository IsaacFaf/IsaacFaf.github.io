const videoContainer = document.querySelector('.video-container');
const videos = document.querySelectorAll('.presentation');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentVideoIndex = 0;

function updateVideo() {
    videoContainer.style.transform = `translateX(-${currentVideoIndex * 100}%)`;
    
    // play
    videos.forEach((video, index) => {
        if (index === currentVideoIndex) {
            video.play(); // Joue la vidéo
        } else {
            video.pause(); // Pause la vidéo si défilement
        }
    });
}

// fleche droite
rightArrow.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    updateVideo();
});

// fleche gauche
leftArrow.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    updateVideo();
});

// Défilement automatique entre les vidéos
videos.forEach((video, index) => {
    video.addEventListener('ended', () => {
        currentVideoIndex = (index + 1) % videos.length;
        updateVideo();
    });
});




  console.log("ce rend la");
    
  document.addEventListener('DOMContentLoaded', function () {// VR
    const video = document.querySelector('.video-containers1');
    const cardCarousel = document.querySelector('.card-carousel1');
    const closeCarouselButton = document.querySelector('.close-carousel1'); // Bouton "Fermer"

    video.addEventListener('click', () => {
        cardCarousel.classList.remove('hidden'); // Afficher le modal
    });

    // Fermer le modal
    closeCarouselButton.addEventListener('click', () => {
        cardCarousel.classList.add('hidden'); // Masquer le modal
    });
});



document.addEventListener('DOMContentLoaded', function () {//ANIMATION STOP MOTION
    const videof = document.querySelector('.video-containers');
    const cardCarouself = document.querySelector('.card-carousel');
    const closeCarouselButtonf = document.querySelector('.close-carousel'); // Bouton "Fermer"

    videof.addEventListener('click', () => {
        cardCarouself.classList.remove('hidden'); // Afficher le modal
    });

    // Fermer le modal
    closeCarouselButtonf.addEventListener('click', () => {
        cardCarouself.classList.add('hidden'); // Masquer le modal
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const videot = document.querySelector('.video-containers2');
    const cardCarouselt = document.querySelector('.card-carousel2');
    const closeCarouselButtont = document.querySelector('.close-carousel2'); // Bouton "Fermer"

    videot.addEventListener('click', () => {
        cardCarouselt.classList.remove('hidden'); // Afficher le modal
    });

    // Fermer le modal
    closeCarouselButtont.addEventListener('click', () => {
        cardCarouselt.classList.add('hidden'); // Masquer le modal
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const videoq = document.querySelector('.video-containers3');
    const cardCarouselq = document.querySelector('.card-carousel3');
    const closeCarouselButtonq = document.querySelector('.close-carousel3'); // Bouton "Fermer"

    videoq.addEventListener('click', () => {
        cardCarouselq.classList.remove('hidden'); // Afficher le modal
    });

    // Fermer le modal
    closeCarouselButtonq.addEventListener('click', () => {
        cardCarouselq.classList.add('hidden'); // Masquer le modal
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const videoc = document.querySelector('.video-containers4');
    const cardCarouselc = document.querySelector('.card-carousel4');
    const closeCarouselButtonc = document.querySelector('.close-carousel4'); // Bouton "Fermer"

    videoc.addEventListener('click', () => {
        cardCarouselc.classList.remove('hidden'); // Afficher le modal
    });

    // Fermer le modal
    closeCarouselButtonc.addEventListener('click', () => {
        cardCarouselc.classList.add('hidden'); // Masquer le modal
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const videol = document.querySelector('.video-containers5');
    const cardCarousell = document.querySelector('.card-carousel5');
    const closeCarouselButtonl = document.querySelector('.close-carousel5'); // Bouton "Fermer"

    videol.addEventListener('click', () => {
        cardCarousell.classList.remove('hidden'); // Afficher le modal
    });

    // Fermer le modal
    closeCarouselButtonl.addEventListener('click', () => {
        cardCarousell.classList.add('hidden'); // Masquer le modal
    });
});