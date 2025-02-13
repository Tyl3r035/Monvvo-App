import './header.js';

// Ensure that smooth scrolling is disabled by setting scroll behavior to auto
document.documentElement.style.scrollBehavior = "auto";

// Immediately force the page to start at the top
window.scrollTo(0, 0);

// Disable browser scroll restoration so no previous scroll is applied
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Lazy Loading Logic
document.addEventListener('DOMContentLoaded', () => {
  // Make sure the page is at the top when the DOM is ready
  window.scrollTo(0, 0);

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
