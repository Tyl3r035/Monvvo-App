/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2261:
/***/ (() => {


document.addEventListener("DOMContentLoaded", function () {
  var loanTypes = {
    conventional: [0.03, 0.05, 0.10, 0.20],
    // Conventional: 3%, 5%, 10%, 20%
    fha: [0.035, 0.10] // FHA: 3.5%, 10%
  };

  // Tab switching logic
  var tabs = document.querySelectorAll(".results-tab");
  var downPaymentOptions = document.getElementById("down-payment-options");
  var savingsTimeline = document.getElementById("savings-timeline");

  // Function to show the appropriate tab content
  function showTab(tabId) {
    // Reset active states for tabs
    tabs.forEach(function (tab) {
      return tab.classList.remove("tab-active");
    });

    // Hide all content
    downPaymentOptions.style.display = "none";
    savingsTimeline.style.display = "none";

    // Set active tab and display corresponding content
    var activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.classList.add("tab-active");
      if (tabId === "tab-recommended") {
        downPaymentOptions.style.display = "block";
      } else if (tabId === "tab-max-budget") {
        savingsTimeline.style.display = "block";
      }
    }
  }

  // Add click event listeners to the tabs
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      showTab(tab.id);
    });
  });

  // Set default tab on load
  showTab("tab-recommended");

  // Down Payment Select JS
  var selectFluid = document.querySelector(".down-payment-select-fluid");
  var selectedOption = selectFluid.querySelector(".selected-option");
  var optionsContainer = document.getElementById("down-payment-chart-select");
  var options = optionsContainer.querySelectorAll(".down-payment-chart-option");
  var allCharts = document.querySelectorAll(".chart-container");
  var monthlyContributionInput = document.getElementById("monthly-contributions"); // Added this line
  var isDropdownOpen = false;

  // Toggle dropdown visibility
  selectFluid.addEventListener("click", function (event) {
    // Prevent immediate dropdown closure on option click
    event.stopPropagation();
    isDropdownOpen = !isDropdownOpen;
    optionsContainer.style.display = isDropdownOpen ? "block" : "none";
  });

  // Handle option selection and chart display
  options.forEach(function (option) {
    option.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling
      var selectedValue = option.getAttribute("data-value");
      var chartToShow = option.getAttribute("data-chart");
      var displayText = option.textContent;
      if (!selectedValue) {
        console.error("Selected option does not have a valid data-value.");
        return;
      }

      // Update the selected option display
      selectedOption.textContent = displayText;
      selectedOption.setAttribute("data-value", selectedValue); // Update the data-value attribute

      // Hide all charts
      allCharts.forEach(function (chart) {
        return chart.classList.remove("active");
      });

      // Show the respective chart
      var chartElement = document.getElementById(chartToShow);
      if (chartElement) {
        chartElement.classList.add("active");
      } else {
        console.warn("No chart found for chartToShow: ".concat(chartToShow));
      }

      // Close the dropdown immediately
      optionsContainer.style.display = "none";
      isDropdownOpen = false;
      console.log("Selected Value: ".concat(selectedValue, ", Displaying Chart: ").concat(chartToShow));
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!selectFluid.contains(event.target)) {
      optionsContainer.style.display = "none";
      isDropdownOpen = false;
    }
  });

  // Calculator JS
  var homePriceInput = document.getElementById("home-price");
  var loanTypeSelect = document.getElementById("down-payment-chart-select");
  var downPaymentMonths = document.getElementById("down-payment-months");
  var downPaymentSavings = document.getElementById("down-payment-savings");
  var chartContainer = document.getElementById("chart-container");

  // Helper function to get input value or fallback to placeholder
  function getInputValueOrPlaceholder(inputElement) {
    return parseFloat(inputElement.value) || parseFloat(inputElement.placeholder) || 0;
  }

  // Calculate and display results dynamically
  // function calculateAndDisplayResults() {
  //     const homePrice = getInputValueOrPlaceholder(homePriceInput);

  //     // Get the selected loan type from the custom dropdown
  //     const selectedOption = document.querySelector(".selected-option");
  //     if (!selectedOption) {
  //         console.error("No selected option found.");
  //         chartContainer.innerHTML = "<p>Please select a loan type to see results.</p>";
  //         return;
  //     }

  //     const loanType = selectedOption.getAttribute("data-value");
  //     if (!loanType) {
  //         console.error("Selected option does not have a valid data-value.");
  //         chartContainer.innerHTML = "<p>Please select a valid loan type to see results.</p>";
  //         return;
  //     }

  //     // Get the percentages for the selected loan type
  //     const percentages = loanTypes[loanType];
  //     if (!percentages) {
  //         console.error(`Invalid loan type selected: ${loanType}`);
  //         chartContainer.innerHTML = "<p>Please select a valid loan type to see results.</p>";
  //         return;
  //     }

  //     // Clear previous charts and dynamically created elements
  //     chartContainer.innerHTML = "";

  //     // Dynamically create and insert the main results text
  //     let homePriceElement = document.getElementById("results-home-price");
  //     if (!homePriceElement) {
  //         const homePriceText = document.createElement("p");
  //         homePriceText.className = "down-payment-results";
  //         homePriceText.innerHTML = `For a <span id="results-home-price"></span> mortgage.`;
  //         chartContainer.before(homePriceText); // Insert the text above the chart container
  //         homePriceElement = document.getElementById("results-home-price");
  //     }

  //     // Update the home price dynamically
  //     homePriceElement.textContent = `${homePrice.toLocaleString()}`;

  //     // Function to draw a rounded rectangle
  //     function drawRoundedRect(ctx, x, y, width, height, radius, fillStyle) {
  //         ctx.fillStyle = fillStyle;
  //         ctx.beginPath();
  //         ctx.moveTo(x + radius, y);
  //         ctx.lineTo(x + width - radius, y);
  //         ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  //         ctx.lineTo(x + width, y + height - radius);
  //         ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  //         ctx.lineTo(x + radius, y + height);
  //         ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  //         ctx.lineTo(x, y + radius);
  //         ctx.quadraticCurveTo(x, y, x + radius, y);
  //         ctx.closePath();
  //         ctx.fill();
  //     }

  //     // Create charts and display text for each percentage
  //     percentages.forEach((percent) => {
  //         const chartWrapper = document.createElement("div");
  //         chartWrapper.style.marginBottom = "20px";
  //         chartWrapper.style.textAlign = "left";
  //         chartWrapper.style.fontFamily = "'Roboto', sans-serif";

  //         const percentageLabel = document.createElement("p");
  //         percentageLabel.textContent = `${(percent * 100).toFixed(1)}%`;
  //         percentageLabel.style.fontSize = "18px";
  //         percentageLabel.style.fontWeight = "bold";
  //         percentageLabel.style.margin = "0 0 2px 0";
  //         percentageLabel.style.textAlign = "left";

  //         const canvas = document.createElement("canvas");
  //         canvas.style.width = "100%";
  //         canvas.style.height = "25px";

  //         chartWrapper.appendChild(percentageLabel);
  //         chartWrapper.appendChild(canvas);
  //         chartContainer.appendChild(chartWrapper);

  //         const ctx = canvas.getContext("2d");
  //         const downPayment = homePrice * percent;
  //         const barWidth = (downPayment / homePrice) * canvas.width;
  //         const barHeight = canvas.height;

  //         drawRoundedRect(ctx, 0, 0, barWidth, barHeight, 5, "#175134");
  //         ctx.fillStyle = "#175134";
  //         ctx.fillRect(barWidth - 5, 0, 5, barHeight);
  //         drawRoundedRect(ctx, barWidth, 0, canvas.width - barWidth, barHeight, 5, "#cae6d9");
  //         ctx.fillStyle = "#cae6d9";
  //         ctx.fillRect(barWidth, 0, 5, barHeight);

  //         const description = document.createElement("p");
  //         description.className = "down-payment-text";
  //         description.style.margin = "2px 0 0 0";
  //         description.style.textAlign = "left";
  //         description.style.fontFamily = "'Roboto', sans-serif";
  //         description.style.fontSize = "16px";
  //         description.innerHTML = `<span>${downPayment.toLocaleString()}</span> for a <span>$${homePrice.toLocaleString()}</span> mortgage.`;
  //         chartWrapper.appendChild(description);
  //     });

  //     console.log(`Loan type: ${loanType}, Percentages: ${percentages}`);
  // }

  function calculateAndDisplayResults() {
    var homePrice = getInputValueOrPlaceholder(homePriceInput);

    // Get the selected loan type from the custom dropdown
    var selectedOption = document.querySelector(".selected-option");
    if (!selectedOption) {
      console.error("No selected option found.");
      chartContainer.innerHTML = "<p>Please select a loan type to see results.</p>";
      return;
    }
    var loanType = selectedOption.getAttribute("data-value");
    if (!loanType) {
      console.error("Selected option does not have a valid data-value.");
      chartContainer.innerHTML = "<p>Please select a valid loan type to see results.</p>";
      return;
    }

    // Get the percentages for the selected loan type
    var percentages = loanTypes[loanType];
    if (!percentages) {
      console.error("Invalid loan type selected: ".concat(loanType));
      chartContainer.innerHTML = "<p>Please select a valid loan type to see results.</p>";
      return;
    }

    // Retrieve monthly contributions for the savings timeline
    var monthlyContribution = getInputValueOrPlaceholder(monthlyContributionInput);
    if (!monthlyContribution || monthlyContribution <= 0) {
      console.error("Invalid monthly contribution input.");
      chartContainer.innerHTML = "<p>Please enter a valid monthly contribution to see results.</p>";
      return;
    }

    // Clear previous charts and dynamically created elements
    chartContainer.innerHTML = "";

    // Dynamically create and insert the main results text
    var homePriceElement = document.getElementById("results-home-price");
    if (!homePriceElement) {
      var homePriceText = document.createElement("p");
      homePriceText.className = "down-payment-results";
      homePriceText.innerHTML = "For a <span id=\"results-home-price\"></span> mortgage.";
      chartContainer.before(homePriceText); // Insert the text above the chart container
      homePriceElement = document.getElementById("results-home-price");
    }

    // Update the home price dynamically
    homePriceElement.textContent = "".concat(homePrice.toLocaleString());

    // Function to draw a rounded rectangle (bar chart logic)
    function drawRoundedRect(ctx, x, y, width, height, radius, fillStyle) {
      ctx.fillStyle = fillStyle;
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
      ctx.fill();
    }

    // Create bar charts and display text for each percentage
    percentages.forEach(function (percent) {
      var chartWrapper = document.createElement("div");
      chartWrapper.style.marginBottom = "20px";
      chartWrapper.style.textAlign = "left";
      chartWrapper.style.fontFamily = "'Roboto', sans-serif";
      var percentageLabel = document.createElement("p");
      percentageLabel.textContent = "".concat((percent * 100).toFixed(1), "%");
      percentageLabel.style.fontSize = "18px";
      percentageLabel.style.fontWeight = "bold";
      percentageLabel.style.margin = "0 0 2px 0";
      var canvas = document.createElement("canvas");
      canvas.style.width = "100%";
      canvas.style.height = "25px";
      chartWrapper.appendChild(percentageLabel);
      chartWrapper.appendChild(canvas);
      chartContainer.appendChild(chartWrapper);
      var ctx = canvas.getContext("2d");
      var downPayment = homePrice * percent;
      var barWidth = downPayment / homePrice * canvas.width;
      var barHeight = canvas.height;
      drawRoundedRect(ctx, 0, 0, barWidth, barHeight, 5, "#175134");
      ctx.fillStyle = "#175134";
      ctx.fillRect(barWidth - 5, 0, 5, barHeight);
      drawRoundedRect(ctx, barWidth, 0, canvas.width - barWidth, barHeight, 5, "#cae6d9");
      ctx.fillStyle = "#cae6d9";
      ctx.fillRect(barWidth, 0, 5, barHeight);
      var description = document.createElement("p");
      description.className = "down-payment-text";
      description.style.margin = "2px 0 0 0";
      description.style.fontSize = "16px";
      description.innerHTML = "<span>".concat(downPayment.toLocaleString(), "</span> for a <span>$").concat(homePrice.toLocaleString(), "</span> mortgage.");
      chartWrapper.appendChild(description);

      // Render amortization chart
      var amortizationCanvas = document.createElement("canvas");
      amortizationCanvas.style.width = "100%";
      amortizationCanvas.style.height = "300px";
      chartContainer.appendChild(amortizationCanvas);
      var amortizationCtx = amortizationCanvas.getContext("2d");
      var targetAmount = downPayment;
      var months = Math.ceil(targetAmount / monthlyContribution);
      drawAmortizationChart(amortizationCtx, months, monthlyContribution, targetAmount);
    });
    console.log("Loan type: ".concat(loanType, ", Percentages: ").concat(percentages));
  }
  function drawAmortizationChart(months, monthlyContribution, targetAmount) {
    var hoverIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var canvas = document.getElementById('amortization-chart');
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

    // Calculate Y-axis max value (targetAmount or slightly higher)
    var yAxisMax = Math.ceil(targetAmount / 10000) * 10000;

    // Calculate data points
    var totalSaved = [];
    var cumulativeSavings = 0;
    for (var i = 0; i < months; i++) {
      cumulativeSavings += monthlyContribution;
      totalSaved.push(Math.min(cumulativeSavings, targetAmount));
    }

    // Helper functions for coordinates
    function getY(value) {
      return height - padding.bottom - value / yAxisMax * (height - padding.top - padding.bottom);
    }
    function getX(index) {
      return padding.left + index / (months - 1) * (width - padding.left - padding.right);
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw horizontal grid lines (Y-axis) and labels
    ctx.font = '14px Roboto';
    ctx.textAlign = 'right';
    ctx.fillStyle = '#232525'; // Label color
    ctx.strokeStyle = gridColor;
    for (var _i = 0; _i <= yAxisMax; _i += yAxisMax / 5) {
      var _y = getY(_i);

      // Grid line
      ctx.beginPath();
      ctx.moveTo(padding.left, _y);
      ctx.lineTo(width - padding.right, _y);
      ctx.stroke();

      // Y-axis label
      ctx.fillText("$".concat((_i / 1000).toFixed(0), "K"), padding.left - 10, _y + 5);
    }

    // Draw vertical grid lines (X-axis) and labels
    ctx.textAlign = 'center';
    for (var _i2 = 0; _i2 <= months; _i2 += Math.max(1, Math.floor(months / 12))) {
      var _x = getX(_i2);
      var monthLabel = "".concat(_i2, "M");

      // Grid line
      ctx.beginPath();
      ctx.moveTo(_x, padding.top);
      ctx.lineTo(_x, height - padding.bottom);
      ctx.stroke();

      // X-axis label
      ctx.fillText(monthLabel, _x, height - 10);
    }

    // Draw the savings line
    ctx.strokeStyle = '#175134'; // Line color
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (var _i3 = 0; _i3 < totalSaved.length; _i3++) {
      var _x2 = getX(_i3);
      var _y2 = getY(totalSaved[_i3]);
      if (_i3 === 0) ctx.moveTo(_x2, _y2);else ctx.lineTo(_x2, _y2);
    }
    ctx.stroke();

    // Draw hover line and dot
    var x = getX(hoverIndex);
    var y = getY(totalSaved[hoverIndex]);

    // Vertical hover line
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x, padding.top);
    ctx.lineTo(x, height - padding.bottom);
    ctx.stroke();

    // Hover dot
    var dotRadius = 6;
    ctx.fillStyle = '#175134'; // Dot color
    ctx.beginPath();
    ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
    ctx.fill();

    // Draw hover labels
    ctx.fillStyle = '#232525'; // Label color
    ctx.textAlign = 'left';
    ctx.font = '14px Roboto';
    var labelX = x + 10;
    var labelY = y - 10;
    ctx.fillText("Saved: $".concat(totalSaved[hoverIndex].toLocaleString()), labelX, labelY);
    ctx.fillText("Month: ".concat(hoverIndex + 1), labelX, labelY + 20);
  }

  // Reset all inputs to placeholders and defaults
  function resetInputs() {
    homePriceInput.value = "";
    loanTypeSelect.value = "conventional"; // Default to Conventional loan
    chartContainer.innerHTML = ""; // Clear charts
    calculateAndDisplayResults(); // Recalculate using placeholders
  }

  // Event listeners for buttons
  document.getElementById("update-btn").addEventListener("click", calculateAndDisplayResults);
  document.getElementById("reset-btn").addEventListener("click", resetInputs);

  // Initialize chart on page load with placeholder values and Conventional loan
  calculateAndDisplayResults();
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
/******/ 			779: 0,
/******/ 			178: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [178], () => (__webpack_require__(2261)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=down-payment-calculator.79aa7fb48dc8c4bfda99.js.map