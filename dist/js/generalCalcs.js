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
    tooltip.style.display = "block"; // Ensure tooltip is visible before calculating size
    const iconRect = icon.getBoundingClientRect();
    const tooltipWidth = tooltip.offsetWidth; // Dynamically calculate width
    const tooltipHeight = tooltip.offsetHeight; // Dynamically calculate height
    const screenWidth = window.innerWidth;

    if (screenWidth <= 390) {
        // Change only when screen is 390px or less
        tooltip.style.width = `${screenWidth * 0.9}px`; // Set width to 90% of screen
        tooltip.style.left = `${(screenWidth - tooltip.offsetWidth) / 2 + window.scrollX}px`; // Center it
    } else {
        // Keep original styling for larger screens
        tooltip.style.width = "auto"; 
        tooltip.style.left = `${window.scrollX + iconRect.left - tooltipWidth - 5}px`; // Default position
    }

    // Maintain original vertical position
    tooltip.style.top = `${window.scrollY + iconRect.top - tooltipHeight - 5}px`;
    tooltip.classList.add("visible");
}

function hideTooltip(tooltip) {
    tooltip.classList.remove("visible");
    tooltip.style.display = "none"; // Ensure tooltip is completely hidden
}

function hideAllTooltips() {
    document.querySelectorAll(".info-tooltips.visible").forEach((tooltip) => {
        tooltip.classList.remove("visible");
        tooltip.style.display = "none";
    });
}
