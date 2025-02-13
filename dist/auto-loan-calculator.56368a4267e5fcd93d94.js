/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 848:
/***/ (() => {


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

  // // Restrict invalid characters in inputs
  // const inputsToRestrict = [
  //     loanAmountInput,
  //     loanTermInput,
  //     interestRateInput,
  //     downPaymentInput,
  //     tradeInValueInput,
  //     salesTaxInput,
  //     feesInput
  // ];

  // inputsToRestrict.forEach(input => {
  //     input.addEventListener('keydown', function (event) {
  //         if (event.key === "-" || event.key === "e") {
  //             event.preventDefault();
  //         }
  //     });
  // });

  // Function to calculate results
  function calculateAndDisplayResults() {
    // Check if the input values exist, otherwise use default values
    var loanAmount = parseFloat(loanAmountInput.value) || defaultValues.loanAmount;
    var loanTerm = parseInt(loanTermInput.value) || defaultValues.loanTerm;
    var interestRate = parseFloat(interestRateInput.value) / 100 || defaultValues.interestRate / 100;
    var downPayment = parseFloat(downPaymentInput.value) || defaultValues.downPayment;
    var extraPayment = parseFloat(extraPaymentInput.value) || defaultValues.extraPayment;
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

    // ✅ Correct Monthly Interest Rate (handles floating point errors)
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

    // ✅ Pass data to the chart drawing function
    updateDoughnutChart(autoChartCanvas, totalMonthlyPayment, monthlyPayment, extraPayment);
  }
  calculateAndDisplayResults;
  function updateChartLabels(autoChartCanvas, totalMonthlyPayment, monthlyPayment, extraPayment) {
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
    console.log("Chart labels updated.");
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

    // Recalculate when switching to relevant tabs
    if (tabName === 'payment-breakdown') {
      console.log("Switching to Payment Breakdown tab - recalculating results.");
      calculateAndDisplayResults(); // Ensures chart updates automatically
    }

    // Handle Amortization Schedule tab
    if (tabName === 'amortization-schedule') {
      if (lastAmortizationData) {
        console.log("Switching to Amortization Schedule tab - updating amortization chart.");
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
  showTab('payment-breakdown');

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

    // Clear the canvas for the doughnut chart
    var context = autoChartCanvas.getContext('2d');
    context.clearRect(0, 0, autoChartCanvas.width, autoChartCanvas.height);
    console.log("Inputs reset to default values.");
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
//# sourceMappingURL=auto-loan-calculator.56368a4267e5fcd93d94.js.map