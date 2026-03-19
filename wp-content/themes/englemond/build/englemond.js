/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/menu.js"
/*!***************************!*\
  !*** ./assets/js/menu.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

(jquery__WEBPACK_IMPORTED_MODULE_0___default().fn).englemondSubmenuPanoramaMenu = function () {
  const $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(' > ul').each(function () {
    const cls = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('class');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('class', 'iis-style-submenu-panorama__items');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).wrap('<div class="is-style-submenu-panorama__container ' + cls + '">');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find(' > .is-style-submenu-panorama__container ').append('<div class="is-style-panorama-subitem-panorama__preview">');
  const $preview = $menu.find('.is-style-panorama-subitem-panorama__preview');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.has-image').on('mouseenter', function () {
    const imgUrl = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('img').attr('src');
    const desc = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.wp-block-navigation-item__description').html();
    const title = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.wp-block-navigation-item__label').html();
    $menu.find('.has-preview').removeClass('has-preview');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('has-preview');
    $preview.html(`<h4>${title}</h4><p>${desc}</p><img src="${imgUrl}"}">`);
  });
};
jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.is-style-submenu-panorama').each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).englemondSubmenuPanoramaMenu();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.wp-block-navigation-submenu__toggle', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu-is-open').removeClass('submenu-is-open');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().toggleClass('submenu-is-open');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.main-menu-toggle', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wp-block-navigation__responsive-container-open').click();
  });
});

/***/ },

/***/ "./assets/js/search.js"
/*!*****************************!*\
  !*** ./assets/js/search.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

const SEARCH_MIN_LENGTH = 3;
const SEARCH_DEBOUNCE_MS = 300;
function englemondProductSearch() {
  const $searchBlocks = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.wp-block-search');
  if (!$searchBlocks.length) {
    return;
  }
  $searchBlocks.each(function () {
    const $block = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    const $input = $block.find('.wp-block-search__input');
    const $submit = $block.find('[type="submit"], .wp-block-search__button').first();
    $submit.addClass('fa fa-chevron-right');
    if (!$input.length) {
      return;
    }
    $input.attr('autocomplete', 'off');

    // Avoid binding multiple times
    if ($block.data('englemond-search-bound')) {
      return;
    }
    $block.data('englemond-search-bound', true);

    // Create suggestions container
    const $suggestions = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="englemond-search-suggestions" aria-live="polite"></div>');
    $block.append($suggestions);

    // Create loader (CSS-based spinner, no Font Awesome)
    const $loader = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="englemond-search-loader" aria-hidden="true"><span class="englemond-search-loader__spinner"></span></div>');
    $block.append($loader);
    let debounceTimer = null;
    let lastQuery = '';

    // Remember original submit button position so it can be moved
    // into the suggestions popup and restored later.
    if ($submit.length) {
      if (!$submit.data('englemond-original-parent')) {
        $submit.data('englemond-original-parent', $submit.parent());
        $submit.data('englemond-original-next', $submit.next());
      }

      // Hidden by default; it will only be shown inside the popup
      // when the suggestions list contains exactly 5 items.
      $submit.hide();
    }
    function restoreSubmitPosition() {
      if (!$submit.length) {
        return;
      }
      const $originalParent = $submit.data('englemond-original-parent');
      const $originalNext = $submit.data('englemond-original-next');
      if (!$originalParent || !$originalParent.length) {
        return;
      }
      const $currentParent = $submit.parent();
      if ($currentParent && $currentParent.hasClass('englemond-search-suggestions__submit')) {
        if ($originalNext && $originalNext.length) {
          $originalNext.before($submit);
        } else {
          $originalParent.append($submit);
        }
      }
      $submit.hide();
    }
    function clearSuggestions() {
      restoreSubmitPosition();
      $suggestions.empty().removeClass('is-visible');
      $loader.removeClass('is-visible');
    }
    function renderSuggestions(items) {
      $suggestions.empty();
      restoreSubmitPosition();

      // Aucun résultat trouvé
      if (!items || !items.length) {
        const $empty = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="englemond-search-suggestions__empty"></div>').text('Aucun résultat trouvé');
        $suggestions.append($empty).addClass('is-visible');
        return;
      }
      const $list = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul class="englemond-search-suggestions__list"></ul>');
      items.forEach(item => {
        const name = item.name || item.title?.rendered || '';
        const url = item.permalink || item.link || '#';
        const thumb = item.featured_media_url || item.image?.src || item.images?.[0]?.src || null;
        const reference = item.reference || item.sku || item.meta?.reference || '';
        if (!name || !url) {
          return;
        }
        const $li = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li class="englemond-search-suggestions__item"></li>');
        const $a = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<a class="englemond-search-suggestions__link"></a>').attr('href', url);
        if (thumb) {
          const $icon = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span class="englemond-search-suggestions__icon"></span>');
          const $img = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<img alt="">').attr('src', thumb).attr('loading', 'lazy');
          $icon.append($img);
          $a.append($icon);
        }
        const $text = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span class="englemond-search-suggestions__text"></span>');
        const $title = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span class="englemond-search-suggestions__title"></span>').text(name);
        $text.append($title);
        if (reference) {
          const $subtitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span class="englemond-search-suggestions__subtitle"></span>').text(reference);
          $text.append($subtitle);
        }
        $a.append($text);
        $li.append($a);
        $list.append($li);
      });
      const showSubmitInPopup = items.length === 5 && $submit.length;
      if (showSubmitInPopup) {
        const $submitWrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="englemond-search-suggestions__submit"></div>');
        $submitWrapper.append($submit);
        $submit.show();
        $suggestions.append($list).append($submitWrapper).addClass('is-visible');
      } else {
        $suggestions.append($list).addClass('is-visible');
      }
    }
    function fetchSuggestions(query) {
      // Default to the public WooCommerce Store API
      const endpoint = $block.data('searchEndpoint') || '/wp-json/wp/v2/product?per_page=5&search=' + encodeURIComponent(query);
      $loader.addClass('is-visible');
      jquery__WEBPACK_IMPORTED_MODULE_0___default().getJSON(endpoint).done(data => {
        const items = Array.isArray(data) ? data : data?.products || [];
        renderSuggestions(items);
      }).fail(() => {
        clearSuggestions();
      }).always(() => {
        $loader.removeClass('is-visible');
      });
    }
    $input.on('input', function () {
      const query = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val().toString().trim();
      if (query === lastQuery) {
        return;
      }
      lastQuery = query;
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
      if (query.length < SEARCH_MIN_LENGTH) {
        clearSuggestions();
        return;
      }
      debounceTimer = setTimeout(() => {
        fetchSuggestions(query);
      }, SEARCH_DEBOUNCE_MS);
    });

    // Hide suggestions when clicking outside the search block
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', function (e) {
      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default().contains($block[0], e.target)) {
        clearSuggestions();
      }
    });
  });
}
jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  englemondProductSearch();
});

/***/ },

/***/ "./assets/scss/englemond.scss"
/*!************************************!*\
  !*** ./assets/scss/englemond.scss ***!
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
/*!********************************!*\
  !*** ./assets/js/englemond.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_englemond_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/englemond.scss */ "./assets/scss/englemond.scss");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./assets/js/menu.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ "./assets/js/search.js");



})();

/******/ })()
;
//# sourceMappingURL=englemond.js.map