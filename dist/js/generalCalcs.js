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
const tabPaymentBreakdown = document.getElementById("tab-payment-breakdown");
const tabAmortizationSchedule = document.getElementById("tab-amortization-schedule");
const paymentBreakdownContent = document.getElementById("payment-breakdown-content");
const amortizationScheduleContent = document.getElementById("amortization-schedule-content");

if (
    tabPaymentBreakdown &&
    tabAmortizationSchedule &&
    paymentBreakdownContent &&
    amortizationScheduleContent
) {
    function switchTab(selectedTab) {
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
    }

    // Event listeners for tab clicks
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

// Amortization Table Expansion Logic
const expandBox = document.querySelector(".expand-box");
const amortizationTableBody = document.getElementById("amortization-table-body");
const expandText = document.querySelector(".expand-text");
const expandIcon = document.querySelector(".expand-icon");

// Ensure the elements exist before adding event listeners
if (expandBox && amortizationTableBody && expandText && expandIcon) {
    // Initialize the table to show only the first three rows
    const rows = Array.from(amortizationTableBody.rows);
    rows.forEach((row, index) => {
        row.style.display = index < 3 ? "table-row" : "none";
    });

    // Add click event to the expand-box
    expandBox.addEventListener("click", function () {
        const isExpanded = expandText.textContent === "Expand";

        // Toggle row visibility
        rows.forEach((row, index) => {
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
