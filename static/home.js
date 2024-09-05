// JavaScript for Kisaan Mitra Website

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// "Get Started" button click event
document.querySelector('.hero .btn').addEventListener('click', function () {
    alert('Redirecting to the registration page...');
    window.location.href = 'http://127.0.0.1:5000/register';
});

// Toggle mobile menu
const nav = document.querySelector('nav');
const toggleMenu = document.createElement('div');
toggleMenu.className = 'toggle-menu';
toggleMenu.innerHTML = '&#9776;'; // Hamburger icon
nav.insertBefore(toggleMenu, nav.firstChild);

toggleMenu.addEventListener('click', function () {
    nav.classList.toggle('active');
});

// Hide menu on link click (for mobile view)
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function () {
        nav.classList.remove('active');
    });
});

// Handle footer social media links click
document.querySelectorAll('.socials a').forEach(socialLink => {
    socialLink.addEventListener('click', function (e) {
        e.preventDefault();
        alert('This will open the respective social media page in a new tab.');
        window.open(this.href, '_blank');
    });
});
