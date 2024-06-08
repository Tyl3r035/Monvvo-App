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

    myChart.update();
});
