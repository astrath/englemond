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
  !*** ./assets/browser/editor.js ***!
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
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
 * Register block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('englemond/browser', {
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
    var productsPerPage = attributes.productsPerPage,
      showCategoryTree = attributes.showCategoryTree,
      showSearch = attributes.showSearch,
      noresultText = attributes.noresultText;
    var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: 'wp-block-englemond-browser'
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Display Settings', 'englemond-products')
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Products Per Page', 'englemond-products'),
      value: productsPerPage,
      onChange: function onChange(value) {
        return setAttributes({
          productsPerPage: value
        });
      },
      min: 4,
      max: 48,
      step: 4
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Category Tree', 'englemond-products'),
      checked: showCategoryTree,
      onChange: function onChange(value) {
        return setAttributes({
          showCategoryTree: value
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Search', 'englemond-products'),
      checked: showSearch,
      onChange: function onChange(value) {
        return setAttributes({
          showSearch: value
        });
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No result text', 'englemond-products'),
      value: noresultText,
      onChange: function onChange(value) {
        return setAttributes({
          noresultText: value
        });
      }
    }))), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(Sidebar, {
      show: showCategoryTree
    }), /*#__PURE__*/React.createElement("div", {
      className: "wp-block-englemond-browser__main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wp-block-englemond-browser__main-inner"
    }, /*#__PURE__*/React.createElement(SearchFilter, {
      show: showSearch
    }), /*#__PURE__*/React.createElement("div", {
      className: "wp-block-englemond-browser__content"
    }, /*#__PURE__*/React.createElement("div", {
      "class": "wp-block-englemond-browser__products",
      role: "region",
      "aria-live": "polite"
    }, /*#__PURE__*/React.createElement(Products, null), /*#__PURE__*/React.createElement(Pagination, null)))))));
  },
  save: function save() {
    // Server-rendered blocks return null in save
    return null;
  }
});
var CategoryPanel = function CategoryPanel(_ref2) {
  var category = _ref2.category;
  return /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-browser__panel"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "wp-block-englemond-browser__panel-title"
  }, category.name), /*#__PURE__*/React.createElement("ul", {
    className: "wp-block-englemond-browser__panel-list"
  }, category.children.map(function (child) {
    var childId = "wp-block-englemond-browser__category-checkbox-".concat(child.term_id);
    return /*#__PURE__*/React.createElement("li", {
      key: childId,
      className: "wp-block-englemond-browser__panel-list-item"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      id: childId,
      className: "wp-block-englemond-browser__category-checkbox",
      "data-category-id": child.term_id,
      "data-parent-category": category.term_id
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: childId,
      className: "wp-block-englemond-browser__category-link"
    }, child.name));
  })));
};
var Sidebar = function Sidebar(_ref3) {
  var show = _ref3.show;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    tree = _useState2[0],
    setTree = _useState2[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var getTree = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return fetch('/wp-admin/admin-ajax.php?action=englemond_browser_get_category_tree');
            case 1:
              response = _context.v;
              _context.n = 2;
              return response.json();
            case 2:
              data = _context.v;
              setTree(data.data);
            case 3:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function getTree() {
        return _ref4.apply(this, arguments);
      };
    }();
    getTree();
  }, []);
  if (!show) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-browser__sidebar"
  }, tree.map(function (category, index) {
    return /*#__PURE__*/React.createElement(CategoryPanel, {
      key: index,
      category: category
    });
  }));
};
var SearchFilter = function SearchFilter(_ref5) {
  var show = _ref5.show;
  if (!show) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-browser__filters"
  }, /*#__PURE__*/React.createElement("input", {
    type: "search",
    className: "wp-block-englemond-browser__search-input",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Search products...', 'englemond-products')
  }));
};
var Products = function Products() {
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    products = _useState4[0],
    setProducts = _useState4[1];
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isLoading = _useState6[0],
    setIsLoading = _useState6[1];
  var _useState7 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    setError = _useState8[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var getProducts = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, data, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return fetch('/wp-admin/admin-ajax.php?action=englemond_browser_get_products');
            case 1:
              response = _context2.v;
              _context2.n = 2;
              return response.json();
            case 2:
              data = _context2.v;
              setProducts(data.data.products);
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t = _context2.v;
              setError(_t);
            case 4:
              _context2.p = 4;
              setIsLoading(false);
              return _context2.f(4);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 3, 4, 5]]);
      }));
      return function getProducts() {
        return _ref6.apply(this, arguments);
      };
    }();
    getProducts();
  }, []);
  if (isLoading) {
    return /*#__PURE__*/React.createElement("div", {
      className: "wp-block-englemond-browser__loading"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Loading products...', 'englemond-products'));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-browser__products-grid"
  }, products.map(function (product) {
    return /*#__PURE__*/React.createElement(ProductPreview, {
      product: product
    });
  }));
};
var Pagination = function Pagination() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-browser__pagination"
  }, [1, 2, 3, 4, 5].map(function (page) {
    return /*#__PURE__*/React.createElement("button", {
      className: "wp-block-englemond-browser__pagination-button ".concat(page === 1 ? 'is-active' : ''),
      "data-page": page
    }, page);
  }));
};
var ProductPreview = function ProductPreview(_ref7) {
  var product = _ref7.product;
  return /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-browser__product"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-browser__product-link"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-browser__product-thumbnail"
  }, /*#__PURE__*/React.createElement("img", {
    src: product.thumbnail,
    alt: product.title,
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-browser__product-content"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "wp-block-englemond-browser__product-title"
  }, product.title), /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-browser__product-price"
  }, product.price))));
};
})();

/******/ })()
;
//# sourceMappingURL=editor.js.map