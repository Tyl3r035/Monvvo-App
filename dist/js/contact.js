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
    });