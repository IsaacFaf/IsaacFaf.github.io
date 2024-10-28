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

  document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.video-containers');
    const cardCarousel = document.querySelector('.card-carousel');
    const closeCarouselButtons = document.querySelectorAll('.close-carousel'); // Sélectionne tous les boutons "Fermer"

    video.addEventListener('click', () => {
        cardCarousel.classList.toggle('hidden');
        video.classList.add("hidden");
        cardCarousel.classList.toggle('visible');
    });

    // Ajoute un événement "click" à chaque bouton "Fermer"
    closeCarouselButtons.forEach(button => {
        button.addEventListener('click', () => {
            cardCarousel.classList.add('hidden');
            video.classList.remove("hidden");
            cardCarousel.classList.remove('visible');
        });
    });
});


