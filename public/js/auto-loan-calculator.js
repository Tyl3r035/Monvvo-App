import '../css/auto-loan-calculator.css';

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");

    // Inputs for Auto Loan Calculator
    const loanAmountInput = document.getElementById('loan-price'); // Total price of the loan
    const loanTermInput = document.getElementById('loan-term'); // Loan term in months
    const interestRateInput = document.getElementById('interest-rate'); // Annual interest rate
    const downPaymentInput = document.getElementById('down-payment'); // Down payment amount
    const extraPaymentInput = document.getElementById('extra-payment'); // Extra Payment
    const tradeInValueInput = document.getElementById('value-trade-in'); // Trade-in value
    const salesTaxInput = document.getElementById('value-sales-tax'); // Sales tax percentage
    const feesInput = document.getElementById('value-fees'); // Additional fees
    const updateBtn = document.getElementById('update-btn');
    const resetBtn = document.getElementById('reset-btn');
    const autoChartCanvas = document.getElementById('autoChart');

    // Default values
    const defaultValues = {
        loanAmount: 25000, // Default loan amount
        loanTerm: 60, // Loan term in months
        interestRate: 5.5, // Interest rate in percentage
        downPayment: 3000, // Down payment amount
        extraPayment: 0, // Extra payment amount
        tradeInValue: 2000, // Trade-in value
        salesTax: 7.5, // Sales tax percentage
        fees: 500, // Additional fees
    };
    tradeInValueInput.value = defaultValues.tradeInValue;
    salesTaxInput.value = defaultValues.salesTax;
    feesInput.value = defaultValues.fees;
    let lastAmortizationData = null;

    // Helper: Format currency
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });


        // Function to calculate results
        function calculateAndDisplayResults() {
            // Extract main input values (only updated when the button is clicked)
            const loanAmount = parseFloat(loanAmountInput.value) || defaultValues.loanAmount;
            const loanTerm = parseInt(loanTermInput.value) || defaultValues.loanTerm;
            const interestRate = parseFloat(interestRateInput.value) / 100 || defaultValues.interestRate / 100;
            const downPayment = parseFloat(downPaymentInput.value) || defaultValues.downPayment;
            const extraPayment = parseFloat(extraPaymentInput.value) || defaultValues.extraPayment;
        
            // Extract dynamic inputs (trade-in value, sales tax, and fees update instantly)
            const tradeInValue = parseFloat(tradeInValueInput.value) || defaultValues.tradeInValue;
            const salesTax = parseFloat(salesTaxInput.value) / 100 || defaultValues.salesTax / 100;
            const fees = parseFloat(feesInput.value) || defaultValues.fees;
        
            console.log("Calculation Triggered with Values:", { 
                loanAmount, loanTerm, interestRate, downPayment, extraPayment, tradeInValue, salesTax, fees 
            });
        
            // ✅ Correctly calculate principal (loan balance)
            let principal = loanAmount - downPayment - tradeInValue + fees + (loanAmount * salesTax);
            if (principal <= 0) {
                console.warn("Calculated principal is zero or negative. Adjusting to minimum of $1.");
                principal = 1; // Prevents invalid calculations
            }
        
            console.log("Calculated Principal:", principal);
        
            // ✅ Calculate Monthly Interest Rate
            const monthlyInterestRate = interestRate / 12;
            console.log("Monthly Interest Rate:", monthlyInterestRate);
        
            // ✅ Fix Monthly Payment Calculation
            let monthlyPayment = 0;
            if (loanTerm > 0) {
                if (monthlyInterestRate > 0) {
                    // Standard formula for loans with interest
                    monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
                } else {
                    // Special case: If interest rate is 0%, use simple division
                    monthlyPayment = principal / loanTerm;
                }
            }
        
            if (isNaN(monthlyPayment) || monthlyPayment <= 0) {
                console.warn("Invalid monthly payment calculation. Adjusting to minimum of $1.");
                monthlyPayment = 1; // Prevents errors in chart
            }
        
            console.log("Calculated Monthly Payment:", monthlyPayment);
        
            // ✅ Total Monthly Payment Including Extra Payment
            let totalMonthlyPayment = monthlyPayment + extraPayment;
            console.log("Total Monthly Payment:", totalMonthlyPayment);
        
            if (isNaN(totalMonthlyPayment) || totalMonthlyPayment <= 0) {
                console.warn("Invalid total monthly payment. Adjusting to minimum of $1.");
                totalMonthlyPayment = 1;
            }
        
            // ✅ Update Chart Labels
            updateChartLabels(totalMonthlyPayment, monthlyPayment, extraPayment);
        
            // ✅ Update Payment Breakdown Chart
            updateDoughnutChart(autoChartCanvas, totalMonthlyPayment, monthlyPayment, extraPayment);
        
            // ✅ Update Amortization Schedule
            lastAmortizationData = calculateAmortizationSchedule();
            if (!lastAmortizationData || !lastAmortizationData.schedule || lastAmortizationData.schedule.length === 0) {
                console.error("No valid amortization schedule generated.");
                lastAmortizationData = {
                    schedule: [],
                    totalInterestPaid: 0,
                    totalPrincipalPaid: 0,
                    balanceData: [],
                    cumulativeInterestData: [],
                    cumulativePrincipalData: [],
                };
            
            } else {
                console.error("Failed to generate amortization schedule.");
            }
        }
        


        calculateAndDisplayResults();


        function updateChartLabels(totalMonthlyPayment, monthlyPayment, extraPayment) {
            const labelPrincipalInterest = document.getElementById('value-principal-interest');
            const labelExtraPayment = document.getElementById('value-extra-payment');
        
            if (labelPrincipalInterest) {
                labelPrincipalInterest.textContent = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                }).format(monthlyPayment);
            }
        
            if (labelExtraPayment) {
                labelExtraPayment.textContent = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                }).format(extraPayment);
            }
        
            console.log("Chart labels updated:", { monthlyPayment, extraPayment });
        }
        



    
// Doughnut Chart
function updateDoughnutChart(autoChartCanvas, totalMonthlyPayment, monthlyPayment, extraPayment) {
    if (!autoChartCanvas) {
        console.error("Canvas element not found.");
        return;
    }

    const ctx = autoChartCanvas.getContext('2d');
    const size = 400; // Canvas size

    // Set canvas size
    autoChartCanvas.width = size;
    autoChartCanvas.height = size;

    // Ensure the correct auto loan breakdown components
    const principalAndInterest = isNaN(monthlyPayment) ? 0 : monthlyPayment;
    const extraPaymentComponent = isNaN(extraPayment) ? 0 : extraPayment;

    const data = [principalAndInterest, extraPaymentComponent];
    console.log("Chart Data:", data);

    if (data.some(value => isNaN(value) || value < 0)) {
        console.error("Invalid data for chart:", data);
        return;
    }

    const colors = ['#175134', '#3EB721']; // Colors for chart
    const total = data.reduce((a, b) => a + b, 0);

    if (total <= 0) {
        console.error("Total value for chart is zero or negative.");
        return;
    }

    // Formatter to add commas to the total
    const formattedTotal = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0, // No decimals for simplicity
    }).format(total);

    // Clear the canvas
    ctx.clearRect(0, 0, size, size);

    const outerRadius = size / 2;
    const innerRadius = outerRadius - 70;
    const centerX = size / 2;
    const centerY = size / 2;
    const gapWidth = 5;

    let startAngle = -Math.PI / 2;

    data.forEach((value, index) => {
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

    // Responsive font size for the total amount in the center
    const fontSize = size / 7;
    ctx.font = `bold ${fontSize}px Roboto`;
    ctx.fillStyle = '#232525';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText(formattedTotal, centerX, centerY);

    console.log("Doughnut chart updated successfully.");
}

    // ShowTab Function
function showTab(tabName) {
    const paymentBreakdownContent = document.getElementById('payment-breakdown-content');
    const amortizationScheduleContent = document.getElementById('amortization-schedule-content');

    // Hide both sections first
    paymentBreakdownContent.style.display = 'none';
    amortizationScheduleContent.style.display = 'none';

    if (tabName === 'payment-breakdown') {
        console.log("Switching to Payment Breakdown tab");
        paymentBreakdownContent.style.display = 'block';
        calculateAndDisplayResults(); // Ensure charts update immediately
    } else if (tabName === 'amortization-schedule') {
        console.log("Switching to Amortization Schedule tab");

        // Ensure amortization data is available
        if (!lastAmortizationData || !lastAmortizationData.schedule || lastAmortizationData.schedule.length === 0) {
            console.log("Amortization data missing. Recalculating...");
            calculateAndDisplayResults(); // Ensure it calculates automatically
        }

        // Ensure canvas is cleared before drawing new chart
        const amortizationChartCanvas = document.getElementById('amortizationChart');
        if (amortizationChartCanvas) {
            const ctx = amortizationChartCanvas.getContext('2d');
            ctx.clearRect(0, 0, amortizationChartCanvas.width, amortizationChartCanvas.height);
        }

        // ✅ Force immediate chart update after the DOM updates
        setTimeout(() => {
            drawAmortizationChart(
                lastAmortizationData.schedule.map(row => row.balance),
                lastAmortizationData.schedule.map(row => row.interest),
                lastAmortizationData.schedule.map(row => row.principal)
            );

            updateAmortizationLabels(
                lastAmortizationData.totalInterestPaid || 0,
                lastAmortizationData.totalPrincipalPaid || 0,
                parseFloat(loanBalanceInput.value) || defaultValues.loanBalance
            );

            console.log("Amortization chart updated immediately after switching tabs.");
        }, 50); // Small delay allows the browser to render the canvas update

        amortizationScheduleContent.style.display = 'block';
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



    // Amortization Chart
    function drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData, hoverIndex = 0) {
        const canvas = document.getElementById('amortizationChart');
        if (!canvas) {
            console.error("Amortization chart canvas not found.");
            return;
        }

        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;

        // Adjust canvas dimensions dynamically
        const isSmallScreen = window.innerWidth < 700;
        const canvasHeight = isSmallScreen ? 220 : 320;

        // ✅ Use `clientWidth` to prevent excess padding affecting width
        canvas.width = Math.floor(canvas.parentElement.clientWidth * dpr);
        canvas.height = canvasHeight * dpr;
        ctx.scale(dpr, dpr);

        const width = canvas.width / dpr;
        const height = canvas.height / dpr;

        // ✅ Adjust padding to keep the right edge inside the chart
        const padding = { top: 10, right: 15, bottom: 50, left: 55 }; // Reduced right padding to 10px

        const gridColor = '#d0d0d0';
        const labelColor = '#505050';

        // Get max Y value for scaling (round up to nearest 10K)
        const yAxisMax = Math.ceil(
            Math.max(...balanceData, ...cumulativeInterestData, ...cumulativePrincipalData) / 10000
        ) * 10000;

        function getY(value) {
            return height - padding.bottom - (value / yAxisMax) * (height - padding.top - padding.bottom);
        }

        // ✅ Ensure the last point aligns exactly with the right edge
        function getX(index) {
            return padding.left + (index / (balanceData.length - 1)) * (width - padding.left - padding.right);
        }

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw Y-axis grid lines and labels
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

        // Draw X-axis grid lines (Years)
        ctx.textAlign = 'center';
        const months = balanceData.length;
        const years = Math.floor(months / 12);

        for (let i = 0; i <= years; i++) {
            const monthIndex = i * 12;
            let x = getX(monthIndex);

            // ✅ Ensure the last year label aligns properly with the right border
            if (i === years) x = width - padding.right - 2; // Shift it slightly left to prevent overflow

            const yearLabel = new Date().getFullYear() + i;

            // Grid line
            ctx.beginPath();
            ctx.moveTo(x, padding.top);
            ctx.lineTo(x, height - padding.bottom);
            ctx.stroke();

            // X-axis labels
            ctx.fillText(yearLabel, x, height - 10);
        }

        // Draw amortization data lines
        function drawLine(data, color) {
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            for (let i = 0; i < data.length; i++) {
                const x = getX(i);
                const y = getY(Math.max(0, data[i])); // Ensure no negative values
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        }

        drawLine(balanceData, '#175134'); // Balance
        drawLine(cumulativePrincipalData, '#3EB721'); // Principal Paid
        drawLine(cumulativeInterestData, '#91BBA6'); // Interest Paid

        // Always draw the hover effect
        const hoverX = getX(hoverIndex);
        const balanceY = getY(balanceData[hoverIndex]);
        const principalY = getY(cumulativePrincipalData[hoverIndex]);
        const interestY = getY(cumulativeInterestData[hoverIndex]);

        // Draw vertical hover line
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(hoverX, padding.top);
        ctx.lineTo(hoverX, height - padding.bottom);
        ctx.stroke();

        // Draw hover dots
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

    
    
    // Amortization Schedule
    function calculateAmortizationSchedule() {
        console.log("Calculating Amortization Schedule...");
    
        // Extract input values or use defaults
        const loanAmount = parseFloat(loanAmountInput.value) || defaultValues.loanAmount;
        const loanTerm = parseInt(loanTermInput.value) || defaultValues.loanTerm;
        const interestRate = (parseFloat(interestRateInput.value) || defaultValues.interestRate) / 100;
        const downPayment = parseFloat(downPaymentInput.value) || defaultValues.downPayment;
        const extraPayment = parseFloat(extraPaymentInput.value) || defaultValues.extraPayment;
        const tradeInValue = parseFloat(tradeInValueInput.value) || defaultValues.tradeInValue;
        const salesTax = (parseFloat(salesTaxInput.value) || defaultValues.salesTax) / 100;
        const fees = parseFloat(feesInput.value) || defaultValues.fees;
    
        // Calculate loan principal
        let principal = loanAmount - downPayment - tradeInValue + fees + (loanAmount * salesTax);
        if (principal <= 0) {
            console.warn("Calculated principal is zero or negative. Adjusting to minimum of $1.");
            principal = 1;
        }
    
        const monthlyInterestRate = interestRate / 12;
        let monthlyPayment = 0;
    
        if (loanTerm > 0) {
            if (monthlyInterestRate > 0) {
                monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
            } else {
                monthlyPayment = principal / loanTerm;
            }
        }
    
        let schedule = [];
        let totalInterestPaid = 0;
        let totalPrincipalPaid = 0;
        let balance = principal;
        let balanceData = [];
        let cumulativeInterestData = [];
        let cumulativePrincipalData = [];
    
        for (let i = 0; i < loanTerm; i++) {
            const interestPayment = balance * monthlyInterestRate;
            const principalPayment = Math.min(monthlyPayment + extraPayment - interestPayment, balance);
            balance -= principalPayment;
    
            totalInterestPaid += interestPayment;
            totalPrincipalPaid += principalPayment;
    
            schedule.push({
                month: i + 1,
                principal: principalPayment,
                interest: interestPayment,
                balance: Math.max(balance, 0),
            });
    
            balanceData.push(Math.max(0, balance));
            cumulativeInterestData.push(totalInterestPaid);
            cumulativePrincipalData.push(totalPrincipalPaid);
    
            if (balance <= 0) break; // Stop if loan is paid off early
        }
    
        return {
            schedule,
            totalInterestPaid,
            totalPrincipalPaid,
            balanceData,
            cumulativeInterestData,
            cumulativePrincipalData
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
    
    
    
    


    const amortizationData = calculateAmortizationSchedule(); // Ensure data is generated
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
        const buffer = 10; // Extend sensitivity by 10px
        const chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
    
        if (x >= padding.left - buffer && x <= amortizationChartCanvas.offsetWidth - padding.right + buffer) {
            const index = calculateHoverIndex(x, chartWidth, padding, lastAmortizationData.balanceData.length);
            updateHoverEffects(index);
        }
    });
    
    amortizationChartCanvas.addEventListener('touchmove', (event) => {
        const rect = amortizationChartCanvas.getBoundingClientRect();
        const touch = event.touches[0] || event.changedTouches[0];
        const x = touch.clientX - rect.left;
    
        const padding = { top: 10, right: 35, bottom: 50, left: 50 };
        const buffer = 10; // Extend sensitivity by 10px
        const chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
    
        if (x >= padding.left - buffer && x <= amortizationChartCanvas.offsetWidth - padding.right + buffer) {
            const index = calculateHoverIndex(x, chartWidth, padding, lastAmortizationData.balanceData.length);
            updateHoverEffects(index);
        }
    });
    

    // Update Hover Effects
    function updateHoverEffects(index) {
        if (!lastAmortizationData || 
            !lastAmortizationData.balanceData || 
            !lastAmortizationData.cumulativeInterestData || 
            !lastAmortizationData.cumulativePrincipalData ||
            lastAmortizationData.balanceData.length === 0) {
            console.error("Amortization data is not available for hover effects.");
            return;
        }

        if (index < 0 || index >= lastAmortizationData.balanceData.length) {
            console.warn("Invalid hover index:", index);
            return;
        }

        currentHoverIndex = index; // Save the current hover index
        updateHoverValues(
            lastAmortizationData.balanceData[index] || 0,
            lastAmortizationData.cumulativeInterestData[index] || 0,
            lastAmortizationData.cumulativePrincipalData[index] || 0
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
    
    

    






    function updateAmortizationLabels(totalInterestPaid, totalPrincipalPaid, totalAmountPaid) {
        const labelsContainer = document.getElementById('amortizationLabels');
        if (!labelsContainer) {
            console.error("Amortization labels container not found.");
            return;
        }
    
        // Use the first month's balance as the default remaining balance
        const initialBalance = lastAmortizationData?.balanceData[0] || 0;
    
        // Use 0 as fallback if any value is NaN or undefined
        totalInterestPaid = isNaN(totalInterestPaid) ? 0 : Math.ceil(totalInterestPaid);
        totalPrincipalPaid = isNaN(totalPrincipalPaid) ? 0 : Math.ceil(totalPrincipalPaid);
        totalAmountPaid = isNaN(totalAmountPaid) ? 0 : Math.ceil(totalAmountPaid);
    
        // Render the static labels
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
    
        console.log("Amortization labels updated with initial balance and totals:", {
            initialBalance,
            totalInterestPaid,
            totalPrincipalPaid,
            totalAmountPaid,
        });
    }



    // Event listeners
        updateBtn.addEventListener('click', function () {
            // Track the Google Ads conversion event
            // gtag('event', 'conversion', {
            //     'send_to': 'AW-11495710624/WkaLCNPA6_kZEKC_yukq'
            // });
        
            // Call the existing calculation function
            calculateAndDisplayResults();
        });
        

    resetBtn.addEventListener('click', resetInputs);


    function resetInputs() {
        // Reset fields to default values from the `defaultValues` object
        loanAmountInput.value = defaultValues.loanAmount.toFixed(0);
        loanTermInput.value = defaultValues.loanTerm.toString();
        interestRateInput.value = defaultValues.interestRate.toFixed(2);
        extraPaymentInput.value = defaultValues.extraPayment;
        downPaymentInput.value = defaultValues.downPayment.toFixed(0);
        tradeInValueInput.value = defaultValues.tradeInValue.toFixed(0);
        salesTaxInput.value = defaultValues.salesTax.toFixed(1);
        feesInput.value = defaultValues.fees.toFixed(0);
    
        // Recalculate results instead of clearing the chart
        calculateAndDisplayResults();
    
        console.log("Inputs reset to default values and recalculated.");
    }
     





    });