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
        loanTerm: 25,
        interestRate: 7.04,
        propertyTax: 250,
        extraPayment: 0,
        pmiExpense: 200,
        hoaExpense: 0,
    };

    let lastAmortizationData = null;

    // Helper: Format currency
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
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

    // Update dependent inputs
    downPaymentAmountInput.addEventListener('input', function () {
        const homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice;
        const downPaymentAmount = parseFloat(downPaymentAmountInput.value) || 0;
        const downPaymentPercentage = (downPaymentAmount / homePrice) * 100;
        downPaymentPercentageInput.value = downPaymentPercentage.toFixed(2);
    });

    downPaymentPercentageInput.addEventListener('input', function () {
        const homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice;
        const downPaymentPercentage = parseFloat(downPaymentPercentageInput.value) || 0;
        const downPaymentAmount = (downPaymentPercentage / 100) * homePrice;
        downPaymentAmountInput.value = downPaymentAmount.toFixed(2);
    });

 
    
    
    function calculateAndDisplayResults() {
        console.log("Calculating and displaying results...");
    
        // Retrieve input values
        const homePrice = parseFloat(document.getElementById('home-price').value) || defaultValues.homePrice;
        const downPaymentAmount = parseFloat(document.getElementById('down-payment-amount').value) || defaultValues.downPaymentAmount;
        const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 || defaultValues.interestRate / 100;
        const loanTerm = parseInt(document.getElementById('loan-term').value) || defaultValues.loanTerm;
        const extraPayment = parseFloat(document.getElementById('extra-payment').value) || defaultValues.extraPayment;
    
        const principal = homePrice - downPaymentAmount;
    
        // Calculate amortization data
        const amortizationData = calculateAmortizationSchedule(principal, interestRate, loanTerm * 12, extraPayment);
    
        lastAmortizationData = {
            ...amortizationData,
            periodicPrincipalAndInterest: amortizationData.schedule[0].principal + amortizationData.schedule[0].interest,
        };
    
        // Update Payment Breakdown tab
        updateDoughnutChart(
            lastAmortizationData.periodicPrincipalAndInterest,
            defaultValues.propertyTax,
            defaultValues.pmiExpense,
            defaultValues.hoaExpense
        );
    
        // Update Amortization Schedule tab labels
        updateAmortizationLabels(
            lastAmortizationData.totalInterestPaid,
            lastAmortizationData.totalPrincipalPaid,
            lastAmortizationData.schedule.reduce((sum, row) => sum + row.principal + row.interest, 0)
        );
    
        console.log("Results calculated and displayed.");
    }
    


    // Amortization chart
    // function drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData) {
    //     const ctx = amortizationChartCanvas.getContext('2d');
    //     const dpr = window.devicePixelRatio || 1;
    //     amortizationChartCanvas.width = amortizationChartCanvas.parentElement.offsetWidth * dpr;
    //     amortizationChartCanvas.height = 300 * dpr;
    //     ctx.scale(dpr, dpr);

    //     // Custom drawing logic here...
    //     console.log("Amortization chart updated");
    // }




    function drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData, hoverIndex = null) {
        const canvas = document.getElementById('amortizationChart');
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
    
        // Adjust canvas dimensions
        const isSmallScreen = window.innerWidth < 700;
        const canvasHeight = isSmallScreen ? 200 : 300;
    
        canvas.width = canvas.parentElement.offsetWidth * dpr;
        canvas.height = canvasHeight * dpr;
        ctx.scale(dpr, dpr);
    
        const width = canvas.width / dpr;
        const height = canvas.height / dpr;
    
        // Padding and grid settings
        const padding = { top: 10, right: 15, bottom: 50, left: 50 };
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
    
        // Draw grid lines and labels
        ctx.font = '12px Arial';
        ctx.textAlign = 'right';
        ctx.fillStyle = labelColor;
        ctx.strokeStyle = gridColor;
    
        for (let i = 0; i <= yAxisMax; i += 100000) {
            const y = getY(i);
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(width - padding.right, y);
            ctx.stroke();
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
            ctx.beginPath();
            ctx.moveTo(x, padding.top);
            ctx.lineTo(x, height - padding.bottom);
            ctx.stroke();
            ctx.fillText(yearLabel, x, height - 10);
        }
    
        // Draw data lines
        function drawLine(data, color) {
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
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
    
        // Draw hover effects if hoverIndex is provided
        if (hoverIndex !== null) {
            const x = getX(hoverIndex);
            const balanceY = getY(balanceData[hoverIndex]);
            const principalY = getY(cumulativePrincipalData[hoverIndex]);
            const interestY = getY(cumulativeInterestData[hoverIndex]);
    
            // Draw vertical line
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
    












    // Doughnut chart
    function updateDoughnutChart(principalAndInterest, propertyTax, pmi, hoa) {
        const ctx = mortgageChartCanvas.getContext('2d');
        const size = 400;
        mortgageChartCanvas.width = size;
        mortgageChartCanvas.height = size;

        const data = [principalAndInterest, propertyTax, pmi, hoa];
        const colors = ['#175134', '#3EB721', '#91BBA6', '#B3D4C2'];

        let total = data.reduce((a, b) => a + b, 0);
        let startAngle = -Math.PI / 2;

        data.forEach((value, index) => {
            const segmentAngle = (value / total) * Math.PI * 2;
            ctx.beginPath();
            ctx.arc(size / 2, size / 2, size / 2, startAngle, startAngle + segmentAngle);
            ctx.lineTo(size / 2, size / 2);
            ctx.fillStyle = colors[index];
            ctx.fill();
            startAngle += segmentAngle;
        });

        console.log("Doughnut chart updated");
    }

    // Reset functionality
    function resetInputs() {
        homePriceInput.value = defaultValues.homePrice;
        downPaymentAmountInput.value = defaultValues.downPaymentAmount;
        loanTermInput.value = defaultValues.loanTerm;
        interestRateInput.value = defaultValues.interestRate;
        extraPaymentInput.value = defaultValues.extraPayment;
        propertyTaxInput.value = defaultValues.propertyTax;
        pmiExpenseInput.value = defaultValues.pmiExpense;
        hoaExpenseInput.value = defaultValues.hoaExpense;
        calculateAndDisplayResults();
    }

    // Event listeners
    updateBtn.addEventListener('click', calculateAndDisplayResults);
    resetBtn.addEventListener('click', resetInputs);

    // Initial calculation
    calculateAndDisplayResults();


    

    
    function updateDoughnutChart(principalAndInterest, propertyTax, pmi, hoa) {
        const ctx = mortgageChartCanvas.getContext('2d');
        const size = 400;
    
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
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(total);
    
        // Clear the canvas
        ctx.clearRect(0, 0, size, size);
    
        const outerRadius = size / 2; // Outer radius of the doughnut
        const innerRadius = outerRadius - 60; // Inner radius of the doughnut
        const centerX = size / 2; // Center X
        const centerY = size / 2; // Center Y
        const gapWidth = 4; // Width of the gap
    
        let startAngle = -Math.PI / 2; // Start at the top
    
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
    
        // Responsive font size based on canvas size
        const fontSize = size / 8; // Adjust this ratio for desired responsiveness
        ctx.font = `bold ${fontSize}px Roboto`;
        ctx.fillStyle = '#232525'; // Text color
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
    
        // Draw total mortgage price in the center
        ctx.fillText(formattedTotal, centerX, centerY);
    
        // Always call the chart label update function
        updateDoughnutLabels(principalAndInterest, propertyTax, pmi, hoa);
    
        console.log("Doughnut chart updated with formatted total price and labels.");
    }
    
    

    
    

    

    




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
            labelValue.textContent = `$${value.toFixed(2)}`;
    
            labelItem.appendChild(colorCircle);
            labelItem.appendChild(labelName);
            labelItem.appendChild(labelValue);
    
            labelsContainer.appendChild(labelItem);
        });
    }



    // function showTab(tabName) {
    //     const tabs = document.querySelectorAll('.tab-content');
    //     const navButtons = document.querySelectorAll('.results-tab');
    
    //     // Hide all tabs and remove active class from buttons
    //     tabs.forEach(tab => (tab.style.display = 'none'));
    //     navButtons.forEach(button => button.classList.remove('tab-active'));
    
    //     // Show the selected tab
    //     const selectedTab = document.getElementById(`${tabName}-content`);
    //     if (selectedTab) {
    //         selectedTab.style.display = 'block';
    //         document.querySelector(`#tab-${tabName}`).classList.add('tab-active');
    //     }
    
    //     // Handle Amortization Schedule tab
    //     if (tabName === 'amortization-schedule') {
    //         if (lastAmortizationData) {
    //             populateAmortizationTable(lastAmortizationData);
    
    //             drawAmortizationChart(
    //                 lastAmortizationData.balanceData,
    //                 lastAmortizationData.cumulativeInterestData,
    //                 lastAmortizationData.cumulativePrincipalData
    //             );
    
    //             // Update labels to total values immediately
    //             updateAmortizationLabels(
    //                 lastAmortizationData.totalInterestPaid,
    //                 lastAmortizationData.totalPrincipalPaid,
    //                 lastAmortizationData.schedule.reduce((sum, row) => sum + row.principal + row.interest, 0)
    //             );
    //         }
    //     }
    // }
    
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
    



    function updateHoverValues(balance, interest, principal) {
        const balanceLabel = document.getElementById('label-balance');
        const interestLabel = document.getElementById('label-interest');
        const principalLabel = document.getElementById('label-principal');
    
        if (balanceLabel) balanceLabel.textContent = `$${balance.toFixed(2)}`;
        if (interestLabel) interestLabel.textContent = `$${interest.toFixed(2)}`;
        if (principalLabel) principalLabel.textContent = `$${principal.toFixed(2)}`;
    
        console.log("Hover values updated:", { balance, interest, principal });
    }
    
    
    
    
    amortizationChartCanvas.addEventListener('mousemove', (event) => {
        const rect = amortizationChartCanvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
    
        const padding = { top: 30, right: 25, bottom: 30, left: 70 };
        if (x < padding.left || x > amortizationChartCanvas.offsetWidth - padding.right) {
            revertValuesToTotals(); // Reset to totals if outside chart area
    
            // Clear hover date
            const hoverDateContainer = document.getElementById('amortizationHoverDate');
            if (hoverDateContainer) {
                hoverDateContainer.textContent = ''; // Clear the hover date
            }
    
            drawAmortizationChart(
                lastAmortizationData.balanceData,
                lastAmortizationData.cumulativeInterestData,
                lastAmortizationData.cumulativePrincipalData
            );
            return;
        }
    
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
    
            // Display hover date
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
    });
    
    
    amortizationChartCanvas.addEventListener('mouseout', () => {
        revertValuesToTotals(); // Reset labels to totals
    });
        
    


    
    
    


    function revertValuesToTotals() {
        if (!lastAmortizationData) {
            console.error("No amortization data available to revert values.");
            return;
        }
    
        const { totalInterestPaid, totalPrincipalPaid, totalAmountPaid } = lastAmortizationData;
    
        updateAmortizationLabels(totalInterestPaid, totalPrincipalPaid, totalAmountPaid);
    
        // Clear the hover date if applicable
        const hoverDateContainer = document.getElementById('amortizationHoverDate');
        if (hoverDateContainer) {
            hoverDateContainer.textContent = ''; // Clear the hover date
        }
    
        console.log("Labels reverted to totals after hover.");
    }
    
    
    

    


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
        if (!hoverDateContainer) {
            console.error("Hover date container not found.");
            return;
        }
    
        const month = date.toLocaleString('default', { month: 'long' }); // Full month name
        const year = date.getFullYear();
        hoverDateContainer.textContent = `${month} ${year}`;
    }
    


  
    amortizationChartCanvas.addEventListener('mouseout', () => {
        revertValuesToTotals(); // Reset labels
    
        // Clear hover date
        const hoverDateContainer = document.getElementById('amortizationHoverDate');
        if (hoverDateContainer) {
            hoverDateContainer.textContent = ''; // Clear the hover date
        }
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
    



    function updateHoverValues(balance, interest, principal) {
        const labelsContainer = document.getElementById('amortizationLabels');
        if (!labelsContainer) {
            console.error("Amortization labels container not found.");
            return;
        }
    
        labelsContainer.innerHTML = ''; // Clear existing labels
    
        const labels = [
            { name: "Total Balance", value: balance, color: "#175134" },
            { name: "Total Interest Paid", value: interest, color: "#91BBA6" },
            { name: "Total Principal Paid", value: principal, color: "#3EB721" },
        ];
    
        labels.forEach(label => {
            const labelItem = document.createElement('div');
            labelItem.classList.add('label-item');
    
            const colorCircle = document.createElement('span');
            colorCircle.classList.add('color-circle');
            colorCircle.style.backgroundColor = label.color;
    
            const labelName = document.createElement('span');
            labelName.classList.add('label-name');
            labelName.textContent = label.name;
    
            const labelValue = document.createElement('span');
            labelValue.classList.add('label-value');
            labelValue.textContent = `$${label.value.toFixed(2)}`;
    
            labelItem.appendChild(colorCircle);
            labelItem.appendChild(labelName);
            labelItem.appendChild(labelValue);
    
            labelsContainer.appendChild(labelItem);
        });
    
        console.log("Hover values updated:", { balance, interest, principal });
    }
    
    




    function updateAmortizationLabels(totalInterestPaid, totalPrincipalPaid, totalAmountPaid) {
        const labelsContainer = document.getElementById('amortizationLabels');
        if (!labelsContainer) {
            console.error("Amortization labels container not found.");
            return;
        }
    
        // Render the static labels only if they don't exist
        labelsContainer.innerHTML = `
            <div class="label-item">
                <span class="color-circle" style="background-color: #175134;"></span>
                <span class="label-name">Total Balance</span>
                <span class="label-value" id="label-balance">$${totalAmountPaid.toFixed(2)}</span>
            </div>
            <div class="label-item">
                <span class="color-circle" style="background-color: #91BBA6;"></span>
                <span class="label-name">Total Interest Paid</span>
                <span class="label-value" id="label-interest">$${totalInterestPaid.toFixed(2)}</span>
            </div>
            <div class="label-item">
                <span class="color-circle" style="background-color: #3EB721;"></span>
                <span class="label-name">Total Principal Paid</span>
                <span class="label-value" id="label-principal">$${totalPrincipalPaid.toFixed(2)}</span>
            </div>
        `;
    
        console.log("Amortization labels rendered with totals.");
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
