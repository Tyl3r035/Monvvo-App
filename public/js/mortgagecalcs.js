// Toggle Functionality
const advancedText = document.getElementById("advanced-text-fluid");
const additionalInputs = document.getElementById("additional-inputs");
const advancedArrow = document.getElementById('advanced-arrow');

if (advancedText && additionalInputs) {
    // Start with the additional inputs hidden
    additionalInputs.style.display = "none";

    // Toggle display style directly in JavaScript
    advancedText.addEventListener("click", function () {
        console.log("Advanced options toggled");
        if (additionalInputs.style.display === "none") {
            additionalInputs.style.display = "flex";
            advancedArrow.style.rotate = "180deg";
        } else {
            additionalInputs.style.display = "none";
            advancedArrow.style.rotate = "0deg";
        }
    });
} else {
    console.log("Advanced options elements not found");
}

// Tab toggle functionality for "Payment Breakdown" and "Amortization Schedule"
const tabPaymentBreakdown = document.getElementById('tab-payment-breakdown');
const tabAmortizationSchedule = document.getElementById('tab-amortization-schedule');
const paymentBreakdownContent = document.getElementById('payment-breakdown-content');
const amortizationScheduleContent = document.getElementById('amortization-schedule-content');

if (tabPaymentBreakdown && tabAmortizationSchedule && paymentBreakdownContent && amortizationScheduleContent) {
    function switchTab(selectedTab) {
        if (selectedTab === 'payment') {
            paymentBreakdownContent.style.display = 'block';
            amortizationScheduleContent.style.display = 'none';
            tabPaymentBreakdown.classList.add('tab-active');
            tabAmortizationSchedule.classList.remove('tab-active');
        } else if (selectedTab === 'amortization') {
            paymentBreakdownContent.style.display = 'none';
            amortizationScheduleContent.style.display = 'block';
            tabPaymentBreakdown.classList.remove('tab-active');
            tabAmortizationSchedule.classList.add('tab-active');
        }
    }

    // Event listeners for tab clicks
    tabPaymentBreakdown.addEventListener('click', function () {
        switchTab('payment');
    });

    tabAmortizationSchedule.addEventListener('click', function () {
        switchTab('amortization');
    });

    // Set initial view to "Payment Breakdown"
    switchTab('payment');
} else {
    console.log("Tab elements for Payment Breakdown and Amortization Schedule not found");
}

//Tooltip Info Icon JS
const infoIcons = document.querySelectorAll('.info-icon');

infoIcons.forEach(icon => {
    const tooltipText = icon.getAttribute('data-tooltip');
    if (tooltipText) {
        const tooltip = document.createElement('div');
        tooltip.className = 'info-tooltips';
        tooltip.textContent = tooltipText;
        document.body.appendChild(tooltip); // Append to body for consistent positioning

        icon.addEventListener('mouseenter', () => {
            const iconRect = icon.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();

            // Adjust position based on page scroll to ensure it remains fixed above and to the left of the icon
            const tooltipX = window.pageXOffset + iconRect.right - tooltipRect.width - 5; // 5px to the left of the icon's right edge
            const tooltipY = window.pageYOffset + iconRect.top - tooltipRect.height - 5;   // 5px above the icon's top edge

            tooltip.style.left = `${tooltipX}px`;
            tooltip.style.top = `${tooltipY}px`;

            tooltip.classList.add('visible');
        });

        icon.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
        });
    }
});