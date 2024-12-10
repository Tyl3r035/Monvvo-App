/******/ (() => { // webpackBootstrap
// document.addEventListener("DOMContentLoaded", function () {
//     const advancedText = document.getElementById("advanced-text-fluid");
//     const additionalInputs = document.getElementById("additional-inputs");
//     const advancedArrow = document.getElementById("advanced-arrow");

//     if (!advancedText || !additionalInputs || !advancedArrow) {
//         console.error("One or more required elements are missing");
//         return;
//     }

//     console.log("Elements found, initializing event listener");

//     advancedText.addEventListener("click", function () {
//         console.log("Click event triggered");

//         if (additionalInputs.classList.contains("visible")) {
//             console.log("Hiding additional inputs");
//             additionalInputs.classList.remove("visible");
//             advancedArrow.style.transform = "rotate(0deg)";
//         } else {
//             console.log("Showing additional inputs");
//             additionalInputs.classList.add("visible");
//             advancedArrow.style.transform = "rotate(180deg)";
//         }
//     });
// });

// Tab toggle functionality for "Payment Breakdown" and "Amortization Schedule"
var tabPaymentBreakdown = document.getElementById("tab-payment-breakdown");
var tabAmortizationSchedule = document.getElementById("tab-amortization-schedule");
var paymentBreakdownContent = document.getElementById("payment-breakdown-content");
var amortizationScheduleContent = document.getElementById("amortization-schedule-content");
if (tabPaymentBreakdown && tabAmortizationSchedule && paymentBreakdownContent && amortizationScheduleContent) {
  var switchTab = function switchTab(selectedTab) {
    if (selectedTab === "payment") {
      paymentBreakdownContent.style.display = "block";
      amortizationScheduleContent.style.display = "none";
      tabPaymentBreakdown.classList.add("tab-active");
      tabAmortizationSchedule.classList.remove("tab-active");
    } else if (selectedTab === "amortization") {
      paymentBreakdownContent.style.display = "none";
      amortizationScheduleContent.style.display = "block";
      tabPaymentBreakdown.classList.remove("tab-active");
      tabAmortizationSchedule.classList.add("tab-active");
    }
  }; // Event listeners for tab clicks
  tabPaymentBreakdown.addEventListener("click", function () {
    switchTab("payment");
  });
  tabAmortizationSchedule.addEventListener("click", function () {
    switchTab("amortization");
  });

  // Set initial view to "Payment Breakdown"
  switchTab("payment");
} else {
  console.log("Tab elements for Payment Breakdown and Amortization Schedule not found");
}

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

// Amortization Table Expansion Logic
var expandBox = document.querySelector(".expand-box");
var amortizationTableBody = document.getElementById("amortization-table-body");
var expandText = document.querySelector(".expand-text");
var expandIcon = document.querySelector(".expand-icon");

// Ensure the elements exist before adding event listeners
if (expandBox && amortizationTableBody && expandText && expandIcon) {
  // Initialize the table to show only the first three rows
  var rows = Array.from(amortizationTableBody.rows);
  rows.forEach(function (row, index) {
    row.style.display = index < 3 ? "table-row" : "none";
  });

  // Add click event to the expand-box
  expandBox.addEventListener("click", function () {
    var isExpanded = expandText.textContent === "Expand";

    // Toggle row visibility
    rows.forEach(function (row, index) {
      row.style.display = isExpanded || index < 3 ? "table-row" : "none";
    });

    // Update the expand/collapse text
    expandText.textContent = isExpanded ? "Collapse" : "Expand";

    // Rotate the icon
    expandIcon.style.transform = isExpanded ? "rotate(180deg)" : "rotate(0deg)";
  });
} else {
  console.error("Expand/Collapse elements not found. Ensure the HTML structure is correct.");
}
/******/ })()
;
//# sourceMappingURL=generalCalcs.5795ab1851535377dfbe.js.map