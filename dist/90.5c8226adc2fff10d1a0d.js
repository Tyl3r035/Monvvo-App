(self["webpackChunkmonvvo_app"] = self["webpackChunkmonvvo_app"] || []).push([[90],{

/***/ 90:
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event fired");

  // Disable Google Analytics on localhost
  if (window.location.hostname === "localhost") {
    console.log("Running on localhost, disabling Google Analytics");
  }

  // Mortgage calculation functionality
  var homePriceInput = document.getElementById('home-price');
  var downPaymentAmountInput = document.getElementById('down-payment-amount');
  var downPaymentPercentageInput = document.getElementById('down-payment-percentage');
  var loanTermInput = document.getElementById('loan-term');
  var interestRateInput = document.getElementById('interest-rate');
  var propertyTaxInput = document.getElementById('property-tax');
  var pmiExpenseInput = document.getElementById('pmi-expense');
  var hoaExpenseInput = document.getElementById('hoa-expense');
  var updateBtn = document.getElementById('update-btn');
  var resetBtn = document.getElementById('reset-btn');
  var canvas = document.getElementById('mortgageChart');
  var amortizationChartCanvas = document.getElementById('amortizationChart');
  var labelsContainer = document.getElementById('chartLabels');
  var amortizationLabelsContainer = document.getElementById('amortizationLabels');
  var defaultValues = {
    homePrice: 500000,
    downPaymentAmount: 25000,
    downPaymentPercentage: 5,
    loanTerm: 25,
    interestRate: 7.04,
    propertyTax: 250,
    pmiExpense: 200,
    hoaExpense: 0
  };
  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  var inputsToRestrict = [homePriceInput, downPaymentAmountInput, downPaymentPercentageInput, loanTermInput, interestRateInput, propertyTaxInput, pmiExpenseInput, hoaExpenseInput];
  inputsToRestrict.forEach(function (input) {
    input.addEventListener('keydown', function (event) {
      if (event.key === "-" || event.key === "e") {
        event.preventDefault();
      }
    });
  });
  var lastAmortizationData = null;
  downPaymentAmountInput.addEventListener('input', function () {
    var homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice;
    var downPaymentAmount = parseFloat(downPaymentAmountInput.value) || 0;
    var downPaymentPercentage = downPaymentAmount / homePrice * 100;
    downPaymentPercentageInput.value = Number.isInteger(downPaymentPercentage) ? downPaymentPercentage : downPaymentPercentage.toFixed(2);
  });
  downPaymentPercentageInput.addEventListener('input', function () {
    var homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice;
    var downPaymentPercentage = parseFloat(downPaymentPercentageInput.value) || 0;
    var downPaymentAmount = Math.ceil(downPaymentPercentage / 100 * homePrice);
    downPaymentAmountInput.value = downPaymentAmount;
  });
  homePriceInput.addEventListener('input', function () {
    var homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice;
    var downPaymentAmount = parseFloat(downPaymentAmountInput.value) || 0;
    var downPaymentPercentage = downPaymentAmount / homePrice * 100;
    downPaymentPercentageInput.value = Number.isInteger(downPaymentPercentage) ? downPaymentPercentage : downPaymentPercentage.toFixed(2);
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
  var tabPaymentBreakdown = document.getElementById("tab-payment-breakdown");
  var tabAmortizationSchedule = document.getElementById("tab-amortization-schedule");
  var paymentBreakdownContent = document.getElementById("payment-breakdown-content");
  var amortizationScheduleContent = document.getElementById("amortization-schedule-content");
  function showTab(tabName) {
    if (tabName === "payment") {
      paymentBreakdownContent.style.display = "block";
      amortizationScheduleContent.style.display = "none";
      tabPaymentBreakdown.classList.add("tab-active");
      tabAmortizationSchedule.classList.remove("tab-active");
      if (lastAmortizationData) {
        var _lastAmortizationData = lastAmortizationData,
          monthlyPrincipalAndInterest = _lastAmortizationData.monthlyPrincipalAndInterest,
          monthlyPropertyTax = _lastAmortizationData.monthlyPropertyTax,
          monthlyPMI = _lastAmortizationData.monthlyPMI,
          monthlyHOA = _lastAmortizationData.monthlyHOA;
        updateHorizontalStackedBarChart(monthlyPrincipalAndInterest, monthlyPropertyTax, monthlyPMI, monthlyHOA);
      }
    } else if (tabName === "amortization") {
      paymentBreakdownContent.style.display = "none";
      amortizationScheduleContent.style.display = "block";
      tabPaymentBreakdown.classList.remove("tab-active");
      tabAmortizationSchedule.classList.add("tab-active");
      if (lastAmortizationData) {
        var _lastAmortizationData2 = lastAmortizationData,
          balanceData = _lastAmortizationData2.balanceData,
          cumulativeInterestData = _lastAmortizationData2.cumulativeInterestData,
          cumulativePrincipalData = _lastAmortizationData2.cumulativePrincipalData,
          totalInterestPaid = _lastAmortizationData2.totalInterestPaid,
          totalPrincipalPaid = _lastAmortizationData2.totalPrincipalPaid,
          totalAmountPaid = _lastAmortizationData2.totalAmountPaid;
        drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData);
        updateAmortizationLabels(totalInterestPaid, totalPrincipalPaid, totalAmountPaid);
      }
    }
  }
  tabPaymentBreakdown.addEventListener("click", function () {
    return showTab("payment");
  });
  tabAmortizationSchedule.addEventListener("click", function () {
    return showTab("amortization");
  });
  function calculateAndDisplayResults() {
    console.log("Calculating and displaying results");
    var homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice;
    var downPaymentAmount = parseFloat(downPaymentAmountInput.value);
    var downPaymentPercentage = parseFloat(downPaymentPercentageInput.value);
    var downPayment;
    if (!isNaN(downPaymentPercentage) && downPaymentPercentage > 0) {
      downPayment = Math.ceil(downPaymentPercentage / 100 * homePrice);
      downPaymentAmountInput.value = downPayment;
    } else if (!isNaN(downPaymentAmount)) {
      downPayment = downPaymentAmount;
      var percentageValue = downPaymentAmount / homePrice * 100;
      downPaymentPercentageInput.value = Number.isInteger(percentageValue) ? percentageValue : percentageValue.toFixed(2);
    } else {
      downPayment = defaultValues.downPaymentAmount;
    }
    var principal = homePrice - downPayment;
    var loanTerm = parseInt(loanTermInput.value) || defaultValues.loanTerm;
    var interestRate = parseFloat(interestRateInput.value) || defaultValues.interestRate;
    var propertyTax = parseFloat(propertyTaxInput.value) || defaultValues.propertyTax;
    var pmiExpense = parseFloat(pmiExpenseInput.value) || defaultValues.pmiExpense;
    var hoaExpense = parseFloat(hoaExpenseInput.value) || defaultValues.hoaExpense;
    var monthlyInterestRate = interestRate / 100 / 12;
    var numberOfPayments = loanTerm * 12;
    var monthlyPrincipalAndInterest = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    var monthlyPropertyTax = propertyTax;
    var monthlyPMI = pmiExpense;
    var monthlyHOA = hoaExpense;
    var totalMonthlyPayment = monthlyPrincipalAndInterest + monthlyPropertyTax + monthlyPMI + monthlyHOA;
    updateHorizontalStackedBarChart(monthlyPrincipalAndInterest, monthlyPropertyTax, monthlyPMI, monthlyHOA);
    updateLabels(monthlyPrincipalAndInterest, monthlyPropertyTax, monthlyPMI, monthlyHOA);
    var monthlyPaymentElement = document.querySelector('.monthly-payment');
    monthlyPaymentElement.innerText = "$".concat(formatter.format(totalMonthlyPayment));
    monthlyPaymentElement.style.fontFamily = 'Open Sans';
    monthlyPaymentElement.style.fontWeight = '500';
    monthlyPaymentElement.style.color = '#000';
    var amortizationData = calculateAmortizationSchedule(principal, monthlyInterestRate, monthlyPrincipalAndInterest, numberOfPayments);
    drawAmortizationChart(amortizationData.balanceData, amortizationData.cumulativeInterestData, amortizationData.cumulativePrincipalData);
    updateAmortizationLabels(amortizationData.totalInterestPaid, amortizationData.totalPrincipalPaid, amortizationData.totalAmountPaid);
    lastAmortizationData = {
      balanceData: amortizationData.balanceData,
      cumulativeInterestData: amortizationData.cumulativeInterestData,
      cumulativePrincipalData: amortizationData.cumulativePrincipalData,
      totalInterestPaid: amortizationData.totalInterestPaid,
      totalPrincipalPaid: amortizationData.totalPrincipalPaid,
      totalAmountPaid: amortizationData.totalAmountPaid,
      monthlyPrincipalAndInterest: monthlyPrincipalAndInterest,
      monthlyPropertyTax: monthlyPropertyTax,
      monthlyPMI: monthlyPMI,
      monthlyHOA: monthlyHOA
    };
  }
  function updateHoverValues(balance, interest, principal) {
    var labelValues = amortizationLabelsContainer.querySelectorAll('.label-value');
    if (labelValues.length === 3) {
      labelValues[0].textContent = formatter.format(interest);
      labelValues[1].textContent = formatter.format(principal);
      labelValues[2].textContent = formatter.format(balance);
    }
  }
  function revertValuesToTotals() {
    var _lastAmortizationData3 = lastAmortizationData,
      totalInterestPaid = _lastAmortizationData3.totalInterestPaid,
      totalPrincipalPaid = _lastAmortizationData3.totalPrincipalPaid,
      totalAmountPaid = _lastAmortizationData3.totalAmountPaid;
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
    var ctx = canvas.getContext('2d');
    var parentWidth = canvas.parentElement.offsetWidth;
    canvas.width = parentWidth;
    canvas.height = 100;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var data = [principalAndInterest, propertyTax, pmi, hoa];
    var colors = ['#175134', '#3EB721', '#91BBA6', '#B3D4C2'];
    var chartHeight = 70;
    var chartWidth = canvas.width;
    var total = data.reduce(function (a, b) {
      return a + b;
    }, 0);
    var maxTotal = Math.max(total, 1);
    var xOffset = 0;
    var yOffset = canvas.height / 2;
    var borderRadius = 5;
    var gap = 2;
    ctx.save();
    drawRoundedRect(ctx, xOffset, yOffset - chartHeight / 2, chartWidth, chartHeight, borderRadius);
    var cumulativeWidth = 0;
    data.forEach(function (value, index) {
      var barWidth = value / maxTotal * chartWidth - gap;
      ctx.fillStyle = colors[index];
      ctx.fillRect(xOffset + cumulativeWidth, yOffset - chartHeight / 2, barWidth, chartHeight);
      cumulativeWidth += barWidth + gap;
    });
    ctx.restore();
  }
  function updateLabels(principalAndInterest, propertyTax, pmi, hoa) {
    var labels = [{
      label: 'Principal & Interest',
      value: principalAndInterest,
      color: '#175134'
    }, {
      label: 'Property Tax',
      value: propertyTax,
      color: '#3EB721'
    }, {
      label: 'PMI',
      value: pmi,
      color: '#91BBA6'
    }, {
      label: 'HOA',
      value: hoa,
      color: '#B3D4C2'
    }];
    labelsContainer.innerHTML = ''; // Clear previous labels

    labels.forEach(function (item) {
      var labelElement = document.createElement('div');
      labelElement.classList.add('label-item');
      labelElement.style.fontFamily = "'Open Sans', sans-serif";
      labelElement.style.fontWeight = '550';
      labelElement.style.color = "#101010";
      var colorCircle = document.createElement('span');
      colorCircle.classList.add('color-circle');
      colorCircle.style.backgroundColor = item.color;
      var labelText = document.createElement('span');
      labelText.classList.add('label-name');
      labelText.textContent = item.label;
      var labelValue = document.createElement('span');
      labelValue.classList.add('label-value');
      labelValue.textContent = "".concat(formatter.format(item.value));
      labelElement.appendChild(colorCircle);
      labelElement.appendChild(labelText);
      labelElement.appendChild(labelValue);
      labelsContainer.appendChild(labelElement);
    });
  }
  function calculateAmortizationSchedule(principal, monthlyInterestRate, monthlyPrincipalAndInterest, numberOfPayments) {
    var balanceData = [];
    var cumulativeInterestData = [];
    var cumulativePrincipalData = [];
    var balance = principal;
    var cumulativeInterest = 0;
    var cumulativePrincipal = 0;
    for (var month = 1; month <= numberOfPayments; month++) {
      var interestPayment = balance * monthlyInterestRate;
      var principalPayment = monthlyPrincipalAndInterest - interestPayment;
      balance -= principalPayment;
      cumulativeInterest += interestPayment;
      cumulativePrincipal += principalPayment;
      balanceData.push(balance > 0 ? balance : 0);
      cumulativeInterestData.push(cumulativeInterest);
      cumulativePrincipalData.push(cumulativePrincipal);
    }
    var totalInterestPaid = cumulativeInterest;
    var totalPrincipalPaid = cumulativePrincipal;
    var totalAmountPaid = monthlyPrincipalAndInterest * numberOfPayments;
    return {
      balanceData: balanceData,
      cumulativeInterestData: cumulativeInterestData,
      cumulativePrincipalData: cumulativePrincipalData,
      totalInterestPaid: totalInterestPaid,
      totalPrincipalPaid: totalPrincipalPaid,
      totalAmountPaid: totalAmountPaid
    };
  }
  function drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData) {
    var ctx = amortizationChartCanvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    amortizationChartCanvas.style.width = '100%';
    amortizationChartCanvas.style.height = '300px';
    var width = amortizationChartCanvas.offsetWidth;
    var height = 300;
    amortizationChartCanvas.width = width * dpr;
    amortizationChartCanvas.height = height * dpr;
    if (dpr > 1) {
      ctx.scale(dpr, dpr);
    }
    ctx.clearRect(0, 0, width * dpr, height * dpr);
    var months = balanceData.length;
    var maxBalance = Math.max.apply(Math, _toConsumableArray(balanceData));
    var maxCumulative = Math.max.apply(Math, _toConsumableArray(cumulativeInterestData).concat(_toConsumableArray(cumulativePrincipalData)));
    var yAxisMax = Math.max(maxBalance, maxCumulative);
    var intervalMonths = 5 * 12;
    var padding = {
      top: 30,
      right: 20,
      bottom: 30,
      left: 70
    };
    var gridColor = '#d0d0d0';
    var labelColor = '#505050';
    var labelFont = '14px Open Sans';
    var currentYear = new Date().getFullYear();
    ctx.font = labelFont;
    ctx.textAlign = 'right';
    function getY(value) {
      return height - padding.bottom - value / yAxisMax * (height - padding.top - padding.bottom);
    }
    function getX(index) {
      return padding.left + index / months * (width - padding.left - padding.right);
    }

    // Draw horizontal grid lines only, avoiding the line at the bottom (y-axis line)
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    var yLabelInterval = 100000;
    for (var yValue = yLabelInterval; yValue < yAxisMax; yValue += yLabelInterval) {
      var y = getY(yValue);
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();
      ctx.fillStyle = labelColor;
      ctx.fillText("$".concat((yValue / 1000).toFixed(0), "K"), padding.left - 10, y + 4);
    }

    // Draw vertical grid lines only, avoiding the line on the left (x-axis line)
    ctx.textAlign = 'center';
    for (var i = intervalMonths; i < months; i += intervalMonths) {
      var x = getX(i);
      ctx.beginPath();
      ctx.moveTo(x, padding.top);
      ctx.lineTo(x, height - padding.bottom);
      ctx.stroke();
      var yearLabel = currentYear + i / 12 / 5 * 5;
      ctx.fillStyle = labelColor;
      ctx.fillText(yearLabel, x, height - 5);
    }

    // Plot balance line
    ctx.beginPath();
    ctx.strokeStyle = '#175134';
    ctx.lineWidth = 2;
    ctx.moveTo(getX(0), getY(balanceData[0]));
    for (var _i = 1; _i < months; _i++) {
      ctx.lineTo(getX(_i), getY(balanceData[_i]));
    }
    ctx.stroke();

    // Plot cumulative interest line
    ctx.beginPath();
    ctx.strokeStyle = '#3EB721';
    ctx.lineWidth = 2.5;
    ctx.moveTo(getX(0), getY(cumulativeInterestData[0]));
    for (var _i2 = 1; _i2 < months; _i2++) {
      ctx.lineTo(getX(_i2), getY(cumulativeInterestData[_i2]));
    }
    ctx.stroke();

    // Plot cumulative principal line
    ctx.beginPath();
    ctx.strokeStyle = '#91BBA6';
    ctx.lineWidth = 2.5;
    ctx.moveTo(getX(0), getY(cumulativePrincipalData[0]));
    for (var _i3 = 1; _i3 < months; _i3++) {
      ctx.lineTo(getX(_i3), getY(cumulativePrincipalData[_i3]));
    }
    ctx.stroke();

    // Draw border around the chart with 3px internal padding
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.strokeRect(padding.left - 3, padding.top - 3, width - padding.left - padding.right + 6, height - padding.top - padding.bottom + 6);
  }
  amortizationChartCanvas.addEventListener('mousemove', function (event) {
    var ctx = amortizationChartCanvas.getContext('2d');
    var rect = amortizationChartCanvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var padding = {
      top: 30,
      right: 20,
      bottom: 30,
      left: 70
    }; // Match this with your chart's padding

    // Ensure x is within the horizontal bounds of the chart
    if (x >= padding.left && x <= amortizationChartCanvas.width - padding.right) {
      var chartWidth = amortizationChartCanvas.width - padding.left - padding.right;
      var chartHeight = amortizationChartCanvas.height - padding.top - padding.bottom;
      var index = Math.round((x - padding.left) / chartWidth * (lastAmortizationData.balanceData.length - 1));
      if (index >= 0 && index < lastAmortizationData.balanceData.length) {
        // Clear the canvas and redraw the chart
        drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData, lastAmortizationData.cumulativePrincipalData);

        // Draw the vertical line strictly within the chart area
        ctx.beginPath();
        ctx.moveTo(x, padding.top + 1); // +1 to avoid touching the border
        ctx.lineTo(x, padding.top + chartHeight - 1); // -1 to avoid touching the border
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Update the labels with hover values
        updateHoverValues(lastAmortizationData.balanceData[index], lastAmortizationData.cumulativeInterestData[index], lastAmortizationData.cumulativePrincipalData[index]);
      }
    }
  });
  amortizationChartCanvas.addEventListener('mouseout', function () {
    // Clear the canvas and redraw the chart without the vertical line
    drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData, lastAmortizationData.cumulativePrincipalData);
    revertValuesToTotals();
  });
  function updateAmortizationLabels(totalInterestPaid, totalPrincipalPaid, totalAmountPaid) {
    var labels = [{
      label: 'Total Interest Paid',
      value: totalInterestPaid,
      color: '#3EB721'
    }, {
      label: 'Total Principal Paid',
      value: totalPrincipalPaid,
      color: '#91BBA6'
    }, {
      label: 'Balance (Total Paid)',
      value: totalAmountPaid,
      color: '#175134'
    }];
    amortizationLabelsContainer.innerHTML = ''; // Clear previous labels

    labels.forEach(function (item) {
      var labelElement = document.createElement('div');
      labelElement.classList.add('label-item');
      labelElement.style.fontFamily = "'Open Sans', sans-serif";
      labelElement.style.fontWeight = '550';
      labelElement.style.color = "#101010";
      var colorCircle = document.createElement('span');
      colorCircle.classList.add('color-circle');
      colorCircle.style.backgroundColor = item.color;
      var labelText = document.createElement('span');
      labelText.classList.add('label-name');
      labelText.textContent = item.label;
      var labelValue = document.createElement('span');
      labelValue.classList.add('label-value');
      labelValue.textContent = formatter.format(item.value).replace('$', '');
      labelElement.appendChild(colorCircle);
      labelElement.appendChild(labelText);
      labelElement.appendChild(labelValue);
      amortizationLabelsContainer.appendChild(labelElement);
    });
  }
  window.addEventListener('resize', function () {
    calculateAndDisplayResults();
  });
  calculateAndDisplayResults();
  console.log("End of script reached");
});

/***/ })

}]);
//# sourceMappingURL=90.5c8226adc2fff10d1a0d.js.map