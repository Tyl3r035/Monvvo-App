/******/ (() => { // webpackBootstrap
// Tooltip Info Icon JS
var infoIcons = document.querySelectorAll(".info-icon");

// Track currently visible tooltip
var activeTooltip = null;
infoIcons.forEach(function (icon) {
  var tooltipText = icon.getAttribute("data-tooltip");
  if (tooltipText) {
    var tooltip = document.createElement("div");
    tooltip.className = "info-tooltips";
    tooltip.textContent = tooltipText;
    document.body.appendChild(tooltip); // Append to body for consistent positioning

    // Show tooltip on click (toggle)
    icon.addEventListener("click", function (event) {
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
document.addEventListener("click", function () {
  hideAllTooltips();
  activeTooltip = null;
});
function showTooltip(icon, tooltip) {
  tooltip.style.display = "block"; // Ensure tooltip is visible before calculating size
  var iconRect = icon.getBoundingClientRect();
  var tooltipWidth = tooltip.offsetWidth; // Dynamically calculate width
  var tooltipHeight = tooltip.offsetHeight; // Dynamically calculate height
  var screenWidth = window.innerWidth;
  if (screenWidth <= 390) {
    // Change only when screen is 390px or less
    tooltip.style.width = "".concat(screenWidth * 0.9, "px"); // Set width to 90% of screen
    tooltip.style.left = "".concat((screenWidth - tooltip.offsetWidth) / 2 + window.scrollX, "px"); // Center it
  } else {
    // Keep original styling for larger screens
    tooltip.style.width = "auto";
    tooltip.style.left = "".concat(window.scrollX + iconRect.left - tooltipWidth - 5, "px"); // Default position
  }

  // Maintain original vertical position
  tooltip.style.top = "".concat(window.scrollY + iconRect.top - tooltipHeight - 5, "px");
  tooltip.classList.add("visible");
}
function hideTooltip(tooltip) {
  tooltip.classList.remove("visible");
  tooltip.style.display = "none"; // Ensure tooltip is completely hidden
}
function hideAllTooltips() {
  document.querySelectorAll(".info-tooltips.visible").forEach(function (tooltip) {
    tooltip.classList.remove("visible");
    tooltip.style.display = "none";
  });
}
/******/ })()
;
//# sourceMappingURL=generalCalcs.8359bae798a37154ce47.js.map