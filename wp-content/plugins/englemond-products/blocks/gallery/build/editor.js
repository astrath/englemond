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

/***/ "@wordpress/element"
/*!*****************************!*\
  !*** external "wp.element" ***!
  \*****************************/
(module) {

module.exports = wp.element;

/***/ },

/***/ "@wordpress/i18n"
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
(module) {

module.exports = wp.i18n;

/***/ },

/***/ "@wordpress/server-side-render"
/*!**************************************!*\
  !*** external "wp.serverSideRender" ***!
  \**************************************/
(module) {

module.exports = wp.serverSideRender;

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
  !*** ./assets/gallery/editor.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * WordPress dependencies
 */








/**
 * Helper function for class names
 */
var clsz = function clsz(className, active, activeClass) {
  return 'wp-block-englemond-gallery__' + className + (active ? ' ' + activeClass : '');
};

/**
 * Gallery Placeholder Component
 */
var GalleryPlaceholder = function GalleryPlaceholder(_ref) {
  var onSelectImages = _ref.onSelectImages,
    notice = _ref.notice;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    className: clsz('placeholder'),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Englemond Gallery', 'englemond-products'),
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select images to display in the gallery.', 'englemond-products')
  }, notice && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, {
    className: "wp-block-englemond-gallery__notice",
    isDismissible: false,
    type: "warning"
  }, notice), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onSelectImages,
    allowedTypes: ['image'],
    multiple: true,
    value: [],
    render: function render(_ref2) {
      var open = _ref2.open;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "primary",
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select Images', 'englemond-products'));
    }
  })));
};

/**
 * Register block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('englemond/gallery', {
  edit: function edit(_ref3) {
    var attributes = _ref3.attributes,
      setAttributes = _ref3.setAttributes,
      isSelected = _ref3.isSelected;
    var images = attributes.images,
      iconSize = attributes.iconSize;
    var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(images !== null && images !== void 0 && images.length ? 0 : null),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];
    var notice = null;
    if (images === undefined) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
        icon: "warning",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Englemond Gallery', 'englemond-products')
      }, "le post type courant ne  ne supporte pas la metadata gallery.");
    }
    var onSelectImages = function onSelectImages(selectedImages) {
      var imageData = _toConsumableArray(images);
      selectedImages.map(function (image) {
        if (imageData.find(function (img) {
          return img.id === image.id;
        })) return;
        imageData.push({
          id: image.id,
          url: image.url,
          alt: image.alt || ''
        });
      });
      setAttributes({
        images: imageData
      });
      if (imageData.length > 0 && active === null) {
        setActive(0);
      }
    };
    var removeActiveImage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function () {
      if (active === null || images.length === 0) return;
      var newImages = _toConsumableArray(images);
      newImages.splice(active, 1);

      // Update active index after deletion
      if (newImages.length === 0) {
        setActive(null);
      } else if (active >= newImages.length) {
        // If we deleted the last item, select the new last item
        setActive(newImages.length - 1);
      } else {
        // Keep the same index (which now points to the next item)
        setActive(active);
      }
      setAttributes({
        images: newImages
      });
    }, [active, images]);
    var onRemoveImage = function onRemoveImage(e) {
      e.preventDefault();
      e.stopPropagation();
      removeActiveImage();
    };
    var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: 'wp-block-englemond-gallery',
      style: iconSize ? {
        '--thumbnail-size': iconSize
      } : {}
    });
    var activeImage = active !== null && images[active] ? images[active] : null;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      group: "dimensions"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon Size', 'englemond-products'),
      value: iconSize,
      onChange: function onChange(value) {
        return setAttributes({
          iconSize: value
        });
      }
    })), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", {
      className: clsz('inner')
    }, /*#__PURE__*/React.createElement("div", {
      className: clsz('nav')
    }, images === null || images === void 0 ? void 0 : images.map(function (image, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: image.id || index,
        onClick: function onClick() {
          return setActive(index);
        },
        className: clsz('nav-item', active === index, 'active'),
        role: "button",
        tabIndex: "0",
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('View image', 'englemond-products') + ' ' + (index + 1)
      }, /*#__PURE__*/React.createElement("img", {
        className: clsz('preview'),
        src: image.url,
        alt: image.alt,
        style: {
          width: '100%',
          height: 'auto',
          display: 'block'
        }
      }));
    }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
      onSelect: onSelectImages,
      allowedTypes: ['image'],
      multiple: true,
      value: (images === null || images === void 0 ? void 0 : images.map(function (img) {
        return img.id;
      })) || [],
      render: function render(_ref4) {
        var open = _ref4.open;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
          icon: "plus",
          className: clsz('nav-item'),
          onClick: open,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add images', 'englemond-products')
        });
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: clsz('frame')
    }, /*#__PURE__*/React.createElement("div", {
      className: clsz('frame-inner')
    }, activeImage ? /*#__PURE__*/React.createElement("div", {
      className: clsz('frame-item')
    }, /*#__PURE__*/React.createElement("img", {
      src: activeImage.url,
      alt: activeImage.alt,
      className: clsz('frame-image')
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "secondary",
      isDestructive: true,
      onClick: onRemoveImage,
      className: clsz('frame-item-remove')
    }, /*#__PURE__*/React.createElement("span", {
      className: "dashicons dashicons-remove"
    }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Remove', 'englemond-products'))) : /*#__PURE__*/React.createElement(GalleryPlaceholder, {
      notice: notice,
      onSelectImages: onSelectImages
    }))))));
  },
  save: function save() {
    // Server-rendered blocks return null in save
    return null;
  }
});
})();

/******/ })()
;
//# sourceMappingURL=editor.js.map