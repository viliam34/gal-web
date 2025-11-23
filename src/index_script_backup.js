
let img_id = 0;
let isAnimating = false;
const totalSlides = 3;

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === img_id) {
            dot.classList.add('active');
        }
    });
}

function showSlide(index, direction = 'next') {
    if (isAnimating) return;
    
    isAnimating = true;
    const slides = document.querySelectorAll('.slide');
    const currentSlide = slides[img_id];
    const nextSlide = slides[index];
    
    // Set initial position for incoming slide
    if (direction === 'next') {
        nextSlide.style.transform = 'translateX(100%)';
    } else {
        nextSlide.style.transform = 'translateX(-100%)';
    }
    
    // Remove all classes first
    slides.forEach(slide => {
        slide.classList.remove('active', 'prev');
    });
    
    // Force a reflow to ensure the transform is applied
    nextSlide.offsetHeight;
    
    // Start animation
    nextSlide.classList.add('active');
    
    if (direction === 'next') {
        currentSlide.style.transform = 'translateX(-100%)';
    } else {
        currentSlide.style.transform = 'translateX(100%)';
    }
    
    // Reset animation flag after transition
    setTimeout(() => {
        isAnimating = false;
        // Reset all slides except active one
        slides.forEach((slide, i) => {
            if (i !== index) {
                slide.style.transform = 'translateX(100%)';
            }
        });
    }, 600);
    
    updateDots();
}

function changeBackgroundImg(btn_id){
    if (isAnimating) return;
    
    const previousId = img_id;
    let direction = 'next';
    
    if (btn_id == 'left'){
        img_id -= 1;
        direction = 'prev';
    }
    if(btn_id == 'right'){
        img_id += 1;
        direction = 'next';
    }

    // Handle dot clicks
    if(typeof btn_id === 'number'){
        direction = btn_id > previousId ? 'next' : 'prev';
        img_id = btn_id;
    }

    // Wrap around logic
    if(img_id >= totalSlides){
        img_id = 0;
    }
    if(img_id < 0){
        img_id = totalSlides - 1;
    }
    
    showSlide(img_id, direction);
    console.log('Current slide:', img_id);
}

function currentSlide(slideIndex) {
    changeBackgroundImg(slideIndex - 1);
}

// Auto-advance slideshow
let autoSlide = setInterval(() => {
    changeBackgroundImg('right');
}, 8000);

// Pause auto-slide on hover
document.addEventListener('DOMContentLoaded', function() {
    const slideshow = document.querySelector('.slideshow-container');
    
    slideshow.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });
    
    slideshow.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            changeBackgroundImg('right');
        }, 8000);
    });
    
    // Initialize first slide
    const slides = document.querySelectorAll('.slide');
    slides[0].classList.add('active');
    slides[0].style.transform = 'translateX(0%)';
    updateDots();
});
