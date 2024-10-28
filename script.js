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


var elem = document.getElementById("myvideo");//FULLSCREEN
    elem.addEventListener("click", ()=>{
        if (elem.requestFullscreen) {
        elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { 
        elem.msRequestFullscreen();
        }
    })


    for (let i= 1; i < 4; i++){
        document.addEventListener('DOMContentLoaded', function () {
            const video1 = document.querySelector('.video-containers'+i);
            const cardCarousel1 = document.querySelector('.card-carousel'+i);
            const closeCarouselButtons1 = document.querySelectorAll('.close-carousel'+i); // Sélectionne tous les boutons "Fermer"
        
            video1.addEventListener('click', () => {
        
                cardCarousel1.classList.toggle('hidden');
                video1.classList.add("hidden");
                cardCarousel1.classList.toggle('visible');
        
        
                
        
        
        
            });
        
            // Ajoute un événement "click" à chaque bouton "Fermer"
            closeCarouselButtons1.forEach(button => {
                button.addEventListener('click', () => {
                    cardCarousel1.classList.add('hidden');
                    video1.classList.remove("hidden");
                    cardCarousel1.classList.remove('visible');
                });
            });
        });
        
        
        var elem1 = document.getElementById("myvideo1");//FULLSCREEN
            elem1.addEventListener("click", ()=>{
                if (elem1.requestFullscreen) {
                elem1.requestFullscreen();
                } else if (elem.mozRequestFullScreen) {
                elem1.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) {
                elem1.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) { 
                elem1.msRequestFullscreen();
                }
            })
    }
        