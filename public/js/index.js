import '../css/reset.css';
import '../css/styles.css';
import './mortgage-calculator.js';
import './mortgagecalcs.js'
import './utils.js';

// Your additional JavaScript logic here

// Lazy Loading Logic
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    import(`../img/${lazyImage.dataset.src}`)
                        .then(module => {
                            lazyImage.src = module.default;
                            lazyImage.classList.remove('lazy');
                        })
                        .catch(err => console.error('Failed to load image', err));
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(lazyImage => {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        lazyImages.forEach(lazyImage => {
            import(`../img/${lazyImage.dataset.src}`)
                .then(module => {
                    lazyImage.src = module.default;
                    lazyImage.classList.remove('lazy');
                })
                .catch(err => console.error('Failed to load image', err));
        });
    }
});

// Formspree Redirect
document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent page reload

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('https://formspree.io/f/myzybazr', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('Thank you! Your message has been sent.');
            form.reset();
        } else {
            alert('Oops! There was a problem submitting your form.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred.');
    }
});
