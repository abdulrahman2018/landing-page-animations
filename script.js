// JavaScript to trigger animations when elements come into view
const elements = document.querySelectorAll('.feature-card, .testimonial-card, .contact-form');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

elements.forEach(element => {
    observer.observe(element);
});
