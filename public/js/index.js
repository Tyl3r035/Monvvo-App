import '../css/reset.css';
import '../css/styles.css';
import './mortgage-calculator.js';
import './mortgagecalcs.js'
import './utils.js';
import emailjs from 'emailjs-com';

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

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_tq3utyr', 'template_7wx87yw', e.target, '3oAkujQUbJuuWbt1u')
    .then((result) => {
      alert('Message sent successfully!');
    }, (error) => {
      alert('Failed to send message. Please try again.');
    });
};
