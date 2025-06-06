/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 6426:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/jspdf/dist/jspdf.es.min.js + 1 modules
var jspdf_es_min = __webpack_require__(1355);
// EXTERNAL MODULE: ./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js
var jspdf_plugin_autotable = __webpack_require__(9170);
;// ./public/js/pdf/mortgage-pdf.js
 // Add this at the top
 // Ensure this is also imported for table generation

function generateMortgagePdf(paymentData, amortizationData) {
  var doc = new jspdf_es_min["default"]();

  // Styles
  var colors = {
    navyBlue: "#1C2939",
    forestGreen: "#175134",
    lightGreen2: "#91BBA6",
    white: "#FFFFFF",
    black: "#232525"
  };
  try {
    // Add Logo with Responsive Height
    var logoPath = "./img/logos/monvvo-logo.png"; // Relative path to your logo
    var logoX = 14; // X position
    var logoY = 10; // Y position
    var logoWidth = 40; // Desired width in mm
    var logoAspectRatio = 6.625; // Aspect ratio (width/height)

    if (logoAspectRatio <= 0) throw new Error("Invalid aspect ratio");
    var logoHeight = logoWidth / logoAspectRatio;

    // Add the logo to the PDF
    doc.addImage(logoPath, "PNG", logoX, logoY, logoWidth, logoHeight);
  } catch (error) {
    console.error("Error adding logo to PDF:", error);
  }

  // Adjust Title Section Position
  var titleY = 10 + 40 / 6.625 + 15; // Adjust dynamically based on logo height
  doc.setFont("serif", "bold");
  doc.setTextColor(colors.black); // Ensure the title text is black
  doc.setFontSize(20);
  doc.text("Monvvo Mortgage Calculation Report", 14, titleY);

  // Subheader Section
  doc.setFontSize(12);
  doc.setFont("sans-serif", "normal");
  doc.setTextColor(colors.forestGreen); // Subheader remains green
  var subheaderY = titleY + 8;
  doc.text("Your Trusted Tool in Precision Calculation", 14, subheaderY);

  // Disclaimer Section
  var disclaimerText = "Actual mortgage amount may vary. This is only an estimate.";
  var disclaimerY = subheaderY + 10;
  doc.setFontSize(10);
  doc.setFont("sans-serif", "italic");
  doc.setTextColor(colors.black);

  // Add disclaimer text as regular text (not a link)
  doc.text(disclaimerText, 14, disclaimerY);
  // Payment Details Section
  doc.setTextColor(colors.black);
  doc.setFontSize(14);
  doc.setFont("serif", "bold");
  var paymentDetailsY = disclaimerY + 10;
  doc.text("Payment Details", 14, paymentDetailsY);
  var paymentDetails = paymentData.map(function (item) {
    return [item.label, "".concat(item.value.toLocaleString())];
  });
  doc.autoTable({
    startY: paymentDetailsY + 5,
    head: [[{
      content: "Detail",
      styles: {
        fillColor: colors.forestGreen,
        textColor: colors.white,
        fontStyle: "sans-serif"
      }
    }, {
      content: "Value",
      styles: {
        fillColor: colors.forestGreen,
        textColor: colors.white,
        fontStyle: "sans-serif"
      }
    }]],
    body: paymentDetails,
    styles: {
      fontStyle: "sans-serif"
    }
  });

  // Amortization Schedule Section
  doc.setFontSize(14);
  doc.setFont("serif", "bold");
  doc.setTextColor(colors.black);
  var amortizationY = doc.lastAutoTable.finalY + 10;
  doc.text("Amortization Schedule", 14, amortizationY);
  var amortizationDetails = amortizationData.map(function (row, index) {
    return [index + 1,
    // Month
    row.date, // Date
    "$".concat(Number(row.principal).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })), // Principal
    "$".concat(Number(row.interest).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })), // Interest
    "$".concat(Number(row.balance).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })) // Remaining Balance
    ];
  });
  doc.autoTable({
    startY: amortizationY + 5,
    head: [[{
      content: "Month",
      styles: {
        fillColor: colors.forestGreen,
        textColor: colors.white,
        fontStyle: "sans-serif"
      }
    }, {
      content: "Date",
      styles: {
        fillColor: colors.forestGreen,
        textColor: colors.white,
        fontStyle: "sans-serif"
      }
    }, {
      content: "Principal",
      styles: {
        fillColor: colors.forestGreen,
        textColor: colors.white,
        fontStyle: "sans-serif"
      }
    }, {
      content: "Interest",
      styles: {
        fillColor: colors.forestGreen,
        textColor: colors.white,
        fontStyle: "sans-serif"
      }
    }, {
      content: "Remaining Balance",
      styles: {
        fillColor: colors.forestGreen,
        textColor: colors.white,
        fontStyle: "sans-serif"
      }
    }]],
    body: amortizationDetails,
    styles: {
      fontStyle: "sans-serif"
    }
  });

  // Footer
  var pageHeight = doc.internal.pageSize.height;
  doc.setFillColor(colors.navyBlue);
  doc.rect(0, pageHeight - 20, doc.internal.pageSize.width, 20, "F");
  doc.setTextColor(colors.white);
  doc.setFontSize(10);
  doc.setFont("sans-serif", "normal");
  doc.text("2024, Monvvo | Trusted Tool in Precision Calculation", 14, pageHeight - 8);

  // Save the PDF
  doc.save("Monvvo_Mortgage_Report.pdf");
}
;// ./public/js/mortgage-calculator.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event fired");

  // Inputs
  var homePriceInput = document.getElementById('home-price');
  var downPaymentAmountInput = document.getElementById('down-payment-amount');
  var downPaymentPercentageInput = document.getElementById('down-payment-percentage');
  var loanTermInput = document.getElementById('loan-term');
  var interestRateInput = document.getElementById('interest-rate');
  var extraPaymentInput = document.getElementById('extra-payment');
  var propertyTaxInput = document.getElementById('value-property-tax');
  var pmiExpenseInput = document.getElementById('value-pmi');
  var hoaExpenseInput = document.getElementById('value-hoa');
  var updateBtn = document.getElementById('update-btn');
  var resetBtn = document.getElementById('reset-btn');
  var mortgageChartCanvas = document.getElementById('mortgageChart');
  var amortizationChartCanvas = document.getElementById('amortizationChart');
  var defaultValues = {
    homePrice: 500000,
    downPaymentAmount: 25000,
    downPaymentPercentage: 5,
    loanTerm: 30,
    interestRate: 7.04,
    propertyTax: 250,
    extraPayment: 0,
    pmiExpense: 200,
    hoaExpense: 0
  };
  propertyTaxInput.value = defaultValues.propertyTax;
  pmiExpenseInput.value = defaultValues.pmiExpense;
  hoaExpenseInput.value = defaultValues.hoaExpense;
  var lastAmortizationData = null;

  // Helper: Format currency
  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  // Restrict invalid characters in inputs
  var inputsToRestrict = [homePriceInput, downPaymentAmountInput, downPaymentPercentageInput, loanTermInput, interestRateInput, propertyTaxInput, pmiExpenseInput, hoaExpenseInput];
  inputsToRestrict.forEach(function (input) {
    input.addEventListener('keydown', function (event) {
      if (event.key === "-" || event.key === "e") {
        event.preventDefault();
      }
    });
  });
  adjustPMI(defaultValues.homePrice, defaultValues.downPaymentPercentage);
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");

    // Existing initialization code...

    // Calculate PMI based on default values and update the input
    var calculatedPMI = adjustPMI(defaultValues.homePrice, defaultValues.downPaymentPercentage);
    pmiExpenseInput.value = calculatedPMI.toLocaleString(); // Dynamically set PMI
  });

  //Adjust PMI 
  function adjustPMI(homePrice, downPaymentPercentage) {
    var pmiThreshold = 20; // PMI applies for down payments < 20%
    if (downPaymentPercentage >= pmiThreshold) {
      pmiExpenseInput.value = "0"; // Set PMI to 0 if no PMI is required
      return 0; // No PMI if down payment >= 20%
    }
    var loanAmount = homePrice - downPaymentPercentage / 100 * homePrice;
    var annualPMIRate = 0.005; // Example PMI rate (0.5% annually)
    var monthlyPMI = loanAmount * annualPMIRate / 12;
    var roundedPMI = Math.ceil(monthlyPMI); // Round up to nearest dollar
    pmiExpenseInput.value = roundedPMI.toLocaleString(); // Update the input value
    return roundedPMI;
  }

  // Update dependent inputs and handle PMI logic
  downPaymentAmountInput.addEventListener('input', function () {
    var homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice;
    var downPaymentAmount = parseFloat(downPaymentAmountInput.value) || 0;
    var downPaymentPercentage = downPaymentAmount / homePrice * 100;
    downPaymentPercentageInput.value = downPaymentPercentage.toFixed(2);

    // Adjust PMI if not manually updated
    adjustPMI(homePrice, downPaymentPercentage);
  });
  downPaymentPercentageInput.addEventListener('input', function () {
    var homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice;
    var downPaymentPercentage = parseFloat(downPaymentPercentageInput.value) || 0;
    var downPaymentAmount = downPaymentPercentage / 100 * homePrice;
    downPaymentAmountInput.value = downPaymentAmount.toFixed(2);

    // Adjust PMI if not manually updated
    adjustPMI(homePrice, downPaymentPercentage);
  });
  homePriceInput.addEventListener('input', function () {
    var homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice; // Get the updated home price
    var downPaymentAmount = parseFloat(downPaymentAmountInput.value) || defaultValues.downPaymentAmount; // Default to $25,000 if empty

    // Calculate and update the down payment percentage
    var downPaymentPercentage = downPaymentAmount / homePrice * 100;
    downPaymentPercentageInput.value = downPaymentPercentage.toFixed(2);

    // Optional: Adjust PMI dynamically here if necessary
    adjustPMI(homePrice, downPaymentPercentage);
  });
  function calculateAndDisplayResults() {
    console.log("Calculating and displaying results...");
    var homePrice = parseFloat(document.getElementById('home-price').value.replace(/,/g, '')) || defaultValues.homePrice;
    var downPaymentAmount = parseFloat(document.getElementById('down-payment-amount').value.replace(/,/g, '')) || defaultValues.downPaymentAmount;
    var downPaymentPercentage = downPaymentAmount / homePrice * 100;
    if (downPaymentAmount >= homePrice) {
      console.warn("Down payment is 100% or more of the home price. Calculation skipped.");
      alert("Your down payment exceeds or equals the home price. Please adjust your inputs.");
      return;
    }
    var loanTerm = parseInt(document.getElementById('loan-term').value, 10) || defaultValues.loanTerm;
    var interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 || defaultValues.interestRate / 100;
    var extraPayment = parseFloat(document.getElementById('extra-payment').value.replace(/,/g, '')) || defaultValues.extraPayment;
    var propertyTax = parseFloat(document.getElementById('value-property-tax').value.replace(/,/g, '')) || 0;
    var pmiExpense = parseFloat(document.getElementById('value-pmi').value.replace(/,/g, '')) || 0;
    var hoaExpense = parseFloat(document.getElementById('value-hoa').value.replace(/,/g, '')) || 0;
    console.log("Inputs:", {
      homePrice: homePrice,
      downPaymentAmount: downPaymentAmount,
      loanTerm: loanTerm,
      interestRate: interestRate,
      extraPayment: extraPayment,
      propertyTax: propertyTax,
      pmiExpense: pmiExpense,
      hoaExpense: hoaExpense
    });
    var principal = homePrice - downPaymentAmount;
    var amortizationData = calculateAmortizationSchedule(principal, interestRate, loanTerm * 12, extraPayment);
    console.log("Generated amortization data:", amortizationData);
    if (!amortizationData || !amortizationData.schedule.length) {
      console.error("Invalid amortization data. Calculation aborted.");
      return;
    }
    lastAmortizationData = _objectSpread(_objectSpread({}, amortizationData), {}, {
      periodicPrincipalAndInterest: Math.ceil(amortizationData.schedule[0].principal + amortizationData.schedule[0].interest)
    });
    console.log("Updated lastAmortizationData:", lastAmortizationData);
    var monthlyPrincipalAndInterest = lastAmortizationData.periodicPrincipalAndInterest;
    updateDoughnutChart(monthlyPrincipalAndInterest, propertyTax, pmiExpense, hoaExpense);
    updateAmortizationLabels(Math.ceil(amortizationData.totalInterestPaid), Math.ceil(amortizationData.totalPrincipalPaid), Math.ceil(amortizationData.schedule.reduce(function (sum, row) {
      return sum + row.principal + row.interest;
    }, 0)));
    drawAmortizationChart(amortizationData.balanceData, amortizationData.cumulativeInterestData, amortizationData.cumulativePrincipalData, 0);
    populateAmortizationTable(lastAmortizationData);
    var firstMonthDate = new Date();
    displayHoverDate(firstMonthDate);
    console.log("Results calculated and displayed.");
  }

  // Add listeners to chart label inputs to dynamically update chart
  ['value-property-tax', 'value-pmi', 'value-hoa'].forEach(function (id) {
    var input = document.getElementById(id);
    if (input) {
      input.addEventListener('input', function () {
        input.setAttribute('data-manual', 'true'); // Mark as manually updated
        calculateAndDisplayResults(); // Recalculate results
      });
    }
  });

  // Amortization chart
  function drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData) {
    var hoverIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var canvas = document.getElementById('amortizationChart');
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;

    // Adjust canvas dimensions dynamically
    var isSmallScreen = window.innerWidth < 700;
    var canvasHeight = isSmallScreen ? 200 : 300;
    canvas.width = canvas.parentElement.offsetWidth * dpr;
    canvas.height = canvasHeight * dpr;
    ctx.scale(dpr, dpr);
    var width = canvas.width / dpr;
    var height = canvas.height / dpr;

    // Adjust padding to prevent overlap
    var padding = {
      top: 10,
      right: 35,
      bottom: 50,
      left: 50
    };
    var gridColor = '#d0d0d0';
    var labelColor = '#505050';
    var yAxisMax = Math.ceil(Math.max.apply(Math, _toConsumableArray(balanceData).concat(_toConsumableArray(cumulativeInterestData), _toConsumableArray(cumulativePrincipalData))) / 100000) * 100000;
    function getY(value) {
      return height - padding.bottom - value / yAxisMax * (height - padding.top - padding.bottom);
    }
    function getX(index) {
      return padding.left + index / (balanceData.length - 1) * (width - padding.left - padding.right);
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw horizontal grid lines (Y-axis) and labels
    ctx.font = '14px Roboto';
    ctx.textAlign = 'right';
    // ctx.fillStyle = labelColor;
    ctx.fillStyle = '#232525';
    ctx.strokeStyle = gridColor;
    for (var i = 0; i <= yAxisMax; i += 100000) {
      var y = getY(i);

      // Grid line
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();

      // Y-axis label (place left of padding)
      ctx.fillText("$".concat((i / 1000).toFixed(0), "K"), padding.left - 10, y + 5);
    }

    // Draw vertical grid lines (X-axis) every 5 years
    var months = balanceData.length;
    var years = Math.floor(months / 12);
    ctx.textAlign = 'center';
    for (var _i = 0; _i <= years; _i += 5) {
      var monthIndex = _i * 12;
      var _x = getX(monthIndex);
      var yearLabel = new Date().getFullYear() + _i;

      // Grid line
      ctx.beginPath();
      ctx.moveTo(_x, padding.top);
      ctx.lineTo(_x, height - padding.bottom);
      ctx.stroke();

      // X-axis label (place below padding)
      ctx.fillText(yearLabel, _x, height - 10);
    }

    // Draw data lines
    function drawLine(data, color) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (var _i2 = 0; _i2 < data.length; _i2++) {
        var _x2 = getX(_i2);
        var _y = getY(data[_i2]);
        if (_i2 === 0) ctx.moveTo(_x2, _y);else ctx.lineTo(_x2, _y);
      }
      ctx.stroke();
    }
    drawLine(balanceData, '#175134'); // Balance line
    drawLine(cumulativePrincipalData, '#3EB721'); // Principal line
    drawLine(cumulativeInterestData, '#91BBA6'); // Interest line

    // Always draw the vertical line at hoverIndex
    var x = getX(hoverIndex);
    var balanceY = getY(balanceData[hoverIndex]);
    var principalY = getY(cumulativePrincipalData[hoverIndex]);
    var interestY = getY(cumulativeInterestData[hoverIndex]);

    // Draw vertical line
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x, padding.top);
    ctx.lineTo(x, height - padding.bottom);
    ctx.stroke();

    // Draw hover dots
    var dotRadius = 6;
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
  }

  // Doughnut Chart
  function updateDoughnutChart(principalAndInterest, propertyTax, pmi, hoa) {
    var ctx = mortgageChartCanvas.getContext('2d');
    var size = 400; // Canvas size

    // Set canvas size
    mortgageChartCanvas.width = size;
    mortgageChartCanvas.height = size;
    var data = [principalAndInterest, propertyTax, pmi, hoa];
    var colors = ['#175134', '#3EB721', '#91BBA6', '#B3D4C2'];
    var total = data.reduce(function (a, b) {
      return a + b;
    }, 0);

    // Formatter to add commas to the total
    var formattedTotal = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0 // No decimals for simplicity
    }).format(total);

    // Clear the canvas
    ctx.clearRect(0, 0, size, size);
    var outerRadius = size / 2; // Outer radius of the doughnut
    var innerRadius = outerRadius - 70; // Inner radius of the doughnut
    var centerX = size / 2; // Center X
    var centerY = size / 2; // Center Y
    var gapWidth = 5; // Width of the gap between segments

    var startAngle = -Math.PI / 2; // Start at the top

    // Draw each segment of the doughnut
    data.forEach(function (value, index) {
      var segmentAngle = value / total * Math.PI * 2;
      var endAngle = startAngle + segmentAngle;

      // Draw the segment
      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
      ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
      ctx.closePath();

      // Fill with the segment color
      ctx.fillStyle = colors[index];
      ctx.fill();

      // Add spacing (stroke)
      ctx.strokeStyle = 'white'; // Color of the gap
      ctx.lineWidth = gapWidth;
      ctx.stroke();

      // Update the start angle for the next segment
      startAngle = endAngle;
    });

    // Responsive font size for the total amount in the center
    var fontSize = size / 7; // Adjust ratio for desired responsiveness
    ctx.font = "bold ".concat(fontSize, "px Roboto");
    ctx.fillStyle = '#232525'; // Text color
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw total amount in the center
    ctx.fillText(formattedTotal, centerX, centerY);

    // Update labels dynamically
    updateChartLabels(principalAndInterest, propertyTax, pmi, hoa);
    console.log("Doughnut chart updated with formatted total price and labels.");
  }

  //Chart Labels
  function updateChartLabels(principalAndInterest, propertyTax, pmi, hoa) {
    // Update Principal & Interest
    var principalValueElement = document.getElementById('value-principal-interest');
    if (principalValueElement) {
      principalValueElement.textContent = "$".concat(Math.ceil(principalAndInterest).toLocaleString());
    }

    // Update Property Tax, PMI, and HOA only if not manually overridden
    var inputs = [{
      id: 'value-property-tax',
      value: propertyTax
    }, {
      id: 'value-pmi',
      value: pmi
    }, {
      id: 'value-hoa',
      value: hoa
    }];
    inputs.forEach(function (_ref) {
      var id = _ref.id,
        value = _ref.value;
      var input = document.getElementById(id);
      if (input && !input.hasAttribute('data-manual')) {
        input.value = Math.ceil(value).toLocaleString();
      }
    });
  }

  // Reset functionality
  function resetInputs() {
    // Clear and reset all inputs to their default values
    var homePrice = defaultValues.homePrice;
    var downPaymentPercentage = defaultValues.downPaymentPercentage;

    // Reset fields to default values
    homePriceInput.value = Math.ceil(homePrice).toLocaleString();
    downPaymentPercentageInput.value = Math.ceil(downPaymentPercentage).toString();
    var downPaymentAmount = Math.ceil(downPaymentPercentage / 100 * homePrice);
    downPaymentAmountInput.value = downPaymentAmount.toLocaleString();
    loanTermInput.value = defaultValues.loanTerm.toString();
    interestRateInput.value = defaultValues.interestRate.toFixed(2);
    extraPaymentInput.value = defaultValues.extraPayment.toString();
    propertyTaxInput.value = Math.ceil(defaultValues.propertyTax).toString();
    hoaExpenseInput.value = Math.ceil(defaultValues.hoaExpense).toString();

    // Calculate PMI dynamically based on home price and down payment percentage
    var calculatedPMI = adjustPMI(homePrice, downPaymentPercentage);
    pmiExpenseInput.value = Math.ceil(calculatedPMI).toString();

    // Trigger recalculation for principal and interest
    calculateAndDisplayResults();
    console.log("Inputs reset to default values and recalculated.");
  }

  // Event listeners
  updateBtn.addEventListener('click', function () {
    // Track the Google Ads conversion event
    gtag('event', 'conversion', {
      'send_to': 'AW-11495710624/WkaLCNPA6_kZEKC_yukq'
    });

    // Call the existing calculation function
    calculateAndDisplayResults();
  });
  resetBtn.addEventListener('click', resetInputs);

  // Initial calculation
  calculateAndDisplayResults();

  // Show Tab
  function showTab(tabName) {
    var tabs = document.querySelectorAll('.tab-content');
    var navButtons = document.querySelectorAll('.results-tab');

    // Hide all tabs and remove active class from buttons
    tabs.forEach(function (tab) {
      return tab.style.display = 'none';
    });
    navButtons.forEach(function (button) {
      return button.classList.remove('tab-active');
    });

    // Show the selected tab
    var selectedTab = document.getElementById("".concat(tabName, "-content"));
    if (selectedTab) {
      selectedTab.style.display = 'block';
      document.querySelector("#tab-".concat(tabName)).classList.add('tab-active');
    }

    // Handle Amortization Schedule tab
    if (tabName === 'amortization-schedule') {
      if (lastAmortizationData) {
        populateAmortizationTable(lastAmortizationData);
        initializeExpandCollapseLogic();
        drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData, lastAmortizationData.cumulativePrincipalData);

        // Render static labels with total values
        updateAmortizationLabels(lastAmortizationData.totalInterestPaid, lastAmortizationData.totalPrincipalPaid, lastAmortizationData.schedule.reduce(function (sum, row) {
          return sum + row.principal + row.interest;
        }, 0));
      }
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
  function calculateAmortizationSchedule(principal, interestRate, numberOfPayments) {
    var extraPayment = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var monthlyInterestRate = interestRate / 12; // Convert annual rate to monthly
    var periodicPrincipalAndInterest = principal * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    var balance = principal;
    var schedule = [];
    var totalInterestPaid = 0;
    var totalPrincipalPaid = 0;
    for (var i = 0; i < numberOfPayments; i++) {
      var interestPayment = balance * monthlyInterestRate;
      var principalPayment = Math.min(periodicPrincipalAndInterest + extraPayment - interestPayment, balance);
      balance -= principalPayment;
      totalInterestPaid += interestPayment;
      totalPrincipalPaid += principalPayment;
      schedule.push({
        month: i + 1,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(balance, 0)
      });
      if (balance <= 0) break; // Loan fully paid
    }
    return {
      schedule: schedule,
      totalInterestPaid: totalInterestPaid,
      totalPrincipalPaid: totalPrincipalPaid,
      balanceData: schedule.map(function (row) {
        return row.balance;
      }),
      cumulativeInterestData: schedule.map(function (row, index) {
        return schedule.slice(0, index + 1).reduce(function (sum, r) {
          return sum + r.interest;
        }, 0);
      }),
      cumulativePrincipalData: schedule.map(function (row, index) {
        return schedule.slice(0, index + 1).reduce(function (sum, r) {
          return sum + r.principal;
        }, 0);
      })
    };
  }
  function populateAmortizationTable(amortizationData) {
    var tableBody = document.getElementById('amortization-table-body');
    tableBody.innerHTML = ''; // Clear existing rows

    amortizationData.schedule.forEach(function (row, index) {
      var tr = document.createElement('tr');
      var dateCell = document.createElement('td');
      var date = new Date();
      date.setMonth(date.getMonth() + index); // Increment month
      dateCell.textContent = date.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
      });
      tr.appendChild(dateCell);
      var principalCell = document.createElement('td');
      principalCell.textContent = "$".concat(formatter.format(row.principal));
      tr.appendChild(principalCell);
      var interestCell = document.createElement('td');
      interestCell.textContent = "$".concat(formatter.format(row.interest));
      tr.appendChild(interestCell);
      var balanceCell = document.createElement('td');
      balanceCell.textContent = "$".concat(formatter.format(row.balance));
      tr.appendChild(balanceCell);
      tableBody.appendChild(tr);
    });

    // Display the amortization schedule container
    document.getElementById('amortization-schedule').style.display = 'block';

    // Initialize expand/collapse logic
    initializeExpandCollapseLogic();
  }
  function initializeExpandCollapseLogic() {
    var expandBox = document.querySelector(".expand-box");
    var scrollableContainer = document.querySelector(".scrollable-tbody");
    var expandText = document.querySelector(".expand-text");
    var tableBody = document.getElementById("amortization-table-body");
    var rows = Array.from(tableBody.rows);
    if (!expandBox || !scrollableContainer || !expandText) {
      console.error("Expand/Collapse elements not found.");
      return;
    }
    console.log("Expand/Collapse Logic Initialized");
    expandBox.addEventListener("click", function () {
      var isCollapsed = expandText.textContent === "Expand";
      if (isCollapsed) {
        // Expand: show all rows and add the "expanded" class so that
        // the container's CSS (max-height: 300px) displays roughly 10 rows and becomes scrollable
        rows.forEach(function (row) {
          row.style.display = "table-row";
        });
        scrollableContainer.classList.add("expanded");
        expandText.textContent = "Collapse";
      } else {
        // Collapse: show only the first 3 rows and remove the "expanded" class to hide overflow
        scrollableContainer.classList.remove("expanded");
        rows.forEach(function (row, index) {
          row.style.display = index < 3 ? "table-row" : "none";
        });
        expandText.textContent = "Expand";
      }
    });

    // Initial state: collapsed—show only the first 3 rows
    rows.forEach(function (row, index) {
      row.style.display = index < 3 ? "table-row" : "none";
    });
    scrollableContainer.classList.remove("expanded");
  }
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
  function updateHoverEffects(index) {
    currentHoverIndex = index; // Save the current hover index
    updateHoverValues(lastAmortizationData.balanceData[index], lastAmortizationData.cumulativeInterestData[index], lastAmortizationData.cumulativePrincipalData[index]);
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
  calculateAndDisplayResults();
  function calculateAmortizationData(homePrice, downPaymentAmount, interestRate, loanTerm) {
    var principal = homePrice - downPaymentAmount;
    var monthlyInterestRate = interestRate / 100 / 12;
    var numberOfPayments = loanTerm * 12;
    var amortizationData = [];
    var balance = principal;
    for (var i = 0; i < numberOfPayments; i++) {
      var interestPayment = balance * monthlyInterestRate;
      var principalPayment = principal * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)) - interestPayment;
      balance = Math.max(balance - principalPayment, 0);
      amortizationData.push({
        date: new Date(new Date().setMonth(new Date().getMonth() + i)).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric"
        }),
        principal: principalPayment,
        interest: interestPayment,
        balance: balance
      });
      if (balance <= 0) break;
    }
    return amortizationData;
  }

  // Get the export button
  var exportButton = document.querySelector(".btn-icon-fluid");

  // Remove existing listeners
  exportButton.replaceWith(exportButton.cloneNode(true));

  // Add the event listener
  document.querySelector(".btn-icon-fluid").addEventListener("click", function () {
    var homePrice = parseFloat(document.getElementById("home-price").value) || 500000;
    var downPaymentAmount = parseFloat(document.getElementById("down-payment-amount").value) || 25000;
    var interestRate = parseFloat(document.getElementById("interest-rate").value) || 7.04;
    var loanTerm = parseInt(document.getElementById("loan-term").value) || 30;
    var paymentData = [{
      label: "Home Price",
      value: homePrice
    }, {
      label: "Down Payment",
      value: downPaymentAmount
    }, {
      label: "Loan Term (Years)",
      value: loanTerm
    }, {
      label: "Interest Rate (%)",
      value: interestRate
    }];
    var amortizationData = calculateAmortizationData(homePrice, downPaymentAmount, interestRate, loanTerm);
    console.log(document.getElementById('interest-rate'));
    console.log(document.getElementById('interest-rate-warning'));

    // Generate the PDF
    generateMortgagePdf(paymentData, amortizationData);
  });

  // Down Payment Warning JS
  var downPaymentWarning = document.getElementById('down-payment-warning');
  if (!downPaymentWarning) {
    console.error('Down payment warning element not found.');
    return;
  }

  // Attach event listeners for down payment and home price inputs
  downPaymentAmountInput.addEventListener('input', handleDownPaymentWarning);
  homePriceInput.addEventListener('blur', handleDownPaymentWarning);
  function handleDownPaymentWarning() {
    var homePrice = parseFloat(homePriceInput.value) || parseFloat(homePriceInput.placeholder) || 0;
    var downPayment = parseFloat(downPaymentAmountInput.value) || parseFloat(downPaymentAmountInput.placeholder) || 0;

    // Show warning if down payment exceeds 100% of home price
    if (downPayment >= homePrice) {
      showDownPaymentWarning();
    } else {
      hideDownPaymentWarning();
    }
  }

  // Function to show the warning
  function showDownPaymentWarning() {
    var screenWidth = window.innerWidth;
    downPaymentWarning.classList.remove('hidden');
    if (screenWidth > 768) {
      downPaymentWarning.style.top = "".concat(downPaymentAmountInput.offsetTop - downPaymentWarning.offsetHeight - 10, "px");
      downPaymentWarning.style.left = "".concat(downPaymentAmountInput.offsetLeft - 38, "px");
      downPaymentWarning.style.width = "90%";
      downPaymentWarning.style.transform = 'none';
    } else {
      downPaymentWarning.style.top = "".concat(downPaymentAmountInput.offsetTop - downPaymentWarning.offsetHeight - 10, "px");
      downPaymentWarning.style.left = '50%';
      downPaymentWarning.style.transform = 'translateX(-50%)';
      downPaymentWarning.style.width = '90%';
    }
  }

  // Function to hide the down payment warning
  function hideDownPaymentWarning() {
    downPaymentWarning.classList.add('hidden');
  }

  // Attach the hide function to the global window object
  window.hideDownPaymentWarning = hideDownPaymentWarning;

  // Attach event listener for the down payment warning close button
  var downPaymentCloseButton = downPaymentWarning.querySelector('.down-payment-close');
  if (downPaymentCloseButton) {
    downPaymentCloseButton.addEventListener('click', hideDownPaymentWarning);
  } else {
    console.error('Close button not found in the down payment warning element.');
  }

  // Tab toggle functionality for "Payment Breakdown" and "Amortization Schedule"
  var tabPaymentBreakdown = document.getElementById('tab-payment-breakdown');
  var tabAmortizationSchedule = document.getElementById('tab-amortization-schedule');
  var paymentBreakdownContent = document.getElementById('payment-breakdown-content');
  var amortizationScheduleContent = document.getElementById('amortization-schedule-content');
  if (tabPaymentBreakdown && tabAmortizationSchedule && paymentBreakdownContent && amortizationScheduleContent) {
    var switchTab = function switchTab(selectedTab) {
      if (selectedTab === 'payment') {
        paymentBreakdownContent.style.display = 'block';
        amortizationScheduleContent.style.display = 'none';
        tabPaymentBreakdown.classList.add('tab-active');
        tabAmortizationSchedule.classList.remove('tab-active');
      } else if (selectedTab === 'amortization') {
        paymentBreakdownContent.style.display = 'none';
        amortizationScheduleContent.style.display = 'block';
        tabPaymentBreakdown.classList.remove('tab-active');
        tabAmortizationSchedule.classList.add('tab-active');
      }
    }; // Event listeners for tab clicks
    tabPaymentBreakdown.addEventListener('click', function () {
      switchTab('payment');
    });
    tabAmortizationSchedule.addEventListener('click', function () {
      switchTab('amortization');
    });

    // Set initial view to "Payment Breakdown"
    switchTab('payment');
  } else {
    console.log("Tab elements for Payment Breakdown and Amortization Schedule not found");
  }

  // Interest Rate Warning JS
  var warning = document.getElementById('interest-rate-warning');
  if (!warning) {
    console.error('Interest rate warning element not found.');
    return;
  }

  // Event listener for input changes on the interest rate input
  interestRateInput.addEventListener('input', function () {
    var value = parseFloat(this.value);

    // Automatically show the warning if the value is 10 or greater
    if (value >= 10) {
      showWarning();
      console.log("Interest rate is 10% or higher.");
    } else {
      hideWarning();
    }
  });

  // Function to show the warning
  function showWarning() {
    var screenWidth = window.innerWidth;
    warning.classList.remove('hidden');
    if (screenWidth > 768) {
      // Position warning above the input box for larger screens
      warning.style.top = "".concat(interestRateInput.offsetTop - warning.offsetHeight - 10, "px"); // Above the input
      warning.style.left = "".concat(interestRateInput.offsetLeft, "px"); // Align with the input field
      warning.style.width = '90%'; // Match input width
      warning.style.transform = 'none'; // Reset transform for larger screens
    } else {
      // Center warning and make it wider for smaller screens
      warning.style.top = "".concat(interestRateInput.offsetTop - warning.offsetHeight - 10, "px"); // Above the input
      warning.style.left = '50%'; // Center horizontally
      warning.style.transform = 'translateX(-50%)'; // Center it properly
      warning.style.width = '90%'; // Allow it to span most of the screen
    }
  }

  // Function to hide the interest rate warning
  function hideInterestRateWarning() {
    warning.classList.add('hidden');
  }

  // Attach the hide function to the global window object
  window.hideInterestRateWarning = hideInterestRateWarning;

  // Attach event listener for the interest rate warning close button
  var interestCloseButton = warning.querySelector('.interest-close');
  if (interestCloseButton) {
    interestCloseButton.addEventListener('click', hideInterestRateWarning);
  } else {
    console.error('Close button not found in the interest rate warning element.');
  }
  console.log("End of script reached");
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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
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
/******/ 			954: 0,
/******/ 			382: 0,
/******/ 			220: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [384,382,220,96], () => (__webpack_require__(6426)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=mortgage-calculator.bf9665b47647a5402591.js.map