import { generateMortgagePdf } from "./pdf/mortgage-pdf.js";

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");

    

    // Disable Google Analytics on localhost
    if (window.location.hostname === "localhost") {
        console.log("Running on localhost, disabling Google Analytics");
    }

    // Mortgage calculation functionality
    const homePriceInput = document.getElementById('home-price');
    const downPaymentAmountInput = document.getElementById('down-payment-amount');
    const downPaymentPercentageInput = document.getElementById('down-payment-percentage');
    const loanTermInput = document.getElementById('loan-term');
    const interestRateInput = document.getElementById('interest-rate');
    const paymentFrequencyInput = document.getElementById('payment-frequency');
    const propertyTaxInput = document.getElementById('property-tax');
    const pmiExpenseInput = document.getElementById('pmi-expense');
    const hoaExpenseInput = document.getElementById('hoa-expense');
    const updateBtn = document.getElementById('update-btn');
    const resetBtn = document.getElementById('reset-btn');
    const canvas = document.getElementById('mortgageChart');
    const amortizationChartCanvas = document.getElementById('amortizationChart');
    const labelsContainer = document.getElementById('chartLabels');
    const amortizationLabelsContainer = document.getElementById('amortizationLabels');



    const defaultValues = {
        homePrice: 500000,
        downPaymentAmount: 25000,
        downPaymentPercentage: 5,
        loanTerm: 25,
        interestRate: 7.04,
        propertyTax: 250,
        pmiExpense: 200,
        hoaExpense: 0
    };


    homePriceInput.placeholder = defaultValues.homePrice;
    downPaymentAmountInput.placeholder = defaultValues.downPaymentAmount;
    downPaymentPercentageInput.placeholder = defaultValues.downPaymentPercentage;
    loanTermInput.value = defaultValues.loanTerm; // Keep loan term as value since it is a dropdown
    interestRateInput.placeholder = defaultValues.interestRate;
    propertyTaxInput.placeholder = defaultValues.propertyTax;
    pmiExpenseInput.placeholder = defaultValues.pmiExpense;
    hoaExpenseInput.placeholder = defaultValues.hoaExpense;

    // Set payment frequency to default
    paymentFrequencyInput.value = "monthly";


    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const inputsToRestrict = [
        homePriceInput,
        downPaymentAmountInput,
        downPaymentPercentageInput,
        loanTermInput,
        interestRateInput,
        propertyTaxInput,
        pmiExpenseInput,
        hoaExpenseInput
    ];

    inputsToRestrict.forEach(input => {
        input.addEventListener('keydown', function (event) {
            if (event.key === "-" || event.key === "e") {
                event.preventDefault();
            }
        });
    });

    let lastAmortizationData = null;

    downPaymentAmountInput.addEventListener('input', function () {
        const homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice;
        const downPaymentAmount = parseFloat(downPaymentAmountInput.value) || 0;
        const downPaymentPercentage = (downPaymentAmount / homePrice) * 100;
        downPaymentPercentageInput.value = Number.isInteger(downPaymentPercentage)
            ? downPaymentPercentage
            : downPaymentPercentage.toFixed(2);
    });

    downPaymentPercentageInput.addEventListener('input', function () {
        const homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice;
        const downPaymentPercentage = parseFloat(downPaymentPercentageInput.value) || 0;
        const downPaymentAmount = Math.ceil((downPaymentPercentage / 100) * homePrice);
        downPaymentAmountInput.value = downPaymentAmount;
    });

    homePriceInput.addEventListener('input', function () {
        const homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice;
        const downPaymentAmount = parseFloat(downPaymentAmountInput.value) || 0;
        const downPaymentPercentage = (downPaymentAmount / homePrice) * 100;
        downPaymentPercentageInput.value = Number.isInteger(downPaymentPercentage)
            ? downPaymentPercentage
            : downPaymentPercentage.toFixed(2);
    });

    updateBtn.addEventListener('click', function (event) {
        event.preventDefault();
        console.log("Update button clicked");
        calculateAndDisplayResults();
    });

    resetBtn.addEventListener('click', function (event) {
        event.preventDefault();
        console.log("Reset button clicked");
        resetInputs();
    });

    const tabPaymentBreakdown = document.getElementById("tab-payment-breakdown");
    const tabAmortizationSchedule = document.getElementById("tab-amortization-schedule");

    const paymentBreakdownContent = document.getElementById("payment-breakdown-content");
    const amortizationScheduleContent = document.getElementById("amortization-schedule-content");





function showTab(tabName) {
    if (tabName === "payment") {
        // Show Payment Breakdown tab
        paymentBreakdownContent.style.display = "block";
        amortizationScheduleContent.style.display = "none";
        tabPaymentBreakdown.classList.add("tab-active");
        tabAmortizationSchedule.classList.remove("tab-active");

        if (lastAmortizationData) {
            const {
                periodicPrincipalAndInterest,
                periodicPropertyTax,
                periodicPMI,
                periodicHOA,
            } = lastAmortizationData;

            console.log("Redrawing Payment Breakdown tab:", {
                periodicPrincipalAndInterest,
                periodicPropertyTax,
                periodicPMI,
                periodicHOA,
            });

            // Redraw the stacked bar chart
            updateHorizontalStackedBarChart(
                periodicPrincipalAndInterest,
                periodicPropertyTax,
                periodicPMI,
                periodicHOA
            );
        } else {
            console.error("No data available for Payment Breakdown tab.");
        }
    } else if (tabName === "amortization") {
        // Show Amortization tab
        paymentBreakdownContent.style.display = "none";
        amortizationScheduleContent.style.display = "block";
        tabPaymentBreakdown.classList.remove("tab-active");
        tabAmortizationSchedule.classList.add("tab-active");

        if (lastAmortizationData) {
            const {
                balanceData,
                cumulativeInterestData,
                cumulativePrincipalData,
                totalInterestPaid,
                totalPrincipalPaid,
                totalAmountPaid,
            } = lastAmortizationData;

            console.log("Switching to Amortization tab:", {
                balanceData,
                cumulativeInterestData,
                cumulativePrincipalData,
                totalInterestPaid,
                totalPrincipalPaid,
                totalAmountPaid,
            });

            // Draw amortization chart
            drawAmortizationChart(
                balanceData,
                cumulativeInterestData,
                cumulativePrincipalData
            );

            // Update amortization chart labels
            updateAmortizationLabels(
                totalInterestPaid,
                totalPrincipalPaid,
                totalAmountPaid
            );
        } else {
            console.error("No data available for Amortization tab.");
        }
    }
}





    tabPaymentBreakdown.addEventListener("click", () => showTab("payment"));
    tabAmortizationSchedule.addEventListener("click", () => showTab("amortization"));
    


    function calculateAndDisplayResults() {
        console.log("Calculating and displaying results");
    
        // Retrieve inputs with fallback to default values
        const homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice;
        const downPaymentAmount = parseFloat(downPaymentAmountInput.value) || defaultValues.downPaymentAmount;
        const loanTerm = parseInt(loanTermInput.value) || defaultValues.loanTerm;
        const interestRate = parseFloat(interestRateInput.value) || defaultValues.interestRate;
        const propertyTax = parseFloat(propertyTaxInput.value) || defaultValues.propertyTax;
        const pmiExpense = parseFloat(pmiExpenseInput.value) || defaultValues.pmiExpense;
        const hoaExpense = parseFloat(hoaExpenseInput.value) || defaultValues.hoaExpense;
    
        // Calculations for principal, interest rate, and number of payments
        const principal = homePrice - downPaymentAmount;
        const monthlyInterestRate = (interestRate / 100) / 12;
        const numberOfPayments = loanTerm * 12;
    
        // Calculate monthly principal and interest payment
        const periodicPrincipalAndInterest = principal * monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, numberOfPayments) /
            (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    
        // Keep additional inputs as monthly values
        const periodicPropertyTax = propertyTax;
        const periodicPMI = pmiExpense;
        const periodicHOA = hoaExpense;
    
        // Adjustments for payment frequency
        const selectedFrequency = paymentFrequencyInput.value;
        let paymentFactor = 1; // Default to monthly
        if (selectedFrequency === 'biweekly') {
            paymentFactor = 12 / 26;
        } else if (selectedFrequency === 'weekly') {
            paymentFactor = 12 / 52;
        } else if (selectedFrequency === 'accelerated-biweekly') {
            paymentFactor = 1 / 26;
        } else if (selectedFrequency === 'accelerated-weekly') {
            paymentFactor = 1 / 52;
        }
    
        // Adjust only principal and interest for frequency
        const adjustedPrincipalAndInterest = periodicPrincipalAndInterest * paymentFactor;
    
        // Keep additional inputs unadjusted
        const adjustedPropertyTax = periodicPropertyTax; // Unchanged
        const adjustedPMI = periodicPMI; // Unchanged
        const adjustedHOA = periodicHOA; // Unchanged
    
        // Update Payment Breakdown
        updateLabels(adjustedPrincipalAndInterest, adjustedPropertyTax, adjustedPMI, adjustedHOA);
        updateHorizontalStackedBarChart(
            adjustedPrincipalAndInterest,
            adjustedPropertyTax,
            adjustedPMI,
            adjustedHOA
        );
    
        const amortizationData = calculateAmortizationSchedule(
            principal,
            monthlyInterestRate,
            periodicPrincipalAndInterest,
            numberOfPayments
        );
    
        populateAmortizationTable(amortizationData); // Pass entire data object
    
        // Render Amortization Chart
        drawAmortizationChart(
            amortizationData.balanceData,
            amortizationData.cumulativeInterestData,
            amortizationData.cumulativePrincipalData
        );
    
        // Update Amortization Chart Labels
        updateAmortizationLabels(
            amortizationData.totalInterestPaid,
            amortizationData.totalPrincipalPaid,
            amortizationData.totalAmountPaid
        );
    
        // Store data for later use
        lastAmortizationData = {
            ...amortizationData, // Include amortization data
            periodicPrincipalAndInterest: adjustedPrincipalAndInterest,
            periodicPropertyTax: adjustedPropertyTax,
            periodicPMI: adjustedPMI,
            periodicHOA: adjustedHOA,
        };

        // initializeExpandCollapseLogic();

    
        console.log("Updated lastAmortizationData:", {
            principal,
            monthlyInterestRate,
            numberOfPayments,
            periodicPrincipalAndInterest,
            totalPayment: adjustedPrincipalAndInterest + adjustedPropertyTax + adjustedPMI + adjustedHOA,
            lastAmortizationData,
        });
    }
    










function updateHoverValues(balance, interest, principal) {
    const labelValues = amortizationLabelsContainer.querySelectorAll('.label-value');
    if (labelValues.length === 3) {
        labelValues[0].textContent = formatter.format(interest);   // Update interest label
        labelValues[1].textContent = formatter.format(principal); // Update principal label
        labelValues[2].textContent = formatter.format(balance);   // Update balance label
    }
}




    
    function resetInputs() {
        console.log("Resetting inputs to default values");
    
        // Clear inputs without populating default values
        homePriceInput.value = "";
        downPaymentAmountInput.value = "";
        downPaymentPercentageInput.value = "";
        loanTermInput.value = "25";
        interestRateInput.value = "";
        propertyTaxInput.value = "";
        pmiExpenseInput.value = "";
        hoaExpenseInput.value = "";
    
        // Reset payment frequency to monthly
        paymentFrequencyInput.value = "monthly";
    
        // Recalculate using default values (inputs remain blank)
        calculateAndDisplayResults();
    }
    



    function drawRoundedRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        ctx.clip();
    }



    function updateHorizontalStackedBarChart(principalAndInterest, propertyTax, pmi, hoa) {
        console.log("Chart Data - Principal & Interest:", principalAndInterest);
        console.log("Chart Data - Property Tax:", propertyTax);
        console.log("Chart Data - PMI:", pmi);
        console.log("Chart Data - HOA:", hoa);
        const canvas = document.getElementById('mortgageChart');
        const ctx = canvas.getContext('2d');
        const parentWidth = canvas.parentElement.offsetWidth;
    
        // Set canvas dimensions
        canvas.width = parentWidth;
        canvas.height = 100; // Standard height for the bar chart
    
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        // Data and colors
        const data = [principalAndInterest, propertyTax, pmi, hoa];
        const labels = ['Principal & Interest', 'Property Tax', 'PMI', 'HOA'];
        const colors = ['#175134', '#3EB721', '#91BBA6', '#B3D4C2'];
    
        // Chart dimensions
        const chartHeight = 60;
        const chartWidth = canvas.width;
        const total = data.reduce((a, b) => a + b, 0);
        const maxTotal = Math.max(total, 1); // Avoid division by zero
        const gap = 2; // Gap between segments
        const yOffset = canvas.height / 2 - chartHeight / 2;
    
        let cumulativeWidth = 0;
    
        // Draw each segment
        data.forEach((value, index) => {
            let segmentWidth = (value / maxTotal) * chartWidth - gap;
    
            // Ensure the last segment fills the remaining width
            if (index === data.length - 1) {
                segmentWidth = chartWidth - cumulativeWidth; // Adjust last segment to fill remaining space
            }
    
            ctx.fillStyle = colors[index];
    
            // Apply border radius to the first and last segments only
            const isFirstSegment = index === 0;
            const isLastSegment = index === data.length - 1;
    
            drawOuterRoundedRect(
                ctx,
                cumulativeWidth, // X position
                yOffset, // Y position
                segmentWidth, // Width
                chartHeight, // Height
                5, // Border radius for outer edges
                isFirstSegment,
                isLastSegment
            );
    
            cumulativeWidth += segmentWidth + gap; // Increment for next bar
        });
    
        // Update the labels below the chart
        updateStackedBarLabels(principalAndInterest, propertyTax, pmi, hoa, labels, colors);
    }
    
    /**
     * Update the labels below the stacked bar chart.
     */
    function updateStackedBarLabels(principalAndInterest, propertyTax, pmi, hoa, labels, colors) {
        const labelsContainer = document.getElementById('chartLabels');
        labelsContainer.innerHTML = ''; // Clear any existing labels
    
        const data = [principalAndInterest, propertyTax, pmi, hoa];
    
        data.forEach((value, index) => {
            const labelItem = document.createElement('div');
            labelItem.classList.add('label-item');
    
            const colorCircle = document.createElement('span');
            colorCircle.classList.add('color-circle');
            colorCircle.style.backgroundColor = colors[index];
    
            const labelName = document.createElement('span');
            labelName.classList.add('label-name');
            labelName.textContent = labels[index];
    
            const labelValue = document.createElement('span');
            labelValue.classList.add('label-value');
            labelValue.textContent = `${formatter.format(value)}`;
    
            labelItem.appendChild(colorCircle);
            labelItem.appendChild(labelName);
            labelItem.appendChild(labelValue);
    
            labelsContainer.appendChild(labelItem);
        });
    }
    
    /**
     * Helper function to draw rounded rectangles only on outer edges.
     */
    function drawOuterRoundedRect(ctx, x, y, width, height, radius, isFirst, isLast) {
        ctx.beginPath();
    
        // Top-left corner
        if (isFirst) {
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width, y); // Top edge
        } else {
            ctx.moveTo(x, y);
            ctx.lineTo(x + width, y); // Top edge
        }
    
        // Top-right corner
        if (isLast) {
            ctx.lineTo(x + width, y + radius);
            ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
        } else {
            ctx.lineTo(x + width, y); // Top-right edge (no rounding)
        }
    
        // Bottom-right corner
        if (isLast) {
            ctx.lineTo(x + width - radius, y + height);
            ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
        } else {
            ctx.lineTo(x + width, y + height); // Bottom-right edge (no rounding)
        }
    
        // Bottom-left corner
        if (isFirst) {
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
        } else {
            ctx.lineTo(x, y + height); // Bottom-left edge (no rounding)
            ctx.lineTo(x, y); // Close the rectangle
        }
    
        ctx.closePath();
        ctx.fill();
    }
    

    function updateLabels(principalAndInterest, propertyTax, pmi, hoa) {
        const periodicPaymentElement = document.getElementById('monthly-payment-value');
        const selectedFrequency = paymentFrequencyInput.value;
    
        let frequencyLabel = "Month";
        if (selectedFrequency === "biweekly") {
            frequencyLabel = "Bi-Week";
        } else if (selectedFrequency === "weekly") {
            frequencyLabel = "Week";
        } else if (selectedFrequency === "accelerated-biweekly") {
            frequencyLabel = "Accelerated Bi-Week";
        } else if (selectedFrequency === "accelerated-weekly") {
            frequencyLabel = "Accelerated Week";
        }
    
        // Calculate total periodic payment
        const totalPeriodicPayment = principalAndInterest + propertyTax + pmi + hoa;
    
        // Update the payment element
        periodicPaymentElement.innerHTML = `
            <span class="payment-amount">$${formatter.format(totalPeriodicPayment)}</span>
            <span class="payment-frequency"> / ${frequencyLabel}</span>
        `;
        
    }
    
    
    function calculateAmortizationSchedule(principal, monthlyInterestRate, monthlyPrincipalAndInterest, numberOfPayments) {
        const amortizationData = []; // Array to hold each period's data
        let balance = principal;
        let totalInterestPaid = 0;
        let totalPrincipalPaid = 0;
    
        for (let i = 0; i < numberOfPayments; i++) {
            const interestPayment = balance * monthlyInterestRate;
            const principalPayment = monthlyPrincipalAndInterest - interestPayment;
            balance = Math.max(balance - principalPayment, 0);
    
            totalInterestPaid += interestPayment;
            totalPrincipalPaid += principalPayment;
    
            amortizationData.push({
                principal: principalPayment,
                interest: interestPayment,
                balance: balance
            });
    
            if (balance <= 0) break; // Stop if fully paid
        }
    
        return {
            schedule: amortizationData, // Array for the table
            balanceData: amortizationData.map(row => row.balance),
            cumulativeInterestData: amortizationData.map((row, index) =>
                amortizationData.slice(0, index + 1).reduce((sum, r) => sum + r.interest, 0)
            ),
            cumulativePrincipalData: amortizationData.map((row, index) =>
                amortizationData.slice(0, index + 1).reduce((sum, r) => sum + r.principal, 0)
            ),
            totalInterestPaid,
            totalPrincipalPaid,
            totalAmountPaid: totalInterestPaid + totalPrincipalPaid,
        };
    }
    
    function populateAmortizationTable(amortizationData) {
        const tableBody = document.getElementById('amortization-table-body');
        tableBody.innerHTML = ''; // Clear existing rows
    
        amortizationData.schedule.forEach((row, index) => {
            const tr = document.createElement('tr');
    
            const dateCell = document.createElement('td');
            const date = new Date();
            date.setMonth(date.getMonth() + index); // Increment month
            dateCell.textContent = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
            tr.appendChild(dateCell);
    
            const principalCell = document.createElement('td');
            principalCell.textContent = `$${formatter.format(row.principal)}`;
            tr.appendChild(principalCell);
    
            const interestCell = document.createElement('td');
            interestCell.textContent = `$${formatter.format(row.interest)}`;
            tr.appendChild(interestCell);
    
            const balanceCell = document.createElement('td');
            balanceCell.textContent = `$${formatter.format(row.balance)}`;
            tr.appendChild(balanceCell);
    
            tableBody.appendChild(tr);
        });
    
        document.getElementById('amortization-schedule').style.display = 'block'; // Show table
    
        // Ensure toggle functionality works with the new rows
        initializeExpandCollapseLogic(); // Call the toggle initialization
    }
    
    
  
    function initializeExpandCollapseLogic() {
        const expandBox = document.querySelector(".expand-box");
        const amortizationTableBody = document.getElementById("amortization-table-body");
        const expandText = document.querySelector(".expand-text");
    
        // Ensure the elements exist
        if (!expandBox || !amortizationTableBody || !expandText) {
            console.error("Expand/Collapse elements not found.");
            return;
        }
    
        console.log("Expand/Collapse Logic Initialized");
    
        // Initial state: show only the first three rows
        const rows = Array.from(amortizationTableBody.rows);
        rows.forEach((row, index) => {
            row.style.display = index < 3 ? "table-row" : "none";
        });
    
        // Add click event for toggling
        expandBox.addEventListener("click", function () {
            const isExpanded = expandText.textContent === "Expand";
    
            console.log(`Expand box clicked. Current state: ${isExpanded ? "Expanding" : "Collapsing"}`);
    
            // Toggle row visibility
            rows.forEach((row, index) => {
                row.style.display = isExpanded || index < 3 ? "table-row" : "none";
            });
    
            // Update the expand/collapse text
            expandText.textContent = isExpanded ? "Collapse" : "Expand";
        });
    }
    

    function drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData, hoverIndex = null) {
        const canvas = document.getElementById('amortizationChart');
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
    
        // Adjust canvas dimensions dynamically
        const isSmallScreen = window.innerWidth < 700;
        const canvasHeight = isSmallScreen ? 200 : 300;
    
        canvas.width = canvas.parentElement.offsetWidth * dpr;
        canvas.height = canvasHeight * dpr;
        ctx.scale(dpr, dpr);
    
        const width = canvas.width / dpr;
        const height = canvas.height / dpr;
    
        // Adjust padding to prevent overlap
        const padding = { top: 10, right: 15, bottom: 50, left: 50 };
        const gridColor = '#d0d0d0';
        const labelColor = '#505050';
    
        const yAxisMax = Math.ceil(
            Math.max(...balanceData, ...cumulativeInterestData, ...cumulativePrincipalData) / 100000
        ) * 100000;
    
        // Helper functions to calculate positions
        function getY(value) {
            return height - padding.bottom - (value / yAxisMax) * (height - padding.top - padding.bottom);
        }
    
        function getX(index) {
            return padding.left + (index / (balanceData.length - 1)) * (width - padding.left - padding.right);
        }
    
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        // Draw horizontal grid lines (Y-axis) and labels
        ctx.font = '12px Arial';
        ctx.textAlign = 'right';
        ctx.fillStyle = labelColor;
        ctx.strokeStyle = gridColor;
    
        for (let i = 0; i <= yAxisMax; i += 100000) {
            const y = getY(i);
    
            // Grid line
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(width - padding.right, y);
            ctx.stroke();
    
            // Y-axis label (place left of padding)
            ctx.fillText(`$${(i / 1000).toFixed(0)}K`, padding.left - 10, y + 5);
        }
    
        // Draw vertical grid lines (X-axis) every 5 years
        const months = balanceData.length;
        const years = Math.floor(months / 12);
        ctx.textAlign = 'center';
    
        for (let i = 0; i <= years; i += 5) {
            const monthIndex = i * 12;
            const x = getX(monthIndex);
            const yearLabel = new Date().getFullYear() + i;
    
            // Grid line
            ctx.beginPath();
            ctx.moveTo(x, padding.top);
            ctx.lineTo(x, height - padding.bottom);
            ctx.stroke();
    
            // X-axis label (place below padding)
            ctx.fillText(yearLabel, x, height - 10);
        }
    
        // Draw balance data line
        ctx.strokeStyle = '#175134';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i < balanceData.length; i++) {
            const x = getX(i);
            const y = getY(balanceData[i]);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    
        // Draw cumulative principal line
        ctx.strokeStyle = '#3EB721';
        ctx.beginPath();
        for (let i = 0; i < cumulativePrincipalData.length; i++) {
            const x = getX(i);
            const y = getY(cumulativePrincipalData[i]);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    
        // Draw cumulative interest line
        ctx.strokeStyle = '#91BBA6';
        ctx.beginPath();
        for (let i = 0; i < cumulativeInterestData.length; i++) {
            const x = getX(i);
            const y = getY(cumulativeInterestData[i]);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    
        // Draw hover effects if hoverIndex is provided
        if (hoverIndex !== null) {
            const x = getX(hoverIndex);
            const balanceY = getY(balanceData[hoverIndex]);
            const principalY = getY(cumulativePrincipalData[hoverIndex]);
            const interestY = getY(cumulativeInterestData[hoverIndex]);
    
            // Draw vertical hover line
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x, padding.top);
            ctx.lineTo(x, height - padding.bottom);
            ctx.stroke();
    
            // Draw hover dots
            const dotRadius = 4;
            ctx.fillStyle = '#175134'; // Balance dot color
            ctx.beginPath();
            ctx.arc(x, balanceY, dotRadius, 0, Math.PI * 2);
            ctx.fill();
    
            ctx.fillStyle = '#3EB721'; // Principal dot color
            ctx.beginPath();
            ctx.arc(x, principalY, dotRadius, 0, Math.PI * 2);
            ctx.fill();
    
            ctx.fillStyle = '#91BBA6'; // Interest dot color
            ctx.beginPath();
            ctx.arc(x, interestY, dotRadius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    




    
    amortizationChartCanvas.addEventListener('mousemove', (event) => {
        const rect = amortizationChartCanvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
    
        const padding = { top: 30, right: 25, bottom: 30, left: 70 };
    
        if (x >= padding.left && x <= amortizationChartCanvas.offsetWidth - padding.right) {
            const chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
    
            const index = Math.round(
                ((x - padding.left) / chartWidth) * (lastAmortizationData.balanceData.length - 1)
            );
    
            if (index >= 0 && index < lastAmortizationData.balanceData.length) {
                updateHoverValues(
                    lastAmortizationData.balanceData[index],
                    lastAmortizationData.cumulativeInterestData[index],
                    lastAmortizationData.cumulativePrincipalData[index]
                );
    
                const startDate = new Date();
                const hoverDate = new Date(startDate.setMonth(startDate.getMonth() + index));
                displayHoverDate(hoverDate);
    
                drawAmortizationChart(
                    lastAmortizationData.balanceData,
                    lastAmortizationData.cumulativeInterestData,
                    lastAmortizationData.cumulativePrincipalData,
                    index
                );
            }
        }
    });
    
    // Add support for touchmove
    amortizationChartCanvas.addEventListener('touchmove', handleTouchEvent);
    amortizationChartCanvas.addEventListener('touchstart', handleTouchEvent);
    

    

    function handleTouchEvent(event) {
        const rect = amortizationChartCanvas.getBoundingClientRect();
        const touch = event.touches[0] || event.changedTouches[0];
        const x = touch.clientX - rect.left;
        const padding = { top: 30, right: 25, bottom: 30, left: 70 };
    
        if (x < padding.left || x > amortizationChartCanvas.offsetWidth - padding.right) {
            // If touch is outside the chart, clear hover effects
            revertValuesToTotals();
            const hoverDateContainer = document.getElementById('amortizationHoverDate');
            hoverDateContainer.textContent = ''; // Clear the hover date
            drawAmortizationChart(
                lastAmortizationData.balanceData,
                lastAmortizationData.cumulativeInterestData,
                lastAmortizationData.cumulativePrincipalData
            );
        } else {
            const chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
            const index = Math.round(
                ((x - padding.left) / chartWidth) * (lastAmortizationData.balanceData.length - 1)
            );
    
            if (index >= 0 && index < lastAmortizationData.balanceData.length) {
                updateHoverValues(
                    lastAmortizationData.balanceData[index],
                    lastAmortizationData.cumulativeInterestData[index],
                    lastAmortizationData.cumulativePrincipalData[index]
                );
    
                const startDate = new Date();
                const hoverDate = new Date(startDate.setMonth(startDate.getMonth() + index));
                displayHoverDate(hoverDate);
    
                drawAmortizationChart(
                    lastAmortizationData.balanceData,
                    lastAmortizationData.cumulativeInterestData,
                    lastAmortizationData.cumulativePrincipalData,
                    index
                );
            }
        }
    
        event.preventDefault(); // Prevent default scrolling
    }
    
   
   
   
    function displayHoverDate(date) {
        const hoverDateContainer = document.getElementById('amortizationHoverDate');
        const month = date.toLocaleString('default', { month: 'long' }); // Full month name
        const year = date.getFullYear();
        hoverDateContainer.textContent = `${month} ${year}`;
    }
    


  
    amortizationChartCanvas.addEventListener('mouseout', () => {
        revertValuesToTotals();
    
        const hoverDateContainer = document.getElementById('amortizationHoverDate');
        hoverDateContainer.textContent = ''; // Clear the hover date
    
        drawAmortizationChart(
            lastAmortizationData.balanceData,
            lastAmortizationData.cumulativeInterestData,
            lastAmortizationData.cumulativePrincipalData
        );
    });
    
    // Add touchend for mobile devices
    amortizationChartCanvas.addEventListener('touchend', () => {
        revertValuesToTotals();
    
        const hoverDateContainer = document.getElementById('amortizationHoverDate');
        hoverDateContainer.textContent = ''; // Clear the hover date
    
        drawAmortizationChart(
            lastAmortizationData.balanceData,
            lastAmortizationData.cumulativeInterestData,
            lastAmortizationData.cumulativePrincipalData
        );
    });
    



/* PDF Generation Logic */
    function revertValuesToTotals() {
        const { totalInterestPaid, totalPrincipalPaid, totalAmountPaid } = lastAmortizationData;
        updateHoverValues(totalAmountPaid, totalInterestPaid, totalPrincipalPaid);
    }
    
    function updateAmortizationLabels(totalInterestPaid, totalPrincipalPaid, totalAmountPaid) {
        const labels = [
            { label: 'Total Interest Paid', value: totalInterestPaid, color: '#3EB721' },
            { label: 'Total Principal Paid', value: totalPrincipalPaid, color: '#91BBA6' },
            { label: 'Balance (Total Paid)', value: totalAmountPaid, color: '#175134' }
        ];
        
        amortizationLabelsContainer.innerHTML = ''; // Clear previous labels
        
        labels.forEach(item => {
            const labelElement = document.createElement('div');
            labelElement.classList.add('label-item'); // Use CSS class instead of inline styles
            
            const colorCircle = document.createElement('span');
            colorCircle.classList.add('color-circle');
            colorCircle.style.backgroundColor = item.color;
            
            const labelText = document.createElement('span');
            labelText.classList.add('label-name'); // Apply consistent class
            labelText.textContent = item.label;
            
            const labelValue = document.createElement('span');
            labelValue.classList.add('label-value'); // Apply consistent class
            labelValue.textContent = formatter.format(item.value).replace('$', '');
            
            labelElement.appendChild(colorCircle);
            labelElement.appendChild(labelText);
            labelElement.appendChild(labelValue);
            
            amortizationLabelsContainer.appendChild(labelElement);
        });
    }
    

    calculateAndDisplayResults();

    function calculateAmortizationData(homePrice, downPaymentAmount, interestRate, loanTerm) {
        const principal = homePrice - downPaymentAmount;
        const monthlyInterestRate = interestRate / 100 / 12;
        const numberOfPayments = loanTerm * 12;
    
        const amortizationData = [];
        let balance = principal;
    
        for (let i = 0; i < numberOfPayments; i++) {
            const interestPayment = balance * monthlyInterestRate;
            const principalPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)) - interestPayment;
            balance = Math.max(balance - principalPayment, 0);
    
            amortizationData.push({
                date: new Date(new Date().setMonth(new Date().getMonth() + i)).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                }),
                principal: principalPayment,
                interest: interestPayment,
                balance: balance,
            });
    
            if (balance <= 0) break;
        }
    
        return amortizationData;
    }
    
// Get the export button
const exportButton = document.querySelector(".btn-icon-fluid");

// Remove existing listeners
exportButton.replaceWith(exportButton.cloneNode(true));

// Add the event listener
document.querySelector(".btn-icon-fluid").addEventListener("click", () => {
    const homePrice = parseFloat(document.getElementById("home-price").value) || 500000;
    const downPaymentAmount = parseFloat(document.getElementById("down-payment-amount").value) || 25000;
    const interestRate = parseFloat(document.getElementById("interest-rate").value) || 7.04;
    const loanTerm = parseInt(document.getElementById("loan-term").value) || 25;

    const paymentData = [
        { label: "Home Price", value: homePrice },
        { label: "Down Payment", value: downPaymentAmount },
        { label: "Loan Term (Years)", value: loanTerm },
        { label: "Interest Rate (%)", value: interestRate },
    ];

    const amortizationData = calculateAmortizationData(homePrice, downPaymentAmount, interestRate, loanTerm);





    
    // Generate the PDF
    generateMortgagePdf(paymentData, amortizationData);
});




    console.log("End of script reached");    

});
