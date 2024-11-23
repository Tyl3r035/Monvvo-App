
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");

    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
    

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
            paymentBreakdownContent.style.display = "block";
            amortizationScheduleContent.style.display = "none";
            tabPaymentBreakdown.classList.add("tab-active");
            tabAmortizationSchedule.classList.remove("tab-active");
            if (lastAmortizationData) {
                const { monthlyPrincipalAndInterest, monthlyPropertyTax, monthlyPMI, monthlyHOA } = lastAmortizationData;
                updateHorizontalStackedBarChart(monthlyPrincipalAndInterest, monthlyPropertyTax, monthlyPMI, monthlyHOA);
            }
        } else if (tabName === "amortization") {
            paymentBreakdownContent.style.display = "none";
            amortizationScheduleContent.style.display = "block";
            tabPaymentBreakdown.classList.remove("tab-active");
            tabAmortizationSchedule.classList.add("tab-active");
            if (lastAmortizationData) {
                const { balanceData, cumulativeInterestData, cumulativePrincipalData, totalInterestPaid, totalPrincipalPaid, totalAmountPaid } = lastAmortizationData;
                drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData);
                updateAmortizationLabels(totalInterestPaid, totalPrincipalPaid, totalAmountPaid);
            }
        }
    }

    tabPaymentBreakdown.addEventListener("click", () => showTab("payment"));
    tabAmortizationSchedule.addEventListener("click", () => showTab("amortization"));

    function calculateAndDisplayResults() {
        console.log("Calculating and displaying results");

        const homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice;
        const downPaymentAmount = parseFloat(downPaymentAmountInput.value);
        const downPaymentPercentage = parseFloat(downPaymentPercentageInput.value);

        let downPayment;
        if (!isNaN(downPaymentPercentage) && downPaymentPercentage > 0) {
            downPayment = Math.ceil((downPaymentPercentage / 100) * homePrice);
            downPaymentAmountInput.value = downPayment;
        } else if (!isNaN(downPaymentAmount)) {
            downPayment = downPaymentAmount;
            const percentageValue = (downPaymentAmount / homePrice) * 100;
            downPaymentPercentageInput.value = Number.isInteger(percentageValue)
                ? percentageValue
                : percentageValue.toFixed(2);
        } else {
            downPayment = defaultValues.downPaymentAmount;
        }

        const principal = homePrice - downPayment;
        const loanTerm = parseInt(loanTermInput.value) || defaultValues.loanTerm;
        const interestRate = parseFloat(interestRateInput.value) || defaultValues.interestRate;
        const propertyTax = parseFloat(propertyTaxInput.value) || defaultValues.propertyTax;
        const pmiExpense = parseFloat(pmiExpenseInput.value) || defaultValues.pmiExpense;
        const hoaExpense = parseFloat(hoaExpenseInput.value) || defaultValues.hoaExpense;

        const monthlyInterestRate = (interestRate / 100) / 12;
        const numberOfPayments = loanTerm * 12;
        const monthlyPrincipalAndInterest = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

        const monthlyPropertyTax = propertyTax;
        const monthlyPMI = pmiExpense;
        const monthlyHOA = hoaExpense;

        const totalMonthlyPayment = monthlyPrincipalAndInterest + monthlyPropertyTax + monthlyPMI + monthlyHOA;

        updateHorizontalStackedBarChart(monthlyPrincipalAndInterest, monthlyPropertyTax, monthlyPMI, monthlyHOA);
        updateLabels(monthlyPrincipalAndInterest, monthlyPropertyTax, monthlyPMI, monthlyHOA);

        const monthlyPaymentElement = document.querySelector('.monthly-payment');
        monthlyPaymentElement.innerText = `$${formatter.format(totalMonthlyPayment)}`;
        monthlyPaymentElement.style.fontFamily = 'Open Sans';
        monthlyPaymentElement.style.fontWeight = '500';
        monthlyPaymentElement.style.color = '#000';

        const amortizationData = calculateAmortizationSchedule(principal, monthlyInterestRate, monthlyPrincipalAndInterest, numberOfPayments);
        drawAmortizationChart(amortizationData.balanceData, amortizationData.cumulativeInterestData, amortizationData.cumulativePrincipalData);
        updateAmortizationLabels(amortizationData.totalInterestPaid, amortizationData.totalPrincipalPaid, amortizationData.totalAmountPaid);

        lastAmortizationData = {
            balanceData: amortizationData.balanceData,
            cumulativeInterestData: amortizationData.cumulativeInterestData,
            cumulativePrincipalData: amortizationData.cumulativePrincipalData,
            totalInterestPaid: amortizationData.totalInterestPaid,
            totalPrincipalPaid: amortizationData.totalPrincipalPaid,
            totalAmountPaid: amortizationData.totalAmountPaid,
            monthlyPrincipalAndInterest,
            monthlyPropertyTax,
            monthlyPMI,
            monthlyHOA
        };
    }

    function updateHoverValues(balance, interest, principal) {
        const labelValues = amortizationLabelsContainer.querySelectorAll('.label-value');
        if (labelValues.length === 3) {
            labelValues[0].textContent = formatter.format(interest);
            labelValues[1].textContent = formatter.format(principal);
            labelValues[2].textContent = formatter.format(balance);
        }
    }

    function revertValuesToTotals() {
        const { totalInterestPaid, totalPrincipalPaid, totalAmountPaid } = lastAmortizationData;
        updateHoverValues(totalAmountPaid, totalInterestPaid, totalPrincipalPaid);
    }

    function resetInputs() {
        console.log("Resetting inputs to default values");

        homePriceInput.value = defaultValues.homePrice;
        downPaymentAmountInput.value = defaultValues.downPaymentAmount;
        downPaymentPercentageInput.value = defaultValues.downPaymentPercentage;
        loanTermInput.value = defaultValues.loanTerm;
        interestRateInput.value = defaultValues.interestRate;
        propertyTaxInput.value = defaultValues.propertyTax;
        pmiExpenseInput.value = defaultValues.pmiExpense;
        hoaExpenseInput.value = defaultValues.hoaExpense;

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
        const ctx = canvas.getContext('2d');
        const parentWidth = canvas.parentElement.offsetWidth;

        canvas.width = parentWidth;
        canvas.height = 100;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const data = [principalAndInterest, propertyTax, pmi, hoa];
        const colors = ['#175134', '#3EB721', '#91BBA6', '#B3D4C2'];

        const chartHeight = 70;
        const chartWidth = canvas.width;
        const total = data.reduce((a, b) => a + b, 0);
        const maxTotal = Math.max(total, 1);

        const xOffset = 0;
        const yOffset = canvas.height / 2;
        const borderRadius = 5;
        const gap = 2;

        ctx.save();
        drawRoundedRect(ctx, xOffset, yOffset - chartHeight / 2, chartWidth, chartHeight, borderRadius);

        let cumulativeWidth = 0;

        data.forEach((value, index) => {
            const barWidth = (value / maxTotal) * chartWidth - gap;
            ctx.fillStyle = colors[index];
            ctx.fillRect(xOffset + cumulativeWidth, yOffset - chartHeight / 2, barWidth, chartHeight);
            cumulativeWidth += barWidth + gap;
        });

        ctx.restore();
    }

    function updateLabels(principalAndInterest, propertyTax, pmi, hoa) {
        const labels = [
            { label: 'Principal & Interest', value: principalAndInterest, color: '#175134' },
            { label: 'Property Tax', value: propertyTax, color: '#3EB721' },
            { label: 'PMI', value: pmi, color: '#91BBA6' },
            { label: 'HOA', value: hoa, color: '#B3D4C2' }
        ];

        labelsContainer.innerHTML = ''; // Clear previous labels

        labels.forEach(item => {
            const labelElement = document.createElement('div');
            labelElement.classList.add('label-item');
            labelElement.style.fontFamily = "'Open Sans', sans-serif";
            labelElement.style.fontWeight = '550';
            labelElement.style.color = "#101010";
            
            const colorCircle = document.createElement('span');
            colorCircle.classList.add('color-circle');
            colorCircle.style.backgroundColor = item.color;

            const labelText = document.createElement('span');
            labelText.classList.add('label-name');
            labelText.textContent = item.label;

            const labelValue = document.createElement('span');
            labelValue.classList.add('label-value');
            labelValue.textContent = `${formatter.format(item.value)}`;

            labelElement.appendChild(colorCircle);
            labelElement.appendChild(labelText);
            labelElement.appendChild(labelValue);

            labelsContainer.appendChild(labelElement);
        });
    }

    function calculateAmortizationSchedule(principal, monthlyInterestRate, monthlyPrincipalAndInterest, numberOfPayments) {
        const balanceData = [];
        const cumulativeInterestData = [];
        const cumulativePrincipalData = [];
        
        let balance = principal;
        let cumulativeInterest = 0;
        let cumulativePrincipal = 0;

        for (let month = 1; month <= numberOfPayments; month++) {
            const interestPayment = balance * monthlyInterestRate;
            const principalPayment = monthlyPrincipalAndInterest - interestPayment;
            balance -= principalPayment;

            cumulativeInterest += interestPayment;
            cumulativePrincipal += principalPayment;

            balanceData.push(balance > 0 ? balance : 0);
            cumulativeInterestData.push(cumulativeInterest);
            cumulativePrincipalData.push(cumulativePrincipal);
        }

        const totalInterestPaid = cumulativeInterest;
        const totalPrincipalPaid = cumulativePrincipal;
        const totalAmountPaid = monthlyPrincipalAndInterest * numberOfPayments;

        return { balanceData, cumulativeInterestData, cumulativePrincipalData, totalInterestPaid, totalPrincipalPaid, totalAmountPaid };
    }

    function drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData) {
        const ctx = amortizationChartCanvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
    
        // Adjust height dynamically based on screen width
        let height;
        if (window.innerWidth < 500) {
            height = 200; // Set a smaller height for smaller screens
        } else {
            height = 300; // Default height
        }
    
        amortizationChartCanvas.style.width = '100%';
        amortizationChartCanvas.style.height = `${height}px`;
    
        const width = amortizationChartCanvas.offsetWidth;
        amortizationChartCanvas.width = width * dpr;
        amortizationChartCanvas.height = height * dpr;
    
        if (dpr > 1) {
            ctx.scale(dpr, dpr);
        }
    
        ctx.clearRect(0, 0, width * dpr, height * dpr);
    
        const months = balanceData.length;
        const maxBalance = Math.max(...balanceData);
        const maxCumulative = Math.max(...cumulativeInterestData, ...cumulativePrincipalData);
    
        const yAxisMax = Math.max(maxBalance, maxCumulative);
    
        const intervalMonths = 5 * 12;
        const padding = { top: 30, right: 20, bottom: 30, left: 70 };
    
        const gridColor = '#d0d0d0';
        const labelColor = '#505050';
        const labelFont = '14px Open Sans';
        const currentYear = new Date().getFullYear();
        
    
        ctx.font = labelFont;
        ctx.textAlign = 'right';
    
        function getY(value) {
            return height - padding.bottom - (value / yAxisMax) * (height - padding.top - padding.bottom);
        }
    
        function getX(index) {
            return padding.left + (index / months) * (width - padding.left - padding.right);
        }
        window.addEventListener('resize', () => {
            drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData);
        });
        
        // Draw horizontal grid lines only, avoiding the line at the bottom (y-axis line)
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        
        const yLabelInterval = 100000;
        for (let yValue = yLabelInterval; yValue < yAxisMax; yValue += yLabelInterval) {
            const y = getY(yValue);
            ctx.beginPath();
            ctx.moveTo(padding.left, y);
            ctx.lineTo(width - padding.right, y);
            ctx.stroke();
            
            ctx.fillStyle = labelColor;
            ctx.fillText(`$${(yValue / 1000).toFixed(0)}K`, padding.left - 10, y + 4);
        }
        
        // Draw vertical grid lines only, avoiding the line on the left (x-axis line)
        ctx.textAlign = 'center';
        
        for (let i = intervalMonths; i < months; i += intervalMonths) {
            const x = getX(i);
            ctx.beginPath();
            ctx.moveTo(x, padding.top);
            ctx.lineTo(x, height - padding.bottom);
            ctx.stroke();
            
            const yearLabel = currentYear + (i / 12 / 5) * 5;
            ctx.fillStyle = labelColor;
            ctx.fillText(yearLabel, x, height - 5);
        }
    
        // Plot balance line
        ctx.beginPath();
        ctx.strokeStyle = '#175134';
        ctx.lineWidth = 2;
        ctx.moveTo(getX(0), getY(balanceData[0]));
        for (let i = 1; i < months; i++) {
            ctx.lineTo(getX(i), getY(balanceData[i]));
        }
        ctx.stroke();
        
        // Plot cumulative interest line
        ctx.beginPath();
        ctx.strokeStyle = '#3EB721';
        ctx.lineWidth = 2.5;
        ctx.moveTo(getX(0), getY(cumulativeInterestData[0]));
        for (let i = 1; i < months; i++) {
            ctx.lineTo(getX(i), getY(cumulativeInterestData[i]));
        }
        ctx.stroke();
        
        // Plot cumulative principal line
        ctx.beginPath();
        ctx.strokeStyle = '#91BBA6';
        ctx.lineWidth = 2.5;
        ctx.moveTo(getX(0), getY(cumulativePrincipalData[0]));
        for (let i = 1; i < months; i++) {
            ctx.lineTo(getX(i), getY(cumulativePrincipalData[i]));
        }
        ctx.stroke();
    
        // Draw border around the chart with 3px internal padding
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        ctx.strokeRect(padding.left - 3, padding.top - 3, width - padding.left - padding.right + 6, height - padding.top - padding.bottom + 6);
    }
    amortizationChartCanvas.addEventListener('mousemove', (event) => {
        const ctx = amortizationChartCanvas.getContext('2d');
        const rect = amortizationChartCanvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
    
        const padding = { top: 30, right: 20, bottom: 30, left: 70 }; // Match this with your chart's padding
    
        // Ensure x is within the horizontal bounds of the chart
        if (x >= padding.left && x <= amortizationChartCanvas.width - padding.right) {
            const chartWidth = amortizationChartCanvas.width - padding.left - padding.right;
            const chartHeight = amortizationChartCanvas.height - padding.top - padding.bottom;
    
            const index = Math.round(
                ((x - padding.left) / chartWidth) *
                (lastAmortizationData.balanceData.length - 1)
            );
    
            if (index >= 0 && index < lastAmortizationData.balanceData.length) {
                // Clear the canvas and redraw the chart
                drawAmortizationChart(
                    lastAmortizationData.balanceData,
                    lastAmortizationData.cumulativeInterestData,
                    lastAmortizationData.cumulativePrincipalData
                );
    
                // Draw the vertical line strictly within the chart area
                ctx.beginPath();
                ctx.moveTo(x, padding.top + 1); // +1 to avoid touching the border
                ctx.lineTo(x, padding.top + chartHeight - 1); // -1 to avoid touching the border
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
                ctx.lineWidth = 1;
                ctx.stroke();
    
                // Update the labels with hover values
                updateHoverValues(
                    lastAmortizationData.balanceData[index],
                    lastAmortizationData.cumulativeInterestData[index],
                    lastAmortizationData.cumulativePrincipalData[index]
                );
            }
        }
    });
    
    
    

    amortizationChartCanvas.addEventListener('mouseout', () => {
        // Clear the canvas and redraw the chart without the vertical line
        drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData, lastAmortizationData.cumulativePrincipalData);
        revertValuesToTotals();
    });

    function updateAmortizationLabels(totalInterestPaid, totalPrincipalPaid, totalAmountPaid) {
        const labels = [
            { label: 'Total Interest Paid', value: totalInterestPaid, color: '#3EB721' },
            { label: 'Total Principal Paid', value: totalPrincipalPaid, color: '#91BBA6' },
            { label: 'Balance (Total Paid)', value: totalAmountPaid, color: '#175134' }
        ];
    
        amortizationLabelsContainer.innerHTML = ''; // Clear previous labels
    
        labels.forEach(item => {
            const labelElement = document.createElement('div');
            labelElement.classList.add('label-item');
            labelElement.style.fontFamily = "'Open Sans', sans-serif";
            labelElement.style.fontWeight = '550';
            labelElement.style.color = "#101010";
            
            const colorCircle = document.createElement('span');
            colorCircle.classList.add('color-circle');
            colorCircle.style.backgroundColor = item.color;
    
            const labelText = document.createElement('span');
            labelText.classList.add('label-name');
            labelText.textContent = item.label;
    
            const labelValue = document.createElement('span');
            labelValue.classList.add('label-value');
            labelValue.textContent = formatter.format(item.value).replace('$', '');
    
            labelElement.appendChild(colorCircle);
            labelElement.appendChild(labelText);
            labelElement.appendChild(labelValue);
    
            amortizationLabelsContainer.appendChild(labelElement);
        });
    }

// Custom throttle function
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function (...args) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args); // Run immediately on first call
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc); // Clear any pending execution
            lastFunc = setTimeout(() => {
                if (Date.now() - lastRan >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Add throttled event listener for window resize
window.addEventListener(
    'resize',
    throttle(() => {
        // Call your chart logic here
        calculateAndDisplayResults();
        syncResultsContainerSize();
    }, 500) // Adjust the delay as needed
);


    calculateAndDisplayResults();
    console.log("End of script reached");
    function syncResultsContainerSize() {
        const amortizationChartCanvas = document.getElementById('amortizationChart');
        const resultsContainer = document.querySelector('.results-container');
    
        if (amortizationChartCanvas && resultsContainer) {
            // Sync the results container dimensions with the chart
            const chartStyles = window.getComputedStyle(amortizationChartCanvas);
            resultsContainer.style.height = chartStyles.height;
            resultsContainer.style.width = chartStyles.width;
        }
    }
    
   
    
    // Ensure initial alignment
    document.addEventListener('DOMContentLoaded', () => {
        calculateAndDisplayResults(); // If not already auto-triggered
        syncResultsContainerSize();
    });
    

});
