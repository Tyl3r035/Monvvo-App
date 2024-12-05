// import { generateMortgagePdf } from "./pdf/mortgage-pdf.js";
    
    document.addEventListener("DOMContentLoaded", function () {
        console.log("DOMContentLoaded event fired");
    
        // Define default values
        const defaultValues = {
            loanAmount: 20000, // Default loan amount
            loanTerm: 60, // Loan term in months
            interestRate: 7.04, // Annual interest rate
            originationFees: 0, // Default origination fees
            extraPayment: 0, // Default extra payment
            paymentFrequency: "monthly", // Default payment frequency
        };
    
        // Input elements
        const loanAmountInput = document.getElementById('loan-amount');
        const loanTermInput = document.getElementById('loan-term');
        const interestRateInput = document.getElementById('interest-rate');
        const originationFeesInput = document.getElementById('origination-fees');
        const extraPaymentInput = document.getElementById('extra-payment');
        const paymentFrequencyInput = document.getElementById('payment-frequency');
        const amortizationChartCanvas = document.getElementById('amortizationChart');
        const updateBtn = document.getElementById('update-btn');
        const resetBtn = document.getElementById('reset-btn');
        const amortizationLabelsContainer = document.getElementById('amortizationLabels');
    
        // Set placeholders and default values
        loanAmountInput.placeholder = defaultValues.loanAmount;
        loanTermInput.value = defaultValues.loanTerm;
        interestRateInput.placeholder = defaultValues.interestRate;
        originationFeesInput.placeholder = defaultValues.originationFees;
        extraPaymentInput.placeholder = defaultValues.extraPayment;
        paymentFrequencyInput.value = defaultValues.paymentFrequency;
    
        // Formatter for currency values
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    
        // Restrict invalid inputs
        [loanAmountInput, loanTermInput, interestRateInput, originationFeesInput, extraPaymentInput].forEach(input => {
            input.addEventListener('keydown', function (event) {
                if (event.key === "-" || event.key === "e") {
                    event.preventDefault();
                }
            });
        });


        let lastAmortizationData = null;
        



 
 
 



// function updateHorizontalStackedBarChart(principalAndInterest, extraPayment, frequency) {
//     const canvas = document.getElementById('loanChart');
//     if (!canvas) {
//         console.error("Canvas element for loan chart not found.");
//         return;
//     }

//     const ctx = canvas.getContext('2d');
//     const parentWidth = canvas.parentElement.offsetWidth;

//     // Ensure the canvas is resized
//     canvas.width = parentWidth;
//     canvas.height = 100;

//     // Clear the canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Adjust payments for frequency
//     const adjustedPrincipalAndInterest = adjustPaymentForFrequency(principalAndInterest, frequency);
//     const adjustedExtraPayment = adjustPaymentForFrequency(extraPayment, frequency);

//     // Data and colors
//     const data = [adjustedPrincipalAndInterest, adjustedExtraPayment];
//     const colors = ['#175134', '#91BBA6']; // Principal & Interest, Extra Payment
//     const total = data.reduce((a, b) => a + b, 0);

//     if (total === 0) {
//         console.warn("Total data for stacked bar chart is 0. Skipping rendering.");
//         return;
//     }

//     const chartHeight = 60;
//     const yOffset = canvas.height / 2 - chartHeight / 2;
//     const borderRadius = 10; // Radius for rounded corners
//     let cumulativeWidth = 0;

//     // Draw each segment with rounded corners
//     data.forEach((value, index) => {
//         if (value > 0) {
//             const segmentWidth = (value / total) * canvas.width;

//             ctx.fillStyle = colors[index];

//             // Determine if the segment is the first or last
//             const isFirst = index === 0;
//             const isLast = index === data.length - 1;

//             drawOuterRoundedRect(
//                 ctx,
//                 cumulativeWidth,
//                 yOffset,
//                 segmentWidth,
//                 chartHeight,
//                 borderRadius,
//                 isFirst,
//                 isLast
//             );

//             cumulativeWidth += segmentWidth;
//         }
//     });

//     console.log("Stacked bar chart updated with rounded corners.");
// }




function updateHorizontalStackedBarChart(principalAndInterest, extraPayment, frequency) {
    const canvas = document.getElementById('loanChart');
    if (!canvas) {
        console.error("Canvas element for loan chart not found.");
        return;
    }

    const ctx = canvas.getContext('2d');
    const parentWidth = canvas.parentElement.offsetWidth;

    // Ensure the canvas is resized
    canvas.width = parentWidth;
    canvas.height = 100;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Adjust payments for frequency
    const adjustedPrincipalAndInterest = adjustPaymentForFrequency(principalAndInterest, frequency);
    const adjustedExtraPayment = adjustPaymentForFrequency(extraPayment, frequency);

    // Data and colors
    const data = [adjustedPrincipalAndInterest, adjustedExtraPayment];
    const colors = ['#175134', '#91BBA6']; // Principal & Interest, Extra Payment
    const total = data.reduce((a, b) => a + b, 0);

    if (total === 0) {
        console.warn("Total data for stacked bar chart is 0. Skipping rendering.");
        return;
    }

    const chartHeight = 60;
    const yOffset = canvas.height / 2 - chartHeight / 2;
    const borderRadius = 10; // Radius for rounded corners
    let cumulativeWidth = 0;

    // Check for only one active segment
    const activeSegments = data.filter(value => value > 0).length;

    // Draw each segment
    data.forEach((value, index) => {
        if (value > 0) {
            const segmentWidth = (value / total) * canvas.width;

            ctx.fillStyle = colors[index];

            // Apply rounded corners for single or multiple segments
            const isFirst = activeSegments === 1 || index === 0;
            const isLast = activeSegments === 1 || index === data.length - 1;

            drawOuterRoundedRect(
                ctx,
                cumulativeWidth,
                yOffset,
                segmentWidth,
                chartHeight,
                borderRadius,
                isFirst,
                isLast
            );

            cumulativeWidth += segmentWidth;
        }
    });

    console.log("Stacked bar chart updated with rounded corners.");
}



 
 
 
 

        
    function updateChartLabels(principalAndInterest, extraPayment, frequency) {
        const labelsContainer = document.getElementById('chartLabels');
        if (!labelsContainer) {
            console.error("Labels container element not found.");
            return;
        }
    
        labelsContainer.innerHTML = ''; // Clear existing labels
    
        // Adjust payments for frequency
        const adjustedPrincipalAndInterest = adjustPaymentForFrequency(principalAndInterest, frequency);
        const adjustedExtraPayment = adjustPaymentForFrequency(extraPayment, frequency);
    
        const labels = [
            { label: 'Principal & Interest', value: adjustedPrincipalAndInterest, color: '#175134' },
            { label: 'Extra Payment', value: adjustedExtraPayment, color: '#91BBA6' },
        ];
    
        labels.forEach(item => {
            const labelElement = document.createElement('div');
            labelElement.classList.add('label-item');
    
            const colorCircle = document.createElement('span');
            colorCircle.classList.add('color-circle');
            colorCircle.style.backgroundColor = item.color;
    
            const labelText = document.createElement('span');
            labelText.classList.add('label-name');
            labelText.textContent = item.label;
    
            const labelValue = document.createElement('span');
            labelValue.classList.add('label-value');
            labelValue.textContent = item.value.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
    
            labelElement.appendChild(colorCircle);
            labelElement.appendChild(labelText);
            labelElement.appendChild(labelValue);
    
            labelsContainer.appendChild(labelElement);
        });
    
        console.log("Chart labels updated successfully.");
    }
        
        
        
  





    let adjustedPrincipalAndInterest = 0;
    let adjustedExtraPayment = 0;





    function calculateAndDisplayResults() {
        console.log("Calculating loan results...");
        
        const loanAmount = parseFloat(loanAmountInput.value) || defaultValues.loanAmount;
        const loanTerm = parseInt(loanTermInput.value) || defaultValues.loanTerm;
        const interestRate = parseFloat(interestRateInput.value) || defaultValues.interestRate;
        const originationFees = parseFloat(originationFeesInput.value) || defaultValues.originationFees;
        const extraPayment = parseFloat(extraPaymentInput.value) || defaultValues.extraPayment;
        const paymentFrequency = paymentFrequencyInput.value || defaultValues.paymentFrequency;
    
        const netLoanAmount = loanAmount - originationFees;
        if (netLoanAmount <= 0) {
            console.error("Loan amount is insufficient to cover origination fees.");
            return;
        }
    
        // Calculate full amortization data
        lastAmortizationData = calculateAmortizationData(
            netLoanAmount,
            interestRate,
            loanTerm,
            extraPayment
        );
    
        if (!lastAmortizationData) {
            console.error("Failed to calculate amortization data.");
            return;
        }
    
        const monthlyInterestRate = interestRate / 100 / 12;
        const monthlyPayment =
            netLoanAmount * monthlyInterestRate /
            (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
    
        // Update global variables for the stacked bar chart
        adjustedPrincipalAndInterest = adjustPaymentForFrequency(monthlyPayment, paymentFrequency);
        adjustedExtraPayment = adjustPaymentForFrequency(extraPayment, paymentFrequency);
    
        // Update the UI
        updatePaymentBreakdown(adjustedPrincipalAndInterest, adjustedExtraPayment, paymentFrequency);
        updateHorizontalStackedBarChart(adjustedPrincipalAndInterest, adjustedExtraPayment, paymentFrequency);
        updateChartLabels(adjustedPrincipalAndInterest, adjustedExtraPayment, paymentFrequency);
    
        console.log("Results displayed successfully.");
    }
    
    








    // function updatePaymentBreakdown(principalAndInterest, extraPayment, frequency) {
    //     const paymentElement = document.getElementById('monthly-payment-value');
    //     const frequencyLabel = paymentFrequencyInput.options[paymentFrequencyInput.selectedIndex].text;
    
    //     const totalPayment = principalAndInterest + extraPayment;
    
    //     paymentElement.innerHTML = `
    //         <span class="payment-amount">${formatter.format(totalPayment)}</span>
    //         <span class="payment-frequency"> / ${frequencyLabel}</span>
    //     `;
    
    //     console.log("Payment breakdown updated with per-frequency amounts:", {
    //         principalAndInterest,
    //         extraPayment,
    //         totalPayment,
    //         frequencyLabel,
    //     });
    // }


    function updatePaymentBreakdown(principalAndInterest, extraPayment, frequency) {
        const paymentElement = document.getElementById('monthly-payment-value');
        const frequencyLabel = paymentFrequencyInput.options[paymentFrequencyInput.selectedIndex].text;
    
        const totalPayment = principalAndInterest + extraPayment;
    
        // Adjust the label for display
        const adjustedFrequencyLabel = frequencyLabel.toLowerCase();
        const displayFrequencyLabel =
            adjustedFrequencyLabel === "monthly" ? "month" :
            adjustedFrequencyLabel === "weekly" ? "week" :
            adjustedFrequencyLabel; // Use as-is for other frequencies
    
        paymentElement.innerHTML = `
            <span class="payment-amount">${formatter.format(totalPayment)}</span>
            <span class="payment-frequency"> / ${displayFrequencyLabel}</span>
        `;
    
        console.log("Payment breakdown updated with per-frequency amounts:", {
            principalAndInterest,
            extraPayment,
            totalPayment,
            displayFrequencyLabel,
        });
    }
    
    
    

        
        

        
        
 

        function updateHoverValues(balance, interest, principal) {
            const labelValues = document.querySelectorAll('#amortizationLabels .label-value');
            if (labelValues.length === 3) {
                labelValues[0].textContent = principal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }); // Principal
                labelValues[1].textContent = interest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });  // Interest
                labelValues[2].textContent = balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });  // Balance
            }
        }
        
        

    
        // Adjust payment based on frequency
        function adjustPaymentForFrequency(totalPayment, frequency) {
            const frequencyFactors = {
                monthly: 1,
                biweekly: 12 / 26,
                weekly: 12 / 52,
                "semi-monthly": 0.5,
            };
            return totalPayment * (frequencyFactors[frequency] || 1);
        }
        
    
        // Update labels
        function updateLabels(totalPayment, originationFees) {
            const paymentElement = document.getElementById('monthly-payment-value');
            const frequencyLabel = paymentFrequencyInput.options[paymentFrequencyInput.selectedIndex].text;
    
            paymentElement.innerHTML = `
                <span class="payment-amount">${formatter.format(totalPayment)}</span>
                <span class="payment-frequency"> / ${frequencyLabel}</span>
            `;
        }
    
        // Reset inputs to default values
        function resetInputs() {
            console.log("Resetting inputs...");
            loanAmountInput.value = "";
            loanTermInput.value = defaultValues.loanTerm;
            interestRateInput.value = "";
            originationFeesInput.value = "";
            extraPaymentInput.value = "";
            paymentFrequencyInput.value = defaultValues.paymentFrequency;
            calculateAndDisplayResults();
        }
    
        // Event listeners
        updateBtn.addEventListener('click', calculateAndDisplayResults);
        resetBtn.addEventListener('click', resetInputs);
    
        // Initialize with default results
        calculateAndDisplayResults();
    

    const tabPaymentBreakdown = document.getElementById("tab-payment-breakdown");
    const tabAmortizationSchedule = document.getElementById("tab-amortization-schedule");

    const paymentBreakdownContent = document.getElementById("payment-breakdown-content");
    const amortizationScheduleContent = document.getElementById("amortization-schedule-content");





    // function showTab(tabName) {
    //     if (tabName === "amortization") {
    //         paymentBreakdownContent.style.display = "none";
    //         amortizationScheduleContent.style.display = "block";
    //         tabPaymentBreakdown.classList.remove("tab-active");
    //         tabAmortizationSchedule.classList.add("tab-active");
    
    //         if (lastAmortizationData) {
    //             drawAmortizationChart(
    //                 lastAmortizationData.balanceData,
    //                 lastAmortizationData.cumulativeInterestData,
    //                 lastAmortizationData.cumulativePrincipalData
    //             );
    //         } else {
    //             console.warn("No amortization data available for the chart.");
    //         }
    //     } else if (tabName === "payment") {
    //         // Logic for Payment Breakdown tab
    //     }
    // }
    
    function showTab(tabName) {
        if (tabName === "amortization") {
            // Show amortization schedule tab
            paymentBreakdownContent.style.display = "none";
            amortizationScheduleContent.style.display = "block";
            tabPaymentBreakdown.classList.remove("tab-active");
            tabAmortizationSchedule.classList.add("tab-active");
    
            if (lastAmortizationData) {
                drawAmortizationChart(
                    lastAmortizationData.balanceData,
                    lastAmortizationData.cumulativeInterestData,
                    lastAmortizationData.cumulativePrincipalData
                );
            } else {
                console.warn("No amortization data available for the chart.");
            }
        } else if (tabName === "payment") {
            // Show payment breakdown tab
            paymentBreakdownContent.style.display = "block";
            amortizationScheduleContent.style.display = "none";
            tabPaymentBreakdown.classList.add("tab-active");
            tabAmortizationSchedule.classList.remove("tab-active");
    
            // Redraw the stacked bar chart
            const frequency = paymentFrequencyInput.value; // Current frequency
            updateHorizontalStackedBarChart(
                adjustedPrincipalAndInterest, // Pre-calculated in calculateAndDisplayResults
                adjustedExtraPayment,         // Pre-calculated in calculateAndDisplayResults
                frequency
            );
        }
    }
    
    
    
    
    




    tabPaymentBreakdown.addEventListener("click", () => showTab("payment"));
    tabAmortizationSchedule.addEventListener("click", () => showTab("amortization"));
    

    
    /**
     * Adjust payment based on the frequency selected.
     */
    function adjustPaymentForFrequency(totalPayment, frequency) {
        let paymentFactor = 1; // Default: monthly
        if (frequency === 'biweekly') {
            paymentFactor = 12 / 26;
        } else if (frequency === 'weekly') {
            paymentFactor = 12 / 52;
        } else if (frequency === 'semi-monthly') {
            paymentFactor = 0.5;
        }
    
        console.log(`Adjusting payment for frequency: ${frequency}`);
        return totalPayment * paymentFactor;
    }
    
    
    












    
function resetInputs() {
    console.log("Resetting inputs to default values");

    // Clear loan-related inputs and set them to default values
    loanAmountInput.value = ""; // Leave blank for user to fill
    loanTermInput.value = defaultValues.loanTerm; // Reset to default loan term
    interestRateInput.value = ""; // Leave blank for user to fill
    originationFeesInput.value = ""; // Leave blank for user to fill
    extraPaymentInput.value = ""; // Leave blank for user to fill

    // Reset payment frequency to default
    paymentFrequencyInput.value = defaultValues.paymentFrequency;

    // Recalculate using default values (with inputs cleared)
    calculateAndDisplayResults();
}


    



    /**
     * Update the labels below the stacked bar chart.
     */
    function updateStackedBarLabels(principalAndInterest, originationFees, extraPayment, labels, colors) {
        const labelsContainer = document.getElementById('chartLabels');
        labelsContainer.innerHTML = ''; // Clear any existing labels
    
        // Updated data array to match the simplified components
        const data = [principalAndInterest, originationFees, extraPayment];
    
        // Iterate through the data and dynamically create label items
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
    // function drawOuterRoundedRect(ctx, x, y, width, height, radius, isFirst, isLast) {
    //     ctx.beginPath();
    
    //     // Start at the top-left corner
    //     if (isFirst) {
    //         ctx.moveTo(x + radius, y); // Move to the right to account for the radius
    //     } else {
    //         ctx.moveTo(x, y); // Start at the corner without radius
    //     }
    
    //     // Top edge
    //     ctx.lineTo(x + width - (isLast ? radius : 0), y);
    
    //     // Top-right corner
    //     if (isLast) {
    //         ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    //     }
    
    //     // Right edge
    //     ctx.lineTo(x + width, y + height - (isLast ? radius : 0));
    
    //     // Bottom-right corner
    //     if (isLast) {
    //         ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    //     }
    
    //     // Bottom edge
    //     ctx.lineTo(x + (isFirst ? radius : 0), y + height);
    
    //     // Bottom-left corner
    //     if (isFirst) {
    //         ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    //     }
    
    //     // Left edge
    //     ctx.lineTo(x, y + (isFirst ? radius : 0));
    
    //     // Top-left corner
    //     if (isFirst) {
    //         ctx.quadraticCurveTo(x, y, x + radius, y);
    //     }
    
    //     ctx.closePath();
    //     ctx.fill();
    // }
    function drawOuterRoundedRect(ctx, x, y, width, height, radius, isFirst, isLast) {
        ctx.beginPath();
    
        // Top-left corner
        if (isFirst) {
            ctx.moveTo(x + radius, y);
        } else {
            ctx.moveTo(x, y);
        }
    
        // Top edge
        ctx.lineTo(x + width - (isLast ? radius : 0), y);
    
        // Top-right corner
        if (isLast) {
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        }
    
        // Right edge
        ctx.lineTo(x + width, y + height - (isLast ? radius : 0));
    
        // Bottom-right corner
        if (isLast) {
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        }
    
        // Bottom edge
        ctx.lineTo(x + (isFirst ? radius : 0), y + height);
    
        // Bottom-left corner
        if (isFirst) {
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        }
    
        // Left edge
        ctx.lineTo(x, y + (isFirst ? radius : 0));
    
        // Top-left corner
        if (isFirst) {
            ctx.quadraticCurveTo(x, y, x + radius, y);
        }
    
        ctx.closePath();
        ctx.fill();
    }
    
    
    
    
    
    function calculateAmortizationSchedule(principal, monthlyInterestRate, monthlyPayment, numberOfPayments) {
        const amortizationData = []; // Array to store each period's data
        let balance = principal;
        let totalInterestPaid = 0;
        let totalPrincipalPaid = 0;
    
        for (let i = 0; i < numberOfPayments; i++) {
            const interestPayment = balance * monthlyInterestRate;
            const principalPayment = Math.min(monthlyPayment - interestPayment, balance); // Avoid overpayment
            balance = Math.max(balance - principalPayment, 0); // Ensure no negative balance
    
            totalInterestPaid += interestPayment;
            totalPrincipalPaid += principalPayment;
    
            amortizationData.push({
                period: i + 1, // Start periods from 1
                principal: principalPayment,
                interest: interestPayment,
                balance: balance,
            });
    
            if (balance <= 0) break; // Stop if the loan is fully paid
        }
    
        return {
            schedule: amortizationData,
            balanceData: amortizationData.map(row => row.balance),
            cumulativeInterestData: amortizationData.map((_, index) =>
                amortizationData.slice(0, index + 1).reduce((sum, row) => sum + row.interest, 0)
            ),
            cumulativePrincipalData: amortizationData.map((_, index) =>
                amortizationData.slice(0, index + 1).reduce((sum, row) => sum + row.principal, 0)
            ),
            totalInterestPaid,
            totalPrincipalPaid,
            totalAmountPaid: totalInterestPaid + totalPrincipalPaid,
        };
    }
    










    











    
// Example amortization data
const amortizationData = {
    schedule: [
        { principal: 200, interest: 50, balance: 19800 },
        { principal: 201, interest: 49, balance: 19599 },
        // Additional rows...
    ],
};

// Populate the table
populateAmortizationTable(amortizationData);

    

    
    
    

  


// Draw Amortization Chart
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

    const padding = { top: 10, right: 20, bottom: 50, left: 50 };
    const gridColor = '#d0d0d0';
    const labelColor = '#505050';
    const labelFont = 'normal 12px Arial';

    const maxValue = Math.max(...balanceData, ...cumulativeInterestData, ...cumulativePrincipalData);
    const yAxisMax = Math.ceil(maxValue / 5000) * 5000;

    function getY(value) {
        return height - padding.bottom - (value / yAxisMax) * (height - padding.top - padding.bottom);
    }

    function getX(index) {
        return padding.left + (index / (months - 1)) * (width - padding.left - padding.right);
    }

    const months = balanceData.length; // Dynamically set the length of the chart

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Y-axis labels and grid lines
    ctx.font = labelFont;
    ctx.textAlign = 'right';
    ctx.fillStyle = labelColor;
    ctx.strokeStyle = gridColor;

    for (let i = 0; i <= yAxisMax; i += 5000) {
        const y = getY(i);
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();
        ctx.fillText(`$${i / 1000}K`, padding.left - 10, y + 5);
    }

    ctx.textAlign = 'center';

    // X-axis labels and grid lines
    for (let i = 0; i < months; i += 12) {
        const x = getX(i);
        const monthLabel = `${i} mo`;

        ctx.beginPath();
        ctx.moveTo(x, padding.top);
        ctx.lineTo(x, height - padding.bottom);
        ctx.stroke();

        ctx.font = labelFont;
        ctx.fillText(monthLabel, x, height - 10);
    }

    const xLast = getX(months - 1);
    const lastMonthLabel = `${months} mo`;
    ctx.fillText(lastMonthLabel, xLast, height - 10);

    // Draw the chart lines
    ctx.save();
    ctx.beginPath();
    ctx.rect(padding.left, padding.top, width - padding.left - padding.right, height - padding.top - padding.bottom);
    ctx.clip();

    // Draw Balance Line
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

    // Draw Principal Line
    ctx.strokeStyle = '#3EB721';
    ctx.beginPath();
    for (let i = 0; i < cumulativePrincipalData.length; i++) {
        const x = getX(i);
        const y = getY(cumulativePrincipalData[i]);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Draw Interest Line
    ctx.strokeStyle = '#91BBA6';
    ctx.beginPath();
    for (let i = 0; i < cumulativeInterestData.length; i++) {
        const x = getX(i);
        const y = getY(cumulativeInterestData[i]);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();

    ctx.restore();

    // Draw the right Y-axis line (final grid line)
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width - padding.right, padding.top);
    ctx.lineTo(width - padding.right, height - padding.bottom);
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

        // Update labels with hover values
        const hoverPrincipal = cumulativePrincipalData[hoverIndex];
        const hoverInterest = cumulativeInterestData[hoverIndex];
        const hoverBalance = balanceData[hoverIndex];

        updateHoverValues(hoverBalance, hoverInterest, hoverPrincipal);
    }
}

function updateAmortizationLabels(totalInterestPaid, totalPrincipalPaid, totalAmountPaid) {
    const amortizationLabelsContainer = document.getElementById('amortizationLabels');
    amortizationLabelsContainer.innerHTML = ''; // Clear existing labels

    const labels = [
        { label: 'Total Principal Paid', value: totalPrincipalPaid, color: '#3EB721' },
        { label: 'Total Interest Paid', value: totalInterestPaid, color: '#91BBA6' },
        { label: 'Balance (Total Paid)', value: totalAmountPaid, color: '#175134' }
    ];

    labels.forEach(item => {
        const labelElement = document.createElement('div');
        labelElement.classList.add('label-item');

        const colorCircle = document.createElement('span');
        colorCircle.classList.add('color-circle');
        colorCircle.style.backgroundColor = item.color;

        const labelText = document.createElement('span');
        labelText.classList.add('label-name');
        labelText.textContent = item.label;

        const labelValue = document.createElement('span');
        labelValue.classList.add('label-value');
        labelValue.textContent = item.value.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        labelElement.appendChild(colorCircle);
        labelElement.appendChild(labelText);
        labelElement.appendChild(labelValue);

        amortizationLabelsContainer.appendChild(labelElement);
    });
}



    
    // Add event listeners directly within the function
    const canvas = document.getElementById('amortizationChart');
    
    canvas.addEventListener('mousemove', function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const hoverIndex = Math.floor((x - padding.left) / (width - padding.left - padding.right) * (months - 1));
        drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData, hoverIndex);
    });
    
    canvas.addEventListener('touchstart', function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.touches[0].clientX - rect.left;
        const hoverIndex = Math.floor((x - padding.left) / (width - padding.left - padding.right) * (months - 1));
        drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData, hoverIndex);
    });
    
    canvas.addEventListener('touchmove', function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.touches[0].clientX - rect.left;
        const hoverIndex = Math.floor((x - padding.left) / (width - padding.left - padding.right) * (months - 1));
        drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData, hoverIndex);
    });
    





    
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
    

    

    // function handleTouchEvent(event) {
    //     const rect = amortizationChartCanvas.getBoundingClientRect();
    //     const touch = event.touches[0] || event.changedTouches[0];
    //     const x = touch.clientX - rect.left;
    //     const padding = { top: 30, right: 25, bottom: 30, left: 70 };
    
    //     if (x < padding.left || x > amortizationChartCanvas.offsetWidth - padding.right) {
    //         // If touch is outside the chart, clear hover effects
    //         revertValuesToTotals();
    //         const hoverDateContainer = document.getElementById('amortizationHoverDate');
    //         hoverDateContainer.textContent = ''; // Clear the hover date
    //         drawAmortizationChart(
    //             lastAmortizationData.balanceData,
    //             lastAmortizationData.cumulativeInterestData,
    //             lastAmortizationData.cumulativePrincipalData
    //         );
    //     } else {
    //         const chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
    //         const index = Math.round(
    //             ((x - padding.left) / chartWidth) * (lastAmortizationData.balanceData.length - 1)
    //         );
    
    //         if (index >= 0 && index < lastAmortizationData.balanceData.length) {
    //             updateHoverValues(
    //                 lastAmortizationData.balanceData[index],
    //                 lastAmortizationData.cumulativeInterestData[index],
    //                 lastAmortizationData.cumulativePrincipalData[index]
    //             );
    
    //             const startDate = new Date();
    //             const hoverDate = new Date(startDate.setMonth(startDate.getMonth() + index));
    //             displayHoverDate(hoverDate);
    
    //             drawAmortizationChart(
    //                 lastAmortizationData.balanceData,
    //                 lastAmortizationData.cumulativeInterestData,
    //                 lastAmortizationData.cumulativePrincipalData,
    //                 index
    //             );
    //         }
    //     }
    
    //     event.preventDefault(); // Prevent default scrolling
    // }

    let activeHoverIndex = null; // Global variable to track the active hover index

    function handleTouchEvent(event) {
        const rect = amortizationChartCanvas.getBoundingClientRect();
        const touch = event.touches[0] || event.changedTouches[0];
        const x = touch.clientX - rect.left;
        const padding = { top: 30, right: 25, bottom: 30, left: 70 };
    
        if (x < padding.left || x > amortizationChartCanvas.offsetWidth - padding.right) {
            // If touch is outside the chart, reset hover
            resetHover();
        } else {
            const chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
            const index = Math.round(
                ((x - padding.left) / chartWidth) * (lastAmortizationData.balanceData.length - 1)
            );
    
            if (index >= 0 && index < lastAmortizationData.balanceData.length) {
                activeHoverIndex = index; // Track the active hover index
    
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
    
    function resetHover() {
        activeHoverIndex = null; // Clear the active hover index
        revertValuesToTotals();
    
        const hoverDateContainer = document.getElementById('amortizationHoverDate');
        hoverDateContainer.textContent = ''; // Clear the hover date
    
        drawAmortizationChart(
            lastAmortizationData.balanceData,
            lastAmortizationData.cumulativeInterestData,
            lastAmortizationData.cumulativePrincipalData
        );
    }
    
    amortizationChartCanvas.addEventListener('touchmove', handleTouchEvent);
    amortizationChartCanvas.addEventListener('touchstart', handleTouchEvent);
    
    // Prevent resetting immediately after touch ends
    amortizationChartCanvas.addEventListener('touchend', (event) => {
        event.preventDefault(); // Ensure no scrolling or immediate reset
    });
    
    // Add global touchstart listener to reset hover when touching outside the chart
    document.addEventListener('touchstart', (event) => {
        const rect = amortizationChartCanvas.getBoundingClientRect();
        const touch = event.touches[0];
        if (!touch || (touch.clientX < rect.left || touch.clientX > rect.right || touch.clientY < rect.top || touch.clientY > rect.bottom)) {
            resetHover(); // Reset only when touching outside the chart
        }
    });
    

    
   
   
   
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
    



    
    function revertValuesToTotals() {
        if (!lastAmortizationData) {
            console.warn("No amortization data available to revert to totals.");
            return;
        }
    
        console.log("Reverting to totals:", {
            totalInterestPaid: lastAmortizationData.totalInterestPaid,
            totalPrincipalPaid: lastAmortizationData.totalPrincipalPaid
        });
    
        const totalInterestPaid = lastAmortizationData.totalInterestPaid || 0;
        const totalPrincipalPaid = lastAmortizationData.totalPrincipalPaid || 0;
        const totalAmountPaid = totalInterestPaid + totalPrincipalPaid;
    
        updateAmortizationLabels(totalInterestPaid, totalPrincipalPaid, totalAmountPaid);
    }
    
    
  





    
    
    
    
    

    



















function calculateAmortizationData(loanAmount, interestRate, loanTerm, extraPayment = 0, paymentFrequency = "monthly") {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm;

    const amortizationData = [];
    let balance = loanAmount; // Start with the loan amount

    // Calculate the fixed monthly payment
    const monthlyPayment =
        loanAmount * monthlyInterestRate /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    // Determine the actual extra payment based on frequency
    const adjustedExtraPayment = adjustPaymentForFrequency(extraPayment, paymentFrequency);

    for (let i = 0; i < numberOfPayments; i++) {
        const interestPayment = balance * monthlyInterestRate;
        const principalPayment = Math.min(monthlyPayment - interestPayment, balance); // Avoid overpayment
        let totalPrincipalPayment = principalPayment;

        // Apply recurring extra payment directly to the principal
        if (balance > 0) {
            totalPrincipalPayment = Math.min(principalPayment + adjustedExtraPayment, balance);
        }

        balance = Math.max(balance - totalPrincipalPayment, 0); // Ensure no negative balance

        amortizationData.push({
            period: i + 1, // Start periods from 1
            principal: totalPrincipalPayment,
            interest: interestPayment,
            balance: balance,
        });

        if (balance <= 0) break; // Stop if the loan is fully paid
    }

    const totalInterestPaid = amortizationData.reduce((sum, row) => sum + row.interest, 0);
    const totalPrincipalPaid = amortizationData.reduce((sum, row) => sum + row.principal, 0);

    return {
        schedule: amortizationData,
        balanceData: amortizationData.map(row => row.balance),
        cumulativeInterestData: amortizationData.map((_, index) =>
            amortizationData.slice(0, index + 1).reduce((sum, row) => sum + row.interest, 0)
        ),
        cumulativePrincipalData: amortizationData.map((_, index) =>
            amortizationData.slice(0, index + 1).reduce((sum, row) => sum + row.principal, 0)
        ),
        totalInterestPaid,
        totalPrincipalPaid,
    };
}









    
function populateAmortizationTable(amortizationData) {
    const tableBody = document.getElementById('amortization-table-body');
    tableBody.innerHTML = ''; // Clear existing rows

    if (!amortizationData || amortizationData.schedule.length === 0) {
        console.warn("No amortization data available to populate the table.");
        return;
    }

    amortizationData.schedule.forEach((row) => {
        const tr = document.createElement('tr');

        const dateCell = document.createElement('td');
        dateCell.textContent = row.date;
        tr.appendChild(dateCell);

        const principalCell = document.createElement('td');
        principalCell.textContent = `$${row.principal.toFixed(2)}`;
        tr.appendChild(principalCell);

        const interestCell = document.createElement('td');
        interestCell.textContent = `$${row.interest.toFixed(2)}`;
        tr.appendChild(interestCell);

        const balanceCell = document.createElement('td');
        balanceCell.textContent = `$${row.balance.toFixed(2)}`;
        tr.appendChild(balanceCell);

        tableBody.appendChild(tr);
    });

    console.log("Amortization table populated successfully.");
}



});