document.addEventListener('DOMContentLoaded', function () {
    // Check if GSAP is loaded
    if (window.gsap) {
        // Animate specific elements (excluding the hero image)
        gsap.from('.hover-overlay', {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1,
            ease: 'power2.out',
        });

        // Optional: You can animate other parts of the page as needed
        gsap.from('.text-center > *', {
            opacity: 0,
            y: 30,
            duration: 1.5,
            ease: 'power3.out',
            stagger: 0.3,
        });
    }

    // Handle newsletter form submission
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Basic email validation
        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            alert('Thank you for subscribing to Tristana!');
            emailInput.value = ''; // Clear input
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Ensure hero image remains visible (no additional animation or hiding)
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.opacity = '1'; // Ensure visibility
    }
});
