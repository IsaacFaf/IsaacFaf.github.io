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


    for (let i= 1; i < 6; i++){
        document.addEventListener('DOMContentLoaded', function () {
            if (i=1){
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



            if (i=2){
                const video2 = document.querySelector('.video-containers'+i);
                const cardCarousel2 = document.querySelector('.card-carousel'+i);
                const closeCarouselButtons2 = document.querySelectorAll('.close-carousel'+i); // Sélectionne tous les boutons "Fermer"
            
            
                video2.addEventListener('click', () => {
                
                    cardCarousel2.classList.toggle('hidden');
                    video2.classList.add("hidden");
                    cardCarousel2.classList.toggle('visible');
            
            
                    
            
            
            
                });
            
                // Ajoute un événement "click" à chaque bouton "Fermer"
                closeCarouselButtons2.forEach(button => {
                    button.addEventListener('click', () => {
                        cardCarousel2.classList.add('hidden');
                        video2.classList.remove("hidden");
                        cardCarousel2.classList.remove('visible');
                    });
                });
            var elem2 = document.getElementById("myvideo2");//FULLSCREEN
                    elem2.addEventListener("click", ()=>{
                        if (elem2.requestFullscreen) {
                        elem2.requestFullscreen();
                        } else if (elem2.mozRequestFullScreen) {
                        elem2.mozRequestFullScreen();
                        } else if (elem2.webkitRequestFullscreen) {
                        elem2.webkitRequestFullscreen();
                        } else if (elem2.msRequestFullscreen) { 
                        elem2.msRequestFullscreen();
                        }
                    })
            }


            if (i=3){
                const video3 = document.querySelector('.video-containers'+i);
                const cardCarousel3 = document.querySelector('.card-carousel'+i);
                const closeCarouselButtons3 = document.querySelectorAll('.close-carousel'+i); // Sélectionne tous les boutons "Fermer"
            
            
                video3.addEventListener('click', () => {
                
                    cardCarousel3.classList.toggle('hidden');
                    video3.classList.add("hidden");
                    cardCarousel3.classList.toggle('visible');
            
            
                    
            
            
            
                });
            
                // Ajoute un événement "click" à chaque bouton "Fermer"
                closeCarouselButtons3.forEach(button => {
                    button.addEventListener('click', () => {
                        cardCarousel3.classList.add('hidden');
                        video3.classList.remove("hidden");
                        cardCarousel3.classList.remove('visible');
                    });
                });
            var elem3 = document.getElementById("myvideo"+i);//FULLSCREEN
                    elem3.addEventListener("click", ()=>{
                        if (elem3.requestFullscreen) {
                        elem3.requestFullscreen();
                        } else if (elem3.mozRequestFullScreen) {
                        elem3.mozRequestFullScreen();
                        } else if (elem3.webkitRequestFullscreen) {
                        elem3.webkitRequestFullscreen();
                        } else if (elem3.msRequestFullscreen) { 
                        elem3.msRequestFullscreen();
                        }
                    })
            }





            if (i=4){
                const video4 = document.querySelector('.video-containers'+i);
                const cardCarousel4 = document.querySelector('.card-carousel'+i);
                const closeCarouselButtons4 = document.querySelectorAll('.close-carousel'+i); // Sélectionne tous les boutons "Fermer"
            
            
                video4.addEventListener('click', () => {
                
                    cardCarousel4.classList.toggle('hidden');
                    video4.classList.add("hidden");
                    cardCarousel4.classList.toggle('visible');
            
            
                    
            
            
            
                });
            
                // Ajoute un événement "click" à chaque bouton "Fermer"
                closeCarouselButtons4.forEach(button => {
                    button.addEventListener('click', () => {
                        cardCarousel4.classList.add('hidden');
                        video4.classList.remove("hidden");
                        cardCarousel4.classList.remove('visible');
                    });
                });
            var elem4 = document.getElementById("myvideo"+i);//FULLSCREEN
                    elem4.addEventListener("click", ()=>{
                        if (elem4.requestFullscreen) {
                        elem4.requestFullscreen();
                        } else if (elem4.mozRequestFullScreen) {
                        elem4.mozRequestFullScreen();
                        } else if (elem4.webkitRequestFullscreen) {
                        elem4.webkitRequestFullscreen();
                        } else if (elem4.msRequestFullscreen) { 
                        elem4.msRequestFullscreen();
                        }
                    })
            }




            if (i=5){
                const video5 = document.querySelector('.video-containers'+i);
                const cardCarousel5 = document.querySelector('.card-carousel'+i);
                const closeCarouselButtons5 = document.querySelectorAll('.close-carousel'+i); // Sélectionne tous les boutons "Fermer"
            
            
                video5.addEventListener('click', () => {
                
                    cardCarousel5.classList.toggle('hidden');
                    video5.classList.add("hidden");
                    cardCarousel5.classList.toggle('visible');
            
            
                    
            
            
            
                });
            
                // Ajoute un événement "click" à chaque bouton "Fermer"
                closeCarouselButtons5.forEach(button => {
                    button.addEventListener('click', () => {
                        cardCarousel5.classList.add('hidden');
                        video5.classList.remove("hidden");
                        cardCarousel5.classList.remove('visible');
                    });
                });
            var elem5 = document.getElementById("myvideo"+i);//FULLSCREEN
                    elem5.addEventListener("click", ()=>{
                        if (elem5.requestFullscreen) {
                        elem5.requestFullscreen();
                        } else if (elem5.mozRequestFullScreen) {
                        elem5.mozRequestFullScreen();
                        } else if (elem5.webkitRequestFullscreen) {
                        elem5.webkitRequestFullscreen();
                        } else if (elem5.msRequestFullscreen) { 
                        elem5.msRequestFullscreen();
                        }
                    })
            }


            
        });
        
        
        
    }
        