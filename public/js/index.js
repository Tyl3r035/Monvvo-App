import './header.js';

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


// Save scroll position before the page unloads
window.addEventListener("beforeunload", () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
});

// Restore scroll position on page load without smooth scrolling
window.addEventListener("DOMContentLoaded", () => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
        // Temporarily disable smooth scrolling
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo(0, parseInt(scrollPosition, 10));
        
        // Re-enable smooth scrolling after restoring position
        document.documentElement.style.scrollBehavior = "smooth";
    }
});
