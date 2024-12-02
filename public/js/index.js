import '../css/reset.css';
import '../css/styles.css';
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

