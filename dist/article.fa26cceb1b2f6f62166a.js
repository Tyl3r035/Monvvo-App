/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 7929:
/***/ (() => {



// Immediately disable scrolling so the browser doesn't jump to an anchor
document.documentElement.style.overflow = 'hidden';

// Immediately remove any hash from the URL and force scroll position to (0,0)
// (For extra reliability, consider placing this inline in your HTML's <head>)
if (window.location.hash) {
  history.replaceState(null, "", window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);

// Prevent browser from restoring scroll position
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Listen for pageshow (handles back/forward cache)
window.addEventListener('pageshow', function (event) {
  window.scrollTo(0, 0);
});
document.addEventListener("DOMContentLoaded", function () {
  // Ensure scroll behavior is set to auto to avoid any smooth scroll on load
  document.documentElement.style.scrollBehavior = "auto";

  // Force scroll to top after DOM is ready
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // Re-enable scrolling once we're sure the page is at the top
  document.documentElement.style.overflow = '';

  // Remove focus from any element that might trigger a jump
  if (document.activeElement && document.activeElement !== document.body) {
    document.activeElement.blur();
  }
  document.body.focus();

  // Main DOM-dependent code starts here
  var tocOpenButton = document.querySelector(".toc-open");
  var tocCloseButton = document.querySelector(".toc-close");
  var mobileTOC = document.querySelector(".mobile-toc");
  var mobileMenuButton = document.querySelector(".mobile-btn");
  var tocItems = document.querySelectorAll(".toc-item a");
  var sections = Array.from(tocItems).map(function (link) {
    var targetId = link.getAttribute("href").slice(1);
    return document.getElementById(targetId);
  });
  var offset = 80; // Adjust to match the height of your fixed header

  // Mobile TOC open/close functionality
  tocOpenButton.addEventListener("click", function () {
    mobileTOC.classList.add("active");
    mobileMenuButton.classList.add("disabled");
  });
  tocCloseButton.addEventListener("click", function () {
    mobileTOC.classList.remove("active");
    mobileMenuButton.classList.remove("disabled");
  });
  mobileMenuButton.addEventListener("click", function (event) {
    if (mobileMenuButton.classList.contains("disabled")) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  // Smooth scrolling for TOC links (only for user-triggered clicks)
  tocItems.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var targetId = this.getAttribute("href").slice(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth" // Only applies on user-triggered actions
        });
      }
    });
  });

  // TOC Scroll Highlighting using IntersectionObserver
  var observerOptions = {
    root: null,
    rootMargin: "-".concat(offset, "px 0px -50% 0px"),
    threshold: 0
  };
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var index = sections.indexOf(entry.target);
      if (entry.isIntersecting) {
        tocItems.forEach(function (item) {
          return item.parentElement.classList.remove("toc-item-active");
        });
        if (index !== -1) {
          tocItems[index].parentElement.classList.add("toc-item-active");
        }
      }
    });
  }, observerOptions);
  sections.forEach(function (section) {
    if (section) observer.observe(section);
  });
});

// Also ensure that on full load we scroll to the top.
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
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
/******/ 			275: 0,
/******/ 			97: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [97], () => (__webpack_require__(7929)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=article.fa26cceb1b2f6f62166a.js.map