document.addEventListener('DOMContentLoaded', function() {
    const infoIcons = document.querySelectorAll('.material-symbols-outlined');

    if (infoIcons.length > 0) {
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

                    const viewportWidth = window.innerWidth;
                    const viewportHeight = window.innerHeight;

                    if (offsetX < 0) {
                        offsetX = iconRect.right + 5;
                    } else if (offsetX + infoText.offsetWidth > viewportWidth) {
                        offsetX = viewportWidth - infoText.offsetWidth - 5;
                    }

                    if (offsetY + infoText.offsetHeight > window.scrollY + viewportHeight) {
                        offsetY = window.scrollY + iconRect.top - infoText.offsetHeight - 5;
                    }

                    infoText.style.left = `${offsetX}px`;
                    infoText.style.top = `${offsetY}px`;
                }
            });
        });
    }

    document.addEventListener('click', function() {
        document.querySelectorAll('.info-text-fluid').forEach(text => text.style.display = 'none');
    });

    document.querySelectorAll('.info-text-fluid').forEach(text => {
        text.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});
