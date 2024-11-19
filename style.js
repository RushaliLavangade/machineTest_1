document.getElementById("icn").addEventListener("click", togl)

function togl(){
    document.getElementsByClassName("slide1")[0].style.left="0%"
    
}


document.getElementById("ic2").addEventListener("click", togl1)

function togl1(){
    document.getElementsByClassName("slide1")[0].style.left="-100%"
    
}


const carousel = document.getElementById('carouselExampleRide');
    const slideNumberParagraph = document.getElementById('slide-number');
    const totalSlides = document.querySelectorAll('#carouselExampleRide .carousel-item').length;

    carousel.addEventListener('slid.bs.carousel', (event) => {
        const activeIndex = event.to + 1; // Index starts at 0, so add 1
        slideNumberParagraph.textContent = `${activeIndex} of ${totalSlides}`;
    });


document.getElementsByClassName("dot")[0].addEventListener("click", togl2)

function togl2(){
    document.getElementsByClassName("box")[0].classList.toggle("boxtgl")
}

document.getElementsByClassName("dot1")[0].addEventListener("click", togl3)

function togl3(){
    document.getElementsByClassName("box1")[0].classList.toggle("box1tgl")
}

document.getElementsByClassName("dot2")[0].addEventListener("click", togl4)

function togl4(){
    document.getElementsByClassName("box2")[0].classList.toggle("box2tgl")
}