/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/browser/view.scss"
/*!**********************************!*\
  !*** ./assets/browser/view.scss ***!
  \**********************************/
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
/*!********************************!*\
  !*** ./assets/browser/view.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.scss */ "./assets/browser/view.scss");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Frontend JavaScript for the englemond/browser block
 */


(function ($) {
  'use strict';

  // Initialize all browser blocks on the page
  function initBrowserBlocks() {
    $('.wp-block-englemond-browser').each(function () {
      var $block = $(this);

      // Skip if already initialized
      if ($block.data('initialized') === true) {
        return;
      }
      $block.data('initialized', true);
      new ProductBrowser($block);
    });
  }
  var ProductBrowser = /*#__PURE__*/function () {
    function ProductBrowser($container) {
      _classCallCheck(this, ProductBrowser);
      this.$container = $container;
      this.productsPerPage = parseInt($container.data('products-per-page')) || 12;
      this.currentPage = 1;
      this.currentCategories = [];
      this.currentSearch = $container.find('.wp-block-englemond-browser__search-input').val().trim();
      this.ajaxUrl = $container.data('ajax-url');
      this.nonce = $container.data('nonce');
      this.$productsGrid = $container.find('.wp-block-englemond-browser__products-grid');
      this.$pagination = $container.find('.wp-block-englemond-browser__pagination');
      this.$loading = $container.find('.wp-block-englemond-browser__loading');
      this.$noResults = $container.find('.wp-block-englemond-browser__no-results');
      this.init();
    }
    return _createClass(ProductBrowser, [{
      key: "init",
      value: function init() {
        var self = this;

        // Search input handler with debounce
        var $searchInput = this.$container.find('.wp-block-englemond-browser__search-input');
        if ($searchInput.length) {
          var searchTimeout;
          $searchInput.on('input', function () {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(function () {
              self.currentSearch = $(this).val().trim();
              self.currentPage = 1;
              self.loadProducts();
            }.bind(this), 300);
          });
        }

        // Category checkbox handlers
        this.$container.on('change', '.wp-block-englemond-browser__category-checkbox', function () {
          var $checkbox = $(this);
          var categoryId = $checkbox.val();
          var parentCategory = $checkbox.data('parent-category');
          var isAll = $checkbox.hasClass('wp-block-englemond-browser__category-checkbox--all');
          if (isAll && $checkbox.is(':checked')) {
            // If "All" is checked, uncheck all other checkboxes in this group
            self.$container.find('.wp-block-englemond-browser__category-checkbox[data-parent-category="' + parentCategory + '"]').not($checkbox).prop('checked', false);
            self.currentCategories = self.currentCategories.filter(function (cat) {
              return cat.parentCategory !== parentCategory;
            });
          } else if (isAll && !$checkbox.is(':checked')) {
            // If "All" is unchecked, do nothing special
          } else {
            // If a specific category is checked/unchecked
            if ($checkbox.is(':checked')) {
              // Uncheck "All" for this parent category
              self.$container.find('.wp-block-englemond-browser__category-checkbox--all[data-parent-category="' + parentCategory + '"]').prop('checked', false);

              // Add to categories array if not already present
              var categoryIdInt = parseInt(categoryId);
              if (self.currentCategories.indexOf(categoryIdInt) === -1) {
                self.currentCategories.push(categoryIdInt);
              }
            } else {
              // Remove from categories array
              var _categoryIdInt = parseInt(categoryId);
              self.currentCategories = self.currentCategories.filter(function (cat) {
                return cat !== _categoryIdInt;
              });
            }
          }

          // Update currentCategories from all checked checkboxes
          self.updateCategoriesFromCheckboxes();
          self.currentPage = 1;
          self.loadProducts();
        });
        this.$container.on('click', '.wp-block-englemond-browser__sidebar-toggle', function () {
          self.$container.find('.wp-block-englemond-browser__sidebar').toggleClass('active');
        });
        this.$container.on('click', '.wp-block-englemond-browser__sidebar-close', function () {
          self.$container.find('.wp-block-englemond-browser__sidebar').removeClass('active');
        });

        // Initial load
        this.loadProducts();
      }
    }, {
      key: "updateCategoriesFromCheckboxes",
      value: function updateCategoriesFromCheckboxes() {
        var self = this;
        this.currentCategories = [];
        this.$container.find('.wp-block-englemond-browser__category-checkbox:checked').each(function () {
          var $checkbox = $(this);
          var categoryId = $checkbox.val();

          // Skip "all" checkboxes
          if (categoryId !== 'all') {
            var categoryIdInt = parseInt(categoryId);
            if (categoryIdInt && self.currentCategories.indexOf(categoryIdInt) === -1) {
              self.currentCategories.push(categoryIdInt);
            }
          }
        });
      }
    }, {
      key: "loadProducts",
      value: function loadProducts() {
        var self = this;
        this.showLoading();
        this.hideNoResults();
        var params = {
          action: 'englemond_browser_get_products',
          nonce: this.nonce,
          page: this.currentPage,
          per_page: this.productsPerPage
        };

        // Add categories as array
        if (this.currentCategories.length > 0) {
          params.cats = this.currentCategories;
        }

        // Add search
        if (this.currentSearch) {
          params.search = this.currentSearch;
        }
        $.ajax({
          url: this.ajaxUrl,
          type: 'GET',
          data: params,
          dataType: 'json',
          success: function success(response) {
            self.hideLoading();
            if (response.success && response.data) {
              self.renderProducts(response.data.products || []);
              self.renderPagination(response.data.pagination || {});
            } else {
              self.showNoResults();
            }
          },
          error: function error(xhr, status, _error) {
            console.error('Error loading products:', _error);
            self.hideLoading();
            self.showNoResults();
          }
        });
      }
    }, {
      key: "renderProducts",
      value: function renderProducts(products) {
        if (products.length === 0) {
          this.showNoResults();
          this.$productsGrid.empty();
          return;
        }
        var html = products.map(function (product) {
          var thumbnail = product.thumbnail || '';
          var title = product.title || '';
          var permalink = product.permalink || '#';
          var price = product.price || '';
          var productHtml = '<article class="wp-block-englemond-browser__product">';
          productHtml += '<a href="' + permalink + '" class="wp-block-englemond-browser__product-link">';
          if (thumbnail) {
            productHtml += '<div class="wp-block-englemond-browser__product-thumbnail">';
            productHtml += '<img src="' + thumbnail + '" alt="' + title.replace(/"/g, '&quot;') + '" loading="lazy" />';
            productHtml += '</div>';
          }
          productHtml += '<div class="wp-block-englemond-browser__product-content">';
          productHtml += '<h3 class="wp-block-englemond-browser__product-title">' + title + '</h3>';
          if (price) {
            productHtml += '<div class="wp-block-englemond-browser__product-price">' + price + '</div>';
          }
          productHtml += '</div>';
          productHtml += '</a>';
          productHtml += '</article>';
          return productHtml;
        }).join('');
        this.$productsGrid.html(html);
      }
    }, {
      key: "renderPagination",
      value: function renderPagination(pagination) {
        if (!pagination || !pagination.total_pages || pagination.total_pages <= 1) {
          this.$pagination.empty();
          return;
        }
        var self = this;
        var current_page = pagination.current_page;
        var total_pages = pagination.total_pages;
        var prev_page = pagination.prev_page;
        var next_page = pagination.next_page;
        var pages = [];

        // Previous button
        if (prev_page) {
          pages.push('<button class="wp-block-englemond-browser__pagination-button wp-block-englemond-browser__pagination-button--prev" ' + 'data-page="' + prev_page + '" ' + 'aria-label="' + this.getText('Previous page') + '">' + this.getText('Previous') + '</button>');
        }

        // Page numbers
        var maxVisible = 5;
        var startPage = Math.max(1, current_page - Math.floor(maxVisible / 2));
        var endPage = Math.min(total_pages, startPage + maxVisible - 1);
        if (endPage - startPage < maxVisible - 1) {
          startPage = Math.max(1, endPage - maxVisible + 1);
        }
        if (startPage > 1) {
          pages.push('<button class="wp-block-englemond-browser__pagination-button" data-page="1">1</button>');
          if (startPage > 2) {
            pages.push('<span class="wp-block-englemond-browser__pagination-ellipsis">...</span>');
          }
        }
        for (var i = startPage; i <= endPage; i++) {
          var activeClass = i === current_page ? ' is-active' : '';
          pages.push('<button class="wp-block-englemond-browser__pagination-button' + activeClass + '" ' + 'data-page="' + i + '">' + i + '</button>');
        }
        if (endPage < total_pages) {
          if (endPage < total_pages - 1) {
            pages.push('<span class="wp-block-englemond-browser__pagination-ellipsis">...</span>');
          }
          pages.push('<button class="wp-block-englemond-browser__pagination-button" data-page="' + total_pages + '">' + total_pages + '</button>');
        }

        // Next button
        if (next_page) {
          pages.push('<button class="wp-block-englemond-browser__pagination-button wp-block-englemond-browser__pagination-button--next" ' + 'data-page="' + next_page + '" ' + 'aria-label="' + this.getText('Next page') + '">' + this.getText('Next') + '</button>');
        }
        this.$pagination.html(pages.join(''));

        // Add click handlers
        this.$pagination.on('click', '.wp-block-englemond-browser__pagination-button', function (e) {
          e.preventDefault();
          var page = parseInt($(this).data('page'));
          if (page && page !== self.currentPage) {
            self.currentPage = page;
            self.loadProducts();
            // Scroll to top of products grid
            $('html, body').animate({
              scrollTop: self.$productsGrid.offset().top - 100
            }, 500);
          }
        });
      }
    }, {
      key: "showLoading",
      value: function showLoading() {
        if (this.$loading.length) {
          this.$loading.show();
        }
        if (this.$productsGrid.length) {
          this.$productsGrid.css('opacity', '0.5');
        }
      }
    }, {
      key: "hideLoading",
      value: function hideLoading() {
        if (this.$loading.length) {
          this.$loading.hide();
        }
        if (this.$productsGrid.length) {
          this.$productsGrid.css('opacity', '1');
        }
      }
    }, {
      key: "showNoResults",
      value: function showNoResults() {
        if (this.$noResults.length) {
          this.$noResults.show();
        }
      }
    }, {
      key: "hideNoResults",
      value: function hideNoResults() {
        if (this.$noResults.length) {
          this.$noResults.hide();
        }
      }
    }, {
      key: "getText",
      value: function getText(key) {
        // Simple text mapping - can be enhanced with i18n
        var texts = {
          'Previous': 'Previous',
          'Next': 'Next',
          'Previous page': 'Previous page',
          'Next page': 'Next page'
        };
        return texts[key] || key;
      }
    }]);
  }(); // Initialize on DOM ready
  $(document).ready(function () {
    initBrowserBlocks();
  });

  // Re-initialize for dynamically loaded content
  if (typeof wp !== 'undefined' && wp.domReady) {
    wp.domReady(initBrowserBlocks);
  }
})(jQuery);
})();

/******/ })()
;
//# sourceMappingURL=view.js.map