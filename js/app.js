document.addEventListener('DOMContentLoaded', function() {
    const infoIcons = document.querySelectorAll('.material-symbols-outlined');
    
    infoIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event from bubbling up to the document
            const infoText = this.nextElementSibling;
            if (infoText.style.display === 'block') {
                infoText.style.display = 'none';
            } else {
                // Hide all other info text popups
                document.querySelectorAll('.info-text-fluid').forEach(text => text.style.display = 'none');
                infoText.style.display = 'block';

                // Position the popup
                const iconRect = this.getBoundingClientRect();
                const bodyRect = document.body.getBoundingClientRect();
                const offsetX = iconRect.left - bodyRect.left;
                const offsetY = window.scrollY + iconRect.top - infoText.offsetHeight - 5; // 5 pixels above the icon

                infoText.style.position = 'absolute';
                infoText.style.left = `${offsetX}px`;
                infoText.style.top = `${offsetY}px`;

                // Adjust position for optional items to appear on the opposite side
                if (infoText.classList.contains('optional-info')) {
                    infoText.style.left = `${iconRect.left - infoText.offsetWidth - 5}px`; // Shift left of the icon
                }
            }
        });
    });

    document.addEventListener('click', function() {
        document.querySelectorAll('.info-text-fluid').forEach(text => text.style.display = 'none');
    });

    // Prevent the popup from closing when clicking inside it
    document.querySelectorAll('.info-text-fluid').forEach(text => {
        text.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});

// Initialize ChartJS
const ctx = document.getElementById('myChart').getContext('2d');

// Initial placeholder values
const placeholderValues = {
    homePrice: 400000,
    downPayment: 20000,
    loanTerm: 15,
    interestRate: 7.2,
    propertyTaxes: 333.33,
    propertyTaxesFrequency: 'monthly',
    pmi: 0,
    hoa: 0
};

const calculateMonthlyPI = (homePrice, downPayment, loanTerm, interestRate) => {
    const principal = homePrice - downPayment;
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPI = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    return Math.round(monthlyPI * 100) / 100;
};

const getPropertyTax = (propertyTaxes, frequency) => {
    if (frequency === 'annually') {
        return propertyTaxes / 12;
    }
    return propertyTaxes;
};

const calculateTotalMonthlyPayment = (monthlyPI, propertyTaxes, propertyTaxesFrequency, pmi, hoa) => {
    const monthlyPropertyTaxes = getPropertyTax(propertyTaxes, propertyTaxesFrequency);
    return Math.round((monthlyPI + monthlyPropertyTaxes + pmi + hoa) * 100) / 100;
};

const monthlyPI = calculateMonthlyPI(
    placeholderValues.homePrice,
    placeholderValues.downPayment,
    placeholderValues.loanTerm,
    placeholderValues.interestRate
);

let totalMonthlyPayment = calculateTotalMonthlyPayment(
    monthlyPI,
    placeholderValues.propertyTaxes,
    placeholderValues.propertyTaxesFrequency,
    placeholderValues.pmi,
    placeholderValues.hoa
);

const drawCenterText = (chart) => {
    const ctx = chart.ctx;
    ctx.save();
    const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
    const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // Customize the font
    ctx.font = 'bold 40px Open Sans';
    ctx.fillStyle = '#000';
    ctx.fillText('Total: $' + totalMonthlyPayment, centerX, centerY);
    ctx.restore();
};

const updateLegend = (chart) => {
    const legendContainer = document.getElementById('chart-legend');
    legendContainer.innerHTML = '';
    const items = chart.data.labels.map((label, index) => {
        const value = chart.data.datasets[0].data[index];
        const color = chart.data.datasets[0].backgroundColor[index];
        return `
            <div class="legend-item">
                <span class="legend-color-box" style="background-color:${color};"></span>
                <span class="legend-text">${label}: $${value}</span>
            </div>
        `;
    });
    legendContainer.innerHTML = items.join('');
};

let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Principal and Interest', 
            'Property Taxes', 
            'Private Mortgage Insurance (PMI)', 
            'Homeowner\'s Association Fees (HOA)'
        ],
        datasets: [{
            label: 'Mortgage Breakdown',
            data: [
                monthlyPI,
                Math.round(getPropertyTax(placeholderValues.propertyTaxes, placeholderValues.propertyTaxesFrequency) * 100) / 100,
                Math.round(placeholderValues.pmi * 100) / 100,
                Math.round(placeholderValues.hoa * 100) / 100
            ],
            backgroundColor: [
                'rgba(100, 149, 237, 0.9)',  // Light Blue
                'rgba(255, 223, 128, 0.9)',  // Light Green
                'rgba(192, 192, 192, 0.9)',  // Light Purple
                'rgba(60, 179, 113, 0.9)'   // Light Gray
            ],
            borderColor: [
                '#fff',
            ],
            borderWidth: 10 // No border
        }]
    },
    options: {
        cutout: '70%', // Make the doughnut chart thinner
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                display: true,
                color: '#000',
                font: {
                    weight: 'bold',
                    size: 16,
                    family: 'Open Sans'  // Set the font family for datalabels
                },
                formatter: (value, context) => {
                    return `$${value}`;
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return ` ${tooltipItem.label}: $${tooltipItem.raw}`;
                    },
                    labelTextColor: function(tooltipItem, chart) {
                        return '#fff';
                    }
                },
                titleFont: {
                    size: 28,
                    family: 'Open Sans'  // Set the font family for tooltip title
                },
                bodyFont: {
                    size: 26,
                    family: 'Open Sans'  // Set the font family for tooltip body
                },
                backgroundColor: '#333',
                titleColor: '#fff',
                bodyColor: '#fff',
                displayColors: false // Remove color box in tooltip
            }
        },
        elements: {
            arc: {
                borderWidth: 1,
                borderColor: '#fff' // White border to create space between segments
            }
        },
        animation: {
            onComplete: function() {
                drawCenterText(this);
                updateLegend(this);
            }
        }
    },
    plugins: [{
        beforeDraw: function(chart) {
            drawCenterText(chart);
        },
        afterUpdate: function(chart) {
            updateLegend(chart);
        }
    }]
});

// Update chart data based on form inputs
document.querySelector('.mortgage_input__submit').addEventListener('click', function(event) {
    event.preventDefault();

    const homePrice = parseFloat(document.getElementById('mortgage-price').value);
    const downPayment = parseFloat(document.getElementById('down-payment').value);
    const loanTerm = parseFloat(document.getElementById('mortgage-term').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value);
    const propertyTaxes = parseFloat(document.getElementById('property-taxes').value) || 0;
    const propertyTaxesFrequency = document.getElementById('tax-frequency').value;
    const pmi = parseFloat(document.getElementById('pmi-cost').value) || 0;
    const hoa = parseFloat(document.getElementById('hoa-cost').value) || 0;

    // Check for valid inputs before updating the chart
    if (isNaN(homePrice) || isNaN(downPayment) || isNaN(loanTerm) || isNaN(interestRate) ||
        homePrice <= 0 || downPayment < 0 || loanTerm <= 0 || interestRate <= 0) {
        return;
    }

    const monthlyPI = calculateMonthlyPI(homePrice, downPayment, loanTerm, interestRate);
    totalMonthlyPayment = calculateTotalMonthlyPayment(monthlyPI, propertyTaxes, propertyTaxesFrequency, pmi, hoa);

    // Update chart data
    myChart.data.datasets[0].data = [
        monthlyPI,
        Math.round(getPropertyTax(propertyTaxes, propertyTaxesFrequency) * 100) / 100,
        Math.round(pmi * 100) / 100,
        Math.round(hoa * 100) / 100
    ];

    myChart.update();
});
