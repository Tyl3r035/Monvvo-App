import '../css/contact.css';
// Formspree Redirect
document.addEventListener('DOMContentLoaded', () => {
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

    // FAQ Toggle Functionality
    const faqTitles = document.querySelectorAll('.faq-title');

    faqTitles.forEach((title) => {
        title.addEventListener('click', () => {
            // Close all other FAQ items and reset arrows
            const allFaqTexts = document.querySelectorAll('.faq-text');
            const allFaqArrows = document.querySelectorAll('.faq-arrow');
            allFaqTexts.forEach((text) => {
                if (text !== title.nextElementSibling) {
                    text.style.display = 'none';
                }
            });
            allFaqArrows.forEach((arrow) => {
                if (arrow !== title.querySelector('.faq-arrow')) {
                    arrow.classList.remove('active');
                }
            });

            // Toggle the clicked FAQ item
            const faqText = title.nextElementSibling;
            const faqArrow = title.querySelector('.faq-arrow');
            if (faqText.style.display === 'none' || !faqText.style.display) {
                faqText.style.display = 'block'; // Show the description
                faqArrow.classList.add('active'); // Rotate arrow
            } else {
                faqText.style.display = 'none'; // Hide the description
                faqArrow.classList.remove('active'); // Reset arrow
            }
        });
    });


    // Existing contact form functionality
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


});