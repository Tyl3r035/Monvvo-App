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
  var paymentFrequencyInput = document.getElementById('payment-frequency');
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
          periodicPrincipalAndInterest = _lastAmortizationData.periodicPrincipalAndInterest,
          periodicPropertyTax = _lastAmortizationData.periodicPropertyTax,
          periodicPMI = _lastAmortizationData.periodicPMI,
          periodicHOA = _lastAmortizationData.periodicHOA;

        // Re-render the stacked bar chart
        updateHorizontalStackedBarChart(periodicPrincipalAndInterest, periodicPropertyTax, periodicPMI, periodicHOA);
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
    var periodicPrincipalAndInterest = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    var periodicPropertyTax = propertyTax;
    var periodicPMI = pmiExpense;
    var periodicHOA = hoaExpense;

    // Adjust payment for selected frequency
    var selectedFrequency = paymentFrequencyInput.value;
    var paymentFactor = 1; // Default to monthly

    if (selectedFrequency === 'biweekly') {
      paymentFactor = 12 / 26; // Bi-weekly payments
    } else if (selectedFrequency === 'weekly') {
      paymentFactor = 12 / 52; // Weekly payments
    } else if (selectedFrequency === 'accelerated-biweekly') {
      paymentFactor = 1 / 26; // 13 monthly payments per year
    } else if (selectedFrequency === 'accelerated-weekly') {
      paymentFactor = 1 / 52; // 13 monthly payments per year
    }
    var totalPeriodicPayment = (periodicPrincipalAndInterest + periodicPropertyTax + periodicPMI + periodicHOA) * paymentFactor;

    // Update the payment display
    updateLabels(periodicPrincipalAndInterest, periodicPropertyTax, periodicPMI, periodicHOA);

    // Update the stacked bar chart
    updateHorizontalStackedBarChart(periodicPrincipalAndInterest, periodicPropertyTax, periodicPMI, periodicHOA);

    // Calculate Amortization Data
    var amortizationData = calculateAmortizationSchedule(principal, monthlyInterestRate, periodicPrincipalAndInterest, numberOfPayments);
    drawAmortizationChart(amortizationData.balanceData, amortizationData.cumulativeInterestData, amortizationData.cumulativePrincipalData);
    updateAmortizationLabels(amortizationData.totalInterestPaid, amortizationData.totalPrincipalPaid, amortizationData.totalAmountPaid);
    lastAmortizationData = {
      balanceData: amortizationData.balanceData,
      cumulativeInterestData: amortizationData.cumulativeInterestData,
      cumulativePrincipalData: amortizationData.cumulativePrincipalData,
      totalInterestPaid: amortizationData.totalInterestPaid,
      totalPrincipalPaid: amortizationData.totalPrincipalPaid,
      totalAmountPaid: amortizationData.totalAmountPaid,
      periodicPrincipalAndInterest: periodicPrincipalAndInterest,
      periodicPropertyTax: periodicPropertyTax,
      periodicPMI: periodicPMI,
      periodicHOA: periodicHOA
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
    var canvas = document.getElementById('mortgageChart');
    var ctx = canvas.getContext('2d');
    var parentWidth = canvas.parentElement.offsetWidth;

    // Set canvas dimensions
    canvas.width = parentWidth;
    canvas.height = 100; // Standard height for the bar chart

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Data and colors
    var data = [principalAndInterest, propertyTax, pmi, hoa];
    var labels = ['Principal & Interest', 'Property Tax', 'PMI', 'HOA'];
    var colors = ['#175134', '#3EB721', '#91BBA6', '#B3D4C2'];

    // Chart dimensions
    var chartHeight = 60;
    var chartWidth = canvas.width;
    var total = data.reduce(function (a, b) {
      return a + b;
    }, 0);
    var maxTotal = Math.max(total, 1); // Avoid division by zero
    var gap = 2; // Gap between segments
    var yOffset = canvas.height / 2 - chartHeight / 2;
    var cumulativeWidth = 0;

    // Draw each segment
    data.forEach(function (value, index) {
      var segmentWidth = value / maxTotal * chartWidth - gap;

      // Ensure the last segment fills the remaining width
      if (index === data.length - 1) {
        segmentWidth = chartWidth - cumulativeWidth; // Adjust last segment to fill remaining space
      }
      ctx.fillStyle = colors[index];

      // Apply border radius to the first and last segments only
      var isFirstSegment = index === 0;
      var isLastSegment = index === data.length - 1;
      drawOuterRoundedRect(ctx, cumulativeWidth,
      // X position
      yOffset,
      // Y position
      segmentWidth,
      // Width
      chartHeight,
      // Height
      5,
      // Border radius for outer edges
      isFirstSegment, isLastSegment);
      cumulativeWidth += segmentWidth + gap; // Increment for next bar
    });

    // Update the labels below the chart
    updateStackedBarLabels(principalAndInterest, propertyTax, pmi, hoa, labels, colors);
  }

  /**
   * Update the labels below the stacked bar chart.
   */
  function updateStackedBarLabels(principalAndInterest, propertyTax, pmi, hoa, labels, colors) {
    var labelsContainer = document.getElementById('chartLabels');
    labelsContainer.innerHTML = ''; // Clear any existing labels

    var data = [principalAndInterest, propertyTax, pmi, hoa];
    data.forEach(function (value, index) {
      var labelItem = document.createElement('div');
      labelItem.classList.add('label-item');
      var colorCircle = document.createElement('span');
      colorCircle.classList.add('color-circle');
      colorCircle.style.backgroundColor = colors[index];
      var labelName = document.createElement('span');
      labelName.classList.add('label-name');
      labelName.textContent = labels[index];
      var labelValue = document.createElement('span');
      labelValue.classList.add('label-value');
      labelValue.textContent = "".concat(formatter.format(value));
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
    var periodicPaymentElement = document.getElementById('monthly-payment-value');

    // Get the selected frequency from the dropdown
    var selectedFrequency = paymentFrequencyInput.value;

    // Determine the frequency label for display
    var frequencyLabel = "Month";
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
    var totalPeriodicPayment = principalAndInterest + propertyTax + pmi + hoa;

    // Update the payment element with styled HTML
    periodicPaymentElement.innerHTML = "\n            <span class=\"payment-amount\">$".concat(formatter.format(totalPeriodicPayment), "</span>\n            <span class=\"payment-frequency\"> / ").concat(frequencyLabel, "</span>\n        ");
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
    var hoverIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var ctx = amortizationChartCanvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;

    // Adjust height dynamically based on screen width
    var height = window.innerWidth < 500 ? 200 : 300;
    amortizationChartCanvas.style.width = '100%';
    amortizationChartCanvas.style.height = "".concat(height, "px");
    var width = amortizationChartCanvas.offsetWidth;
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

    // Draw horizontal grid lines
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

    // Draw vertical grid lines
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

    // Draw hover vertical line first (underneath everything else)
    if (hoverIndex !== null) {
      var hoverX = getX(hoverIndex);
      ctx.beginPath();
      ctx.moveTo(hoverX, padding.top);
      ctx.lineTo(hoverX, height - padding.bottom);
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)'; // Subtle line
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw chart lines
    var drawLine = function drawLine(data, color, lineWidth) {
      ctx.beginPath();
      ctx.strokeStyle = color; // Ensure this is fully opaque
      ctx.lineWidth = lineWidth;
      ctx.moveTo(getX(0), getY(data[0]));
      for (var _i = 1; _i < months; _i++) {
        ctx.lineTo(getX(_i), getY(data[_i]));
      }
      ctx.stroke();
    };
    drawLine(balanceData, '#175134', 2); // Balance line
    drawLine(cumulativeInterestData, '#3EB721', 2.5); // Cumulative Interest
    drawLine(cumulativePrincipalData, '#91BBA6', 2.5); // Cumulative Principal

    // Draw hover dots on top (above lines and vertical line)
    if (hoverIndex !== null) {
      var _hoverX = getX(hoverIndex);
      var dotData = [{
        y: getY(balanceData[hoverIndex]),
        color: '#175134'
      }, {
        y: getY(cumulativeInterestData[hoverIndex]),
        color: '#3EB721'
      }, {
        y: getY(cumulativePrincipalData[hoverIndex]),
        color: '#91BBA6'
      }];
      dotData.forEach(function (_ref) {
        var y = _ref.y,
          color = _ref.color;
        ctx.beginPath();
        ctx.arc(_hoverX, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = color; // Ensure this is fully opaque
        ctx.fill();
      });
    }

    // Draw border around the chart
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.strokeRect(padding.left - 3, padding.top - 3, width - padding.left - padding.right + 6, height - padding.top - padding.bottom + 6);
  }
  amortizationChartCanvas.addEventListener('mousemove', function (event) {
    var rect = amortizationChartCanvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var padding = {
      top: 30,
      right: 20,
      bottom: 30,
      left: 70
    };

    // Ensure x is within the horizontal bounds of the chart
    if (x >= padding.left && x <= amortizationChartCanvas.offsetWidth - padding.right) {
      var chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
      var index = Math.round((x - padding.left) / chartWidth * (lastAmortizationData.balanceData.length - 1));
      if (index >= 0 && index < lastAmortizationData.balanceData.length) {
        drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData, lastAmortizationData.cumulativePrincipalData, index // Pass hover index for hover effects
        );
      }
    }
  });
  amortizationChartCanvas.addEventListener('mouseout', function () {
    // Clear the canvas and redraw the chart without hover effects
    drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData, lastAmortizationData.cumulativePrincipalData);
  });
  amortizationChartCanvas.addEventListener('mouseout', function () {
    // Clear the canvas and redraw the chart without hover effects
    drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData, lastAmortizationData.cumulativePrincipalData);
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
      labelElement.classList.add('label-item'); // Use CSS class instead of inline styles

      var colorCircle = document.createElement('span');
      colorCircle.classList.add('color-circle');
      colorCircle.style.backgroundColor = item.color;
      var labelText = document.createElement('span');
      labelText.classList.add('label-name'); // Apply consistent class
      labelText.textContent = item.label;
      var labelValue = document.createElement('span');
      labelValue.classList.add('label-value'); // Apply consistent class
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

/***/ })

}]);
//# sourceMappingURL=90.514e86063e3ba90944d1.js.map