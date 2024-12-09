import { generateMortgagePdf } from "./pdf/mortgage-pdf.js";

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");

    // Inputs
    const homePriceInput = document.getElementById('home-price');
    const downPaymentAmountInput = document.getElementById('down-payment-amount');
    const downPaymentPercentageInput = document.getElementById('down-payment-percentage');
    const loanTermInput = document.getElementById('loan-term');
    const interestRateInput = document.getElementById('interest-rate');
    const extraPaymentInput = document.getElementById('extra-payment');
    const propertyTaxInput = document.getElementById('property-tax');
    const pmiExpenseInput = document.getElementById('pmi-expense');
    const hoaExpenseInput = document.getElementById('hoa-expense');
    const updateBtn = document.getElementById('update-btn');
    const resetBtn = document.getElementById('reset-btn');
    const mortgageChartCanvas = document.getElementById('mortgageChart');
    const amortizationChartCanvas = document.getElementById('amortizationChart');

    const defaultValues = {
        homePrice: 500000,
        downPaymentAmount: 25000,
        downPaymentPercentage: 5,
        loanTerm: 30,
        interestRate: 7.04,
        propertyTax: 250,
        extraPayment: 0,
        pmiExpense: 200,
        hoaExpense: 0,
    };

    let lastAmortizationData = null;

    // Helper: Format currency
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    // Restrict invalid characters in inputs
    const inputsToRestrict = [
        homePriceInput,
        downPaymentAmountInput,
        downPaymentPercentageInput,
        loanTermInput,
        interestRateInput,
        propertyTaxInput,
        pmiExpenseInput,
        hoaExpenseInput,
    ];

    inputsToRestrict.forEach(input => {
        input.addEventListener('keydown', function (event) {
            if (event.key === "-" || event.key === "e") {
                event.preventDefault();
            }
        });
    });


 // Update dependent inputs and handle PMI logic
downPaymentAmountInput.addEventListener('input', function () {
    const homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice;
    const downPaymentAmount = parseFloat(downPaymentAmountInput.value) || 0;
    const downPaymentPercentage = (downPaymentAmount / homePrice) * 100;
    downPaymentPercentageInput.value = downPaymentPercentage.toFixed(2);

    // Adjust PMI if not manually updated
    adjustPMI(homePrice, downPaymentPercentage);
});

downPaymentPercentageInput.addEventListener('input', function () {
    const homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice;
    const downPaymentPercentage = parseFloat(downPaymentPercentageInput.value) || 0;
    const downPaymentAmount = (downPaymentPercentage / 100) * homePrice;
    downPaymentAmountInput.value = downPaymentAmount.toFixed(2);

    // Adjust PMI if not manually updated
    adjustPMI(homePrice, downPaymentPercentage);
});

// Helper function to adjust PMI
function adjustPMI(homePrice, downPaymentPercentage) {
    const pmiInput = document.getElementById('pmi-expense');
    if (!pmiInput.hasAttribute('data-manual')) { // Only adjust if not manually updated
        if (downPaymentPercentage >= 20) {
            pmiInput.value = 0; // Set PMI to 0 for 20%+ down payment
        } else {
            const annualPMI = homePrice * 0.0085; // 0.85% of loan amount
            const monthlyPMI = Math.ceil(annualPMI / 12); // Round up to nearest dollar
            pmiInput.value = monthlyPMI;
        }
    }
}

// Mark PMI as manually updated
pmiExpenseInput.addEventListener('input', function () {
    this.setAttribute('data-manual', 'true');
});





    function calculateAndDisplayResults() {
        console.log("Calculating and displaying results...");
    
        const homePrice = parseFloat(document.getElementById('home-price').value) || defaultValues.homePrice;
        const downPaymentAmount = parseFloat(document.getElementById('down-payment-amount').value) || defaultValues.downPaymentAmount;
        const downPaymentPercentage = (downPaymentAmount / homePrice) * 100;
        const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 || defaultValues.interestRate / 100;
        const loanTerm = parseInt(document.getElementById('loan-term').value) || defaultValues.loanTerm;
        const extraPayment = parseFloat(document.getElementById('extra-payment').value) || defaultValues.extraPayment;
        const propertyTax = Math.ceil(parseFloat(document.getElementById('property-tax').value) || defaultValues.propertyTax);
        const hoaExpense = Math.ceil(parseFloat(document.getElementById('hoa-expense').value) || defaultValues.hoaExpense);
        const pmiInput = document.getElementById('pmi-expense');
    
        const principal = homePrice - downPaymentAmount;
    
        // Automatically calculate PMI if down payment < 20%, unless manually overridden
        if (downPaymentPercentage < 20) {
            const annualPMI = homePrice * 0.0085; // 0.85% of loan amount
            const monthlyPMI = Math.ceil(annualPMI / 12); // Round up to nearest dollar
            if (!pmiInput.hasAttribute('data-manual')) { // Only update if not manually changed
                pmiInput.value = monthlyPMI; // Show as whole number
            }
        }
        
    
        // Parse the user-input PMI value
        const pmiExpense = parseFloat(pmiInput.value) || 0; // Default to 0 if user enters an empty or invalid value
    
        // Calculate amortization data
        const amortizationData = calculateAmortizationSchedule(principal, interestRate, loanTerm * 12, extraPayment);
    
        lastAmortizationData = {
            ...amortizationData,
            periodicPrincipalAndInterest: Math.ceil(amortizationData.schedule[0].principal + amortizationData.schedule[0].interest),
        };
    
        // Update the doughnut chart
        const monthlyPrincipalAndInterest = lastAmortizationData.periodicPrincipalAndInterest;
        updateDoughnutChart(monthlyPrincipalAndInterest, propertyTax, pmiExpense, hoaExpense);
    
        // Update amortization labels
        updateAmortizationLabels(
            Math.ceil(amortizationData.totalInterestPaid),
            Math.ceil(amortizationData.totalPrincipalPaid),
            Math.ceil(amortizationData.schedule.reduce((sum, row) => sum + row.principal + row.interest, 0))
        );
    
        // Draw amortization chart
        drawAmortizationChart(
            amortizationData.balanceData,
            amortizationData.cumulativeInterestData,
            amortizationData.cumulativePrincipalData,
            0 // Set default hoverIndex to the first month
        );
    
        // Set the hover date to the first month on load
        const startDate = new Date();
        const firstMonthDate = new Date(startDate.setMonth(startDate.getMonth()));
        displayHoverDate(firstMonthDate);
    
        console.log("Results calculated and displayed.");
    }


    
    // Add a listener to detect manual changes to the PMI input
    document.getElementById('pmi-expense').addEventListener('input', function () {
        this.setAttribute('data-manual', 'true'); // Mark as manually updated
    });
    
    




    // Add a listener to detect manual changes to the PMI input
    document.getElementById('pmi-expense').addEventListener('input', function () {
        this.setAttribute('data-manual', 'true'); // Mark as manually updated
    });
    
    




    // Amortization chart
    function drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData, hoverIndex = 0) {
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
        const padding = { top: 10, right: 35, bottom: 50, left: 50 };
        const gridColor = '#d0d0d0';
        const labelColor = '#505050';
    
        const yAxisMax = Math.ceil(
            Math.max(...balanceData, ...cumulativeInterestData, ...cumulativePrincipalData) / 100000
        ) * 100000;
    
        function getY(value) {
            return height - padding.bottom - (value / yAxisMax) * (height - padding.top - padding.bottom);
        }
    
        function getX(index) {
            return padding.left + (index / (balanceData.length - 1)) * (width - padding.left - padding.right);
        }
    
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        // Draw horizontal grid lines (Y-axis) and labels
        ctx.font = '14px Roboto';
        ctx.textAlign = 'right';
        // ctx.fillStyle = labelColor;
        ctx.fillStyle = '#232525';
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
    
        // Draw data lines
        function drawLine(data, color) {
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            for (let i = 0; i < data.length; i++) {
                const x = getX(i);
                const y = getY(data[i]);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        }
    
        drawLine(balanceData, '#175134'); // Balance line
        drawLine(cumulativePrincipalData, '#3EB721'); // Principal line
        drawLine(cumulativeInterestData, '#91BBA6'); // Interest line
    
        // Always draw the vertical line at hoverIndex
        const x = getX(hoverIndex);
        const balanceY = getY(balanceData[hoverIndex]);
        const principalY = getY(cumulativePrincipalData[hoverIndex]);
        const interestY = getY(cumulativeInterestData[hoverIndex]);
    
        // Draw vertical line
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x, padding.top);
        ctx.lineTo(x, height - padding.bottom);
        ctx.stroke();
    
        // Draw hover dots
        const dotRadius = 6;
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
    









    // Doughnut chart
    function updateDoughnutChart(principalAndInterest, propertyTax, pmi, hoa) {
        const ctx = mortgageChartCanvas.getContext('2d');
        const size = 400; // Canvas size
    
        // Set canvas size
        mortgageChartCanvas.width = size;
        mortgageChartCanvas.height = size;
    
        const data = [principalAndInterest, propertyTax, pmi, hoa];
        const colors = ['#175134', '#3EB721', '#91BBA6', '#B3D4C2'];
        const total = data.reduce((a, b) => a + b, 0);
    
        // Formatter to add commas to the total
        const formattedTotal = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0, // No decimals for simplicity
        }).format(total);
    
        // Clear the canvas
        ctx.clearRect(0, 0, size, size);
    
        const outerRadius = size / 2; // Outer radius of the doughnut
        const innerRadius = outerRadius - 70; // Inner radius of the doughnut
        const centerX = size / 2; // Center X
        const centerY = size / 2; // Center Y
        const gapWidth = 5; // Width of the gap between segments
    
        let startAngle = -Math.PI / 2; // Start at the top
    
        // Draw each segment of the doughnut
        data.forEach((value, index) => {
            const segmentAngle = (value / total) * Math.PI * 2;
            const endAngle = startAngle + segmentAngle;
    
            // Draw the segment
            ctx.beginPath();
            ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
            ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
            ctx.closePath();
    
            // Fill with the segment color
            ctx.fillStyle = colors[index];
            ctx.fill();
    
            // Add spacing (stroke)
            ctx.strokeStyle = 'white'; // Color of the gap
            ctx.lineWidth = gapWidth;
            ctx.stroke();
    
            // Update the start angle for the next segment
            startAngle = endAngle;
        });
    
        // Responsive font size for the total amount in the center
        const fontSize = size / 7; // Adjust ratio for desired responsiveness
        ctx.font = `bold ${fontSize}px Roboto`;
        ctx.fillStyle = '#232525'; // Text color
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
    
        // Draw total amount in the center
        ctx.fillText(formattedTotal, centerX, centerY);
    
        // Always call the chart label update function
        updateDoughnutLabels(principalAndInterest, propertyTax, pmi, hoa);
    
        console.log("Doughnut chart updated with formatted total price and labels.");
    }
    





    // Reset functionality
    function resetInputs() {
        // Reset all input fields to blank or default
        homePriceInput.value = '';
        downPaymentAmountInput.value = '';
        downPaymentPercentageInput.value = '';
        loanTermInput.value = defaultValues.loanTerm;
        interestRateInput.value = '';
        extraPaymentInput.value = '';
        propertyTaxInput.value = '';
        hoaExpenseInput.value = '';
    
        // Reset PMI to the calculated value
        const homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice;
        const downPaymentAmount = parseFloat(downPaymentAmountInput.value) || defaultValues.downPaymentAmount;
        const downPaymentPercentage = (downPaymentAmount / homePrice) * 100;
    
        if (downPaymentPercentage < 20) {
            const annualPMI = homePrice * 0.0085; // 0.85% of loan amount
            const monthlyPMI = Math.ceil(annualPMI / 12); // Round up to nearest dollar
            pmiExpenseInput.value = monthlyPMI;
            pmiExpenseInput.removeAttribute('data-manual'); // Remove manual override
        } else {
            pmiExpenseInput.value = '';
            pmiExpenseInput.removeAttribute('data-manual'); // Reset manual flag
        }
    
        // Recalculate results using the default or blank inputs
        calculateAndDisplayResults();
    
        console.log("Inputs reset and PMI recalculated.");
    }
    


    

    // Event listeners
    updateBtn.addEventListener('click', calculateAndDisplayResults);
    resetBtn.addEventListener('click', resetInputs);

    // Initial calculation
    calculateAndDisplayResults();


    

    
 
    

    






    function updateDoughnutLabels(principalAndInterest, propertyTax, pmi, hoa) {
        const labelsContainer = document.getElementById('chartLabels');
        labelsContainer.innerHTML = ''; // Clear existing labels
    
        const data = [principalAndInterest, propertyTax, pmi, hoa];
        const labels = ['Principal & Interest', 'Property Tax', 'PMI', 'HOA'];
        const colors = ['#175134', '#3EB721', '#91BBA6', '#B3D4C2'];
    
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
            labelValue.textContent = `$${formatter.format(Math.ceil(value))}`; // Round up here
    
            labelItem.appendChild(colorCircle);
            labelItem.appendChild(labelName);
            labelItem.appendChild(labelValue);
    
            labelsContainer.appendChild(labelItem);
        });
    
        console.log("Doughnut labels updated with rounded values.");
    }
    
    



    function showTab(tabName) {
        const tabs = document.querySelectorAll('.tab-content');
        const navButtons = document.querySelectorAll('.results-tab');
    
        // Hide all tabs and remove active class from buttons
        tabs.forEach(tab => (tab.style.display = 'none'));
        navButtons.forEach(button => button.classList.remove('tab-active'));
    
        // Show the selected tab
        const selectedTab = document.getElementById(`${tabName}-content`);
        if (selectedTab) {
            selectedTab.style.display = 'block';
            document.querySelector(`#tab-${tabName}`).classList.add('tab-active');
        }
    
        // Handle Amortization Schedule tab
        if (tabName === 'amortization-schedule') {
            if (lastAmortizationData) {
                populateAmortizationTable(lastAmortizationData);
                initializeExpandCollapseLogic();
    
                drawAmortizationChart(
                    lastAmortizationData.balanceData,
                    lastAmortizationData.cumulativeInterestData,
                    lastAmortizationData.cumulativePrincipalData
                );
    
                // Render static labels with total values
                updateAmortizationLabels(
                    lastAmortizationData.totalInterestPaid,
                    lastAmortizationData.totalPrincipalPaid,
                    lastAmortizationData.schedule.reduce((sum, row) => sum + row.principal + row.interest, 0)
                );
            }
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
    
    
    
   


        

        function calculateAmortizationSchedule(principal, interestRate, numberOfPayments, extraPayment = 0) {
            const monthlyInterestRate = interestRate / 12; // Convert annual rate to monthly
            const periodicPrincipalAndInterest =
                (principal * monthlyInterestRate) /
                (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
        
            let balance = principal;
            const schedule = [];
            let totalInterestPaid = 0;
            let totalPrincipalPaid = 0;
        
            for (let i = 0; i < numberOfPayments; i++) {
                const interestPayment = balance * monthlyInterestRate;
                const principalPayment = Math.min(
                    periodicPrincipalAndInterest + extraPayment - interestPayment,
                    balance
                );
                balance -= principalPayment;
        
                totalInterestPaid += interestPayment;
                totalPrincipalPaid += principalPayment;
        
                schedule.push({
                    month: i + 1,
                    principal: principalPayment,
                    interest: interestPayment,
                    balance: Math.max(balance, 0),
                });
        
                if (balance <= 0) break; // Loan fully paid
            }
        
            return {
                schedule,
                totalInterestPaid,
                totalPrincipalPaid,
                balanceData: schedule.map(row => row.balance),
                cumulativeInterestData: schedule.map((row, index) =>
                    schedule.slice(0, index + 1).reduce((sum, r) => sum + r.interest, 0)
                ),
                cumulativePrincipalData: schedule.map((row, index) =>
                    schedule.slice(0, index + 1).reduce((sum, r) => sum + r.principal, 0)
                ),
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
    
        // Display the amortization schedule container
        document.getElementById('amortization-schedule').style.display = 'block';
    
        // Initialize expand/collapse logic
        initializeExpandCollapseLogic();
    }

    
    



    // function initializeExpandCollapseLogic() {
    //     const expandBox = document.querySelector(".expand-box");
    //     const amortizationTableBody = document.getElementById("amortization-table-body");
    //     const amortizationScheduleContainer = document.getElementById("amortization-schedule");
    //     const expandText = document.querySelector(".expand-text");
    
    //     if (!expandBox || !amortizationTableBody || !expandText || !amortizationScheduleContainer) {
    //         console.error("Expand/Collapse elements not found.");
    //         return;
    //     }
    
    //     console.log("Expand/Collapse Logic Initialized");
    
    //     // Ensure the amortization schedule container is visible
    //     amortizationScheduleContainer.style.display = "block";
    
    //     expandBox.addEventListener("click", function () {
    //         const rows = Array.from(amortizationTableBody.rows); // Refresh rows dynamically
    //         const isExpanded = expandText.textContent === "Expand";
    
    //         console.log(`Expand box clicked. Current state: ${isExpanded ? "Expanding" : "Collapsing"}`);
    
    //         // Toggle row visibility
    //         rows.forEach((row, index) => {
    //             row.style.display = isExpanded || index < 3 ? "table-row" : "none";
    //         });
    
    //         // Update the expand/collapse text
    //         expandText.textContent = isExpanded ? "Collapse" : "Expand";
    //     });
    
    //     // Set initial state: Show only the first three rows
    //     const rows = Array.from(amortizationTableBody.rows);
    //     rows.forEach((row, index) => {
    //         row.style.display = index < 3 ? "table-row" : "none";
    //     });
    // }
    

    // function initializeExpandCollapseLogic() {
    //     const expandBox = document.querySelector(".expand-box");
    //     const amortizationScheduleContainer = document.getElementById("amortization-schedule");
    //     const expandText = document.querySelector(".expand-text");
    //     const tableBody = document.getElementById("amortization-table-body");
    //     const rows = Array.from(tableBody.rows);
    
    //     if (!expandBox || !amortizationScheduleContainer || !expandText) {
    //         console.error("Expand/Collapse elements not found.");
    //         return;
    //     }
    
    //     console.log("Expand/Collapse Logic Initialized");
    
    //     expandBox.addEventListener("click", function () {
    //         const isExpanded = expandText.textContent === "Expand";
    
    //         if (isExpanded) {
    //             // Expand: Show the first 10 rows and make the container scrollable
    //             amortizationScheduleContainer.style.maxHeight = "300px"; // Limit the height
    //             amortizationScheduleContainer.style.overflowY = "auto"; // Enable scroll
    //             rows.forEach((row, index) => {
    //                 row.style.display = index < 10 ? "table-row" : "none"; // Show the first 10 rows
    //             });
    //             expandText.textContent = "Collapse";
    //         } else {
    //             // Collapse: Show only the first 3 rows, hide the rest
    //             amortizationScheduleContainer.style.maxHeight = "300px"; // Keep container height
    //             amortizationScheduleContainer.style.overflowY = "hidden"; // Hide scroll
    //             rows.forEach((row, index) => {
    //                 row.style.display = index < 3 ? "table-row" : "none"; // Show only the first 3 rows
    //             });
    //             expandText.textContent = "Expand";
    //         }
    //     });
    
    //     // Initial state: Show only the first 3 rows
    //     rows.forEach((row, index) => {
    //         row.style.display = index < 3 ? "table-row" : "none";
    //     });
    // }
    

    function initializeExpandCollapseLogic() {
        const expandBox = document.querySelector(".expand-box");
        const amortizationScheduleContainer = document.getElementById("amortization-schedule");
        const expandText = document.querySelector(".expand-text");
        const tableBody = document.getElementById("amortization-table-body");
        const rows = Array.from(tableBody.rows);
    
        if (!expandBox || !amortizationScheduleContainer || !expandText) {
            console.error("Expand/Collapse elements not found.");
            return;
        }
    
        console.log("Expand/Collapse Logic Initialized");
    
        expandBox.addEventListener("click", function () {
            const isExpanded = expandText.textContent === "Expand";
    
            if (isExpanded) {
                // Expand: Show the first 10 rows and make the container scrollable for the rest
                amortizationScheduleContainer.style.maxHeight = "300px"; // Set height for the scrollable area
                amortizationScheduleContainer.style.overflowY = "auto"; // Enable scrolling
                rows.forEach((row, index) => {
                    row.style.display = "table-row"; // Ensure all rows are visible in the scrollable container
                });
                expandText.textContent = "Collapse";
            } else {
                // Collapse: Show only the first 3 rows, hide the rest
                amortizationScheduleContainer.style.maxHeight = "300px"; // Limit height
                amortizationScheduleContainer.style.overflowY = "hidden"; // Hide scroll
                rows.forEach((row, index) => {
                    row.style.display = index < 3 ? "table-row" : "none"; // Show only the first 3 rows
                });
                expandText.textContent = "Expand";
            }
        });
    
        // Initial state: Show only the first 3 rows
        rows.forEach((row, index) => {
            row.style.display = index < 3 ? "table-row" : "none";
        });
    }
    
    
    

    
    

  
  


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



    // function calculateHoverIndex(x, chartWidth, padding, dataLength) {
    //     const rawIndex = ((x - padding.left) / chartWidth) * (dataLength - 1);
    //     return Math.min(Math.max(Math.round(rawIndex), 0), dataLength - 1);
    // }

    function calculateHoverIndex(x, chartWidth, padding, dataLength) {
        const rawIndex = ((x - padding.left) / chartWidth) * (dataLength - 1);
    
        // Ensure rounding bias towards edges for better coverage
        const adjustedIndex = Math.round(rawIndex);
        if (adjustedIndex >= dataLength - 1) {
            return dataLength - 1; // Snap to last index
        }
        return Math.min(Math.max(adjustedIndex, 0), dataLength - 1);
    }
    
    
    
    // amortizationChartCanvas.addEventListener('mousemove', (event) => {
    //     const rect = amortizationChartCanvas.getBoundingClientRect();
    //     const x = event.clientX - rect.left;
    
    //     const padding = { top: 10, right: 35, bottom: 50, left: 50 };
    //     const chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
    
    //     if (x >= padding.left && x <= amortizationChartCanvas.offsetWidth - padding.right) {
    //         const index = calculateHoverIndex(x, chartWidth, padding, lastAmortizationData.balanceData.length);
    //         updateHoverEffects(index);
    //     }
    // });
    
    // amortizationChartCanvas.addEventListener('touchmove', (event) => {
    //     const rect = amortizationChartCanvas.getBoundingClientRect();
    //     const touch = event.touches[0] || event.changedTouches[0];
    //     const x = touch.clientX - rect.left;
    
    //     const padding = { top: 10, right: 35, bottom: 50, left: 50 };
    //     const chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
    
    //     if (x >= padding.left && x <= amortizationChartCanvas.offsetWidth - padding.right) {
    //         const index = calculateHoverIndex(x, chartWidth, padding, lastAmortizationData.balanceData.length);
    //         updateHoverEffects(index);
    //     }
    // });
    
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
    



    function updateHoverEffects(index) {
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
    const loanTerm = parseInt(document.getElementById("loan-term").value) || 30;

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
