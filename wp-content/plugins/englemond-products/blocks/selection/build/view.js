/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/selection/view.scss"
/*!************************************!*\
  !*** ./assets/selection/view.scss ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "jquery"
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
(module) {

module.exports = jQuery;

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./assets/selection/view.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.scss */ "./assets/selection/view.scss");



/**
 * Front-end script for englemond/selection block carousel
 */
(function ($) {
  'use strict';

  $(document).ready(function () {
    $('.wp-block-englemond-selection__carousel').each(function () {
      var $carousel = $(this);
      var $viewport = $carousel.find('.wp-block-englemond-selection__carousel-viewport');
      var $inner = $carousel.find('.wp-block-englemond-selection__carousel-inner');
      var $items = $carousel.find('.wp-block-englemond-selection__carousel-item');
      var $prevBtn = $carousel.find('.wp-block-englemond-selection__carousel-control-prev');
      var $nextBtn = $carousel.find('.wp-block-englemond-selection__carousel-control-next');
      var $sideLinks = $carousel.find('.wp-block-englemond-selection__side a[data-index]');
      if ($items.length === 0) {
        return;
      }

      // Get columns count from the inner width calculation
      // The width is set as a percentage: (total items * 100) / columnsCount
      function getColumnsCount() {
        var windowWidth = $(window).width();
        // Override to 1 column if window width is less than 600px
        if (windowWidth < 600) {
          return 1;
        }
        var innerWidth = parseFloat($inner.css('width')) || 0;
        var viewportWidth = $viewport.width();
        var itemsPerView = Math.round(viewportWidth / (innerWidth / $items.length));
        return itemsPerView || 3;
      }
      var columnsCount = getColumnsCount();
      var currentIndex = 0;
      var totalItems = $items.length;
      var maxIndex = Math.max(0, totalItems - columnsCount);

      // Calculate item width percentage
      var itemWidthPercent = 100 / columnsCount;

      /**
       * Update carousel position
       */
      function updateCarousel() {
        // Recalculate columns count on each update to handle window resize
        columnsCount = getColumnsCount();
        itemWidthPercent = 100 / columnsCount;
        maxIndex = Math.max(0, totalItems - columnsCount);
        $inner.css('width', "".concat(totalItems * 100 / columnsCount, "%"));
        // Ensure currentIndex doesn't exceed maxIndex
        if (currentIndex > maxIndex) {
          currentIndex = maxIndex;
        }
        var offset = -(currentIndex * itemWidthPercent);
        $inner.css('margin-left', "".concat(offset, "%"));

        // Update button states
        $prevBtn.prop('disabled', currentIndex <= 0);
        $nextBtn.prop('disabled', currentIndex >= maxIndex);

        // Update active link in side panel
        $sideLinks.removeClass('active');
        $sideLinks.filter("[data-index=\"".concat(currentIndex, "\"]")).addClass('active');
      }

      /**
       * Go to specific index
       */
      function goToIndex(index) {
        currentIndex = Math.max(0, Math.min(index, maxIndex));
        updateCarousel();
      }

      /**
       * Go to previous slide
       */
      function goToPrev() {
        if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
        }
      }

      /**
       * Go to next slide
       */
      function goToNext() {
        if (currentIndex < maxIndex) {
          currentIndex++;
          updateCarousel();
        }
      }

      // Event handlers
      $prevBtn.on('click', function (e) {
        e.preventDefault();
        goToPrev();
      });
      $nextBtn.on('click', function (e) {
        e.preventDefault();
        goToNext();
      });
      $sideLinks.on('click', function (e) {
        var index = parseInt($(this).data('index'), 10);
        if (!isNaN(index)) {
          e.preventDefault();
          goToIndex(index);
        }
      });

      // Keyboard navigation
      $carousel.on('keydown', function (e) {
        if (e.key === 'ArrowLeft' || e.keyCode === 37) {
          e.preventDefault();
          goToPrev();
        } else if (e.key === 'ArrowRight' || e.keyCode === 39) {
          e.preventDefault();
          goToNext();
        }
      });

      // Touch/swipe support
      var touchStartX = 0;
      var touchEndX = 0;
      $viewport.on('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
      });
      $viewport.on('touchend', function (e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      });
      function handleSwipe() {
        var swipeThreshold = 50;
        var diff = touchStartX - touchEndX;
        if (Math.abs(diff) > swipeThreshold) {
          if (diff > 0) {
            // Swipe left - go next
            goToNext();
          } else {
            // Swipe right - go prev
            goToPrev();
          }
        }
      }

      // Window resize listener to update column count
      var resizeTimeout;
      $(window).on('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
          updateCarousel();
        }, 100);
      });

      // Initialize
      updateCarousel();
    });
  });
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=view.js.map