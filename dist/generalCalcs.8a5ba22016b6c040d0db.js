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
  var iconRect = icon.getBoundingClientRect();
  var tooltipWidth = tooltip.offsetWidth; // Dynamically calculate width
  var tooltipHeight = tooltip.offsetHeight; // Dynamically calculate height

  // Align the tooltip's right edge with the left edge of the icon
  var tooltipX = window.scrollX + iconRect.left - tooltipWidth - 5;
  // Position tooltip directly above the icon with a 5px gap
  var tooltipY = window.scrollY + iconRect.top - tooltipHeight - 5;
  tooltip.style.left = "".concat(tooltipX, "px");
  tooltip.style.top = "".concat(tooltipY, "px");
  tooltip.classList.add("visible");
}
function hideTooltip(tooltip) {
  tooltip.classList.remove("visible");
}
function hideAllTooltips() {
  document.querySelectorAll(".info-tooltips.visible").forEach(function (tooltip) {
    tooltip.classList.remove("visible");
  });
}
/******/ })()
;
//# sourceMappingURL=generalCalcs.8a5ba22016b6c040d0db.js.map