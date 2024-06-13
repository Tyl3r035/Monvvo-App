/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/reset.css */ \"./public/css/reset.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/styles.css */ \"./public/css/styles.css\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ \"./public/js/main.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"./public/js/utils.js\");\n// index.js\n\n\n\n\n// Your additional JavaScript logic here\n\n//# sourceURL=webpack://monvvo-app/./public/js/index.js?");

/***/ }),

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var infoIcons = document.querySelectorAll('.material-symbols-outlined');\n  infoIcons.forEach(function (icon) {\n    icon.addEventListener('click', function (event) {\n      event.stopPropagation();\n      var infoText = this.nextElementSibling;\n      if (infoText.style.display === 'block') {\n        infoText.style.display = 'none';\n      } else {\n        document.querySelectorAll('.info-text-fluid').forEach(function (text) {\n          return text.style.display = 'none';\n        });\n        infoText.style.display = 'block';\n        var iconRect = this.getBoundingClientRect();\n        var offsetX = iconRect.left - infoText.offsetWidth - 5;\n        var offsetY = window.scrollY + iconRect.bottom + 5;\n        var viewportWidth = window.innerWidth;\n        var viewportHeight = window.innerHeight;\n        if (offsetX < 0) {\n          offsetX = iconRect.right + 5;\n        } else if (offsetX + infoText.offsetWidth > viewportWidth) {\n          offsetX = viewportWidth - infoText.offsetWidth - 5;\n        }\n        if (offsetY + infoText.offsetHeight > window.scrollY + viewportHeight) {\n          offsetY = window.scrollY + iconRect.top - infoText.offsetHeight - 5;\n        }\n        infoText.style.left = \"\".concat(offsetX, \"px\");\n        infoText.style.top = \"\".concat(offsetY, \"px\");\n      }\n    });\n  });\n  document.addEventListener('click', function () {\n    document.querySelectorAll('.info-text-fluid').forEach(function (text) {\n      return text.style.display = 'none';\n    });\n  });\n  document.querySelectorAll('.info-text-fluid').forEach(function (text) {\n    text.addEventListener('click', function (event) {\n      event.stopPropagation();\n    });\n  });\n  var ctx = document.getElementById('myChart').getContext('2d');\n  var totalMonthlyPayment = 0;\n  var placeholderValues = {\n    homePrice: 400000,\n    downPayment: 20000,\n    loanTerm: 15,\n    interestRate: 7.2,\n    propertyTaxes: 333.33,\n    propertyTaxesFrequency: 'monthly',\n    pmi: 0,\n    hoa: 0\n  };\n  var calculateMonthlyPI = function calculateMonthlyPI(homePrice, downPayment, loanTerm, interestRate) {\n    var principal = homePrice - downPayment;\n    var monthlyInterestRate = interestRate / 100 / 12;\n    var numberOfPayments = loanTerm * 12;\n    var monthlyPI = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);\n    return Math.round(monthlyPI * 100) / 100;\n  };\n  var getPropertyTax = function getPropertyTax(propertyTaxes, frequency) {\n    if (frequency === 'annually') {\n      return propertyTaxes / 12;\n    }\n    return propertyTaxes;\n  };\n  var calculateTotalMonthlyPayment = function calculateTotalMonthlyPayment(monthlyPI, propertyTaxes, propertyTaxesFrequency, pmi, hoa) {\n    var monthlyPropertyTaxes = getPropertyTax(propertyTaxes, propertyTaxesFrequency);\n    return Math.round((monthlyPI + monthlyPropertyTaxes + pmi + hoa) * 100) / 100;\n  };\n  var drawCenterText = function drawCenterText(chart) {\n    var ctx = chart.ctx;\n    ctx.save();\n    var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;\n    var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;\n    ctx.textAlign = 'center';\n    ctx.textBaseline = 'middle';\n    var fontSize = '40px';\n    if (window.innerWidth <= 450) {\n      fontSize = '25px';\n    }\n    ctx.font = \"bold \".concat(fontSize, \" Open Sans\");\n    ctx.fillStyle = '#000';\n    ctx.clearRect(centerX - 75, centerY - 25, 150, 50);\n    ctx.fillText('Total: $' + totalMonthlyPayment, centerX, centerY);\n    ctx.restore();\n  };\n  var updateLegend = function updateLegend(chart) {\n    var legendContainer = document.getElementById('chart-legend');\n    legendContainer.innerHTML = '';\n    var items = chart.data.labels.map(function (label, index) {\n      var value = chart.data.datasets[0].data[index];\n      var color = chart.data.datasets[0].backgroundColor[index];\n      return \"\\n                <div class=\\\"legend-item\\\">\\n                    <span class=\\\"legend-color-box\\\" style=\\\"background-color:\".concat(color, \";\\\"></span>\\n                    <span class=\\\"legend-text\\\">\").concat(label, \": $\").concat(value, \"</span>\\n                </div>\\n            \");\n    });\n    legendContainer.innerHTML = items.join('');\n  };\n  var centerTextPlugin = {\n    id: 'centerTextPlugin',\n    afterDraw: function afterDraw(chart) {\n      drawCenterText(chart);\n      updateLegend(chart);\n    }\n  };\n  var myChart = new Chart(ctx, {\n    type: 'doughnut',\n    data: {\n      labels: ['Principal and Interest', 'Property Taxes', 'Private Mortgage Insurance (PMI)', 'Homeowner\\'s Association Fees (HOA)'],\n      datasets: [{\n        label: 'Mortgage Breakdown',\n        data: [calculateMonthlyPI(placeholderValues.homePrice, placeholderValues.downPayment, placeholderValues.loanTerm, placeholderValues.interestRate), Math.round(getPropertyTax(placeholderValues.propertyTaxes, placeholderValues.propertyTaxesFrequency) * 100) / 100, Math.round(placeholderValues.pmi * 100) / 100, Math.round(placeholderValues.hoa * 100) / 100],\n        backgroundColor: ['rgba(100, 149, 237, 0.9)', 'rgba(255, 223, 128, 0.9)', 'rgba(192, 192, 192, 0.9)', 'rgba(60, 179, 113, 0.9)'],\n        borderColor: ['#fff'],\n        borderWidth: 10\n      }]\n    },\n    options: {\n      cutout: '70%',\n      plugins: {\n        legend: {\n          display: false\n        },\n        datalabels: {\n          display: true,\n          color: '#000',\n          font: {\n            weight: 'bold',\n            size: 40,\n            family: 'Open Sans'\n          },\n          formatter: function formatter(value) {\n            return \"$\".concat(value);\n          }\n        },\n        tooltip: {\n          callbacks: {\n            label: function label(tooltipItem) {\n              return \" \".concat(tooltipItem.label, \": $\").concat(tooltipItem.raw);\n            },\n            labelTextColor: function labelTextColor() {\n              return '#fff';\n            }\n          },\n          titleFont: {\n            size: 28,\n            family: 'Open Sans'\n          },\n          bodyFont: {\n            size: 26,\n            family: 'Open Sans'\n          },\n          backgroundColor: '#333',\n          titleColor: '#fff',\n          bodyColor: '#fff',\n          displayColors: false\n        }\n      },\n      elements: {\n        arc: {\n          borderWidth: 1,\n          borderColor: '#fff'\n        }\n      },\n      animation: {\n        duration: 0\n      }\n    },\n    plugins: [centerTextPlugin]\n  });\n  var updateChartAndText = function updateChartAndText() {\n    myChart.update();\n  };\n  document.querySelector('.mortgage_input__submit').addEventListener('click', function (event) {\n    event.preventDefault();\n    var homePrice = parseFloat(document.getElementById('mortgage-price').value);\n    var downPayment = parseFloat(document.getElementById('down-payment').value);\n    var loanTerm = parseFloat(document.getElementById('mortgage-term').value);\n    var interestRate = parseFloat(document.getElementById('interest-rate').value);\n    var propertyTaxes = parseFloat(document.getElementById('property-taxes').value) || 0;\n    var propertyTaxesFrequency = document.getElementById('tax-frequency').value;\n    var pmi = parseFloat(document.getElementById('pmi-cost').value) || 0;\n    var hoa = parseFloat(document.getElementById('hoa-cost').value) || 0;\n    if (isNaN(homePrice) || isNaN(downPayment) || isNaN(loanTerm) || isNaN(interestRate) || homePrice <= 0 || downPayment < 0 || loanTerm <= 0 || interestRate <= 0) {\n      return;\n    }\n    var monthlyPI = calculateMonthlyPI(homePrice, downPayment, loanTerm, interestRate);\n    totalMonthlyPayment = calculateTotalMonthlyPayment(monthlyPI, propertyTaxes, propertyTaxesFrequency, pmi, hoa);\n    myChart.data.datasets[0].data = [monthlyPI, Math.round(getPropertyTax(propertyTaxes, propertyTaxesFrequency) * 100) / 100, Math.round(pmi * 100) / 100, Math.round(hoa * 100) / 100];\n    updateChartAndText();\n  });\n  totalMonthlyPayment = calculateTotalMonthlyPayment(calculateMonthlyPI(placeholderValues.homePrice, placeholderValues.downPayment, placeholderValues.loanTerm, placeholderValues.interestRate), placeholderValues.propertyTaxes, placeholderValues.propertyTaxesFrequency, placeholderValues.pmi, placeholderValues.hoa);\n  updateChartAndText();\n});\n\n//# sourceURL=webpack://monvvo-app/./public/js/main.js?");

/***/ }),

/***/ "./public/js/utils.js":
/*!****************************!*\
  !*** ./public/js/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add: () => (/* binding */ add),\n/* harmony export */   multiply: () => (/* binding */ multiply),\n/* harmony export */   subtract: () => (/* binding */ subtract)\n/* harmony export */ });\n// Your existing utility functions\nfunction multiply(a, b) {\n  return a * b;\n}\n\n// Add new utility functions as needed\nfunction add(a, b) {\n  return a + b;\n}\nfunction subtract(a, b) {\n  return a - b;\n}\n\n//# sourceURL=webpack://monvvo-app/./public/js/utils.js?");

/***/ }),

/***/ "./public/css/reset.css":
/*!******************************!*\
  !*** ./public/css/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://monvvo-app/./public/css/reset.css?");

/***/ }),

/***/ "./public/css/styles.css":
/*!*******************************!*\
  !*** ./public/css/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://monvvo-app/./public/css/styles.css?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/index.js");
/******/ 	
/******/ })()
;