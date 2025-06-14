// Load section content
async function loadSection(sectionId, sectionFile) {
    try {
        const response = await fetch(sectionFile);
        const content = await response.text();
        document.getElementById(sectionId).innerHTML = content;
    } catch (error) {
        console.error(`Error loading section ${sectionId}:`, error);
    }
}

// Load all sections
document.addEventListener('DOMContentLoaded', () => {
    loadSection('about-section', 'sections/about.html');
    loadSection('experience-section', 'sections/experience.html');
    loadSection('education-section', 'sections/education.html');
    loadSection('skills-section', 'sections/skills.html');
    loadSection('achievements-section', 'sections/achievements.html');
    loadSection('projects-section', 'sections/projects.html');
    loadSection('strengths-section', 'sections/strengths.html');
    loadSection('references-section', 'sections/references.html');
    loadSection('contact-section', 'sections/contact.html');
    loadSection('declaration-section', 'sections/declaration.html');

    // Initialize Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.observe(element);
    });

    // Add loading animation
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loading);

    // Hide loading animation when page is loaded
    window.addEventListener('load', () => {
        loading.classList.add('hidden');
        setTimeout(() => {
            loading.remove();
        }, 500);
    });
});

// Add scroll event listener for nav background
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-btn')) {
        nav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            nav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
}); 