document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in class to the body
    document.body.classList.add('fade-in');

    // Make the body visible after a short delay to allow the fade-in effect
    setTimeout(function() {
        document.body.classList.add('visible');
    }, 10);
});
