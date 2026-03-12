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


})();

/******/ })()
;
//# sourceMappingURL=englemond.js.map