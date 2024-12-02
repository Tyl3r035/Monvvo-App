"use strict";
(self["webpackChunkmonvvo_app"] = self["webpackChunkmonvvo_app"] || []).push([[426],{

/***/ 6426:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/jspdf/dist/jspdf.es.min.js + 1 modules
var jspdf_es_min = __webpack_require__(5463);
// EXTERNAL MODULE: ./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js
var jspdf_plugin_autotable = __webpack_require__(3246);
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
    return [index + 1, row.date, "$".concat(row.principal.toFixed(2)), "$".concat(row.interest.toFixed(2)), "$".concat(row.balance.toFixed(2))];
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
  homePriceInput.placeholder = defaultValues.homePrice;
  downPaymentAmountInput.placeholder = defaultValues.downPaymentAmount;
  downPaymentPercentageInput.placeholder = defaultValues.downPaymentPercentage;
  loanTermInput.value = defaultValues.loanTerm; // Keep loan term as value since it is a dropdown
  interestRateInput.placeholder = defaultValues.interestRate;
  propertyTaxInput.placeholder = defaultValues.propertyTax;
  pmiExpenseInput.placeholder = defaultValues.pmiExpense;
  hoaExpenseInput.placeholder = defaultValues.hoaExpense;

  // Set payment frequency to default
  paymentFrequencyInput.value = "monthly";
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

  // function showTab(tabName) {
  //     if (tabName === "payment") {
  //         paymentBreakdownContent.style.display = "block";
  //         amortizationScheduleContent.style.display = "none";
  //         tabPaymentBreakdown.classList.add("tab-active");
  //         tabAmortizationSchedule.classList.remove("tab-active");

  //         if (lastAmortizationData) {
  //             const {
  //                 periodicPrincipalAndInterest,
  //                 periodicPropertyTax,
  //                 periodicPMI,
  //                 periodicHOA,
  //             } = lastAmortizationData;

  //             // Redraw the stacked bar chart
  //             updateHorizontalStackedBarChart(
  //                 periodicPrincipalAndInterest,
  //                 periodicPropertyTax,
  //                 periodicPMI,
  //                 periodicHOA
  //             );
  //         }
  //     } else if (tabName === "amortization") {
  //         paymentBreakdownContent.style.display = "none";
  //         amortizationScheduleContent.style.display = "block";
  //         tabPaymentBreakdown.classList.remove("tab-active");
  //         tabAmortizationSchedule.classList.add("tab-active");

  //         if (lastAmortizationData) {
  //             const {
  //                 balanceData,
  //                 cumulativeInterestData,
  //                 cumulativePrincipalData,
  //                 totalInterestPaid,
  //                 totalPrincipalPaid,
  //                 totalAmountPaid,
  //             } = lastAmortizationData;

  //             drawAmortizationChart(
  //                 balanceData,
  //                 cumulativeInterestData,
  //                 cumulativePrincipalData
  //             );
  //             updateAmortizationLabels(
  //                 totalInterestPaid,
  //                 totalPrincipalPaid,
  //                 totalAmountPaid
  //             );
  //         }
  //     }
  // }

  function showTab(tabName) {
    if (tabName === "payment") {
      // Show Payment Breakdown tab
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
        console.log("Redrawing Payment Breakdown tab:", {
          periodicPrincipalAndInterest: periodicPrincipalAndInterest,
          periodicPropertyTax: periodicPropertyTax,
          periodicPMI: periodicPMI,
          periodicHOA: periodicHOA
        });

        // Redraw the stacked bar chart
        updateHorizontalStackedBarChart(periodicPrincipalAndInterest, periodicPropertyTax, periodicPMI, periodicHOA);
      } else {
        console.error("No data available for Payment Breakdown tab.");
      }
    } else if (tabName === "amortization") {
      // Show Amortization tab
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
        console.log("Switching to Amortization tab:", {
          balanceData: balanceData,
          cumulativeInterestData: cumulativeInterestData,
          cumulativePrincipalData: cumulativePrincipalData,
          totalInterestPaid: totalInterestPaid,
          totalPrincipalPaid: totalPrincipalPaid,
          totalAmountPaid: totalAmountPaid
        });

        // Draw amortization chart
        drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData);

        // Update amortization chart labels
        updateAmortizationLabels(totalInterestPaid, totalPrincipalPaid, totalAmountPaid);
      } else {
        console.error("No data available for Amortization tab.");
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

    // Retrieve inputs with fallback to default values
    var homePrice = parseFloat(homePriceInput.value) || defaultValues.homePrice;
    var downPaymentAmount = parseFloat(downPaymentAmountInput.value) || defaultValues.downPaymentAmount;
    var loanTerm = parseInt(loanTermInput.value) || defaultValues.loanTerm;
    var interestRate = parseFloat(interestRateInput.value) || defaultValues.interestRate;
    var propertyTax = parseFloat(propertyTaxInput.value) || defaultValues.propertyTax;
    var pmiExpense = parseFloat(pmiExpenseInput.value) || defaultValues.pmiExpense;
    var hoaExpense = parseFloat(hoaExpenseInput.value) || defaultValues.hoaExpense;

    // Calculations for principal, interest rate, and number of payments
    var principal = homePrice - downPaymentAmount;
    var monthlyInterestRate = interestRate / 100 / 12;
    var numberOfPayments = loanTerm * 12;

    // Calculate monthly principal and interest payment
    var periodicPrincipalAndInterest = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    // Keep additional inputs as monthly values
    var periodicPropertyTax = propertyTax;
    var periodicPMI = pmiExpense;
    var periodicHOA = hoaExpense;

    // Adjustments for payment frequency
    var selectedFrequency = paymentFrequencyInput.value;
    var paymentFactor = 1; // Default to monthly
    if (selectedFrequency === 'biweekly') {
      paymentFactor = 12 / 26;
    } else if (selectedFrequency === 'weekly') {
      paymentFactor = 12 / 52;
    } else if (selectedFrequency === 'accelerated-biweekly') {
      paymentFactor = 1 / 26;
    } else if (selectedFrequency === 'accelerated-weekly') {
      paymentFactor = 1 / 52;
    }

    // Adjust only principal and interest for frequency
    var adjustedPrincipalAndInterest = periodicPrincipalAndInterest * paymentFactor;

    // Keep additional inputs unadjusted
    var adjustedPropertyTax = periodicPropertyTax; // Unchanged
    var adjustedPMI = periodicPMI; // Unchanged
    var adjustedHOA = periodicHOA; // Unchanged

    // Update Payment Breakdown
    updateLabels(adjustedPrincipalAndInterest, adjustedPropertyTax, adjustedPMI, adjustedHOA);
    updateHorizontalStackedBarChart(adjustedPrincipalAndInterest, adjustedPropertyTax, adjustedPMI, adjustedHOA);
    var amortizationData = calculateAmortizationSchedule(principal, monthlyInterestRate, periodicPrincipalAndInterest, numberOfPayments);
    populateAmortizationTable(amortizationData); // Pass entire data object

    // Render Amortization Chart
    drawAmortizationChart(amortizationData.balanceData, amortizationData.cumulativeInterestData, amortizationData.cumulativePrincipalData);

    // Update Amortization Chart Labels
    updateAmortizationLabels(amortizationData.totalInterestPaid, amortizationData.totalPrincipalPaid, amortizationData.totalAmountPaid);

    // Store data for later use
    lastAmortizationData = _objectSpread(_objectSpread({}, amortizationData), {}, {
      // Include amortization data
      periodicPrincipalAndInterest: adjustedPrincipalAndInterest,
      periodicPropertyTax: adjustedPropertyTax,
      periodicPMI: adjustedPMI,
      periodicHOA: adjustedHOA
    });

    // initializeExpandCollapseLogic();

    console.log("Updated lastAmortizationData:", {
      principal: principal,
      monthlyInterestRate: monthlyInterestRate,
      numberOfPayments: numberOfPayments,
      periodicPrincipalAndInterest: periodicPrincipalAndInterest,
      totalPayment: adjustedPrincipalAndInterest + adjustedPropertyTax + adjustedPMI + adjustedHOA,
      lastAmortizationData: lastAmortizationData
    });
  }
  function updateHoverValues(balance, interest, principal) {
    var labelValues = amortizationLabelsContainer.querySelectorAll('.label-value');
    if (labelValues.length === 3) {
      labelValues[0].textContent = formatter.format(interest); // Update interest label
      labelValues[1].textContent = formatter.format(principal); // Update principal label
      labelValues[2].textContent = formatter.format(balance); // Update balance label
    }
  }
  function resetInputs() {
    console.log("Resetting inputs to default values");

    // Clear inputs without populating default values
    homePriceInput.value = "";
    downPaymentAmountInput.value = "";
    downPaymentPercentageInput.value = "";
    loanTermInput.value = "25";
    interestRateInput.value = "";
    propertyTaxInput.value = "";
    pmiExpenseInput.value = "";
    hoaExpenseInput.value = "";

    // Reset payment frequency to monthly
    paymentFrequencyInput.value = "monthly";

    // Recalculate using default values (inputs remain blank)
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
    console.log("Chart Data - Principal & Interest:", principalAndInterest);
    console.log("Chart Data - Property Tax:", propertyTax);
    console.log("Chart Data - PMI:", pmi);
    console.log("Chart Data - HOA:", hoa);
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
  function updateLabels(principalAndInterest, propertyTax, pmi, hoa) {
    var periodicPaymentElement = document.getElementById('monthly-payment-value');
    var selectedFrequency = paymentFrequencyInput.value;
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

    // Update the payment element
    periodicPaymentElement.innerHTML = "\n            <span class=\"payment-amount\">$".concat(formatter.format(totalPeriodicPayment), "</span>\n            <span class=\"payment-frequency\"> / ").concat(frequencyLabel, "</span>\n        ");
  }
  function calculateAmortizationSchedule(principal, monthlyInterestRate, monthlyPrincipalAndInterest, numberOfPayments) {
    var amortizationData = []; // Array to hold each period's data
    var balance = principal;
    var totalInterestPaid = 0;
    var totalPrincipalPaid = 0;
    for (var i = 0; i < numberOfPayments; i++) {
      var interestPayment = balance * monthlyInterestRate;
      var principalPayment = monthlyPrincipalAndInterest - interestPayment;
      balance = Math.max(balance - principalPayment, 0);
      totalInterestPaid += interestPayment;
      totalPrincipalPaid += principalPayment;
      amortizationData.push({
        principal: principalPayment,
        interest: interestPayment,
        balance: balance
      });
      if (balance <= 0) break; // Stop if fully paid
    }
    return {
      schedule: amortizationData,
      // Array for the table
      balanceData: amortizationData.map(function (row) {
        return row.balance;
      }),
      cumulativeInterestData: amortizationData.map(function (row, index) {
        return amortizationData.slice(0, index + 1).reduce(function (sum, r) {
          return sum + r.interest;
        }, 0);
      }),
      cumulativePrincipalData: amortizationData.map(function (row, index) {
        return amortizationData.slice(0, index + 1).reduce(function (sum, r) {
          return sum + r.principal;
        }, 0);
      }),
      totalInterestPaid: totalInterestPaid,
      totalPrincipalPaid: totalPrincipalPaid,
      totalAmountPaid: totalInterestPaid + totalPrincipalPaid
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
    document.getElementById('amortization-schedule').style.display = 'block'; // Show table

    // Ensure toggle functionality works with the new rows
    initializeExpandCollapseLogic(); // Call the toggle initialization
  }
  function initializeExpandCollapseLogic() {
    var expandBox = document.querySelector(".expand-box");
    var amortizationTableBody = document.getElementById("amortization-table-body");
    var expandText = document.querySelector(".expand-text");

    // Ensure the elements exist
    if (!expandBox || !amortizationTableBody || !expandText) {
      console.error("Expand/Collapse elements not found.");
      return;
    }
    console.log("Expand/Collapse Logic Initialized");

    // Initial state: show only the first three rows
    var rows = Array.from(amortizationTableBody.rows);
    rows.forEach(function (row, index) {
      row.style.display = index < 3 ? "table-row" : "none";
    });

    // Add click event for toggling
    expandBox.addEventListener("click", function () {
      var isExpanded = expandText.textContent === "Expand";
      console.log("Expand box clicked. Current state: ".concat(isExpanded ? "Expanding" : "Collapsing"));

      // Toggle row visibility
      rows.forEach(function (row, index) {
        row.style.display = isExpanded || index < 3 ? "table-row" : "none";
      });

      // Update the expand/collapse text
      expandText.textContent = isExpanded ? "Collapse" : "Expand";
    });
  }

  // function drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData) {
  //     const canvas = document.getElementById('amortizationChart'); // Ensure correct canvas element
  //     const ctx = canvas.getContext('2d');
  //     const dpr = window.devicePixelRatio || 1;

  //     // Adjust canvas dimensions dynamically
  //     const isSmallScreen = window.innerWidth < 700;
  //     const canvasHeight = isSmallScreen ? 200 : 300;

  //     canvas.width = canvas.parentElement.offsetWidth * dpr;
  //     canvas.height = canvasHeight * dpr; // Dynamically adjust height
  //     ctx.scale(dpr, dpr);

  //     const width = canvas.width / dpr;
  //     const height = canvas.height / dpr;

  //     const padding = { top: 30, right: 20, bottom: 50, left: 70 };
  //     const gridColor = '#d0d0d0';
  //     const labelColor = '#505050';

  //     const yAxisMax = Math.ceil(
  //         Math.max(...balanceData, ...cumulativeInterestData, ...cumulativePrincipalData) / 100000
  //     ) * 100000;

  //     function getY(value) {
  //         return height - padding.bottom - (value / yAxisMax) * (height - padding.top - padding.bottom);
  //     }

  //     function getX(index) {
  //         return padding.left + (index / (balanceData.length - 1)) * (width - padding.left - padding.right);
  //     }

  //     // Function to draw vertical hover line and dots
  //     function drawHoverLineAndDots(hoverIndex) {
  //         const x = getX(hoverIndex);
  //         const balanceY = getY(balanceData[hoverIndex]);
  //         const principalY = getY(cumulativePrincipalData[hoverIndex]);
  //         const interestY = getY(cumulativeInterestData[hoverIndex]);

  //         // Draw vertical hover line
  //         ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
  //         ctx.lineWidth = 1;
  //         ctx.beginPath();
  //         ctx.moveTo(x, padding.top);
  //         ctx.lineTo(x, height - padding.bottom);
  //         ctx.stroke();

  //         // Draw hover dots
  //         const dotRadius = 4;
  //         ctx.fillStyle = '#175134'; // Balance dot color
  //         ctx.beginPath();
  //         ctx.arc(x, balanceY, dotRadius, 0, Math.PI * 2);
  //         ctx.fill();

  //         ctx.fillStyle = '#3EB721'; // Principal dot color
  //         ctx.beginPath();
  //         ctx.arc(x, principalY, dotRadius, 0, Math.PI * 2);
  //         ctx.fill();

  //         ctx.fillStyle = '#91BBA6'; // Interest dot color
  //         ctx.beginPath();
  //         ctx.arc(x, interestY, dotRadius, 0, Math.PI * 2);
  //         ctx.fill();
  //     }

  //     // Clear canvas
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);

  //     // Draw grid lines and chart
  //     ctx.font = '14px Arial';
  //     ctx.textAlign = 'right';
  //     ctx.fillStyle = labelColor;
  //     ctx.strokeStyle = gridColor;

  //     for (let i = 0; i <= yAxisMax; i += 100000) {
  //         const y = getY(i);
  //         ctx.beginPath();
  //         ctx.moveTo(padding.left, y);
  //         ctx.lineTo(width - padding.right, y);
  //         ctx.stroke();
  //         ctx.fillText(`$${(i / 1000).toFixed(0)}K`, padding.left - 10, y + 5);
  //     }

  //     const months = balanceData.length;
  //     const years = Math.floor(months / 12);
  //     ctx.textAlign = 'center';

  //     for (let i = 0; i <= years; i += 5) {
  //         const monthIndex = i * 12;
  //         const x = getX(monthIndex);
  //         const yearLabel = new Date().getFullYear() + i;
  //         ctx.beginPath();
  //         ctx.moveTo(x, padding.top);
  //         ctx.lineTo(x, height - padding.bottom);
  //         ctx.stroke();
  //         ctx.fillText(yearLabel, x, height - 25);
  //     }

  //     // Draw balance data line
  //     ctx.strokeStyle = '#175134';
  //     ctx.lineWidth = 2;
  //     ctx.beginPath();
  //     for (let i = 0; i < balanceData.length; i++) {
  //         const x = getX(i);
  //         const y = getY(balanceData[i]);
  //         if (i === 0) ctx.moveTo(x, y);
  //         else ctx.lineTo(x, y);
  //     }
  //     ctx.stroke();

  //     // Draw cumulative principal line
  //     ctx.strokeStyle = '#3EB721';
  //     ctx.beginPath();
  //     for (let i = 0; i < cumulativePrincipalData.length; i++) {
  //         const x = getX(i);
  //         const y = getY(cumulativePrincipalData[i]);
  //         if (i === 0) ctx.moveTo(x, y);
  //         else ctx.lineTo(x, y);
  //     }
  //     ctx.stroke();

  //     // Draw cumulative interest line
  //     ctx.strokeStyle = '#91BBA6';
  //     ctx.beginPath();
  //     for (let i = 0; i < cumulativeInterestData.length; i++) {
  //         const x = getX(i);
  //         const y = getY(cumulativeInterestData[i]);
  //         if (i === 0) ctx.moveTo(x, y);
  //         else ctx.lineTo(x, y);
  //     }
  //     ctx.stroke();

  //     // Add mousemove event for hover effect
  //     canvas.addEventListener('mousemove', (event) => {
  //         const rect = canvas.getBoundingClientRect();
  //         const mouseX = (event.clientX - rect.left) * dpr;
  //         const closestIndex = Math.round(
  //             ((mouseX - padding.left) / (width - padding.left - padding.right)) * (balanceData.length - 1)
  //         );

  //         if (closestIndex >= 0 && closestIndex < balanceData.length) {
  //             ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear and redraw
  //             drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData);
  //             drawHoverLineAndDots(closestIndex);
  //         }
  //     });
  // }

  function drawAmortizationChart(balanceData, cumulativeInterestData, cumulativePrincipalData) {
    var hoverIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
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
      right: 15,
      bottom: 50,
      left: 50
    };
    var gridColor = '#d0d0d0';
    var labelColor = '#505050';
    var yAxisMax = Math.ceil(Math.max.apply(Math, _toConsumableArray(balanceData).concat(_toConsumableArray(cumulativeInterestData), _toConsumableArray(cumulativePrincipalData))) / 100000) * 100000;

    // Helper functions to calculate positions
    function getY(value) {
      return height - padding.bottom - value / yAxisMax * (height - padding.top - padding.bottom);
    }
    function getX(index) {
      return padding.left + index / (balanceData.length - 1) * (width - padding.left - padding.right);
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw horizontal grid lines (Y-axis) and labels
    ctx.font = '12px Arial';
    ctx.textAlign = 'right';
    ctx.fillStyle = labelColor;
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
      var x = getX(monthIndex);
      var yearLabel = new Date().getFullYear() + _i;

      // Grid line
      ctx.beginPath();
      ctx.moveTo(x, padding.top);
      ctx.lineTo(x, height - padding.bottom);
      ctx.stroke();

      // X-axis label (place below padding)
      ctx.fillText(yearLabel, x, height - 10);
    }

    // Draw balance data line
    ctx.strokeStyle = '#175134';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (var _i2 = 0; _i2 < balanceData.length; _i2++) {
      var _x = getX(_i2);
      var _y = getY(balanceData[_i2]);
      if (_i2 === 0) ctx.moveTo(_x, _y);else ctx.lineTo(_x, _y);
    }
    ctx.stroke();

    // Draw cumulative principal line
    ctx.strokeStyle = '#3EB721';
    ctx.beginPath();
    for (var _i3 = 0; _i3 < cumulativePrincipalData.length; _i3++) {
      var _x2 = getX(_i3);
      var _y2 = getY(cumulativePrincipalData[_i3]);
      if (_i3 === 0) ctx.moveTo(_x2, _y2);else ctx.lineTo(_x2, _y2);
    }
    ctx.stroke();

    // Draw cumulative interest line
    ctx.strokeStyle = '#91BBA6';
    ctx.beginPath();
    for (var _i4 = 0; _i4 < cumulativeInterestData.length; _i4++) {
      var _x3 = getX(_i4);
      var _y3 = getY(cumulativeInterestData[_i4]);
      if (_i4 === 0) ctx.moveTo(_x3, _y3);else ctx.lineTo(_x3, _y3);
    }
    ctx.stroke();

    // Draw hover effects if hoverIndex is provided
    if (hoverIndex !== null) {
      var _x4 = getX(hoverIndex);
      var balanceY = getY(balanceData[hoverIndex]);
      var principalY = getY(cumulativePrincipalData[hoverIndex]);
      var interestY = getY(cumulativeInterestData[hoverIndex]);

      // Draw vertical hover line
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(_x4, padding.top);
      ctx.lineTo(_x4, height - padding.bottom);
      ctx.stroke();

      // Draw hover dots
      var dotRadius = 4;
      ctx.fillStyle = '#175134'; // Balance dot color
      ctx.beginPath();
      ctx.arc(_x4, balanceY, dotRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#3EB721'; // Principal dot color
      ctx.beginPath();
      ctx.arc(_x4, principalY, dotRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#91BBA6'; // Interest dot color
      ctx.beginPath();
      ctx.arc(_x4, interestY, dotRadius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  amortizationChartCanvas.addEventListener('mousemove', function (event) {
    var rect = amortizationChartCanvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var padding = {
      top: 30,
      right: 25,
      bottom: 30,
      left: 70
    };
    if (x >= padding.left && x <= amortizationChartCanvas.offsetWidth - padding.right) {
      var chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
      var index = Math.round((x - padding.left) / chartWidth * (lastAmortizationData.balanceData.length - 1));
      if (index >= 0 && index < lastAmortizationData.balanceData.length) {
        updateHoverValues(lastAmortizationData.balanceData[index], lastAmortizationData.cumulativeInterestData[index], lastAmortizationData.cumulativePrincipalData[index]);
        var startDate = new Date();
        var hoverDate = new Date(startDate.setMonth(startDate.getMonth() + index));
        displayHoverDate(hoverDate);
        drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData, lastAmortizationData.cumulativePrincipalData, index);
      }
    }
  });

  // Add support for touchmove
  amortizationChartCanvas.addEventListener('touchmove', handleTouchEvent);
  amortizationChartCanvas.addEventListener('touchstart', handleTouchEvent);
  function handleTouchEvent(event) {
    var rect = amortizationChartCanvas.getBoundingClientRect();
    var touch = event.touches[0] || event.changedTouches[0];
    var x = touch.clientX - rect.left;
    var padding = {
      top: 30,
      right: 25,
      bottom: 30,
      left: 70
    };
    if (x < padding.left || x > amortizationChartCanvas.offsetWidth - padding.right) {
      // If touch is outside the chart, clear hover effects
      revertValuesToTotals();
      var hoverDateContainer = document.getElementById('amortizationHoverDate');
      hoverDateContainer.textContent = ''; // Clear the hover date
      drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData, lastAmortizationData.cumulativePrincipalData);
    } else {
      var chartWidth = amortizationChartCanvas.offsetWidth - padding.left - padding.right;
      var index = Math.round((x - padding.left) / chartWidth * (lastAmortizationData.balanceData.length - 1));
      if (index >= 0 && index < lastAmortizationData.balanceData.length) {
        updateHoverValues(lastAmortizationData.balanceData[index], lastAmortizationData.cumulativeInterestData[index], lastAmortizationData.cumulativePrincipalData[index]);
        var startDate = new Date();
        var hoverDate = new Date(startDate.setMonth(startDate.getMonth() + index));
        displayHoverDate(hoverDate);
        drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData, lastAmortizationData.cumulativePrincipalData, index);
      }
    }
    event.preventDefault(); // Prevent default scrolling
  }
  function displayHoverDate(date) {
    var hoverDateContainer = document.getElementById('amortizationHoverDate');
    var month = date.toLocaleString('default', {
      month: 'long'
    }); // Full month name
    var year = date.getFullYear();
    hoverDateContainer.textContent = "".concat(month, " ").concat(year);
  }
  amortizationChartCanvas.addEventListener('mouseout', function () {
    revertValuesToTotals();
    var hoverDateContainer = document.getElementById('amortizationHoverDate');
    hoverDateContainer.textContent = ''; // Clear the hover date

    drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData, lastAmortizationData.cumulativePrincipalData);
  });

  // Add touchend for mobile devices
  amortizationChartCanvas.addEventListener('touchend', function () {
    revertValuesToTotals();
    var hoverDateContainer = document.getElementById('amortizationHoverDate');
    hoverDateContainer.textContent = ''; // Clear the hover date

    drawAmortizationChart(lastAmortizationData.balanceData, lastAmortizationData.cumulativeInterestData, lastAmortizationData.cumulativePrincipalData);
  });

  /* PDF Generation Logic */
  function revertValuesToTotals() {
    var _lastAmortizationData3 = lastAmortizationData,
      totalInterestPaid = _lastAmortizationData3.totalInterestPaid,
      totalPrincipalPaid = _lastAmortizationData3.totalPrincipalPaid,
      totalAmountPaid = _lastAmortizationData3.totalAmountPaid;
    updateHoverValues(totalAmountPaid, totalInterestPaid, totalPrincipalPaid);
  }
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
    var loanTerm = parseInt(document.getElementById("loan-term").value) || 25;
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

    // Generate the PDF
    generateMortgagePdf(paymentData, amortizationData);
  });
  console.log("End of script reached");
});

/***/ })

}]);
//# sourceMappingURL=426.522b98006df9eb56a448.js.map