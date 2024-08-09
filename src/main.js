import './index.css'
import 'flowbite'

let currentIndex=0;
    const slides = document.querySelectorAll('.hero-slider > div');
    const totalSlides = slides.length

function showNextSlide() {
        currentIndex=(currentIndex + 1) % totalSlides;
        document.querySelector('.hero-slider').style.trasform= `translateX(-${currentIndex *100}%)`;
}

setTimeout(showNextSlide, 3000);