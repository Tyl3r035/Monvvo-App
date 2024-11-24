
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
                const {
                    periodicPrincipalAndInterest,
                    periodicPropertyTax,
                    periodicPMI,
                    periodicHOA
                } = lastAmortizationData;
    
                // Re-render the stacked bar chart
                updateHorizontalStackedBarChart(
                    periodicPrincipalAndInterest,
                    periodicPropertyTax,
                    periodicPMI,
                    periodicHOA
                );
            }
        } else if (tabName === "amortization") {
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
                    totalAmountPaid
                } = lastAmortizationData;
    
                drawAmortizationChart(
                    balanceData,
                    cumulativeInterestData,
                    cumulativePrincipalData
                );
                updateAmortizationLabels(
                    totalInterestPaid,
                    totalPrincipalPaid,
                    totalAmountPaid
                );
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

    const periodicPrincipalAndInterest = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    const periodicPropertyTax = propertyTax;
    const periodicPMI = pmiExpense;
    const periodicHOA = hoaExpense;

    // Adjust payment for selected frequency
    const selectedFrequency = paymentFrequencyInput.value;
    let paymentFactor = 1; // Default to monthly

    if (selectedFrequency === 'biweekly') {
        paymentFactor = 12 / 26; // Bi-weekly payments
    } else if (selectedFrequency === 'weekly') {
        paymentFactor = 12 / 52; // Weekly payments
    } else if (selectedFrequency === 'accelerated-biweekly') {
        paymentFactor = 1 / 26; // 13 monthly payments per year
    } else if (selectedFrequency === 'accelerated-weekly') {
        paymentFactor = 1 / 52; // 13 monthly payments per year
    }

    const totalPeriodicPayment = (periodicPrincipalAndInterest + periodicPropertyTax + periodicPMI + periodicHOA) * paymentFactor;

    // Update the payment display
    updateLabels(periodicPrincipalAndInterest, periodicPropertyTax, periodicPMI, periodicHOA);

    // Update the stacked bar chart
    updateHorizontalStackedBarChart(
        periodicPrincipalAndInterest,
        periodicPropertyTax,
        periodicPMI,
        periodicHOA
    );

    // Calculate Amortization Data
    const amortizationData = calculateAmortizationSchedule(principal, monthlyInterestRate, periodicPrincipalAndInterest, numberOfPayments);

    drawAmortizationChart(amortizationData.balanceData, amortizationData.cumulativeInterestData, amortizationData.cumulativePrincipalData);

    updateAmortizationLabels(amortizationData.totalInterestPaid, amortizationData.totalPrincipalPaid, amortizationData.totalAmountPaid);

    lastAmortizationData = {
        balanceData: amortizationData.balanceData,
        cumulativeInterestData: amortizationData.cumulativeInterestData,
        cumulativePrincipalData: amortizationData.cumulativePrincipalData,
        totalInterestPaid: amortizationData.totalInterestPaid,
        totalPrincipalPaid: amortizationData.totalPrincipalPaid,
        totalAmountPaid: amortizationData.totalAmountPaid,
        periodicPrincipalAndInterest,
        periodicPropertyTax,
        periodicPMI,
        periodicHOA,
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
            labelValue.textContent = `$${formatter.format(value)}`;
    
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
    



    // function updateLabels(principalAndInterest, propertyTax, pmi, hoa) {
    //     const periodicPaymentElement = document.getElementById('monthly-payment-value');
    
    //     // Get the selected frequency from the dropdown
    //     const selectedFrequency = paymentFrequencyInput.value;
    
    //     // Determine the frequency label for display
    //     let frequencyLabel = "Month";
    //     if (selectedFrequency === "biweekly") {
    //         frequencyLabel = "Bi-Week";
    //     } else if (selectedFrequency === "weekly") {
    //         frequencyLabel = "Week";
    //     } else if (selectedFrequency === "accelerated-biweekly") {
    //         frequencyLabel = "Accelerated Bi-Week";
    //     } else if (selectedFrequency === "accelerated-weekly") {
    //         frequencyLabel = "Accelerated Week";
    //     }
    
    //     // Calculate total periodic payment
    //     const totalPeriodicPayment = principalAndInterest + propertyTax + pmi + hoa;
    
    //     // Update the payment element with payment amount and frequency
    //     periodicPaymentElement.innerHTML = `
    //         <span class="payment-amount">$${formatter.format(totalPeriodicPayment)}</span>
    //         <span class="payment-frequency">/ ${frequencyLabel}</span>
    //     `;
    // }
    
    function updateLabels(principalAndInterest, propertyTax, pmi, hoa) {
        const periodicPaymentElement = document.getElementById('monthly-payment-value');
    
        // Get the selected frequency from the dropdown
        const selectedFrequency = paymentFrequencyInput.value;
    
        // Determine the frequency label for display
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
    
        // Update the payment element with styled HTML
        periodicPaymentElement.innerHTML = `
            <span class="payment-amount">$${formatter.format(totalPeriodicPayment)}</span>
            <span class="payment-frequency"> / ${frequencyLabel}</span>
        `;
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


    function drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData, hoverIndex = null) {
        const ctx = amortizationChartCanvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
    
        // Adjust height dynamically based on screen width
        let height = window.innerWidth < 500 ? 200 : 300;
    
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
    
        // Draw horizontal grid lines
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
    
        // Draw vertical grid lines
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
    
        // Draw hover vertical line first (underneath everything else)
        if (hoverIndex !== null) {
            const hoverX = getX(hoverIndex);
    
            ctx.beginPath();
            ctx.moveTo(hoverX, padding.top);
            ctx.lineTo(hoverX, height - padding.bottom);
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)'; // Subtle line
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    
        // Draw chart lines
        const drawLine = (data, color, lineWidth) => {
            ctx.beginPath();
            ctx.strokeStyle = color; // Ensure this is fully opaque
            ctx.lineWidth = lineWidth;
            ctx.moveTo(getX(0), getY(data[0]));
            for (let i = 1; i < months; i++) {
                ctx.lineTo(getX(i), getY(data[i]));
            }
            ctx.stroke();
        };
    
        drawLine(balanceData, '#175134', 2); // Balance line
        drawLine(cumulativeInterestData, '#3EB721', 2.5); // Cumulative Interest
        drawLine(cumulativePrincipalData, '#91BBA6', 2.5); // Cumulative Principal
    
        // Draw hover dots on top (above lines and vertical line)
        if (hoverIndex !== null) {
            const hoverX = getX(hoverIndex);
    
            const dotData = [
                { y: getY(balanceData[hoverIndex]), color: '#175134' },
                { y: getY(cumulativeInterestData[hoverIndex]), color: '#3EB721' },
                { y: getY(cumulativePrincipalData[hoverIndex]), color: '#91BBA6' },
            ];
    
            dotData.forEach(({ y, color }) => {
                ctx.beginPath();
                ctx.arc(hoverX, y, 5, 0, 2 * Math.PI);
                ctx.fillStyle = color; // Ensure this is fully opaque
                ctx.fill();
            });
        }
    
        // Draw border around the chart
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        ctx.strokeRect(
            padding.left - 3,
            padding.top - 3,
            width - padding.left - padding.right + 6,
            height - padding.top - padding.bottom + 6
        );
    }

    
    amortizationChartCanvas.addEventListener('mousemove', (event) => {
        const rect = amortizationChartCanvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
    
        const padding = { top: 30, right: 20, bottom: 30, left: 70 };
    
        // Ensure x is within the horizontal bounds of the chart
        if (x >= padding.left && x <= amortizationChartCanvas.offsetWidth - padding.right) {
            const chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
    
            const index = Math.round(
                ((x - padding.left) / chartWidth) *
                (lastAmortizationData.balanceData.length - 1)
            );
    
            if (index >= 0 && index < lastAmortizationData.balanceData.length) {
                drawAmortizationChart(
                    lastAmortizationData.balanceData,
                    lastAmortizationData.cumulativeInterestData,
                    lastAmortizationData.cumulativePrincipalData,
                    index // Pass hover index for hover effects
                );
            }
        }
    });
    
    amortizationChartCanvas.addEventListener('mouseout', () => {
        // Clear the canvas and redraw the chart without hover effects
        drawAmortizationChart(
            lastAmortizationData.balanceData,
            lastAmortizationData.cumulativeInterestData,
            lastAmortizationData.cumulativePrincipalData
        );
    });
    


    amortizationChartCanvas.addEventListener('mouseout', () => {
        // Clear the canvas and redraw the chart without hover effects
        drawAmortizationChart(
            lastAmortizationData.balanceData,
            lastAmortizationData.cumulativeInterestData,
            lastAmortizationData.cumulativePrincipalData
        );
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


    calculateAndDisplayResults();
   
    console.log("End of script reached");    

});
