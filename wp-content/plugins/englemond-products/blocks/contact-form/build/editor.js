/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/block-editor"
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
(module) {

module.exports = wp.blockEditor;

/***/ },

/***/ "@wordpress/blocks"
/*!****************************!*\
  !*** external "wp.blocks" ***!
  \****************************/
(module) {

module.exports = wp.blocks;

/***/ },

/***/ "@wordpress/components"
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
(module) {

module.exports = wp.components;

/***/ },

/***/ "@wordpress/i18n"
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
(module) {

module.exports = wp.i18n;

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
/*!***************************************!*\
  !*** ./assets/contact-form/editor.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */





/**
 * Register block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('englemond/contact-form', {
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
    var display = attributes.display,
      contactEmail = attributes.contactEmail;
    var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: 'wp-block-englemond-contact-form'
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Display Settings', 'englemond-products')
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Display Type', 'englemond-products'),
      value: display,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Block', 'englemond-products'),
        value: 'block'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Popup', 'englemond-products'),
        value: 'popup'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          display: value
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Form Settings', 'englemond-products')
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contact Email', 'englemond-products'),
      value: contactEmail || '',
      onChange: function onChange(value) {
        return setAttributes({
          contactEmail: value
        });
      },
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Enter email address', 'englemond-products'),
      type: "email",
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Email address where form submissions will be sent', 'englemond-products')
    }))), /*#__PURE__*/React.createElement("div", blockProps, display == 'popup' ? /*#__PURE__*/React.createElement(ContactFormPopup, {
      attributes: attributes,
      setAttributes: setAttributes
    }) : /*#__PURE__*/React.createElement(ContactFormBlock, {
      attributes: attributes,
      setAttributes: setAttributes
    })));
  },
  save: function save() {
    // Server-rendered blocks return null in save
    return null;
  }
});
var ContactFormPopup = function ContactFormPopup(_ref2) {
  var attributes = _ref2.attributes,
    setAttributes = _ref2.setAttributes;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "button",
    onChange: function onChange(value) {
      return setAttributes({
        buttonText: value
      });
    },
    value: attributes.buttonText,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Contact Us', 'englemond-products'),
    className: "wp-block-button__link"
  }));
};
var ContactFormBlock = function ContactFormBlock() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-contact-form__form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-contact-form__field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "wp-block-englemond-contact-form__label",
    "for": "name"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Name', 'englemond-products')), /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-contact-form__input"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-contact-form__field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "wp-block-englemond-contact-form__label",
    "for": "email"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Email', 'englemond-products')), /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-contact-form__input"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-contact-form__field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "wp-block-englemond-contact-form__label",
    "for": "subject"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Subject', 'englemond-products')), /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-contact-form__input"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-contact-form__field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "wp-block-englemond-contact-form__label",
    "for": "message"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Message', 'englemond-products')), /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-contact-form__textarea"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-contact-form__field"
  }, /*#__PURE__*/React.createElement("button", {
    className: "wp-block-englemond-contact-form__submit"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Send', 'englemond-products'))));
};
})();

/******/ })()
;
//# sourceMappingURL=editor.js.map