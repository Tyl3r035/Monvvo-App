/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3387:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/jspdf/dist/jspdf.es.min.js + 1 modules
var jspdf_es_min = __webpack_require__(1355);
// EXTERNAL MODULE: ./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js
var jspdf_plugin_autotable = __webpack_require__(9170);
;// ./public/js/pdf/mortgage-pdf.js
 // Add this at the top
 // Ensure this is also imported for table generation

function generateMortgagePdf(paymentData, amortizationData) {
  var doc = new jsPDF();

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
;// ./public/js/home-affordability-calculator.js


document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event fired");

  // Inputs
  var annualIncomeInput = document.getElementById('annual-income');
  var monthlyDebtInput = document.getElementById('monthly-debt');
  var downPaymentInput = document.getElementById('affordability-down');
  var loanTermDropdown = document.getElementById('affordability-term');
  var creditScoreDropdown = document.getElementById('affordability-credit');

  // Buttons
  var updateBtn = document.getElementById('update-btn');
  var resetBtn = document.getElementById('reset-btn');

  // Restrict invalid characters in inputs
  var inputsToRestrict = [annualIncomeInput, monthlyDebtInput, downPaymentInput, loanTermDropdown, creditScoreDropdown];
  inputsToRestrict.forEach(function (input) {
    input.addEventListener('keydown', function (event) {
      if (event.key === "-" || event.key === "e") {
        event.preventDefault();
      }
    });
  });
  function calculateAndDisplayResults() {
    console.log("Calculating home affordability...");
    var annualIncome = parseFloat(annualIncomeInput.value) || 70000;
    var monthlyDebt = parseFloat(monthlyDebtInput.value) || 1200;
    var downPayment = parseFloat(downPaymentInput.value) || 10000;
    var loanTerm = parseInt(loanTermDropdown.value) || 30;
    var creditScore = parseInt(creditScoreDropdown.value) || 720;
    var baseInterestRate = creditScore >= 720 ? 0.05 : creditScore >= 670 ? 0.06 : 0.075;
    var monthlyInterestRate = baseInterestRate / 12;
    var numberOfPayments = loanTerm * 12;
    var frontEndRatio = 0.28; // Conservative ratio
    var backEndRatio = 0.36; // Aggressive ratio

    // Determine which tab is active and use the corresponding additional cost inputs
    var propertyTax, pmi, hoa;
    if (document.getElementById("max-budget").style.display !== "none") {
      propertyTax = parseFloat(document.getElementById("max-value-property-tax").value) || 0;
      pmi = parseFloat(document.getElementById("max-value-pmi").value) || 0;
      hoa = parseFloat(document.getElementById("max-value-hoa").value) || 0;
    } else {
      propertyTax = parseFloat(document.getElementById("recommended-value-property-tax").value) || 0;
      pmi = parseFloat(document.getElementById("recommended-value-pmi").value) || 0;
      hoa = parseFloat(document.getElementById("recommended-value-hoa").value) || 0;
    }

    // Calculations
    var recommendedMonthlyPayment = annualIncome / 12 * frontEndRatio;
    var maxMonthlyPayment = annualIncome / 12 * backEndRatio - monthlyDebt;
    var recommendedLoan = recommendedMonthlyPayment * (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)) / monthlyInterestRate;
    var maxLoan = maxMonthlyPayment * (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)) / monthlyInterestRate;

    // Monthly Mortgage Payment Calculation
    function calculateMonthlyPayment(loanAmount) {
      return loanAmount * (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)));
    }
    var recommendedMonthlyMortgage = calculateMonthlyPayment(Math.min(recommendedLoan, maxLoan)) + propertyTax + pmi + hoa;
    var maxMonthlyMortgage = calculateMonthlyPayment(Math.max(recommendedLoan, maxLoan)) + propertyTax + pmi + hoa;

    // Update Recommended Budget (Lower Loan Amount)
    var recommendedContent = document.getElementById("recommended-budget");
    if (recommendedContent) {
      var loanValueRecommended = recommendedContent.querySelector("#loan-total-value-recommended");
      if (loanValueRecommended) {
        loanValueRecommended.textContent = "$".concat(Math.ceil(Math.min(recommendedLoan, maxLoan)).toLocaleString());
      }
      var principalInterestLabel = recommendedContent.querySelector("#recommended-value-principal-interest");
      if (principalInterestLabel) {
        principalInterestLabel.textContent = "$".concat(Math.ceil(Math.min(recommendedLoan, maxLoan)).toLocaleString());
      }
      var monthlyPaymentLabel = recommendedContent.querySelector("#recommended-value-monthly-total");
      if (monthlyPaymentLabel) {
        monthlyPaymentLabel.textContent = "$".concat(Math.ceil(recommendedMonthlyMortgage).toLocaleString());
      }
    }

    // Update Maximum Budget (Higher Loan Amount)
    var maxContent = document.getElementById("max-budget");
    if (maxContent) {
      var loanValueMax = maxContent.querySelector("#loan-total-value-max");
      if (loanValueMax) {
        loanValueMax.textContent = "$".concat(Math.ceil(Math.max(recommendedLoan, maxLoan)).toLocaleString());
      }
      var _principalInterestLabel = maxContent.querySelector("#max-value-principal-interest");
      if (_principalInterestLabel) {
        _principalInterestLabel.textContent = "$".concat(Math.ceil(Math.max(recommendedLoan, maxLoan)).toLocaleString());
      }
      var _monthlyPaymentLabel = maxContent.querySelector("#max-value-monthly-total");
      if (_monthlyPaymentLabel) {
        _monthlyPaymentLabel.textContent = "$".concat(Math.ceil(maxMonthlyMortgage).toLocaleString());
      }
    }
    console.log("Results updated.");
  }

  // Fetch property tax, PMI, and HOA input elements
  var propertyTaxInput = document.getElementById("recommended-value-property-tax");
  var pmiInput = document.getElementById("recommended-value-pmi");
  var hoaInput = document.getElementById("recommended-value-hoa");

  // Function to attach event listeners
  function addUpdateListener(input) {
    input.addEventListener("input", calculateAndDisplayResults);
  }

  // Attach listeners to property tax, PMI, and HOA inputs
  addUpdateListener(propertyTaxInput);
  addUpdateListener(pmiInput);
  addUpdateListener(hoaInput);
  calculateAndDisplayResults();

  // Function to handle tab switching directly
  // function switchTabs(contentId, buttonId) {
  //     const tabs = document.querySelectorAll('.results-content > div');
  //     const navButtons = document.querySelectorAll('.results-tab');

  //     // Hide all content and deactivate all buttons
  //     tabs.forEach(tab => (tab.style.display = 'none'));
  //     navButtons.forEach(button => button.classList.remove('tab-active'));

  //     // Show the selected content and activate the corresponding button
  //     const selectedContent = document.getElementById(contentId);
  //     const selectedButton = document.getElementById(buttonId);

  //     if (selectedContent) {
  //         selectedContent.style.display = 'block';
  //         calculateAndDisplayResults(); // Recalculate when switching tabs
  //     } else {
  //         console.error(`Content with ID '${contentId}' not found.`);
  //     }

  //     if (selectedButton) {
  //         selectedButton.classList.add('tab-active');
  //     } else {
  //         console.error(`Button with ID '${buttonId}' not found.`);
  //     }
  // }

  function switchTabs(contentId, buttonId) {
    var tabs = document.querySelectorAll('.results-content > div');
    var navButtons = document.querySelectorAll('.results-tab');

    // Hide all content and deactivate all buttons
    tabs.forEach(function (tab) {
      return tab.style.display = 'none';
    });
    navButtons.forEach(function (button) {
      return button.classList.remove('tab-active');
    });

    // Show the selected content and activate the corresponding button
    var selectedContent = document.getElementById(contentId);
    var selectedButton = document.getElementById(buttonId);
    if (selectedContent) {
      selectedContent.style.display = 'block';
      calculateAndDisplayResults(); // Recalculate when switching tabs
    } else {
      console.error("Content with ID '".concat(contentId, "' not found."));
    }
    if (selectedButton) {
      selectedButton.classList.add('tab-active');
    } else {
      console.error("Button with ID '".concat(buttonId, "' not found."));
    }
  }

  // Tab switching event listeners
  var tabRecommended = document.getElementById('tab-recommended');
  if (tabRecommended) {
    tabRecommended.addEventListener('click', function () {
      switchTabs('recommended-budget', 'tab-recommended');
    });
  } else {
    console.error("Element with ID 'tab-recommended' not found in the DOM");
  }
  var tabMaxBudget = document.getElementById('tab-max-budget');
  if (tabMaxBudget) {
    tabMaxBudget.addEventListener('click', function () {
      switchTabs('max-budget', 'tab-max-budget');
    });
  } else {
    console.error("Element with ID 'tab-max-budget' not found in the DOM");
  }

  // Event listener for the Update button
  updateBtn.addEventListener("click", function () {
    console.log("Update button clicked.");
    calculateAndDisplayResults(); // Recalculate based on current inputs
  });

  // Event listener for the Reset button
  resetBtn.addEventListener("click", function () {
    console.log("Reset button clicked.");

    // Reset default values
    annualIncomeInput.value = "70000";
    monthlyDebtInput.value = "1200";
    downPaymentInput.value = "10000";
    loanTermDropdown.value = "30";
    creditScoreDropdown.value = "720";

    // Clear Property Tax, PMI, and HOA inputs
    propertyTaxInput.value = "";
    pmiInput.value = "";
    hoaInput.value = "";

    // Recalculate and display default results
    calculateAndDisplayResults();
  });

  // Attach listeners to Property Tax, PMI, and HOA for real-time updates
  function addUpdateListener(input) {
    input.addEventListener("input", calculateAndDisplayResults);
  }
  addUpdateListener(propertyTaxInput);
  addUpdateListener(pmiInput);
  addUpdateListener(hoaInput);
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
/******/ 			358: 0,
/******/ 			485: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [384,485,96], () => (__webpack_require__(3387)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=home-affordability-calculator.462ee534b5b93e4b6cd1.js.map