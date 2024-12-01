/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7522:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./public/js/mortgage-calculator.js + 1 modules
var mortgage_calculator = __webpack_require__(6426);
// EXTERNAL MODULE: ./public/js/mortgagecalcs.js
var mortgagecalcs = __webpack_require__(7687);
;// ./node_modules/emailjs-com/es/store/store.js
const store = {
    _origin: 'https://api.emailjs.com',
};

;// ./node_modules/emailjs-com/es/methods/init/init.js

/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
const init = (userID, origin = 'https://api.emailjs.com') => {
    store._userID = userID;
    store._origin = origin;
};

;// ./node_modules/emailjs-com/es/utils/validateParams.js
const validateParams = (userID, serviceID, templateID) => {
    if (!userID) {
        throw 'The user ID is required. Visit https://dashboard.emailjs.com/admin/integration';
    }
    if (!serviceID) {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID) {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
    return true;
};

;// ./node_modules/emailjs-com/es/models/EmailJSResponseStatus.js
class EmailJSResponseStatus {
    constructor(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
}

;// ./node_modules/emailjs-com/es/api/sendPost.js


const sendPost = (url, data, headers = {}) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', ({ target }) => {
            const responseStatus = new EmailJSResponseStatus(target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', ({ target }) => {
            reject(new EmailJSResponseStatus(target));
        });
        xhr.open('POST', store._origin + url, true);
        Object.keys(headers).forEach((key) => {
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.send(data);
    });
};

;// ./node_modules/emailjs-com/es/methods/send/send.js



/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = (serviceID, templateID, templatePrams, userID) => {
    const uID = userID || store._userID;
    validateParams(uID, serviceID, templateID);
    const params = {
        lib_version: '3.2.0',
        user_id: uID,
        service_id: serviceID,
        template_id: templateID,
        template_params: templatePrams,
    };
    return sendPost('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};

;// ./node_modules/emailjs-com/es/methods/sendForm/sendForm.js



const findHTMLForm = (form) => {
    let currentForm;
    if (typeof form === 'string') {
        currentForm = document.querySelector(form);
    }
    else {
        currentForm = form;
    }
    if (!currentForm || currentForm.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
    }
    return currentForm;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = (serviceID, templateID, form, userID) => {
    const uID = userID || store._userID;
    const currentForm = findHTMLForm(form);
    validateParams(uID, serviceID, templateID);
    const formData = new FormData(currentForm);
    formData.append('lib_version', '3.2.0');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', uID);
    return sendPost('/api/v1.0/email/send-form', formData);
};

;// ./node_modules/emailjs-com/es/index.js




/* harmony default export */ const es = ({
    init: init,
    send: send,
    sendForm: sendForm,
});

;// ./public/js/index.js







// Your additional JavaScript logic here

// Lazy Loading Logic
document.addEventListener('DOMContentLoaded', function () {
  var lazyImages = document.querySelectorAll('img[data-src]');
  if ('IntersectionObserver' in window) {
    var lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var lazyImage = entry.target;
          __webpack_require__(6705)("./".concat(lazyImage.dataset.src)).then(function (module) {
            lazyImage.src = module["default"];
            lazyImage.classList.remove('lazy');
          })["catch"](function (err) {
            return console.error('Failed to load image', err);
          });
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    lazyImages.forEach(function (lazyImage) {
      __webpack_require__(6705)("./".concat(lazyImage.dataset.src)).then(function (module) {
        lazyImage.src = module["default"];
        lazyImage.classList.remove('lazy');
      })["catch"](function (err) {
        return console.error('Failed to load image', err);
      });
    });
  }
});
var sendEmail = function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm('service_tq3utyr', 'template_7wx87yw', e.target, '3oAkujQUbJuuWbt1u').then(function (result) {
    alert('Message sent successfully!');
  }, function (error) {
    alert('Failed to send message. Please try again.');
  });
};

/***/ }),

/***/ 7687:
/***/ (() => {

// Toggle Functionality
var advancedText = document.getElementById("advanced-text-fluid");
var additionalInputs = document.getElementById("additional-inputs");
var advancedArrow = document.getElementById('advanced-arrow');
if (advancedText && additionalInputs) {
  // Start with the additional inputs hidden
  additionalInputs.style.display = "none";

  // Toggle display style directly in JavaScript
  advancedText.addEventListener("click", function () {
    console.log("Advanced options toggled");
    if (additionalInputs.style.display === "none") {
      additionalInputs.style.display = "flex";
      advancedArrow.style.rotate = "180deg";
    } else {
      additionalInputs.style.display = "none";
      advancedArrow.style.rotate = "0deg";
    }
  });
} else {
  console.log("Advanced options elements not found");
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

// Tooltip Info Icon JS
var infoIcons = document.querySelectorAll('.info-icon');
infoIcons.forEach(function (icon) {
  var tooltipText = icon.getAttribute('data-tooltip');
  if (tooltipText) {
    var tooltip = document.createElement('div');
    tooltip.className = 'info-tooltips';
    tooltip.textContent = tooltipText;
    document.body.appendChild(tooltip); // Append to body for consistent positioning

    icon.addEventListener('mouseenter', function () {
      return showTooltip(icon, tooltip);
    });
    icon.addEventListener('mouseleave', function () {
      return hideTooltip(tooltip);
    });
    icon.addEventListener('touchstart', function (event) {
      showTooltip(icon, tooltip);
      event.stopPropagation(); // Prevent immediate hiding on touchstart
    });
  }
});

// Hide tooltips on any touch or click outside
document.addEventListener('click', hideAllTooltips);
document.addEventListener('touchend', hideAllTooltips);
function showTooltip(icon, tooltip) {
  var iconRect = icon.getBoundingClientRect();
  var tooltipRect = tooltip.getBoundingClientRect();

  // Adjust position based on page scroll
  var tooltipX = window.pageXOffset + iconRect.right - tooltipRect.width - 5; // 5px left of the icon's right edge
  var tooltipY = window.pageYOffset + iconRect.top - tooltipRect.height - 5; // 5px above the icon's top edge

  tooltip.style.left = "".concat(tooltipX, "px");
  tooltip.style.top = "".concat(tooltipY, "px");
  tooltip.classList.add('visible');
}
function hideTooltip(tooltip) {
  tooltip.classList.remove('visible');
}
function hideAllTooltips() {
  document.querySelectorAll('.info-tooltips.visible').forEach(function (tooltip) {
    tooltip.classList.remove('visible');
  });
}

// Amortization Table Expansion Logic
var expandBox = document.querySelector(".expand-box");
var amortizationTableBody = document.getElementById("amortization-table-body");
var expandText = document.querySelector(".expand-text");
var expandIcon = document.querySelector(".expand-icon");

// Ensure the elements exist before adding event listeners
if (expandBox && amortizationTableBody && expandText && expandIcon) {
  // Initialize the table to show only the first three rows
  var rows = Array.from(amortizationTableBody.rows);
  rows.forEach(function (row, index) {
    row.style.display = index < 3 ? "table-row" : "none";
  });

  // Add click event to the expand-box
  expandBox.addEventListener("click", function () {
    var isExpanded = expandText.textContent === "Expand";

    // Toggle row visibility
    rows.forEach(function (row, index) {
      row.style.display = isExpanded || index < 3 ? "table-row" : "none";
    });

    // Update the expand/collapse text
    expandText.textContent = isExpanded ? "Collapse" : "Expand";

    // Rotate the icon
    expandIcon.style.transform = isExpanded ? "rotate(180deg)" : "rotate(0deg)";
  });
} else {
  console.error("Expand/Collapse elements not found. Ensure the HTML structure is correct.");
}

/***/ }),

/***/ 6705:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./icons/dollar.svg": [
		1867,
		867
	],
	"./icons/down-arrow.svg": [
		9749,
		749
	],
	"./icons/info-icon.svg": [
		1397,
		397
	],
	"./icons/item-corner.svg": [
		8730,
		730
	],
	"./icons/percentage.svg": [
		1805,
		805
	],
	"./icons/printer-icon.svg": [
		3991,
		991
	],
	"./logos/Monvvo-Transparent.svg": [
		9843,
		843
	],
	"./logos/monvvo-favicon.svg": [
		3005,
		5
	],
	"./logos/monvvo-logo.png": [
		1830,
		449
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 6705;
module.exports = webpackAsyncContext;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"5":"783e76ea13c00437d521","354":"6c39a03c95ce14fafea5","397":"d67032c4bd1ad636d6b6","449":"c667166afb4f1fc3aac7","661":"78adcfd3f6a66db4563e","730":"10b1f964bfbcc15a9aeb","749":"bb5c0f697c2e985e9490","805":"113374e6a7cb45c04ad9","838":"f1b59550c4041668c0db","843":"ee906024d82bed614358","867":"4413282f4ba2ff892749","991":"6c46db5e81a3f635e763"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + "main" + "." + "012ddea77677616012d9" + ".css";
/******/ 		};
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "monvvo-app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
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
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [246,426], () => (__webpack_require__(7522)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.5c80835b4e9e90ece33d.js.map