document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('myChart').getContext('2d');

    const drawCenterText = (chart) => {
        const ctx = chart.ctx;
        ctx.save();
        const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
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

    const createChart = () => {
        let fontSize;
        if (window.innerWidth <= 600) {
            fontSize = 12; // Set font size for small screens
        } else {
            fontSize = 40; // Set font size for larger screens
        }

        return new Chart(ctx, {
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
                            size: fontSize, // Font size based on window width
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
                    onComplete: function() {
                        drawCenterText(this);
                        updateLegend(this);
                    }
                }
            },
            plugins: [{
                beforeDraw: drawCenterText,
                afterUpdate: updateLegend
            }]
        });
    };

    let myChart = createChart();

    // Event listener to handle window resize and update chart font size
    window.addEventListener('resize', function() {
        myChart.destroy();
        myChart = createChart();
    });
});
