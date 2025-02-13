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

    // // Restrict invalid characters in inputs
    // const inputsToRestrict = [
    //     loanAmountInput,
    //     loanTermInput,
    //     interestRateInput,
    //     downPaymentInput,
    //     tradeInValueInput,
    //     salesTaxInput,
    //     feesInput
    // ];

    // inputsToRestrict.forEach(input => {
    //     input.addEventListener('keydown', function (event) {
    //         if (event.key === "-" || event.key === "e") {
    //             event.preventDefault();
    //         }
    //     });
    // });


        // Function to calculate results
        function calculateAndDisplayResults() {
        // Check if the input values exist, otherwise use default values
        const loanAmount = parseFloat(loanAmountInput.value) || defaultValues.loanAmount;
        const loanTerm = parseInt(loanTermInput.value) || defaultValues.loanTerm;
        const interestRate = parseFloat(interestRateInput.value) / 100 || defaultValues.interestRate / 100;
        const downPayment = parseFloat(downPaymentInput.value) || defaultValues.downPayment;
        const extraPayment = parseFloat(extraPaymentInput.value) || defaultValues.extraPayment;
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
        
            // ✅ Correct Monthly Interest Rate (handles floating point errors)
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
        
            // ✅ Pass data to the chart drawing function
            updateDoughnutChart(autoChartCanvas, totalMonthlyPayment, monthlyPayment, extraPayment);
        }
        
        calculateAndDisplayResults;




        function updateChartLabels(autoChartCanvas, totalMonthlyPayment, monthlyPayment, extraPayment) {
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
        
            console.log("Chart labels updated.");
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


    

   // Show Tab
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

    // Recalculate when switching to relevant tabs
    if (tabName === 'payment-breakdown') {
        console.log("Switching to Payment Breakdown tab - recalculating results.");
        calculateAndDisplayResults(); // Ensures chart updates automatically
    }

    // Handle Amortization Schedule tab
    if (tabName === 'amortization-schedule') {
        if (lastAmortizationData) {
            console.log("Switching to Amortization Schedule tab - updating amortization chart.");
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

    showTab('payment-breakdown'); 









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
    

        // Clear the canvas for the doughnut chart
        const context = autoChartCanvas.getContext('2d');
        context.clearRect(0, 0, autoChartCanvas.width, autoChartCanvas.height);
    
        console.log("Inputs reset to default values.");
    }    





    });