document.addEventListener('DOMContentLoaded', function() {
    const infoIcons = document.querySelectorAll('.material-symbols-outlined');

    if (infoIcons.length > 0) {
        infoIcons.forEach(icon => {
            icon.addEventListener('click', function(event) {
                event.stopPropagation();
                const infoText = this.nextElementSibling;
                if (infoText.style.display === 'block') {
                    infoText.style.display = 'none';
                } else {
                    document.querySelectorAll('.info-text-fluid').forEach(text => text.style.display = 'none');
                    infoText.style.display = 'block';

                    const iconRect = this.getBoundingClientRect();

                    let offsetX = iconRect.left - infoText.offsetWidth - 5;
                    let offsetY = window.scrollY + iconRect.bottom + 5;

                    const viewportWidth = window.innerWidth;
                    const viewportHeight = window.innerHeight;

                    if (offsetX < 0) {
                        offsetX = iconRect.right + 5;
                    } else if (offsetX + infoText.offsetWidth > viewportWidth) {
                        offsetX = viewportWidth - infoText.offsetWidth - 5;
                    }

                    if (offsetY + infoText.offsetHeight > window.scrollY + viewportHeight) {
                        offsetY = window.scrollY + iconRect.top - infoText.offsetHeight - 5;
                    }

                    infoText.style.left = `${offsetX}px`;
                    infoText.style.top = `${offsetY}px`;
                }
            });
        });
    }

    document.addEventListener('click', function() {
        document.querySelectorAll('.info-text-fluid').forEach(text => text.style.display = 'none');
    });

    document.querySelectorAll('.info-text-fluid').forEach(text => {
        text.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });

    const chartElement = document.getElementById('myChart');
    if (chartElement) {
        const ctx = chartElement.getContext('2d');
        let totalMonthlyPayment = 0;

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

        const drawCenterText = (chart) => {
            const ctx = chart.ctx;
            ctx.save();
            const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
            const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            let fontSize = '40px';
            if (window.innerWidth <= 450) {
                fontSize = '25px';
            }
            ctx.font = `bold ${fontSize} Open Sans`;
            ctx.fillStyle = '#000';
            ctx.clearRect(centerX - 75, centerY - 25, 150, 50);
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

        const centerTextPlugin = {
            id: 'centerTextPlugin',
            afterDraw: (chart) => {
                drawCenterText(chart);
                updateLegend(chart);
            }
        };

    const myChart = new Chart(ctx, {
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
                    calculateMonthlyPI(
                        placeholderValues.homePrice,
                        placeholderValues.downPayment,
                        placeholderValues.loanTerm,
                        placeholderValues.interestRate
                    ),
                    Math.round(getPropertyTax(placeholderValues.propertyTaxes, placeholderValues.propertyTaxesFrequency) * 100) / 100,
                    Math.round(placeholderValues.pmi * 100) / 100,
                    Math.round(placeholderValues.hoa * 100) / 100
                ],
                backgroundColor: [
                    'rgba(100, 149, 237, 0.9)', 
                    'rgba(255, 223, 128, 0.9)', 
                    'rgba(192, 192, 192, 0.9)', 
                    'rgba(60, 179, 113, 0.9)'
                ],
                borderColor: ['#fff'],
                borderWidth: 10
            }]
        },
        options: {
            cutout: '70%',
            plugins: {
                legend: { display: false },
                datalabels: {
                    display: true,
                    color: '#000',
                    font: {
                        weight: 'bold',
                        size: 40,
                        family: 'Open Sans'
                    },
                    formatter: (value) => `$${value}`
                },
                tooltip: {
                    callbacks: {
                        label: (tooltipItem) => ` ${tooltipItem.label}: $${tooltipItem.raw}`,
                        labelTextColor: () => '#fff'
                    },
                    titleFont: { size: 28, family: 'Open Sans' },
                    bodyFont: { size: 26, family: 'Open Sans' },
                    backgroundColor: '#333',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    displayColors: false
                }
            },
            elements: {
                arc: {
                    borderWidth: 1,
                    borderColor: '#fff'
                }
            },
            animation: {
                duration: 0,
            }
        },
        plugins: [centerTextPlugin]
    });

    const updateChartAndText = () => {
        myChart.update();
    };

    document.querySelector('.mortgage-btn').addEventListener('click', function(event) {
        event.preventDefault();

        const homePrice = parseFloat(document.getElementById('mortgage-price').value);
        const downPayment = parseFloat(document.getElementById('down-payment').value);
        const loanTerm = parseFloat(document.getElementById('mortgage-term').value);
        const interestRate = parseFloat(document.getElementById('interest-rate').value);
        const propertyTaxes = parseFloat(document.getElementById('property-taxes').value) || 0;
        const propertyTaxesFrequency = document.getElementById('tax-frequency').value;
        const pmi = parseFloat(document.getElementById('pmi-cost').value) || 0;
        const hoa = parseFloat(document.getElementById('hoa-cost').value) || 0;

        if (isNaN(homePrice) || isNaN(downPayment) || isNaN(loanTerm) || isNaN(interestRate) ||
            homePrice <= 0 || downPayment < 0 || loanTerm <= 0 || interestRate <= 0) {
            return;
        }

        const monthlyPI = calculateMonthlyPI(homePrice, downPayment, loanTerm, interestRate);
        totalMonthlyPayment = calculateTotalMonthlyPayment(monthlyPI, propertyTaxes, propertyTaxesFrequency, pmi, hoa);

        myChart.data.datasets[0].data = [
            monthlyPI,
            Math.round(getPropertyTax(propertyTaxes, propertyTaxesFrequency) * 100) / 100,
            Math.round(pmi * 100) / 100,
            Math.round(hoa * 100) / 100
        ];

        updateChartAndText();
    });

    totalMonthlyPayment = calculateTotalMonthlyPayment(
        calculateMonthlyPI(
            placeholderValues.homePrice,
            placeholderValues.downPayment,
            placeholderValues.loanTerm,
            placeholderValues.interestRate
        ),
        placeholderValues.propertyTaxes,
        placeholderValues.propertyTaxesFrequency,
        placeholderValues.pmi,
        placeholderValues.hoa
    );

    updateChartAndText();
}});
