// ====================================
// Mobile Menu Toggle
// ====================================

const menuToggle = document.getElementById('menuToggle');
const mainMenu = document.getElementById('mainMenu');

// Toggle menu visibility on hamburger click
menuToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('header__menu--active');
});

// Close menu when clicking on a link
const menuLinks = document.querySelectorAll('.header__menu-link');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainMenu.classList.remove('header__menu--active');
    });
});


// ====================================
// Smooth Scroll for Navigation Links
// ====================================

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ====================================
// Scroll to Top Button
// ====================================

const scrollTopBtn = document.getElementById('scrollTop');

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('scroll-top--visible');
    } else {
        scrollTopBtn.classList.remove('scroll-top--visible');
    }
});

// Scroll to top when button is clicked
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// ====================================
// Contact Form Submission Handler
// ====================================

const contactForm = document.getElementById('contactForm');

// Handle form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        businessSize: document.getElementById('businessSize').value,
        message: document.getElementById('message').value
    };

    console.log('Form submitted:', formData);

    alert('Thank you for your interest! We will contact you shortly to schedule your AI strategy session.');

    contactForm.reset();
});


// ====================================
// Newsletter Form Submission Handler
// ====================================

const newsletterForm = document.getElementById('newsletterForm');

// Handle newsletter subscription
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = newsletterForm.querySelector('.footer__newsletter-input');
    const email = emailInput.value;

    console.log('Newsletter subscription:', email);

    alert('Thank you for subscribing! You will receive our latest AI insights and growth strategies.');

    newsletterForm.reset();
});

