const videoContainer = document.querySelector('.video-container');
const videos = document.querySelectorAll('.presentation');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentVideoIndex = 0;

function playOneThirdOfVideo(video) {
    // Vérifiez que la durée de la vidéo est valide avant de procéder
    if (video.duration > 0) {
        const oneThirdTime = video.duration / 3;
        const randomOffset = (Math.random() * 14) - 7;
        const startTime = Math.min(Math.max(oneThirdTime + randomOffset, 0), video.duration);

        // Log des valeurs pour le débogage
        console.log("Duration:", video.duration);
        console.log("One Third Time:", oneThirdTime);
        console.log("Random Offset:", randomOffset);
        console.log("Start Time:", startTime);

        // Vérifiez que startTime est un nombre valide avant de le définir
        if (isFinite(startTime)) {
            video.currentTime = startTime;
            video.play();

            setTimeout(() => {
                video.pause();
                currentVideoIndex = (currentVideoIndex + 1) % videos.length;
                updateVideo();
            }, 8000);
        } else {
            console.error("startTime is not a finite number:", startTime);
        }
    } else {
        console.error("Video duration is invalid:", video.duration);
    }
}

function updateVideo() {
    videoContainer.style.transform = `translateX(-${currentVideoIndex * 100}%)`;

    videos.forEach((video, index) => {
        if (index === currentVideoIndex) {
            playOneThirdOfVideo(video);
        } else {
            video.pause();
        }
    });
}

rightArrow.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    updateVideo();
});

leftArrow.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    updateVideo();
});

// Initialisation de la première vidéo
videos.forEach((video, index) => {
    video.addEventListener('loadedmetadata', () => {
        if (index === currentVideoIndex) {
            playOneThirdOfVideo(video);
        }
    });
});

// Initialisation de la première vidéo
updateVideo();


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



//EFFET BUTTON
