document.addEventListener('DOMContentLoaded', function() {
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
                const bodyRect = document.body.getBoundingClientRect();
                const offsetX = iconRect.left - bodyRect.left;
                const offsetY = window.scrollY + iconRect.top - infoText.offsetHeight - 5;

                infoText.style.position = 'absolute';
                infoText.style.left = `${offsetX}px`;
                infoText.style.top = `${offsetY}px`;

                if (infoText.classList.contains('optional-info')) {
                    infoText.style.left = `${iconRect.left - infoText.offsetWidth - 5}px`;
                }
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
