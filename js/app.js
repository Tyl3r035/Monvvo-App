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
                const infoTextRect = infoText.getBoundingClientRect();
                const offsetX = iconRect.left - infoTextRect.width - 5;
                const offsetY = window.scrollY + iconRect.top - infoTextRect.height - 5;

                // Ensure the tooltip does not go outside the viewport
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;
                const adjustedOffsetX = offsetX < 0 ? 5 : offsetX;
                const adjustedOffsetY = offsetY < 0 ? 5 : offsetY;

                infoText.style.position = 'absolute';
                infoText.style.left = `${Math.min(adjustedOffsetX, viewportWidth - infoTextRect.width - 5)}px`;
                infoText.style.top = `${Math.min(adjustedOffsetY, viewportHeight - infoTextRect.height - 5)}px`;
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
