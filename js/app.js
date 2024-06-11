document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in class to the body
    document.body.classList.add('fade-in');

    // Make the body visible after a short delay to allow the fade-in effect
    setTimeout(function() {
        document.body.classList.add('visible');
    }, 10);

    const infoIcons = document.querySelectorAll('.material-symbols-outlined');

    infoIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.stopPropagation();
            const infoText = this.nextElementSibling;
            if (infoText.style.display === 'block') {
                infoText.style.display = 'none';
            } else {
                document.querySelectorAll('.info-text-fluid').forEach(text => text.style.display = 'none');
                infoText.style.display = 'block';

                const iconRect = this.getBoundingClientRect();

                let offsetX = iconRect.left - infoText.offsetWidth - 5;
                let offsetY = window.scrollY + iconRect.bottom + 5;

                // Ensure the tooltip does not go outside the viewport
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;

                // Adjust horizontal position if it goes off screen
                if (offsetX < 0) {
                    offsetX = iconRect.right + 5;
                } else if (offsetX + infoText.offsetWidth > viewportWidth) {
                    offsetX = viewportWidth - infoText.offsetWidth - 5;
                }

                // Adjust vertical position if it goes off screen
                if (offsetY + infoText.offsetHeight > window.scrollY + viewportHeight) {
                    offsetY = window.scrollY + iconRect.top - infoText.offsetHeight - 5;
                }

                infoText.style.left = `${offsetX}px`;
                infoText.style.top = `${offsetY}px`;
            }
        });
    });

    document.addEventListener('click', function() {
        document.querySelectorAll('.info-text-fluid').forEach(text => text.style.display = 'none');
    });

    document.querySelectorAll('.info-text-fluid').forEach(text => {
        text.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});
