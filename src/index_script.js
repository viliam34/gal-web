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
    // Scroll-to-top button behavior
    const scrollBtn = document.getElementById('scrollTopBtn');
    function handleScrollBtn() {
        const y = window.scrollY || document.documentElement.scrollTop;
        if (!scrollBtn) return;
        if (y > 200) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
        // Move down as you scroll
        const base = 60; // px
        const extra = Math.min(120, Math.round(y * 0.05));
        scrollBtn.style.bottom = (base + extra) + 'px';
    }
    handleScrollBtn();
    window.addEventListener('scroll', handleScrollBtn);

    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Nav active indicator (scroll spy)
    const navLinks = Array.from(document.querySelectorAll('.w3-bar .w3-bar-item[href^="#"]'));
    const sections = ['home','team','ako_to_funguje','contact']
        .map(id => ({ id, el: document.getElementById(id) }))
        .filter(s => !!s.el);

    function updateActiveNav() {
        const y = window.scrollY || document.documentElement.scrollTop;
        let currentId = sections[0]?.id;
        const offset = 120; // threshold above section start
        sections.forEach(s => {
            const top = s.el.getBoundingClientRect().top + window.scrollY;
            if (y >= top - offset) currentId = s.id;
        });
        navLinks.forEach(a => {
            a.classList.remove('nav-active');
            const href = a.getAttribute('href');
            if (href === '#' + currentId) {
                a.classList.add('nav-active');
            }
        });
    }
    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav);
});