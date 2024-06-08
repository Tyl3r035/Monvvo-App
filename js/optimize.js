// optimize.js

// Minify CSS function
function minifyCSS(css) {
    return css.replace(/\s+/g, ' ')
              .replace(/\/\*.*?\*\//g, '')
              .replace(/;\s*}/g, '}')
              .replace(/\s*{\s*/g, '{')
              .replace(/\s*:\s*/g, ':')
              .replace(/\s*;\s*/g, ';');
}

// Minify JS function
function minifyJS(js) {
    return js.replace(/\s+/g, ' ')
             .replace(/\/\*.*?\*\//g, '')
             .replace(/;\s*}/g, '}')
             .replace(/\s*{\s*/g, '{')
             .replace(/\s*:\s*/g, ':')
             .replace(/\s*;\s*/g, ';');
}

// Lazy load images function
function lazyLoadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        observer.unobserve(lazyImage);
                    }
                });
            });
            observer.observe(img);
        } else {
            img.src = img.dataset.src;
        }
    });
}

// Minify inline styles and scripts
function minifyInline() {
    const styles = document.querySelectorAll('style');
    styles.forEach(style => {
        style.textContent = minifyCSS(style.textContent);
    });

    const scripts = document.querySelectorAll('script');
    scripts.forEach(script => {
        if (script.type === '' || script.type === 'text/javascript') {
            script.textContent = minifyJS(script.textContent);
        }
    });
}

// Add lazy load attribute to images
function addLazyLoad() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('data-src')) {
            img.setAttribute('data-src', img.src);
            img.setAttribute('src', '');
        }
        img.classList.add('lazyload');
    });
}

// Initialize optimizations
document.addEventListener('DOMContentLoaded', function() {
    addLazyLoad();
    lazyLoadImages();
    minifyInline();
});

