/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1899:
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event fired");
  // Inputs for Auto Loan Payoff Calculator
  var loanBalanceInput = document.getElementById('loan-balance'); // Current loan balance
  var termRemainingInput = document.getElementById('term-remaining'); // Remaining loan term in months
  var interestRateInput = document.getElementById('interest-rate'); // Annual interest rate
  var monthlyPaymentInput = document.getElementById('monthly-payment'); // Required monthly payment
  var extraPaymentInput = document.getElementById('extra-payment'); // Extra monthly payment
  var lumpSumInput = document.getElementById('lump-sum'); // One-time lump sum payment
  var lumpDateInput = document.getElementById('lump-date'); // Lump sum payment date
  var updateBtn = document.getElementById('update-btn'); // Update button
  var resetBtn = document.getElementById('reset-btn'); // Reset button
  var autoChartCanvas = document.getElementById('autoChart'); // Chart for visualization

  // Default values
  var defaultValues = {
    loanBalance: 17000,
    // Default current loan balance
    termRemaining: 46,
    // Default remaining term in months
    interestRate: 5.5,
    // Interest rate in percentage
    monthlyPayment: 496.23,
    // Default required monthly payment
    extraPayment: 150,
    // Default extra monthly payment
    lumpSum: 0,
    // Default lump sum payment
    lumpDate: "" // Default lump sum date (empty)
  };

  // Apply default values to input fields
  loanBalanceInput.value = defaultValues.loanBalance;
  termRemainingInput.value = defaultValues.termRemaining;
  interestRateInput.value = defaultValues.interestRate;
  monthlyPaymentInput.value = defaultValues.monthlyPayment;
  extraPaymentInput.value = defaultValues.extraPayment;
  lumpSumInput.value = defaultValues.lumpSum;
  lumpDateInput.value = defaultValues.lumpDate;

  // Helper: Format currency
  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  // Disable the lump sum date if lump sum is 0
  function toggleLumpSumDateState() {
    var lumpSum = parseFloat(lumpSumInput.value) || 0;
    if (lumpSum > 0) {
      lumpDateInput.style.opacity = "1"; // Full opacity when enabled
      lumpDateInput.style.pointerEvents = "auto"; // Allow interactions
      lumpDateInput.disabled = false;
    } else {
      lumpDateInput.style.opacity = "0.3"; // Reduce opacity when disabled
      lumpDateInput.style.pointerEvents = "none"; // Prevent interactions
      lumpDateInput.disabled = true;
      lumpDateInput.value = ""; // Reset value if not being used
    }
  }

  // Event listener to trigger when lump sum input changes
  lumpSumInput.addEventListener("input", toggleLumpSumDateState);

  // Initialize state on page load
  toggleLumpSumDateState();

  // Declare lastAmortizationData globally
  var lastAmortizationData = {
    schedule: [],
    totalInterestPaid: 0,
    totalPrincipalPaid: 0
  };

  // ✅ Calculate and Display Results
  function calculateAndDisplayResults() {
    // Extract input values
    var loanBalance = parseFloat(loanBalanceInput.value) || parseFloat(loanBalanceInput.placeholder) || defaultValues.loanBalance;
    var termRemaining = parseFloat(termRemainingInput.value) || parseFloat(termRemainingInput.placeholder) || defaultValues.termRemaining;
    var interestRate = (parseFloat(interestRateInput.value) || parseFloat(interestRateInput.placeholder) || defaultValues.interestRate) / 100;
    var monthlyPayment = parseFloat(monthlyPaymentInput.value) || parseFloat(monthlyPaymentInput.placeholder) || defaultValues.monthlyPayment;
    var extraPayment = parseFloat(extraPaymentInput.value) || 0;
    var lumpSum = parseFloat(lumpSumInput.value) || 0;
    var lumpDate = lumpDateInput.value;
    console.log("Calculation Triggered with Values:", {
      loanBalance: loanBalance,
      termRemaining: termRemaining,
      interestRate: interestRate,
      monthlyPayment: monthlyPayment,
      extraPayment: extraPayment,
      lumpSum: lumpSum,
      lumpDate: lumpDate
    });
    var monthlyInterestRate = interestRate / 12;
    var remainingBalance = loanBalance;
    var totalInterestPaid = 0;
    var totalPrincipalPaid = 0;
    var monthsElapsed = 0;
    var amortizationSchedule = [];
    var cumulativeInterest = 0;
    var cumulativePrincipal = 0;
    var cumulativeInterestData = [];
    var cumulativePrincipalData = [];

    // ✅ Ensure Lump Sum is Applied at the Correct Month
    var lumpSumMonthIndex = -1;
    if (lumpDate) {
      var today = new Date();
      var startDate = new Date(today.getFullYear(), today.getMonth(), 1);
      var selectedDate = new Date(lumpDate);
      var monthsDifference = (selectedDate.getFullYear() - startDate.getFullYear()) * 12 + (selectedDate.getMonth() - startDate.getMonth());
      if (monthsDifference >= 0 && monthsDifference < termRemaining) {
        lumpSumMonthIndex = monthsDifference + 1;
      } else {
        console.warn("Lump sum date is outside the loan term.");
      }
    }

    // ✅ Loop through each month until the loan is paid off
    while (remainingBalance > 0 && monthsElapsed < termRemaining) {
      var interestPayment = remainingBalance * monthlyInterestRate;
      var principalPayment = Math.min(monthlyPayment + extraPayment - interestPayment, remainingBalance);
      if (principalPayment <= 0 || isNaN(principalPayment)) {
        console.warn("Invalid principal payment detected. Stopping calculations.");
        break;
      }
      remainingBalance -= principalPayment;
      totalInterestPaid += interestPayment;
      totalPrincipalPaid += principalPayment;
      monthsElapsed++;

      // ✅ Update cumulative values
      cumulativeInterest += interestPayment;
      cumulativePrincipal += principalPayment;
      cumulativeInterestData.push(cumulativeInterest);
      cumulativePrincipalData.push(cumulativePrincipal);

      // ✅ Apply Lump Sum at the Correct Month
      if (lumpSum > 0 && monthsElapsed === lumpSumMonthIndex) {
        remainingBalance -= lumpSum;
        if (remainingBalance < 0) remainingBalance = 0;
        console.log("Applied Lump Sum of ".concat(formatter.format(lumpSum), " on Month ").concat(lumpSumMonthIndex, ", New Balance: ").concat(formatter.format(remainingBalance)));
      }
      amortizationSchedule.push({
        month: monthsElapsed,
        principal: principalPayment,
        interest: interestPayment,
        balance: remainingBalance > 0 ? remainingBalance : 0
      });
    }
    var newPayoffTime = monthsElapsed;
    console.log("Total Interest Paid:", totalInterestPaid);
    console.log("Total Principal Paid:", totalPrincipalPaid);
    console.log("New Payoff Time (Months):", newPayoffTime);

    // ✅ Update Doughnut Chart
    updateDoughnutChart(autoChartCanvas, monthlyPayment + extraPayment, monthlyPayment, extraPayment);

    // ✅ Update Labels
    updateChartLabels(monthlyPayment, extraPayment);

    // ✅ Store and Update Amortization Schedule
    lastAmortizationData = {
      schedule: amortizationSchedule,
      totalInterestPaid: totalInterestPaid,
      totalPrincipalPaid: totalPrincipalPaid,
      balanceData: amortizationSchedule.map(function (row) {
        return row.balance;
      }),
      cumulativeInterestData: cumulativeInterestData,
      cumulativePrincipalData: cumulativePrincipalData
    };

    // ✅ Ensure Chart Updates Immediately
    if (lastAmortizationData.schedule.length > 0) {
      populateAmortizationTable(lastAmortizationData);
      var _amortizationChartCanvas = document.getElementById('amortizationChart');
      if (_amortizationChartCanvas) {
        var ctx = _amortizationChartCanvas.getContext('2d');
        ctx.clearRect(0, 0, _amortizationChartCanvas.width, _amortizationChartCanvas.height);
      }
      drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData, lastAmortizationData.cumulativePrincipalData);
      updateAmortizationLabels(lastAmortizationData.totalInterestPaid, lastAmortizationData.totalPrincipalPaid, loanBalance);
    } else {
      console.error("Failed to generate amortization schedule.");
    }
  }

  // Trigger calculation on page load
  calculateAndDisplayResults();

  // Update Chart Labels
  function updateChartLabels(principalAndInterest, extraPayment) {
    document.getElementById('value-principal-interest').textContent = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(principalAndInterest);
    document.getElementById('value-extra-payment').textContent = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(extraPayment);
  }

  // Doughnut Chart Update Function
  function updateDoughnutChart(autoChartCanvas, totalMonthlyPayment, principalAndInterest, extraPayment) {
    if (!autoChartCanvas) {
      console.error("Canvas element not found.");
      return;
    }
    var ctx = autoChartCanvas.getContext('2d');
    var size = 300; // Match the expected size

    // Set canvas size
    autoChartCanvas.width = size;
    autoChartCanvas.height = size;

    // Ensure valid values for chart data
    var sanitizedData = [Math.max(0, principalAndInterest),
    // ✅ Ensure it's never negative
    Math.max(0, extraPayment) // ✅ Ensure Extra Payment is valid
    ];
    console.log("Doughnut Chart Data:", sanitizedData);

    // Prevent errors if all values are 0
    if (sanitizedData.every(function (value) {
      return value === 0;
    })) {
      console.error("Chart cannot be displayed because all values are zero.");
      return;
    }

    // Colors for segments
    var colors = ['#175134', '#3EB721']; // Dark Green for Principal & Interest, Bright Green for Extra Payment

    // Get total sum
    var total = sanitizedData.reduce(function (a, b) {
      return a + b;
    }, 0);
    if (total <= 0) {
      console.error("Total value for chart is zero or negative.");
      return;
    }

    // Format total payment for center display
    var formattedTotal = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(totalMonthlyPayment);

    // Clear the canvas before drawing
    ctx.clearRect(0, 0, size, size);
    var outerRadius = size / 2;
    var innerRadius = outerRadius - 50;
    var centerX = size / 2;
    var centerY = size / 2;
    var gapWidth = 5;
    var startAngle = -Math.PI / 2;
    sanitizedData.forEach(function (value, index) {
      if (value <= 0) return; // Skip zero values

      var segmentAngle = value / total * Math.PI * 2;
      var endAngle = startAngle + segmentAngle;
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

    // Center text
    ctx.font = "bold ".concat(size / 7, "px Roboto");
    ctx.fillStyle = '#232525';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(formattedTotal, centerX, centerY);
    console.log("Doughnut chart updated successfully.");
  }
  function drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData) {
    var hoverIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    if (!Array.isArray(balanceData) || balanceData.length === 0 || !Array.isArray(cumulativeInterestData) || cumulativeInterestData.length === 0 || !Array.isArray(cumulativePrincipalData) || cumulativePrincipalData.length === 0) {
      console.error("Invalid amortization chart data: Some arrays are missing or empty.");
      return;
    }
    var canvas = document.getElementById('amortizationChart');
    if (!canvas) {
      console.error("Amortization chart canvas not found.");
      return;
    }
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;

    // Responsive canvas size
    var isSmallScreen = window.innerWidth < 700;
    var canvasHeight = isSmallScreen ? 220 : 320;

    // ✅ Adjust width dynamically
    canvas.width = Math.floor(canvas.parentElement.clientWidth * dpr);
    canvas.height = canvasHeight * dpr;
    ctx.scale(dpr, dpr);
    var width = canvas.width / dpr;
    var height = canvas.height / dpr;

    // Padding adjustments
    var padding = {
      top: 10,
      right: 15,
      bottom: 50,
      left: 55
    };
    var gridColor = '#d0d0d0';
    var labelColor = '#505050';

    // Get max Y value for scaling (round to nearest 10K)
    var yAxisMax = Math.ceil(Math.max.apply(Math, _toConsumableArray(balanceData).concat(_toConsumableArray(cumulativeInterestData), _toConsumableArray(cumulativePrincipalData))) / 10000) * 10000;
    function getY(value) {
      return height - padding.bottom - value / yAxisMax * (height - padding.top - padding.bottom);
    }
    function getX(index) {
      return padding.left + index / (balanceData.length - 1) * (width - padding.left - padding.right);
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Y-axis grid lines & labels
    ctx.font = '14px Roboto';
    ctx.textAlign = 'right';
    ctx.fillStyle = labelColor;
    ctx.strokeStyle = gridColor;
    for (var i = 0; i <= yAxisMax; i += 10000) {
      var y = getY(i);

      // Grid line
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();

      // Y-axis labels
      ctx.fillText("$".concat((i / 1000).toFixed(0), "K"), padding.left - 10, y + 5);
    }

    // Draw X-axis grid (Months & Years)
    ctx.textAlign = 'center';
    var months = balanceData.length;
    var years = Math.floor(months / 12);
    for (var _i = 0; _i <= years; _i++) {
      var monthIndex = _i * 12;
      var x = getX(monthIndex);

      // ✅ Adjust last label to prevent overflow
      if (_i === years) x = width - padding.right - 2;
      var yearLabel = new Date().getFullYear() + _i;

      // Grid line
      ctx.beginPath();
      ctx.moveTo(x, padding.top);
      ctx.lineTo(x, height - padding.bottom);
      ctx.stroke();

      // X-axis labels
      ctx.fillText(yearLabel, x, height - 10);
    }

    // Draw amortization lines
    function drawLine(data, color) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (var _i2 = 0; _i2 < data.length; _i2++) {
        var _x = getX(_i2);
        var _y = getY(Math.max(0, data[_i2])); // No negative values
        if (_i2 === 0) ctx.moveTo(_x, _y);else ctx.lineTo(_x, _y);
      }
      ctx.stroke();
    }
    drawLine(balanceData, '#175134'); // Loan Balance
    drawLine(cumulativePrincipalData, '#3EB721'); // Principal Paid
    drawLine(cumulativeInterestData, '#91BBA6'); // Interest Paid

    // ✅ Draw Vertical Hover Line
    function drawHoverLine(ctx, hoverIndex, width, height, padding, balanceData) {
      if (hoverIndex < 0 || hoverIndex >= balanceData.length) return;
      var x = getX(hoverIndex);
      ctx.strokeStyle = "rgba(0, 0, 0, 0.4)"; // Gray transparent line
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x, padding.top);
      ctx.lineTo(x, height - padding.bottom);
      ctx.stroke();
    }

    // ✅ Draw hover effects
    var hoverX = getX(hoverIndex);
    var balanceY = getY(balanceData[hoverIndex]);
    var principalY = getY(cumulativePrincipalData[hoverIndex]);
    var interestY = getY(cumulativeInterestData[hoverIndex]);
    drawHoverLine(ctx, hoverIndex, width, height, padding, balanceData);

    // ✅ Draw hover dots
    var dotRadius = 6;
    ctx.fillStyle = '#175134'; // Balance dot
    ctx.beginPath();
    ctx.arc(hoverX, balanceY, dotRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#3EB721'; // Principal dot
    ctx.beginPath();
    ctx.arc(hoverX, principalY, dotRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#91BBA6'; // Interest dot
    ctx.beginPath();
    ctx.arc(hoverX, interestY, dotRadius, 0, Math.PI * 2);
    ctx.fill();
    console.log("Amortization chart updated successfully.");
  }
  function updateAmortizationLabels(totalInterestPaid, totalPrincipalPaid, totalAmountPaid) {
    var _lastAmortizationData;
    var labelsContainer = document.getElementById('amortizationLabels');
    if (!labelsContainer) {
      console.error("Amortization labels container not found.");
      return;
    }
    if (!lastAmortizationData || !lastAmortizationData.schedule || lastAmortizationData.schedule.length === 0) {
      console.error("No amortization data available for labels.");
      return;
    }

    // Use the first month's balance as the default remaining balance
    var initialBalance = ((_lastAmortizationData = lastAmortizationData) === null || _lastAmortizationData === void 0 || (_lastAmortizationData = _lastAmortizationData.schedule[0]) === null || _lastAmortizationData === void 0 ? void 0 : _lastAmortizationData.balance) || totalAmountPaid || 0;
    totalInterestPaid = isNaN(totalInterestPaid) ? 0 : Math.ceil(totalInterestPaid);
    totalPrincipalPaid = isNaN(totalPrincipalPaid) ? 0 : Math.ceil(totalPrincipalPaid);
    totalAmountPaid = isNaN(totalAmountPaid) ? 0 : Math.ceil(totalAmountPaid);
    labelsContainer.innerHTML = "\n        <div class=\"label-item\">\n            <span class=\"color-circle\" style=\"background-color: #175134;\"></span>\n            <span class=\"label-name\">Remaining Balance</span>\n            <span class=\"label-value\" id=\"label-balance\">$".concat(formatter.format(initialBalance), "</span>\n        </div>\n        <div class=\"label-item\">\n            <span class=\"color-circle\" style=\"background-color: #91BBA6;\"></span>\n            <span class=\"label-name\">Total Interest Paid</span>\n            <span class=\"label-value\" id=\"label-interest\">$").concat(formatter.format(totalInterestPaid), "</span>\n        </div>\n        <div class=\"label-item\">\n            <span class=\"color-circle\" style=\"background-color: #3EB721;\"></span>\n            <span class=\"label-name\">Total Principal Paid</span>\n            <span class=\"label-value\" id=\"label-principal\">$").concat(formatter.format(totalPrincipalPaid), "</span>\n        </div>\n    ");
    console.log("Amortization labels updated:", {
      initialBalance: initialBalance,
      totalInterestPaid: totalInterestPaid,
      totalPrincipalPaid: totalPrincipalPaid,
      totalAmountPaid: totalAmountPaid
    });
  }

  // ShowTab Function
  function showTab(tabName) {
    var tabs = document.querySelectorAll('.results-content > div');
    var navButtons = document.querySelectorAll('.results-tab');
    tabs.forEach(function (tab) {
      return tab.style.display = 'none';
    });
    navButtons.forEach(function (button) {
      return button.classList.remove('tab-active');
    });
    var selectedTab = document.getElementById("".concat(tabName, "-content"));
    if (selectedTab) {
      selectedTab.style.display = 'block';
      document.querySelector("#tab-".concat(tabName)).classList.add('tab-active');
    }
    if (tabName === 'amortization-schedule') {
      console.log("Switching to Amortization Schedule tab");
      if (!lastAmortizationData || !lastAmortizationData.schedule || lastAmortizationData.schedule.length === 0) {
        console.log("Amortization data missing. Recalculating...");
        calculateAndDisplayResults();
      }
      if (lastAmortizationData.balanceData.length > 0) {
        console.log("Updating amortization chart and table.");
        populateAmortizationTable(lastAmortizationData);
        initializeExpandCollapseLogic();

        // ✅ Ensure chart is fully redrawn on tab switch
        setTimeout(function () {
          drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData, lastAmortizationData.cumulativePrincipalData);
        }, 50);
        updateAmortizationLabels(lastAmortizationData.totalInterestPaid, lastAmortizationData.totalPrincipalPaid, lastAmortizationData.schedule.reduce(function (sum, row) {
          return sum + row.principal + row.interest;
        }, 0));
      } else {
        console.error("Failed to generate amortization schedule.");
      }
    } else if (tabName === 'payment-breakdown') {
      console.log("Switching to Payment Breakdown tab");
      calculateAndDisplayResults();
    }
  }
  var paymentBreakdownTab = document.getElementById('tab-payment-breakdown');
  var amortizationScheduleTab = document.getElementById('tab-amortization-schedule');

  // Add event listeners for tab switches
  paymentBreakdownTab.addEventListener('click', function () {
    console.log("Switching to Payment Breakdown tab");
    calculateAndDisplayResults(); // Always recalculate
    showTab('payment-breakdown'); // Show the Payment Breakdown tab
  });
  amortizationScheduleTab.addEventListener('click', function () {
    console.log("Switching to Amortization Schedule tab");
    calculateAndDisplayResults(); // Always recalculate
    showTab('amortization-schedule'); // Show the Amortization Schedule tab
  });
  showTab('payment-breakdown');

  // ✅ Add hover effect for interactive chart
  document.getElementById('amortizationChart').addEventListener('mousemove', function (event) {
    var rect = this.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var width = this.clientWidth;
    var months = lastAmortizationData.schedule.length;
    var hoverIndex = Math.round(x / width * months);
    if (hoverIndex >= 0 && hoverIndex < months) {
      drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData,
      // ✅ Use cumulative data
      lastAmortizationData.cumulativePrincipalData,
      // ✅ Use cumulative data
      hoverIndex);
    }
  });

  // Calculate Amortization Schedule
  function calculateAmortizationSchedule(loanBalance, termRemaining, interestRate, monthlyPayment, extraPayment, lumpSum, lumpDate) {
    console.log("Calculating Amortization Schedule...");
    var monthlyInterestRate = interestRate / 12;
    var remainingBalance = loanBalance;
    var totalInterestPaid = 0;
    var totalPrincipalPaid = 0;
    var monthsElapsed = 0;
    var amortizationSchedule = [];
    var lumpSumMonthIndex = termRemaining + 1; // Default to outside range
    if (lumpDate) {
      var today = new Date();
      var startDate = new Date(today.getFullYear(), today.getMonth(), 1);
      var selectedDate = new Date(lumpDate);
      var monthsDifference = (selectedDate.getFullYear() - startDate.getFullYear()) * 12 + (selectedDate.getMonth() - startDate.getMonth());
      if (monthsDifference >= 0 && monthsDifference < termRemaining) {
        lumpSumMonthIndex = monthsDifference + 1;
      }
    }
    while (remainingBalance > 0 && monthsElapsed < termRemaining) {
      var interestPayment = remainingBalance * monthlyInterestRate;
      var principalPayment = Math.min(Math.max(0, monthlyPayment - interestPayment + extraPayment), remainingBalance);
      if (principalPayment <= 0) {
        console.warn("Invalid principal payment detected. Stopping calculations.");
        break;
      }
      remainingBalance -= principalPayment;
      totalInterestPaid += interestPayment;
      totalPrincipalPaid += principalPayment;
      monthsElapsed++;
      if (lumpSum > 0 && monthsElapsed === lumpSumMonthIndex) {
        remainingBalance -= lumpSum;
        if (remainingBalance < 0) remainingBalance = 0;
      }
      amortizationSchedule.push({
        month: monthsElapsed,
        principal: principalPayment,
        interest: interestPayment,
        balance: remainingBalance > 0 ? remainingBalance : 0
      });
    }
    if (amortizationSchedule.length === 0) {
      console.error("No amortization data was generated.");
      return {
        schedule: [],
        totalInterestPaid: 0,
        totalPrincipalPaid: 0
      };
    }
    return {
      schedule: amortizationSchedule,
      totalInterestPaid: totalInterestPaid,
      totalPrincipalPaid: totalPrincipalPaid
    };
  }

  // Populate Amortization Table
  function populateAmortizationTable(amortizationData) {
    var tableBody = document.getElementById('amortization-table-body');
    if (!tableBody) {
      console.error("Amortization table body element not found.");
      return;
    }
    tableBody.innerHTML = ''; // Clear existing rows

    var startDate = new Date(); // Get current date
    startDate.setMonth(startDate.getMonth() + 1); // Set first payment to next month

    amortizationData.schedule.forEach(function (row, index) {
      var tr = document.createElement('tr');

      // Format the date for each payment
      var dateCell = document.createElement('td');
      var paymentDate = new Date(startDate);
      paymentDate.setMonth(paymentDate.getMonth() + index);
      dateCell.textContent = paymentDate.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
      });
      tr.appendChild(dateCell);

      // Principal Payment Cell
      var principalCell = document.createElement('td');
      principalCell.textContent = "$".concat(formatter.format(row.principal));
      tr.appendChild(principalCell);

      // Interest Payment Cell
      var interestCell = document.createElement('td');
      interestCell.textContent = "$".concat(formatter.format(row.interest));
      tr.appendChild(interestCell);

      // Remaining Balance Cell (Prevents negative values)
      var balanceCell = document.createElement('td');
      balanceCell.textContent = "$".concat(formatter.format(Math.max(row.balance, 0)));
      tr.appendChild(balanceCell);
      tableBody.appendChild(tr);
    });

    // Display the amortization schedule container
    document.getElementById('amortization-schedule').style.display = 'block';

    // Initialize expand/collapse logic
    initializeExpandCollapseLogic(); // Reinitialize after populating table
  }

  // Initialize Expand Collapse Logic
  function initializeExpandCollapseLogic() {
    var expandBox = document.querySelector(".expand-box");
    var expandText = document.querySelector(".expand-text");
    var expandIcon = document.querySelector(".expand-icon");
    var tableBody = document.getElementById("amortization-table-body");
    var scrollableTbody = document.querySelector(".scrollable-tbody");
    if (!expandBox || !expandText || !tableBody || !scrollableTbody) {
      console.error("Expand/Collapse elements not found.");
      return;
    }
    console.log("Initializing Expand/Collapse Logic");
    var collapsedRows = 5; // Show only the first 5 rows when collapsed
    var isExpanded = false;
    function updateTableView() {
      if (isExpanded) {
        scrollableTbody.classList.add("expanded"); // Enable scrolling
        expandText.textContent = "Collapse";
        expandIcon.style.transform = "rotate(180deg)";
      } else {
        scrollableTbody.classList.remove("expanded"); // Hide extra rows
        expandText.textContent = "Expand";
        expandIcon.style.transform = "rotate(0deg)";
      }
    }

    // Click event to toggle expand/collapse
    expandBox.addEventListener("click", function () {
      isExpanded = !isExpanded;
      updateTableView();
    });

    // Ensure only the first `collapsedRows` are shown initially
    updateTableView();
  }
  function calculateAmortizationSchedule(loanBalance, termRemaining, interestRate, monthlyPayment, extraPayment, lumpSum, lumpDate) {
    console.log("Calculating Amortization Schedule...");
    var monthlyInterestRate = interestRate / 12;
    var remainingBalance = loanBalance;
    var totalInterestPaid = 0;
    var totalPrincipalPaid = 0;
    var monthsElapsed = 0;
    var amortizationSchedule = [];
    var lumpSumMonthIndex = termRemaining + 1; // Default to outside range
    if (lumpDate) {
      var today = new Date();
      var startDate = new Date(today.getFullYear(), today.getMonth(), 1);
      var selectedDate = new Date(lumpDate);
      var monthsDifference = (selectedDate.getFullYear() - startDate.getFullYear()) * 12 + (selectedDate.getMonth() - startDate.getMonth());
      if (monthsDifference >= 0 && monthsDifference < termRemaining) {
        lumpSumMonthIndex = monthsDifference + 1;
      }
    }
    while (remainingBalance > 0 && monthsElapsed < termRemaining) {
      var interestPayment = remainingBalance * monthlyInterestRate;
      var principalPayment = Math.min(Math.max(0, monthlyPayment - interestPayment + extraPayment), remainingBalance);
      if (principalPayment <= 0) {
        console.warn("Invalid principal payment detected. Stopping calculations.");
        break;
      }
      remainingBalance -= principalPayment;
      totalInterestPaid += interestPayment;
      totalPrincipalPaid += principalPayment;
      monthsElapsed++;
      if (lumpSum > 0 && monthsElapsed === lumpSumMonthIndex) {
        remainingBalance -= lumpSum;
        if (remainingBalance < 0) remainingBalance = 0;
        console.log("Applied Lump Sum of ".concat(formatter.format(lumpSum), " on Month ").concat(lumpSumMonthIndex, ", New Balance: ").concat(formatter.format(remainingBalance)));
      }
      amortizationSchedule.push({
        month: monthsElapsed,
        principal: principalPayment,
        interest: interestPayment,
        balance: remainingBalance > 0 ? remainingBalance : 0
      });
    }
    return {
      schedule: amortizationSchedule,
      totalInterestPaid: totalInterestPaid,
      totalPrincipalPaid: totalPrincipalPaid
    };
  }
  var amortizationData = calculateAmortizationSchedule(parseFloat(loanBalanceInput.value) || parseFloat(loanBalanceInput.placeholder) || defaultValues.loanBalance, parseFloat(termRemainingInput.value) || parseFloat(termRemainingInput.placeholder) || defaultValues.termRemaining, (parseFloat(interestRateInput.value) || parseFloat(interestRateInput.placeholder) || defaultValues.interestRate) / 100, parseFloat(monthlyPaymentInput.value) || parseFloat(monthlyPaymentInput.placeholder) || defaultValues.monthlyPayment, parseFloat(extraPaymentInput.value) || parseFloat(extraPaymentInput.placeholder) || defaultValues.extraPayment, parseFloat(lumpSumInput.value) || parseFloat(lumpSumInput.placeholder) || defaultValues.lumpSum, lumpDateInput.value);
  if (amortizationData) {
    populateAmortizationTable(amortizationData);
    initializeExpandCollapseLogic(); // Ensure it runs after the table is filled
  } else {
    console.error("Failed to generate amortization schedule.");
  }
  var amortizationChartCanvas = document.getElementById('amortizationChart');

  // Update Hover Values
  function updateHoverValues(balance, interest, principal) {
    var balanceLabel = document.getElementById('label-balance');
    var interestLabel = document.getElementById('label-interest');
    var principalLabel = document.getElementById('label-principal');
    if (balanceLabel) balanceLabel.textContent = "$".concat(formatter.format(Math.ceil(balance)));
    if (interestLabel) interestLabel.textContent = "$".concat(formatter.format(Math.ceil(interest)));
    if (principalLabel) principalLabel.textContent = "$".concat(formatter.format(Math.ceil(principal)));
    console.log("Hover values updated with rounded values:", {
      balance: Math.ceil(balance),
      interest: Math.ceil(interest),
      principal: Math.ceil(principal)
    });
  }
  var currentHoverIndex = 0; // Default to the first month

  function calculateHoverIndex(x, chartWidth, padding, dataLength) {
    var rawIndex = (x - padding.left) / chartWidth * (dataLength - 1);

    // Ensure rounding bias towards edges for better coverage
    var adjustedIndex = Math.round(rawIndex);
    if (adjustedIndex >= dataLength - 1) {
      return dataLength - 1; // Snap to last index
    }
    return Math.min(Math.max(adjustedIndex, 0), dataLength - 1);
  }
  amortizationChartCanvas.addEventListener('mousemove', function (event) {
    var rect = amortizationChartCanvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var padding = {
      top: 10,
      right: 35,
      bottom: 50,
      left: 50
    };
    var buffer = 10;
    var chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
    if (x >= padding.left - buffer && x <= amortizationChartCanvas.offsetWidth - padding.right + buffer) {
      var index = calculateHoverIndex(x, chartWidth, padding, lastAmortizationData.balanceData.length);
      updateHoverEffects(index);
    }
  });

  // ✅ Prevent touchmove from redrawing the chart
  amortizationChartCanvas.addEventListener('touchmove', function (event) {
    var rect = amortizationChartCanvas.getBoundingClientRect();
    var touch = event.touches[0] || event.changedTouches[0];
    var x = touch.clientX - rect.left;
    var padding = {
      top: 10,
      right: 35,
      bottom: 50,
      left: 50
    };
    var buffer = 10;
    var chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
    if (x >= padding.left - buffer && x <= amortizationChartCanvas.offsetWidth - padding.right + buffer) {
      var index = calculateHoverIndex(x, chartWidth, padding, lastAmortizationData.balanceData.length);
      updateHoverEffects(index);
    }
  });

  // Update Hover Effects
  function updateHoverEffects(index) {
    if (!lastAmortizationData || !lastAmortizationData.balanceData || index >= lastAmortizationData.balanceData.length) {
      console.error("Invalid hover index or amortization data missing.");
      return;
    }

    // ✅ Only update label values, NOT the chart
    updateHoverValues(lastAmortizationData.balanceData[index], lastAmortizationData.cumulativeInterestData[index], lastAmortizationData.cumulativePrincipalData[index]);
    var startDate = new Date();
    var hoverDate = new Date(startDate.setMonth(startDate.getMonth() + index));
    displayHoverDate(hoverDate);

    // ❌ REMOVE: Prevent chart redraw on hover
  }
  amortizationChartCanvas.addEventListener('touchmove', handleTouchEvent, {
    passive: true
  });
  amortizationChartCanvas.addEventListener('touchstart', handleTouchEvent, {
    passive: true
  });
  function handleTouchEvent(event) {
    var rect = amortizationChartCanvas.getBoundingClientRect();
    var touch = event.touches[0] || event.changedTouches[0];
    var x = touch.clientX - rect.left;
    var padding = {
      top: 10,
      right: 35,
      bottom: 50,
      left: 50
    };
    var chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;

    // Calculate index with better coverage across the full chart
    var rawIndex = (x - padding.left) / chartWidth * (lastAmortizationData.balanceData.length - 1);
    var index = Math.min(Math.max(Math.round(rawIndex), 0), lastAmortizationData.balanceData.length - 1);
    if (x >= padding.left && x <= amortizationChartCanvas.offsetWidth - padding.right) {
      currentHoverIndex = index; // Save the current hover index

      updateHoverValues(lastAmortizationData.balanceData[index], lastAmortizationData.cumulativeInterestData[index], lastAmortizationData.cumulativePrincipalData[index]);
      var startDate = new Date();
      var hoverDate = new Date(startDate.setMonth(startDate.getMonth() + index));
      displayHoverDate(hoverDate);
      drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData, lastAmortizationData.cumulativePrincipalData, index);
    } else {
      // Handle touch/mouse events outside the chart bounds if necessary
      drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData, lastAmortizationData.cumulativePrincipalData, currentHoverIndex // Retain the last valid hover index
      );
    }
    event.preventDefault(); // Prevent default scrolling
  }
  function displayHoverDate(date) {
    var hoverDateContainer = document.getElementById('amortizationHoverDate');
    if (!hoverDateContainer) {
      console.error("Hover date container not found.");
      return;
    }
    var month = date.toLocaleString('default', {
      month: 'long'
    }); // Full month name
    var year = date.getFullYear();
    hoverDateContainer.textContent = "".concat(month, " ").concat(year);
  }

  // Event listeners
  updateBtn.addEventListener('click', function () {
    // Track the Google Ads conversion event (commented out)
    // gtag('event', 'conversion', {
    //     'send_to': 'AW-11495710624/WkaLCNPA6_kZEKC_yukq'
    // });

    // Call the existing calculation function
    calculateAndDisplayResults();
  });
  resetBtn.addEventListener('click', resetInputs);
  function resetInputs() {
    // Reset fields to default values from the `defaultValues` object
    loanBalanceInput.value = defaultValues.loanBalance.toFixed(0);
    termRemainingInput.value = defaultValues.termRemaining.toString();
    interestRateInput.value = defaultValues.interestRate.toFixed(2);
    monthlyPaymentInput.value = defaultValues.monthlyPayment.toFixed(2);
    extraPaymentInput.value = defaultValues.extraPayment.toFixed(2);
    lumpSumInput.value = defaultValues.lumpSum.toFixed(0);
    lumpDateInput.value = ''; // Clear lump sum date

    // Recalculate results instead of clearing the chart
    calculateAndDisplayResults();
    console.log("Inputs reset to default values and recalculated.");
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			559: 0,
/******/ 			43: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmonvvo_app"] = self["webpackChunkmonvvo_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [43], () => (__webpack_require__(1899)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=auto-payoff-calculator.e21714b03c4351ba1723.js.map