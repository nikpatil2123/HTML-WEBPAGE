document.addEventListener('DOMContentLoaded', function () {
    // Check if GSAP is loaded
    if (window.gsap) {
        
        gsap.from('.hover-overlay', {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1,
            ease: 'power2.out',
        });

        gsap.from('.text-center > *', {
            opacity: 0,
            y: 30,
            duration: 1.5,
            ease: 'power3.out',
            stagger: 0.3,
        });
    }

    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');

    form.addEventListener('submit', function (e) {
        e.preventDefault();


        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            alert('Thank you for subscribing to Tristana!');
            emailInput.value = ''; // Clear input
        } else {
            alert('Please enter a valid email address.');
        }
    });


    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.opacity = '1'; // Ensure visibility
    }
});
