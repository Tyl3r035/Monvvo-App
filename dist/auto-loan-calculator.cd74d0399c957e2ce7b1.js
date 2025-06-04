/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 848:
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event fired");

  // Inputs for Auto Loan Calculator
  var loanAmountInput = document.getElementById('loan-price'); // Total price of the loan
  var loanTermInput = document.getElementById('loan-term'); // Loan term in months
  var interestRateInput = document.getElementById('interest-rate'); // Annual interest rate
  var downPaymentInput = document.getElementById('down-payment'); // Down payment amount
  var extraPaymentInput = document.getElementById('extra-payment'); // Extra Payment
  var tradeInValueInput = document.getElementById('value-trade-in'); // Trade-in value
  var salesTaxInput = document.getElementById('value-sales-tax'); // Sales tax percentage
  var feesInput = document.getElementById('value-fees'); // Additional fees
  var updateBtn = document.getElementById('update-btn');
  var resetBtn = document.getElementById('reset-btn');
  var autoChartCanvas = document.getElementById('autoChart');

  // Default values
  var defaultValues = {
    loanAmount: 25000,
    // Default loan amount
    loanTerm: 60,
    // Loan term in months
    interestRate: 5.5,
    // Interest rate in percentage
    downPayment: 3000,
    // Down payment amount
    extraPayment: 0,
    // Extra payment amount
    tradeInValue: 2000,
    // Trade-in value
    salesTax: 7.5,
    // Sales tax percentage
    fees: 500 // Additional fees
  };
  tradeInValueInput.value = defaultValues.tradeInValue;
  salesTaxInput.value = defaultValues.salesTax;
  feesInput.value = defaultValues.fees;
  var lastAmortizationData = null;

  // Helper: Format currency
  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  // Function to calculate results
  function calculateAndDisplayResults() {
    // Extract main input values (only updated when the button is clicked)
    var loanAmount = parseFloat(loanAmountInput.value) || defaultValues.loanAmount;
    var loanTerm = parseInt(loanTermInput.value) || defaultValues.loanTerm;
    var interestRate = parseFloat(interestRateInput.value) / 100 || defaultValues.interestRate / 100;
    var downPayment = parseFloat(downPaymentInput.value) || defaultValues.downPayment;
    var extraPayment = parseFloat(extraPaymentInput.value) || defaultValues.extraPayment;

    // Extract dynamic inputs (trade-in value, sales tax, and fees update instantly)
    var tradeInValue = parseFloat(tradeInValueInput.value) || defaultValues.tradeInValue;
    var salesTax = parseFloat(salesTaxInput.value) / 100 || defaultValues.salesTax / 100;
    var fees = parseFloat(feesInput.value) || defaultValues.fees;
    console.log("Calculation Triggered with Values:", {
      loanAmount: loanAmount,
      loanTerm: loanTerm,
      interestRate: interestRate,
      downPayment: downPayment,
      extraPayment: extraPayment,
      tradeInValue: tradeInValue,
      salesTax: salesTax,
      fees: fees
    });

    // ✅ Correctly calculate principal (loan balance)
    var principal = loanAmount - downPayment - tradeInValue + fees + loanAmount * salesTax;
    if (principal <= 0) {
      console.warn("Calculated principal is zero or negative. Adjusting to minimum of $1.");
      principal = 1; // Prevents invalid calculations
    }
    console.log("Calculated Principal:", principal);

    // ✅ Calculate Monthly Interest Rate
    var monthlyInterestRate = interestRate / 12;
    console.log("Monthly Interest Rate:", monthlyInterestRate);

    // ✅ Fix Monthly Payment Calculation
    var monthlyPayment = 0;
    if (loanTerm > 0) {
      if (monthlyInterestRate > 0) {
        // Standard formula for loans with interest
        monthlyPayment = principal * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
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
    var totalMonthlyPayment = monthlyPayment + extraPayment;
    console.log("Total Monthly Payment:", totalMonthlyPayment);
    if (isNaN(totalMonthlyPayment) || totalMonthlyPayment <= 0) {
      console.warn("Invalid total monthly payment. Adjusting to minimum of $1.");
      totalMonthlyPayment = 1;
    }

    // ✅ Update Chart Labels
    updateChartLabels(totalMonthlyPayment, monthlyPayment, extraPayment);

    // ✅ Update Payment Breakdown Chart
    updateDoughnutChart(autoChartCanvas, totalMonthlyPayment, monthlyPayment, extraPayment);

    // ✅ Update Amortization Schedule
    lastAmortizationData = calculateAmortizationSchedule();
    if (!lastAmortizationData || !lastAmortizationData.schedule || lastAmortizationData.schedule.length === 0) {
      console.error("No valid amortization schedule generated.");
      lastAmortizationData = {
        schedule: [],
        totalInterestPaid: 0,
        totalPrincipalPaid: 0,
        balanceData: [],
        cumulativeInterestData: [],
        cumulativePrincipalData: []
      };
    } else {
      console.error("Failed to generate amortization schedule.");
    }
  }
  calculateAndDisplayResults();
  function updateChartLabels(totalMonthlyPayment, monthlyPayment, extraPayment) {
    var labelPrincipalInterest = document.getElementById('value-principal-interest');
    var labelExtraPayment = document.getElementById('value-extra-payment');
    if (labelPrincipalInterest) {
      labelPrincipalInterest.textContent = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      }).format(monthlyPayment);
    }
    if (labelExtraPayment) {
      labelExtraPayment.textContent = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      }).format(extraPayment);
    }
    console.log("Chart labels updated:", {
      monthlyPayment: monthlyPayment,
      extraPayment: extraPayment
    });
  }

  // Doughnut Chart
  function updateDoughnutChart(autoChartCanvas, totalMonthlyPayment, monthlyPayment, extraPayment) {
    if (!autoChartCanvas) {
      console.error("Canvas element not found.");
      return;
    }
    var ctx = autoChartCanvas.getContext('2d');
    var size = 400; // Canvas size

    // Set canvas size
    autoChartCanvas.width = size;
    autoChartCanvas.height = size;

    // Ensure the correct auto loan breakdown components
    var principalAndInterest = isNaN(monthlyPayment) ? 0 : monthlyPayment;
    var extraPaymentComponent = isNaN(extraPayment) ? 0 : extraPayment;
    var data = [principalAndInterest, extraPaymentComponent];
    console.log("Chart Data:", data);
    if (data.some(function (value) {
      return isNaN(value) || value < 0;
    })) {
      console.error("Invalid data for chart:", data);
      return;
    }
    var colors = ['#175134', '#3EB721']; // Colors for chart
    var total = data.reduce(function (a, b) {
      return a + b;
    }, 0);
    if (total <= 0) {
      console.error("Total value for chart is zero or negative.");
      return;
    }

    // Formatter to add commas to the total
    var formattedTotal = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0 // No decimals for simplicity
    }).format(total);

    // Clear the canvas
    ctx.clearRect(0, 0, size, size);
    var outerRadius = size / 2;
    var innerRadius = outerRadius - 70;
    var centerX = size / 2;
    var centerY = size / 2;
    var gapWidth = 5;
    var startAngle = -Math.PI / 2;
    data.forEach(function (value, index) {
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

    // Responsive font size for the total amount in the center
    var fontSize = size / 7;
    ctx.font = "bold ".concat(fontSize, "px Roboto");
    ctx.fillStyle = '#232525';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(formattedTotal, centerX, centerY);
    console.log("Doughnut chart updated successfully.");
  }

  // ShowTab Function
  function showTab(tabName) {
    var paymentBreakdownContent = document.getElementById('payment-breakdown-content');
    var amortizationScheduleContent = document.getElementById('amortization-schedule-content');

    // Hide both sections first
    paymentBreakdownContent.style.display = 'none';
    amortizationScheduleContent.style.display = 'none';
    if (tabName === 'payment-breakdown') {
      console.log("Switching to Payment Breakdown tab");
      paymentBreakdownContent.style.display = 'block';
      calculateAndDisplayResults(); // Ensure charts update immediately
    } else if (tabName === 'amortization-schedule') {
      console.log("Switching to Amortization Schedule tab");

      // Ensure amortization data is available
      if (!lastAmortizationData || !lastAmortizationData.schedule || lastAmortizationData.schedule.length === 0) {
        console.log("Amortization data missing. Recalculating...");
        calculateAndDisplayResults(); // Ensure it calculates automatically
      }

      // Ensure canvas is cleared before drawing new chart
      var _amortizationChartCanvas = document.getElementById('amortizationChart');
      if (_amortizationChartCanvas) {
        var ctx = _amortizationChartCanvas.getContext('2d');
        ctx.clearRect(0, 0, _amortizationChartCanvas.width, _amortizationChartCanvas.height);
      }

      // ✅ Force immediate chart update after the DOM updates
      setTimeout(function () {
        drawAmortizationChart(lastAmortizationData.schedule.map(function (row) {
          return row.balance;
        }), lastAmortizationData.schedule.map(function (row) {
          return row.interest;
        }), lastAmortizationData.schedule.map(function (row) {
          return row.principal;
        }));
        updateAmortizationLabels(lastAmortizationData.totalInterestPaid || 0, lastAmortizationData.totalPrincipalPaid || 0, parseFloat(loanBalanceInput.value) || defaultValues.loanBalance);
        console.log("Amortization chart updated immediately after switching tabs.");
      }, 50); // Small delay allows the browser to render the canvas update

      amortizationScheduleContent.style.display = 'block';
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

  // Amortization Chart
  function drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData) {
    var hoverIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var canvas = document.getElementById('amortizationChart');
    if (!canvas) {
      console.error("Amortization chart canvas not found.");
      return;
    }
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;

    // Adjust canvas dimensions dynamically
    var isSmallScreen = window.innerWidth < 700;
    var canvasHeight = isSmallScreen ? 220 : 320;

    // ✅ Use `clientWidth` to prevent excess padding affecting width
    canvas.width = Math.floor(canvas.parentElement.clientWidth * dpr);
    canvas.height = canvasHeight * dpr;
    ctx.scale(dpr, dpr);
    var width = canvas.width / dpr;
    var height = canvas.height / dpr;

    // ✅ Adjust padding to keep the right edge inside the chart
    var padding = {
      top: 10,
      right: 15,
      bottom: 50,
      left: 55
    }; // Reduced right padding to 10px

    var gridColor = '#d0d0d0';
    var labelColor = '#505050';

    // Get max Y value for scaling (round up to nearest 10K)
    var yAxisMax = Math.ceil(Math.max.apply(Math, _toConsumableArray(balanceData).concat(_toConsumableArray(cumulativeInterestData), _toConsumableArray(cumulativePrincipalData))) / 10000) * 10000;
    function getY(value) {
      return height - padding.bottom - value / yAxisMax * (height - padding.top - padding.bottom);
    }

    // ✅ Ensure the last point aligns exactly with the right edge
    function getX(index) {
      return padding.left + index / (balanceData.length - 1) * (width - padding.left - padding.right);
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Y-axis grid lines and labels
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

    // Draw X-axis grid lines (Years)
    ctx.textAlign = 'center';
    var months = balanceData.length;
    var years = Math.floor(months / 12);
    for (var _i = 0; _i <= years; _i++) {
      var monthIndex = _i * 12;
      var x = getX(monthIndex);

      // ✅ Ensure the last year label aligns properly with the right border
      if (_i === years) x = width - padding.right - 2; // Shift it slightly left to prevent overflow

      var yearLabel = new Date().getFullYear() + _i;

      // Grid line
      ctx.beginPath();
      ctx.moveTo(x, padding.top);
      ctx.lineTo(x, height - padding.bottom);
      ctx.stroke();

      // X-axis labels
      ctx.fillText(yearLabel, x, height - 10);
    }

    // Draw amortization data lines
    function drawLine(data, color) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (var _i2 = 0; _i2 < data.length; _i2++) {
        var _x = getX(_i2);
        var _y = getY(Math.max(0, data[_i2])); // Ensure no negative values
        if (_i2 === 0) ctx.moveTo(_x, _y);else ctx.lineTo(_x, _y);
      }
      ctx.stroke();
    }
    drawLine(balanceData, '#175134'); // Balance
    drawLine(cumulativePrincipalData, '#3EB721'); // Principal Paid
    drawLine(cumulativeInterestData, '#91BBA6'); // Interest Paid

    // Always draw the hover effect
    var hoverX = getX(hoverIndex);
    var balanceY = getY(balanceData[hoverIndex]);
    var principalY = getY(cumulativePrincipalData[hoverIndex]);
    var interestY = getY(cumulativeInterestData[hoverIndex]);

    // Draw vertical hover line
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(hoverX, padding.top);
    ctx.lineTo(hoverX, height - padding.bottom);
    ctx.stroke();

    // Draw hover dots
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

  // Amortization Schedule
  function calculateAmortizationSchedule() {
    console.log("Calculating Amortization Schedule...");

    // Extract input values or use defaults
    var loanAmount = parseFloat(loanAmountInput.value) || defaultValues.loanAmount;
    var loanTerm = parseInt(loanTermInput.value) || defaultValues.loanTerm;
    var interestRate = (parseFloat(interestRateInput.value) || defaultValues.interestRate) / 100;
    var downPayment = parseFloat(downPaymentInput.value) || defaultValues.downPayment;
    var extraPayment = parseFloat(extraPaymentInput.value) || defaultValues.extraPayment;
    var tradeInValue = parseFloat(tradeInValueInput.value) || defaultValues.tradeInValue;
    var salesTax = (parseFloat(salesTaxInput.value) || defaultValues.salesTax) / 100;
    var fees = parseFloat(feesInput.value) || defaultValues.fees;

    // Calculate loan principal
    var principal = loanAmount - downPayment - tradeInValue + fees + loanAmount * salesTax;
    if (principal <= 0) {
      console.warn("Calculated principal is zero or negative. Adjusting to minimum of $1.");
      principal = 1;
    }
    var monthlyInterestRate = interestRate / 12;
    var monthlyPayment = 0;
    if (loanTerm > 0) {
      if (monthlyInterestRate > 0) {
        monthlyPayment = principal * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
      } else {
        monthlyPayment = principal / loanTerm;
      }
    }
    var schedule = [];
    var totalInterestPaid = 0;
    var totalPrincipalPaid = 0;
    var balance = principal;
    var balanceData = [];
    var cumulativeInterestData = [];
    var cumulativePrincipalData = [];
    for (var i = 0; i < loanTerm; i++) {
      var interestPayment = balance * monthlyInterestRate;
      var principalPayment = Math.min(monthlyPayment + extraPayment - interestPayment, balance);
      balance -= principalPayment;
      totalInterestPaid += interestPayment;
      totalPrincipalPaid += principalPayment;
      schedule.push({
        month: i + 1,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(balance, 0)
      });
      balanceData.push(Math.max(0, balance));
      cumulativeInterestData.push(totalInterestPaid);
      cumulativePrincipalData.push(totalPrincipalPaid);
      if (balance <= 0) break; // Stop if loan is paid off early
    }
    return {
      schedule: schedule,
      totalInterestPaid: totalInterestPaid,
      totalPrincipalPaid: totalPrincipalPaid,
      balanceData: balanceData,
      cumulativeInterestData: cumulativeInterestData,
      cumulativePrincipalData: cumulativePrincipalData
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
  var amortizationData = calculateAmortizationSchedule(); // Ensure data is generated
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
    var buffer = 10; // Extend sensitivity by 10px
    var chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
    if (x >= padding.left - buffer && x <= amortizationChartCanvas.offsetWidth - padding.right + buffer) {
      var index = calculateHoverIndex(x, chartWidth, padding, lastAmortizationData.balanceData.length);
      updateHoverEffects(index);
    }
  });
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
    var buffer = 10; // Extend sensitivity by 10px
    var chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
    if (x >= padding.left - buffer && x <= amortizationChartCanvas.offsetWidth - padding.right + buffer) {
      var index = calculateHoverIndex(x, chartWidth, padding, lastAmortizationData.balanceData.length);
      updateHoverEffects(index);
    }
  });

  // Update Hover Effects
  function updateHoverEffects(index) {
    if (!lastAmortizationData || !lastAmortizationData.balanceData || !lastAmortizationData.cumulativeInterestData || !lastAmortizationData.cumulativePrincipalData || lastAmortizationData.balanceData.length === 0) {
      console.error("Amortization data is not available for hover effects.");
      return;
    }
    if (index < 0 || index >= lastAmortizationData.balanceData.length) {
      console.warn("Invalid hover index:", index);
      return;
    }
    currentHoverIndex = index; // Save the current hover index
    updateHoverValues(lastAmortizationData.balanceData[index] || 0, lastAmortizationData.cumulativeInterestData[index] || 0, lastAmortizationData.cumulativePrincipalData[index] || 0);
    var startDate = new Date();
    var hoverDate = new Date(startDate.setMonth(startDate.getMonth() + index));
    displayHoverDate(hoverDate);
    drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData, lastAmortizationData.cumulativePrincipalData, index);
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
  function updateAmortizationLabels(totalInterestPaid, totalPrincipalPaid, totalAmountPaid) {
    var _lastAmortizationData;
    var labelsContainer = document.getElementById('amortizationLabels');
    if (!labelsContainer) {
      console.error("Amortization labels container not found.");
      return;
    }

    // Use the first month's balance as the default remaining balance
    var initialBalance = ((_lastAmortizationData = lastAmortizationData) === null || _lastAmortizationData === void 0 ? void 0 : _lastAmortizationData.balanceData[0]) || 0;

    // Use 0 as fallback if any value is NaN or undefined
    totalInterestPaid = isNaN(totalInterestPaid) ? 0 : Math.ceil(totalInterestPaid);
    totalPrincipalPaid = isNaN(totalPrincipalPaid) ? 0 : Math.ceil(totalPrincipalPaid);
    totalAmountPaid = isNaN(totalAmountPaid) ? 0 : Math.ceil(totalAmountPaid);

    // Render the static labels
    labelsContainer.innerHTML = "\n            <div class=\"label-item\">\n                <span class=\"color-circle\" style=\"background-color: #175134;\"></span>\n                <span class=\"label-name\">Remaining Balance</span>\n                <span class=\"label-value\" id=\"label-balance\">$".concat(formatter.format(initialBalance), "</span>\n            </div>\n            <div class=\"label-item\">\n                <span class=\"color-circle\" style=\"background-color: #91BBA6;\"></span>\n                <span class=\"label-name\">Total Interest Paid</span>\n                <span class=\"label-value\" id=\"label-interest\">$").concat(formatter.format(totalInterestPaid), "</span>\n            </div>\n            <div class=\"label-item\">\n                <span class=\"color-circle\" style=\"background-color: #3EB721;\"></span>\n                <span class=\"label-name\">Total Principal Paid</span>\n                <span class=\"label-value\" id=\"label-principal\">$").concat(formatter.format(totalPrincipalPaid), "</span>\n            </div>\n        ");
    console.log("Amortization labels updated with initial balance and totals:", {
      initialBalance: initialBalance,
      totalInterestPaid: totalInterestPaid,
      totalPrincipalPaid: totalPrincipalPaid,
      totalAmountPaid: totalAmountPaid
    });
  }

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
/******/ 			466: 0,
/******/ 			669: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [669], () => (__webpack_require__(848)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=auto-loan-calculator.cd74d0399c957e2ce7b1.js.map