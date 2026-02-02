// Terminal typing effect
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add interactive hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#F9F9F9';
        });
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#FFFFFF';
        });
    });

    // Animate skill bars on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.skill-bar-fill');
                fills.forEach(fill => {
                    const width = fill.style.width;
                    fill.style.width = '0%';
                    setTimeout(() => {
                        fill.style.width = width;
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const skillsSection = document.querySelector('.skills-grid');
    if (skillsSection) {
        observer.observe(skillsSection.parentElement);
    }

    // Button click effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // You can add your own button click handlers here
            console.log('Button clicked:', this.textContent);
        });
    });

    // Easter egg: Press any key continues
    let keyPressed = false;
    document.addEventListener('keydown', function(e) {
        if (!keyPressed && e.key) {
            keyPressed = true;
            const footer = document.querySelector('.footer-blink');
            if (footer) {
                footer.textContent = '> Loading... █';
                setTimeout(() => {
                    footer.textContent = 'Press any key to continue...';
                    keyPressed = false;
                }, 2000);
            }
        }
    });
});
