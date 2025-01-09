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

// FAQ JS
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isVisible = answer.style.display === 'block';

        // Close all open answers and reset rotation
        document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
        document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));

        // Toggle the clicked question and rotation
        if (!isVisible) {
            answer.style.display = 'block';
            question.classList.add('active');
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