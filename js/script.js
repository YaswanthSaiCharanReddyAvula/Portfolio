/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== scroll reveal ====================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.home-content', { origin: 'bottom' });
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form, .skills-container, .timeline, .cert-list', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Penetration Tester', 'Cyber Security Enthusiast','Ethical Hacker', 'Bug Bounty Hunter'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*==================== theme toggle ====================*/
const themeToggle = document.querySelector('#theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('light')) {
            icon.classList.remove('bx-moon');
            icon.classList.add('bx-sun');
        } else {
            icon.classList.remove('bx-sun');
            icon.classList.add('bx-moon');
        }
    });
}

/*==================== contact form inline success ====================*/
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        formStatus.hidden = false;
        contactForm.reset();
    });
}

/*==================== contact form mailto ====================*/
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = contactForm.elements['name'].value;
            const email = contactForm.elements['email'].value;
            const phone = contactForm.elements['phone'].value;
            const subject = contactForm.elements['subject'].value;
            const message = contactForm.elements['message'].value;
            const mailto = `mailto:yaswanthsai.charan@gmail.com?subject=${encodeURIComponent(subject || 'Contact from Portfolio')}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
            )}`;
            window.location.href = mailto;
        });
    }
});