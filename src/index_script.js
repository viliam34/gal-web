let img_id = 0;
const totalSlides = 3;
let isSliding = false;

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === img_id) {
            dot.classList.add('active');
        }
    });
}

function slideCarousel() {
    const carousel = document.querySelector('.carousel');
    const translateValue = -img_id * 33.333; // Move by 1/3 of total width
    carousel.style.transform = `translateX(${translateValue}%)`;
    updateDots();
}

function changeBackgroundImg(btn_id){
    if (isSliding) return;
    
    isSliding = true;
    
    if (btn_id == 'left'){
        img_id -= 1;
    }
    if(btn_id == 'right'){
        img_id += 1;
    }

    // Handle dot clicks
    if(typeof btn_id === 'number'){
        img_id = btn_id;
    }

    // Wrap around logic
    if(img_id >= totalSlides){
        img_id = 0;
    }
    if(img_id < 0){
        img_id = totalSlides - 1;
    }
    
    slideCarousel();
    
    // Reset sliding flag after animation completes
    setTimeout(() => {
        isSliding = false;
    }, 800);
}

function currentSlide(slideIndex) {
    changeBackgroundImg(slideIndex - 1);
}

// Auto-advance slideshow - DISABLED
// setInterval(() => {
//     changeBackgroundImg('right');
// }, 5000);

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateDots();
});