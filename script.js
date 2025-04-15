// Mobilā navigācija
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Pārslēdz navigāciju
    navLinks.classList.toggle('active');
    
    // Animē burgera ikonu
    burger.classList.toggle('toggle');
    
    // Animē navigācijas saites
    navLinksItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Slīdēšanas efekts uz navigācijas saitēm
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
        navLinksItems.forEach(link => {
            link.style.animation = '';
        });
    });
});

// Sticky navigācija
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

// Formas apstrāde
const contactForm = document.querySelector('.contact-form form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Šeit var pievienot formas apstrādes kodu
    alert('Paldies par ziņu! Es ar jums sazināšos drīz.');
    contactForm.reset();
});

// Gluda ritināšana uz sadaļām
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
