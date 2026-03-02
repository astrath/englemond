/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/englemond/admin.scss"
/*!*************************************!*\
  !*** ./assets/englemond/admin.scss ***!
  \*************************************/
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
/*!***********************************!*\
  !*** ./assets/englemond/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.scss */ "./assets/englemond/admin.scss");


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  // Handle Escape key to close modals
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('keydown', function (e) {
    // Check if Escape key is pressed
    if (e.key === 'Escape' || e.keyCode === 27) {
      // Close any open modal overlays
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.englemond-detail-modal-overlay, .englemond-price-modal-overlay').remove();
    }
  });

  // Handle click on detail column list
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.englemond-detail-list', function (e) {
    e.preventDefault();
    var $list = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var postId = $list.data('post-id');

    // Get current values
    var values = {};
    $list.find('li').each(function () {
      var $li = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var key = $li.data('metakey');
      var value = $li.find('span').text().trim();
      values[key] = value;
    });

    // Show modal
    showDetailEditModal(postId, values, $list);
  });

  // Handle click on price column
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.englemond-price-cell', function (e) {
    e.preventDefault();
    var $cell = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var postId = $cell.data('post-id');
    var currentPrice = $cell.data('price') || '';

    // Show price edit modal
    showPriceEditModal(postId, currentPrice, $cell);
  });
  function showDetailEditModal(postId, values, $list) {
    // Create modal HTML
    var modalHtml = "\n\t\t\t<div class=\"englemond-detail-modal-overlay\">\n\t\t\t\t<div class=\"englemond-detail-modal\">\n\t\t\t\t\t<div class=\"englemond-detail-modal-header\">\n\t\t\t\t\t\t<h2>Edit Product Details</h2>\n\t\t\t\t\t\t<button class=\"englemond-detail-modal-close\">&times;</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"englemond-detail-modal-body\">\n\t\t\t\t\t\t<div class=\"englemond-detail-field\">\n\t\t\t\t\t\t\t<label for=\"detail-grammage\">Grammage:</label>\n\t\t\t\t\t\t\t<input type=\"text\" id=\"detail-grammage\" name=\"grammage\" value=\"".concat(escapeHtml(values.grammage || ''), "\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"englemond-detail-field\">\n\t\t\t\t\t\t\t<label for=\"detail-Caratage\">Caratage:</label>\n\t\t\t\t\t\t\t<textarea id=\"detail-Caratage\" name=\"Caratage\" rows=\"4\">").concat(escapeHtml(values.Caratage || ''), "</textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"englemond-detail-field\">\n\t\t\t\t\t\t\t<label for=\"detail-cotation\">Cotation:</label>\n\t\t\t\t\t\t\t<input type=\"text\" id=\"detail-cotation\" name=\"cotation\" value=\"").concat(escapeHtml(values.cotation || ''), "\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"englemond-detail-modal-footer\">\n\t\t\t\t\t\t<button class=\"button button-secondary englemond-detail-modal-cancel\">Cancel</button>\n\t\t\t\t\t\t<button class=\"button button-primary englemond-detail-modal-save\">Save</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    var $modal = jquery__WEBPACK_IMPORTED_MODULE_0___default()(modalHtml);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').append($modal);

    // Close handlers
    $modal.find('.englemond-detail-modal-close, .englemond-detail-modal-cancel, .englemond-detail-modal-overlay').on('click', function (e) {
      if (e.target === this) {
        $modal.remove();
      }
    });

    // Save handler
    $modal.find('.englemond-detail-modal-save').on('click', function () {
      var newValues = {
        grammage: $modal.find('#detail-grammage').val(),
        Caratage: $modal.find('#detail-Caratage').val(),
        cotation: $modal.find('#detail-cotation').val()
      };
      saveProductDetails(postId, newValues, $list, $modal);
    });

    // Prevent closing when clicking inside modal
    $modal.find('.englemond-detail-modal').on('click', function (e) {
      e.stopPropagation();
    });
  }
  function saveProductDetails(postId, values, $list, $modal) {
    var $saveButton = $modal.find('.englemond-detail-modal-save');
    $saveButton.prop('disabled', true).text('Saving...');
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      url: englemondProductsAdmin.ajaxurl,
      type: 'POST',
      data: {
        action: 'englemond_products_update_details',
        post_id: postId,
        grammage: values.grammage,
        Caratage: values.Caratage,
        cotation: values.cotation,
        nonce: englemondProductsAdmin.nonce
      },
      success: function success(response) {
        if (response.success) {
          // Update the list display
          updateDetailList($list, values);
          $modal.remove();
        } else {
          alert('Error saving details: ' + (response.data || 'Unknown error'));
          $saveButton.prop('disabled', false).text('Save');
        }
      },
      error: function error() {
        alert('Error saving details. Please try again.');
        $saveButton.prop('disabled', false).text('Save');
      }
    });
  }
  function updateDetailList($list, values) {
    $list.find('li').each(function () {
      var $li = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var key = $li.data('metakey');
      if (values.hasOwnProperty(key)) {
        $li.find('span').text(values[key] || '');
      }
    });
  }
  function showPriceEditModal(postId, currentPrice, $cell) {
    // Create modal HTML
    var modalHtml = "\n\t\t\t<div class=\"englemond-price-modal-overlay\">\n\t\t\t\t<div class=\"englemond-price-modal\">\n\t\t\t\t\t<div class=\"englemond-price-modal-header\">\n\t\t\t\t\t\t<h2>Edit Product Price</h2>\n\t\t\t\t\t\t<button class=\"englemond-price-modal-close\">&times;</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"englemond-price-modal-body\">\n\t\t\t\t\t\t<div class=\"englemond-price-field\">\n\t\t\t\t\t\t\t<label for=\"price-value\">Price:</label>\n\t\t\t\t\t\t\t<input type=\"text\" id=\"price-value\" name=\"displayedPrice\" value=\"".concat(escapeHtml(currentPrice), "\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"englemond-price-modal-footer\">\n\t\t\t\t\t\t<button class=\"button button-secondary englemond-price-modal-cancel\">Cancel</button>\n\t\t\t\t\t\t<button class=\"button button-primary englemond-price-modal-save\">Save</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t");
    var $modal = jquery__WEBPACK_IMPORTED_MODULE_0___default()(modalHtml);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').append($modal);

    // Close handlers
    $modal.find('.englemond-price-modal-close, .englemond-price-modal-cancel, .englemond-price-modal-overlay').on('click', function (e) {
      if (e.target === this) {
        $modal.remove();
      }
    });

    // Save handler
    $modal.find('.englemond-price-modal-save').on('click', function () {
      var newPrice = $modal.find('#price-value').val();
      saveProductPrice(postId, newPrice, $cell, $modal);
    });

    // Prevent closing when clicking inside modal
    $modal.find('.englemond-price-modal').on('click', function (e) {
      e.stopPropagation();
    });

    // Focus on input
    $modal.find('#price-value').focus().select();
  }
  function saveProductPrice(postId, price, $cell, $modal) {
    var $saveButton = $modal.find('.englemond-price-modal-save');
    $saveButton.prop('disabled', true).text('Saving...');
    jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({
      url: englemondProductsAdmin.ajaxurl,
      type: 'POST',
      data: {
        action: 'englemond_products_update_price',
        post_id: postId,
        price: price,
        nonce: englemondProductsAdmin.nonce
      },
      success: function success(response) {
        if (response.success) {
          // Update the cell display
          $cell.data('price', price);
          $cell.text(price || '—');
          $modal.remove();
        } else {
          alert('Error saving price: ' + (response.data || 'Unknown error'));
          $saveButton.prop('disabled', false).text('Save');
        }
      },
      error: function error() {
        alert('Error saving price. Please try again.');
        $saveButton.prop('disabled', false).text('Save');
      }
    });
  }
  function escapeHtml(text) {
    var map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function (m) {
      return map[m];
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=englemond-products.js.map