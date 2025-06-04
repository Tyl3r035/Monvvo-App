import '../css/auto-payoff-calculator.css';

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");
// Inputs for Auto Loan Payoff Calculator
const loanBalanceInput = document.getElementById('loan-balance'); // Current loan balance
const termRemainingInput = document.getElementById('term-remaining'); // Remaining loan term in months
const interestRateInput = document.getElementById('interest-rate'); // Annual interest rate
const monthlyPaymentInput = document.getElementById('monthly-payment'); // Required monthly payment
const extraPaymentInput = document.getElementById('extra-payment'); // Extra monthly payment
const lumpSumInput = document.getElementById('lump-sum'); // One-time lump sum payment
const lumpDateInput = document.getElementById('lump-date'); // Lump sum payment date
const updateBtn = document.getElementById('update-btn'); // Update button
const resetBtn = document.getElementById('reset-btn'); // Reset button
const autoChartCanvas = document.getElementById('autoChart'); // Chart for visualization

// Default values
const defaultValues = {
    loanBalance: 17000, // Default current loan balance
    termRemaining: 46, // Default remaining term in months
    interestRate: 5.5, // Interest rate in percentage
    monthlyPayment: 496.23, // Default required monthly payment
    extraPayment: 150, // Default extra monthly payment
    lumpSum: 0, // Default lump sum payment
    lumpDate: "", // Default lump sum date (empty)
};

// Apply default values to input fields
loanBalanceInput.value = defaultValues.loanBalance;
termRemainingInput.value = defaultValues.termRemaining;
interestRateInput.value = defaultValues.interestRate;
monthlyPaymentInput.value = defaultValues.monthlyPayment;
extraPaymentInput.value = defaultValues.extraPayment;
lumpSumInput.value = defaultValues.lumpSum;
lumpDateInput.value = defaultValues.lumpDate;

// Helper: Format currency
const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

// Disable the lump sum date if lump sum is 0
function toggleLumpSumDateState() {
    const lumpSum = parseFloat(lumpSumInput.value) || 0;

    if (lumpSum > 0) {
        lumpDateInput.style.opacity = "1";  // Full opacity when enabled
        lumpDateInput.style.pointerEvents = "auto"; // Allow interactions
        lumpDateInput.disabled = false;
    } else {
        lumpDateInput.style.opacity = "0.3";  // Reduce opacity when disabled
        lumpDateInput.style.pointerEvents = "none"; // Prevent interactions
        lumpDateInput.disabled = true;
        lumpDateInput.value = ""; // Reset value if not being used
    }
}

// Event listener to trigger when lump sum input changes
lumpSumInput.addEventListener("input", toggleLumpSumDateState);

// Initialize state on page load
toggleLumpSumDateState();


// Declare lastAmortizationData globally
let lastAmortizationData = {
    schedule: [],
    totalInterestPaid: 0,
    totalPrincipalPaid: 0,
};

// ✅ Calculate and Display Results
function calculateAndDisplayResults() {
    // Extract input values
    const loanBalance = parseFloat(loanBalanceInput.value) || parseFloat(loanBalanceInput.placeholder) || defaultValues.loanBalance;
    const termRemaining = parseFloat(termRemainingInput.value) || parseFloat(termRemainingInput.placeholder) || defaultValues.termRemaining;
    const interestRate = (parseFloat(interestRateInput.value) || parseFloat(interestRateInput.placeholder) || defaultValues.interestRate) / 100;
    const monthlyPayment = parseFloat(monthlyPaymentInput.value) || parseFloat(monthlyPaymentInput.placeholder) || defaultValues.monthlyPayment;
    let extraPayment = parseFloat(extraPaymentInput.value) || 0;
    const lumpSum = parseFloat(lumpSumInput.value) || 0;
    const lumpDate = lumpDateInput.value;

    console.log("Calculation Triggered with Values:", { 
        loanBalance, termRemaining, interestRate, monthlyPayment, extraPayment, lumpSum, lumpDate 
    });

    const monthlyInterestRate = interestRate / 12;
    let remainingBalance = loanBalance;
    let totalInterestPaid = 0;
    let totalPrincipalPaid = 0;
    let monthsElapsed = 0;
    let amortizationSchedule = [];

    let cumulativeInterest = 0;
    let cumulativePrincipal = 0;
    let cumulativeInterestData = [];
    let cumulativePrincipalData = [];

    // ✅ Ensure Lump Sum is Applied at the Correct Month
    let lumpSumMonthIndex = -1;
    if (lumpDate) {
        const today = new Date();
        const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        const selectedDate = new Date(lumpDate);
        const monthsDifference = (selectedDate.getFullYear() - startDate.getFullYear()) * 12 + (selectedDate.getMonth() - startDate.getMonth());

        if (monthsDifference >= 0 && monthsDifference < termRemaining) {
            lumpSumMonthIndex = monthsDifference + 1;
        } else {
            console.warn("Lump sum date is outside the loan term.");
        }
    }

    // ✅ Loop through each month until the loan is paid off
    while (remainingBalance > 0 && monthsElapsed < termRemaining) {
        let interestPayment = remainingBalance * monthlyInterestRate;
        let principalPayment = Math.min(monthlyPayment + extraPayment - interestPayment, remainingBalance);

        if (principalPayment <= 0 || isNaN(principalPayment)) {
            console.warn("Invalid principal payment detected. Stopping calculations.");
            break;
        }

        remainingBalance -= principalPayment;
        totalInterestPaid += interestPayment;
        totalPrincipalPaid += principalPayment;
        monthsElapsed++;

        // ✅ Update cumulative values
        cumulativeInterest += interestPayment;
        cumulativePrincipal += principalPayment;

        cumulativeInterestData.push(cumulativeInterest);
        cumulativePrincipalData.push(cumulativePrincipal);

        // ✅ Apply Lump Sum at the Correct Month
        if (lumpSum > 0 && monthsElapsed === lumpSumMonthIndex) {
            remainingBalance -= lumpSum;
            if (remainingBalance < 0) remainingBalance = 0;
            console.log(`Applied Lump Sum of ${formatter.format(lumpSum)} on Month ${lumpSumMonthIndex}, New Balance: ${formatter.format(remainingBalance)}`);
        }

        amortizationSchedule.push({
            month: monthsElapsed,
            principal: principalPayment,
            interest: interestPayment,
            balance: remainingBalance > 0 ? remainingBalance : 0
        });
    }

    let newPayoffTime = monthsElapsed;

    console.log("Total Interest Paid:", totalInterestPaid);
    console.log("Total Principal Paid:", totalPrincipalPaid);
    console.log("New Payoff Time (Months):", newPayoffTime);

    // ✅ Update Doughnut Chart
    updateDoughnutChart(
        autoChartCanvas,
        monthlyPayment + extraPayment,
        monthlyPayment,
        extraPayment
    );

    // ✅ Update Labels
    updateChartLabels(
        monthlyPayment,
        extraPayment
    );

    // ✅ Store and Update Amortization Schedule
    lastAmortizationData = {
        schedule: amortizationSchedule,
        totalInterestPaid,
        totalPrincipalPaid,
        balanceData: amortizationSchedule.map(row => row.balance),
        cumulativeInterestData: cumulativeInterestData,
        cumulativePrincipalData: cumulativePrincipalData
    };

    // ✅ Ensure Chart Updates Immediately
    if (lastAmortizationData.schedule.length > 0) {
        populateAmortizationTable(lastAmortizationData);

        const amortizationChartCanvas = document.getElementById('amortizationChart');
        if (amortizationChartCanvas) {
            const ctx = amortizationChartCanvas.getContext('2d');
            ctx.clearRect(0, 0, amortizationChartCanvas.width, amortizationChartCanvas.height);
        }

        drawAmortizationChart(
            lastAmortizationData.balanceData,
            lastAmortizationData.cumulativeInterestData,
            lastAmortizationData.cumulativePrincipalData
        );

        updateAmortizationLabels(
            lastAmortizationData.totalInterestPaid,
            lastAmortizationData.totalPrincipalPaid,
            loanBalance
        );
    } else {
        console.error("Failed to generate amortization schedule.");
    }
}





// Trigger calculation on page load
calculateAndDisplayResults();


// Update Chart Labels
function updateChartLabels(principalAndInterest, extraPayment) {
    document.getElementById('value-principal-interest').textContent = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(principalAndInterest);

    document.getElementById('value-extra-payment').textContent = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(extraPayment);
}




// Doughnut Chart Update Function
function updateDoughnutChart(autoChartCanvas, totalMonthlyPayment, principalAndInterest, extraPayment) {
    if (!autoChartCanvas) {
        console.error("Canvas element not found.");
        return;
    }

    const ctx = autoChartCanvas.getContext('2d');
    const size = 300; // Match the expected size

    // Set canvas size
    autoChartCanvas.width = size;
    autoChartCanvas.height = size;

    // Ensure valid values for chart data
    const sanitizedData = [
        Math.max(0, principalAndInterest),  // ✅ Ensure it's never negative
        Math.max(0, extraPayment)  // ✅ Ensure Extra Payment is valid
    ];

    console.log("Doughnut Chart Data:", sanitizedData);

    // Prevent errors if all values are 0
    if (sanitizedData.every(value => value === 0)) {
        console.error("Chart cannot be displayed because all values are zero.");
        return;
    }

    // Colors for segments
    const colors = ['#175134', '#3EB721']; // Dark Green for Principal & Interest, Bright Green for Extra Payment

    // Get total sum
    const total = sanitizedData.reduce((a, b) => a + b, 0);
    if (total <= 0) {
        console.error("Total value for chart is zero or negative.");
        return;
    }

    // Format total payment for center display
    const formattedTotal = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(totalMonthlyPayment);

    // Clear the canvas before drawing
    ctx.clearRect(0, 0, size, size);

    const outerRadius = size / 2;
    const innerRadius = outerRadius - 50;
    const centerX = size / 2;
    const centerY = size / 2;
    const gapWidth = 5;

    let startAngle = -Math.PI / 2;

    sanitizedData.forEach((value, index) => {
        if (value <= 0) return; // Skip zero values

        const segmentAngle = (value / total) * Math.PI * 2;
        const endAngle = startAngle + segmentAngle;

        ctx.beginPath();
        ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
        ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
        ctx.closePath();

        ctx.fillStyle = colors[index];
        ctx.fill();

        ctx.strokeStyle = 'white';
        ctx.lineWidth = gapWidth;
        ctx.stroke();

        startAngle = endAngle;
    });

    // Center text
    ctx.font = `bold ${size / 7}px Roboto`;
    ctx.fillStyle = '#232525';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText(formattedTotal, centerX, centerY);

    console.log("Doughnut chart updated successfully.");
}





function drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData, hoverIndex = 0) {
    if (!Array.isArray(balanceData) || balanceData.length === 0 ||
        !Array.isArray(cumulativeInterestData) || cumulativeInterestData.length === 0 ||
        !Array.isArray(cumulativePrincipalData) || cumulativePrincipalData.length === 0) {
        console.error("Invalid amortization chart data: Some arrays are missing or empty.");
        return;
    }

    const canvas = document.getElementById('amortizationChart');
    if (!canvas) {
        console.error("Amortization chart canvas not found.");
        return;
    }

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    // Responsive canvas size
    const isSmallScreen = window.innerWidth < 700;
    const canvasHeight = isSmallScreen ? 220 : 320;

    // ✅ Adjust width dynamically
    canvas.width = Math.floor(canvas.parentElement.clientWidth * dpr);
    canvas.height = canvasHeight * dpr;
    ctx.scale(dpr, dpr);

    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    // Padding adjustments
    const padding = { top: 10, right: 15, bottom: 50, left: 55 };

    const gridColor = '#d0d0d0';
    const labelColor = '#505050';

    // Get max Y value for scaling (round to nearest 10K)
    const yAxisMax = Math.ceil(
        Math.max(...balanceData, ...cumulativeInterestData, ...cumulativePrincipalData) / 10000
    ) * 10000;

    function getY(value) {
        return height - padding.bottom - (value / yAxisMax) * (height - padding.top - padding.bottom);
    }

    function getX(index) {
        return padding.left + (index / (balanceData.length - 1)) * (width - padding.left - padding.right);
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Y-axis grid lines & labels
    ctx.font = '14px Roboto';
    ctx.textAlign = 'right';
    ctx.fillStyle = labelColor;
    ctx.strokeStyle = gridColor;

    for (let i = 0; i <= yAxisMax; i += 10000) {
        const y = getY(i);

        // Grid line
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();

        // Y-axis labels
        ctx.fillText(`$${(i / 1000).toFixed(0)}K`, padding.left - 10, y + 5);
    }

    // Draw X-axis grid (Months & Years)
    ctx.textAlign = 'center';
    const months = balanceData.length;
    const years = Math.floor(months / 12);

    for (let i = 0; i <= years; i++) {
        const monthIndex = i * 12;
        let x = getX(monthIndex);

        // ✅ Adjust last label to prevent overflow
        if (i === years) x = width - padding.right - 2;

        const yearLabel = new Date().getFullYear() + i;

        // Grid line
        ctx.beginPath();
        ctx.moveTo(x, padding.top);
        ctx.lineTo(x, height - padding.bottom);
        ctx.stroke();

        // X-axis labels
        ctx.fillText(yearLabel, x, height - 10);
    }

    // Draw amortization lines
    function drawLine(data, color) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let i = 0; i < data.length; i++) {
            const x = getX(i);
            const y = getY(Math.max(0, data[i])); // No negative values
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }

    drawLine(balanceData, '#175134'); // Loan Balance
    drawLine(cumulativePrincipalData, '#3EB721'); // Principal Paid
    drawLine(cumulativeInterestData, '#91BBA6'); // Interest Paid

    // ✅ Draw Vertical Hover Line
    function drawHoverLine(ctx, hoverIndex, width, height, padding, balanceData) {
        if (hoverIndex < 0 || hoverIndex >= balanceData.length) return;

        const x = getX(hoverIndex);

        ctx.strokeStyle = "rgba(0, 0, 0, 0.4)";  // Gray transparent line
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x, padding.top);
        ctx.lineTo(x, height - padding.bottom);
        ctx.stroke();
    }

    // ✅ Draw hover effects
    const hoverX = getX(hoverIndex);
    const balanceY = getY(balanceData[hoverIndex]);
    const principalY = getY(cumulativePrincipalData[hoverIndex]);
    const interestY = getY(cumulativeInterestData[hoverIndex]);

    drawHoverLine(ctx, hoverIndex, width, height, padding, balanceData);

    // ✅ Draw hover dots
    const dotRadius = 6;

    ctx.fillStyle = '#175134'; // Balance dot
    ctx.beginPath();
    ctx.arc(hoverX, balanceY, dotRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#3EB721'; // Principal dot
    ctx.beginPath();
    ctx.arc(hoverX, principalY, dotRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#91BBA6'; // Interest dot
    ctx.beginPath();
    ctx.arc(hoverX, interestY, dotRadius, 0, Math.PI * 2);
    ctx.fill();

    console.log("Amortization chart updated successfully.");
}




function updateAmortizationLabels(totalInterestPaid, totalPrincipalPaid, totalAmountPaid) {
    const labelsContainer = document.getElementById('amortizationLabels');
    if (!labelsContainer) {
        console.error("Amortization labels container not found.");
        return;
    }

    if (!lastAmortizationData || !lastAmortizationData.schedule || lastAmortizationData.schedule.length === 0) {
        console.error("No amortization data available for labels.");
        return;
    }

    // Use the first month's balance as the default remaining balance
    const initialBalance = lastAmortizationData?.schedule[0]?.balance || totalAmountPaid || 0;

    totalInterestPaid = isNaN(totalInterestPaid) ? 0 : Math.ceil(totalInterestPaid);
    totalPrincipalPaid = isNaN(totalPrincipalPaid) ? 0 : Math.ceil(totalPrincipalPaid);
    totalAmountPaid = isNaN(totalAmountPaid) ? 0 : Math.ceil(totalAmountPaid);

    labelsContainer.innerHTML = `
        <div class="label-item">
            <span class="color-circle" style="background-color: #175134;"></span>
            <span class="label-name">Remaining Balance</span>
            <span class="label-value" id="label-balance">$${formatter.format(initialBalance)}</span>
        </div>
        <div class="label-item">
            <span class="color-circle" style="background-color: #91BBA6;"></span>
            <span class="label-name">Total Interest Paid</span>
            <span class="label-value" id="label-interest">$${formatter.format(totalInterestPaid)}</span>
        </div>
        <div class="label-item">
            <span class="color-circle" style="background-color: #3EB721;"></span>
            <span class="label-name">Total Principal Paid</span>
            <span class="label-value" id="label-principal">$${formatter.format(totalPrincipalPaid)}</span>
        </div>
    `;

    console.log("Amortization labels updated:", {
        initialBalance,
        totalInterestPaid,
        totalPrincipalPaid,
        totalAmountPaid,
    });
}


    // ShowTab Function
    function showTab(tabName) {
        const tabs = document.querySelectorAll('.results-content > div');
        const navButtons = document.querySelectorAll('.results-tab');
    
        tabs.forEach(tab => (tab.style.display = 'none'));
        navButtons.forEach(button => button.classList.remove('tab-active'));
    
        const selectedTab = document.getElementById(`${tabName}-content`);
        if (selectedTab) {
            selectedTab.style.display = 'block';
            document.querySelector(`#tab-${tabName}`).classList.add('tab-active');
        }
    
        if (tabName === 'amortization-schedule') {
            console.log("Switching to Amortization Schedule tab");
    
            if (!lastAmortizationData || !lastAmortizationData.schedule || lastAmortizationData.schedule.length === 0) {
                console.log("Amortization data missing. Recalculating...");
                calculateAndDisplayResults();
            }
    
            if (lastAmortizationData.balanceData.length > 0) {
                console.log("Updating amortization chart and table.");
                populateAmortizationTable(lastAmortizationData);
                initializeExpandCollapseLogic();
    
                // ✅ Ensure chart is fully redrawn on tab switch
                setTimeout(() => {
                    drawAmortizationChart(
                        lastAmortizationData.balanceData,
                        lastAmortizationData.cumulativeInterestData,
                        lastAmortizationData.cumulativePrincipalData
                    );
                }, 50);
    
                updateAmortizationLabels(
                    lastAmortizationData.totalInterestPaid,
                    lastAmortizationData.totalPrincipalPaid,
                    lastAmortizationData.schedule.reduce((sum, row) => sum + row.principal + row.interest, 0)
                );
            } else {
                console.error("Failed to generate amortization schedule.");
            }
        } else if (tabName === 'payment-breakdown') {
            console.log("Switching to Payment Breakdown tab");
            calculateAndDisplayResults();
        }
    }
    
    
    
    
    


    const paymentBreakdownTab = document.getElementById('tab-payment-breakdown');
    const amortizationScheduleTab = document.getElementById('tab-amortization-schedule');

    // Add event listeners for tab switches
    paymentBreakdownTab.addEventListener('click', () => {
        console.log("Switching to Payment Breakdown tab");
        calculateAndDisplayResults(); // Always recalculate
        showTab('payment-breakdown'); // Show the Payment Breakdown tab
    });

    amortizationScheduleTab.addEventListener('click', () => {
        console.log("Switching to Amortization Schedule tab");
        calculateAndDisplayResults(); // Always recalculate
        showTab('amortization-schedule'); // Show the Amortization Schedule tab
    });

    showTab('payment-breakdown'); 




// ✅ Add hover effect for interactive chart
document.getElementById('amortizationChart').addEventListener('mousemove', function (event) {
    const rect = this.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = this.clientWidth;
    const months = lastAmortizationData.schedule.length;
    const hoverIndex = Math.round((x / width) * months);

    if (hoverIndex >= 0 && hoverIndex < months) {
        drawAmortizationChart(
        lastAmortizationData.balanceData,
        lastAmortizationData.cumulativeInterestData,  // ✅ Use cumulative data
        lastAmortizationData.cumulativePrincipalData, // ✅ Use cumulative data
        hoverIndex
);

    }
});


    // Calculate Amortization Schedule
    function calculateAmortizationSchedule(loanBalance, termRemaining, interestRate, monthlyPayment, extraPayment, lumpSum, lumpDate) {
        console.log("Calculating Amortization Schedule...");
    
        const monthlyInterestRate = interestRate / 12;
        let remainingBalance = loanBalance;
        let totalInterestPaid = 0;
        let totalPrincipalPaid = 0;
        let monthsElapsed = 0;
        let amortizationSchedule = [];
    
        let lumpSumMonthIndex = termRemaining + 1; // Default to outside range
        if (lumpDate) {
            const today = new Date();
            const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
            const selectedDate = new Date(lumpDate);
            const monthsDifference = (selectedDate.getFullYear() - startDate.getFullYear()) * 12 + (selectedDate.getMonth() - startDate.getMonth());
    
            if (monthsDifference >= 0 && monthsDifference < termRemaining) {
                lumpSumMonthIndex = monthsDifference + 1;
            }
        }
    
        while (remainingBalance > 0 && monthsElapsed < termRemaining) {
            let interestPayment = remainingBalance * monthlyInterestRate;
            let principalPayment = Math.min(Math.max(0, (monthlyPayment - interestPayment) + extraPayment), remainingBalance);
    
            if (principalPayment <= 0) {
                console.warn("Invalid principal payment detected. Stopping calculations.");
                break;
            }
    
            remainingBalance -= principalPayment;
            totalInterestPaid += interestPayment;
            totalPrincipalPaid += principalPayment;
            monthsElapsed++;
    
            if (lumpSum > 0 && monthsElapsed === lumpSumMonthIndex) {
                remainingBalance -= lumpSum;
                if (remainingBalance < 0) remainingBalance = 0;
            }
    
            amortizationSchedule.push({
                month: monthsElapsed,
                principal: principalPayment,
                interest: interestPayment,
                balance: remainingBalance > 0 ? remainingBalance : 0
            });
        }
    
        if (amortizationSchedule.length === 0) {
            console.error("No amortization data was generated.");
            return {
                schedule: [],
                totalInterestPaid: 0,
                totalPrincipalPaid: 0
            };
        }
    
        return {
            schedule: amortizationSchedule,
            totalInterestPaid,
            totalPrincipalPaid
        };
    }
    


    // Populate Amortization Table
    function populateAmortizationTable(amortizationData) {
        const tableBody = document.getElementById('amortization-table-body');
        if (!tableBody) {
            console.error("Amortization table body element not found.");
            return;
        }
    
        tableBody.innerHTML = ''; // Clear existing rows
    
        const startDate = new Date(); // Get current date
        startDate.setMonth(startDate.getMonth() + 1); // Set first payment to next month
    
        amortizationData.schedule.forEach((row, index) => {
            const tr = document.createElement('tr');
    
            // Format the date for each payment
            const dateCell = document.createElement('td');
            const paymentDate = new Date(startDate);
            paymentDate.setMonth(paymentDate.getMonth() + index);
            dateCell.textContent = paymentDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
            tr.appendChild(dateCell);
    
            // Principal Payment Cell
            const principalCell = document.createElement('td');
            principalCell.textContent = `$${formatter.format(row.principal)}`;
            tr.appendChild(principalCell);
    
            // Interest Payment Cell
            const interestCell = document.createElement('td');
            interestCell.textContent = `$${formatter.format(row.interest)}`;
            tr.appendChild(interestCell);
    
            // Remaining Balance Cell (Prevents negative values)
            const balanceCell = document.createElement('td');
            balanceCell.textContent = `$${formatter.format(Math.max(row.balance, 0))}`;
            tr.appendChild(balanceCell);
    
            tableBody.appendChild(tr);
        });
    
        // Display the amortization schedule container
        document.getElementById('amortization-schedule').style.display = 'block';
    
        // Initialize expand/collapse logic
        initializeExpandCollapseLogic(); // Reinitialize after populating table
    }

    // Initialize Expand Collapse Logic
    function initializeExpandCollapseLogic() {
        const expandBox = document.querySelector(".expand-box");
        const expandText = document.querySelector(".expand-text");
        const expandIcon = document.querySelector(".expand-icon");
        const tableBody = document.getElementById("amortization-table-body");
        const scrollableTbody = document.querySelector(".scrollable-tbody");
    
        if (!expandBox || !expandText || !tableBody || !scrollableTbody) {
            console.error("Expand/Collapse elements not found.");
            return;
        }
    
        console.log("Initializing Expand/Collapse Logic");
    
        const collapsedRows = 5; // Show only the first 5 rows when collapsed
        let isExpanded = false;
    
        function updateTableView() {
            if (isExpanded) {
                scrollableTbody.classList.add("expanded"); // Enable scrolling
                expandText.textContent = "Collapse";
                expandIcon.style.transform = "rotate(180deg)";
            } else {
                scrollableTbody.classList.remove("expanded"); // Hide extra rows
                expandText.textContent = "Expand";
                expandIcon.style.transform = "rotate(0deg)";
            }
        }
    
        // Click event to toggle expand/collapse
        expandBox.addEventListener("click", function () {
            isExpanded = !isExpanded;
            updateTableView();
        });
    
        // Ensure only the first `collapsedRows` are shown initially
        updateTableView();
    }
    
    
    function calculateAmortizationSchedule(loanBalance, termRemaining, interestRate, monthlyPayment, extraPayment, lumpSum, lumpDate) {
        console.log("Calculating Amortization Schedule...");
    
        const monthlyInterestRate = interestRate / 12;
        let remainingBalance = loanBalance;
        let totalInterestPaid = 0;
        let totalPrincipalPaid = 0;
        let monthsElapsed = 0;
        let amortizationSchedule = [];
    
        let lumpSumMonthIndex = termRemaining + 1; // Default to outside range
        if (lumpDate) {
            const today = new Date();
            const startDate = new Date(today.getFullYear(), today.getMonth(), 1);
            const selectedDate = new Date(lumpDate);
            const monthsDifference = (selectedDate.getFullYear() - startDate.getFullYear()) * 12 + (selectedDate.getMonth() - startDate.getMonth());
    
            if (monthsDifference >= 0 && monthsDifference < termRemaining) {
                lumpSumMonthIndex = monthsDifference + 1;
            }
        }
    
        while (remainingBalance > 0 && monthsElapsed < termRemaining) {
            let interestPayment = remainingBalance * monthlyInterestRate;
            let principalPayment = Math.min(Math.max(0, (monthlyPayment - interestPayment) + extraPayment), remainingBalance);
    
            if (principalPayment <= 0) {
                console.warn("Invalid principal payment detected. Stopping calculations.");
                break;
            }
    
            remainingBalance -= principalPayment;
            totalInterestPaid += interestPayment;
            totalPrincipalPaid += principalPayment;
            monthsElapsed++;
    
            if (lumpSum > 0 && monthsElapsed === lumpSumMonthIndex) {
                remainingBalance -= lumpSum;
                if (remainingBalance < 0) remainingBalance = 0;
                console.log(`Applied Lump Sum of ${formatter.format(lumpSum)} on Month ${lumpSumMonthIndex}, New Balance: ${formatter.format(remainingBalance)}`);
            }
    
            amortizationSchedule.push({
                month: monthsElapsed,
                principal: principalPayment,
                interest: interestPayment,
                balance: remainingBalance > 0 ? remainingBalance : 0
            });
        }
    
        return {
            schedule: amortizationSchedule,
            totalInterestPaid,
            totalPrincipalPaid
        };
    }
    


    const amortizationData = calculateAmortizationSchedule(
        parseFloat(loanBalanceInput.value) || parseFloat(loanBalanceInput.placeholder) || defaultValues.loanBalance,
        parseFloat(termRemainingInput.value) || parseFloat(termRemainingInput.placeholder) || defaultValues.termRemaining,
        (parseFloat(interestRateInput.value) || parseFloat(interestRateInput.placeholder) || defaultValues.interestRate) / 100,
        parseFloat(monthlyPaymentInput.value) || parseFloat(monthlyPaymentInput.placeholder) || defaultValues.monthlyPayment,
        parseFloat(extraPaymentInput.value) || parseFloat(extraPaymentInput.placeholder) || defaultValues.extraPayment,
        parseFloat(lumpSumInput.value) || parseFloat(lumpSumInput.placeholder) || defaultValues.lumpSum,
        lumpDateInput.value
    );
        if (amortizationData) {
        populateAmortizationTable(amortizationData);
        initializeExpandCollapseLogic(); // Ensure it runs after the table is filled
    } else {
        console.error("Failed to generate amortization schedule.");
    }

    
    
      const amortizationChartCanvas = document.getElementById('amortizationChart');

      // Update Hover Values
      function updateHoverValues(balance, interest, principal) {
        const balanceLabel = document.getElementById('label-balance');
        const interestLabel = document.getElementById('label-interest');
        const principalLabel = document.getElementById('label-principal');
    
        if (balanceLabel) balanceLabel.textContent = `$${formatter.format(Math.ceil(balance))}`;
        if (interestLabel) interestLabel.textContent = `$${formatter.format(Math.ceil(interest))}`;
        if (principalLabel) principalLabel.textContent = `$${formatter.format(Math.ceil(principal))}`;
    
        console.log("Hover values updated with rounded values:", {
            balance: Math.ceil(balance),
            interest: Math.ceil(interest),
            principal: Math.ceil(principal),
        });
    }
    
        
    let currentHoverIndex = 0; // Default to the first month

    function calculateHoverIndex(x, chartWidth, padding, dataLength) {
        const rawIndex = ((x - padding.left) / chartWidth) * (dataLength - 1);
    
        // Ensure rounding bias towards edges for better coverage
        const adjustedIndex = Math.round(rawIndex);
        if (adjustedIndex >= dataLength - 1) {
            return dataLength - 1; // Snap to last index
        }
        return Math.min(Math.max(adjustedIndex, 0), dataLength - 1);
    }
 
    amortizationChartCanvas.addEventListener('mousemove', (event) => {
        const rect = amortizationChartCanvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        
        const padding = { top: 10, right: 35, bottom: 50, left: 50 };
        const buffer = 10;
        const chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
    
        if (x >= padding.left - buffer && x <= amortizationChartCanvas.offsetWidth - padding.right + buffer) {
            const index = calculateHoverIndex(x, chartWidth, padding, lastAmortizationData.balanceData.length);
            updateHoverEffects(index);
        }
    });
    
    // ✅ Prevent touchmove from redrawing the chart
    amortizationChartCanvas.addEventListener('touchmove', (event) => {
        const rect = amortizationChartCanvas.getBoundingClientRect();
        const touch = event.touches[0] || event.changedTouches[0];
        const x = touch.clientX - rect.left;
    
        const padding = { top: 10, right: 35, bottom: 50, left: 50 };
        const buffer = 10;
        const chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
    
        if (x >= padding.left - buffer && x <= amortizationChartCanvas.offsetWidth - padding.right + buffer) {
            const index = calculateHoverIndex(x, chartWidth, padding, lastAmortizationData.balanceData.length);
            updateHoverEffects(index);
        }
    });
    

    // Update Hover Effects
    function updateHoverEffects(index) {
        if (!lastAmortizationData || !lastAmortizationData.balanceData || index >= lastAmortizationData.balanceData.length) {
            console.error("Invalid hover index or amortization data missing.");
            return;
        }
    
        // ✅ Only update label values, NOT the chart
        updateHoverValues(
            lastAmortizationData.balanceData[index],
            lastAmortizationData.cumulativeInterestData[index],
            lastAmortizationData.cumulativePrincipalData[index]
        );
    
        const startDate = new Date();
        const hoverDate = new Date(startDate.setMonth(startDate.getMonth() + index));
        displayHoverDate(hoverDate);
    
        // ❌ REMOVE: Prevent chart redraw on hover
    }
    
    
    
    

    amortizationChartCanvas.addEventListener('touchmove', handleTouchEvent, { passive: true });
    amortizationChartCanvas.addEventListener('touchstart', handleTouchEvent, { passive: true });



    
    function handleTouchEvent(event) {
        const rect = amortizationChartCanvas.getBoundingClientRect();
        const touch = event.touches[0] || event.changedTouches[0];
        const x = touch.clientX - rect.left;
        const padding = { top: 10, right: 35, bottom: 50, left: 50 };
    
        const chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
    
        // Calculate index with better coverage across the full chart
        const rawIndex = ((x - padding.left) / chartWidth) * (lastAmortizationData.balanceData.length - 1);
        const index = Math.min(Math.max(Math.round(rawIndex), 0), lastAmortizationData.balanceData.length - 1);
    
        if (x >= padding.left && x <= amortizationChartCanvas.offsetWidth - padding.right) {
            currentHoverIndex = index; // Save the current hover index
    
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
        } else {
            // Handle touch/mouse events outside the chart bounds if necessary
            drawAmortizationChart(
                lastAmortizationData.balanceData,
                lastAmortizationData.cumulativeInterestData,
                lastAmortizationData.cumulativePrincipalData,
                currentHoverIndex // Retain the last valid hover index
            );
        }
    
        event.preventDefault(); // Prevent default scrolling
    }
    
   
   



    function displayHoverDate(date) {
        const hoverDateContainer = document.getElementById('amortizationHoverDate');
        if (!hoverDateContainer) {
            console.error("Hover date container not found.");
            return;
        }
    
        const month = date.toLocaleString('default', { month: 'long' }); // Full month name
        const year = date.getFullYear();
        hoverDateContainer.textContent = `${month} ${year}`;
    }

    // Event listeners
updateBtn.addEventListener('click', function () {
    // Track the Google Ads conversion event (commented out)
    // gtag('event', 'conversion', {
    //     'send_to': 'AW-11495710624/WkaLCNPA6_kZEKC_yukq'
    // });

    // Call the existing calculation function
    calculateAndDisplayResults();
});

resetBtn.addEventListener('click', resetInputs);

function resetInputs() {
    // Reset fields to default values from the `defaultValues` object
    loanBalanceInput.value = defaultValues.loanBalance.toFixed(0);
    termRemainingInput.value = defaultValues.termRemaining.toString();
    interestRateInput.value = defaultValues.interestRate.toFixed(2);
    monthlyPaymentInput.value = defaultValues.monthlyPayment.toFixed(2);
    extraPaymentInput.value = defaultValues.extraPayment.toFixed(2);
    lumpSumInput.value = defaultValues.lumpSum.toFixed(0);
    lumpDateInput.value = ''; // Clear lump sum date

    // Recalculate results instead of clearing the chart
    calculateAndDisplayResults();

    console.log("Inputs reset to default values and recalculated.");
}



});