document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animate hamburger lines
        hamburger.classList.toggle('toggle');
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // --- Smooth Scroll is handled by CSS (html { scroll-behavior: smooth }), 
    // but we can add an offset for fixed header if needed via JS or scroll-padding in CSS.
    // For now, let's ensure the nav bg becomes solid on scroll if we want that effect later.
});
