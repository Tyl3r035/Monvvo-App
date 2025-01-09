


// Tooltip Info Icon JS
const infoIcons = document.querySelectorAll(".info-icon");

// Track currently visible tooltip
let activeTooltip = null;

infoIcons.forEach((icon) => {
    const tooltipText = icon.getAttribute("data-tooltip");
    if (tooltipText) {
        const tooltip = document.createElement("div");
        tooltip.className = "info-tooltips";
        tooltip.textContent = tooltipText;
        document.body.appendChild(tooltip); // Append to body for consistent positioning

        // Show tooltip on click (toggle)
        icon.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent event bubbling
            if (activeTooltip === tooltip) {
                // Hide tooltip if already active
                hideTooltip(tooltip);
                activeTooltip = null;
            } else {
                // Hide any active tooltip and show the clicked one
                hideAllTooltips();
                showTooltip(icon, tooltip);
                activeTooltip = tooltip;
            }
        });
    }
});

// Hide tooltip when clicking outside
document.addEventListener("click", () => {
    hideAllTooltips();
    activeTooltip = null;
});



function showTooltip(icon, tooltip) {
    const iconRect = icon.getBoundingClientRect();
    const tooltipWidth = tooltip.offsetWidth; // Dynamically calculate width
    const tooltipHeight = tooltip.offsetHeight; // Dynamically calculate height

    // Align the tooltip's right edge with the left edge of the icon
    const tooltipX = window.scrollX + iconRect.left - tooltipWidth - 5;
    // Position tooltip directly above the icon with a 5px gap
    const tooltipY = window.scrollY + iconRect.top - tooltipHeight - 5;

    tooltip.style.left = `${tooltipX}px`;
    tooltip.style.top = `${tooltipY}px`;

    tooltip.classList.add("visible");
}





function hideTooltip(tooltip) {
    tooltip.classList.remove("visible");
}

function hideAllTooltips() {
    document.querySelectorAll(".info-tooltips.visible").forEach((tooltip) => {
        tooltip.classList.remove("visible");
    });
}
