/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/selection/source.js"
/*!************************************!*\
  !*** ./assets/selection/source.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSelectionPanel: () => (/* binding */ ProductSelectionPanel),
/* harmony export */   ProductSelectorModal: () => (/* binding */ ProductSelectorModal),
/* harmony export */   SourceControlsPanel: () => (/* binding */ SourceControlsPanel),
/* harmony export */   SourcePlaceholder: () => (/* binding */ SourcePlaceholder)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * WordPress dependencies
 */





function SourceControlsPanel(_ref) {
  var _attributes$source, _attributes$source2, _attributes$source3;
  var attributes = _ref.attributes,
    setAttributes = _ref.setAttributes;
  var source = attributes.source;
  var onChangeProperty = function onChangeProperty(property) {
    return function (value) {
      var newSource = _objectSpread({}, attributes.source || {});
      newSource[property] = value;
      if (source.type === 'term') {
        delete newSource.ids;
      }
      setAttributes({
        source: newSource
      });
    };
  };
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Source', 'englemond-products')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Product Source', 'englemond-products'),
    value: ((_attributes$source = attributes.source) === null || _attributes$source === void 0 ? void 0 : _attributes$source.type) || '',
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Manual Selection', 'englemond-products'),
      value: ''
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Product Category', 'englemond-products'),
      value: 'term'
    }],
    onChange: onChangeProperty('type')
  }), (source === null || source === void 0 ? void 0 : source.type) === 'meta' && /*#__PURE__*/React.createElement("p", {
    style: {
      fontStyle: 'italic',
      color: '#666'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Products will be loaded from the post meta field "productSelection".', 'englemond-products')), (source === null || source === void 0 ? void 0 : source.type) === 'term' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontStyle: 'italic',
      color: '#666'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Products are automatically loaded from the selected category. This list is not editable.', 'englemond-products')), /*#__PURE__*/React.createElement(ProductCategorySelector, {
    value: ((_attributes$source2 = attributes.source) === null || _attributes$source2 === void 0 ? void 0 : _attributes$source2.term) || null,
    onChange: onChangeProperty('term')
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Maximum number of results', 'englemond-products'),
    value: ((_attributes$source3 = attributes.source) === null || _attributes$source3 === void 0 ? void 0 : _attributes$source3.perPage) || 5,
    onChange: onChangeProperty('perPage')
  })));
}
var ProductCategorySelector = function ProductCategorySelector(_ref2) {
  var value = _ref2.value,
    onChange = _ref2.onChange;
  var categories = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(function (select) {
    return select('core').getEntityRecords('taxonomy', 'product_cat', {
      per_page: -1
    }) || [];
  }, []);

  // Build hierarchical options
  var _buildHierarchicalOptions = function buildHierarchicalOptions(cats) {
    var parentId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var options = [];
    var prefix = '—'.repeat(level);

    // Filter categories by parent (handle both 0 and undefined/null)
    var parentValue = parentId || 0;
    cats.filter(function (cat) {
      var catParent = cat.parent || 0;
      return catParent === parentValue;
    }).forEach(function (cat) {
      options.push({
        label: prefix + (prefix ? ' ' : '') + cat.name + ' (' + cat.count + ')',
        value: cat.id
      });
      // Recursively add children
      var children = _buildHierarchicalOptions(cats, cat.id, level + 1);
      options.push.apply(options, _toConsumableArray(children));
    });
    return options;
  };
  var options = categories && categories.length > 0 ? _buildHierarchicalOptions(categories) : [];
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Product Category', 'englemond-products'),
    value: value,
    onChange: onChange,
    options: options
  });
};

/**
 * Product selection panel component
 */
function ProductSelectionPanel(_ref3) {
  var selectedProducts = _ref3.selectedProducts,
    isEditable = _ref3.isEditable,
    onAddProduct = _ref3.onAddProduct,
    onRemoveProduct = _ref3.onRemoveProduct;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Products', 'englemond-products')
  }, selectedProducts.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '15px'
    }
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Selected products:', 'englemond-products'), " ", selectedProducts.length)), selectedProducts.map(function (product) {
    return /*#__PURE__*/React.createElement(ProductItem, {
      key: product.id,
      product: product,
      onRemove: isEditable ? function () {
        return onRemoveProduct(product.id);
      } : undefined
    });
  })), !(selectedProducts !== null && selectedProducts !== void 0 && selectedProducts.length) && /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No products selected.', 'englemond-products')), isEditable && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    onClick: onAddProduct
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Product', 'englemond-products')));
}
function ProductSelectorModal(_ref4) {
  var selection = _ref4.selection,
    onSelect = _ref4.onSelect,
    onRequestClose = _ref4.onRequestClose;
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchTerm = _useState2[0],
    setSearchTerm = _useState2[1];
  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    products = _useState4[0],
    setProducts = _useState4[1];
  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isResolving = _useState6[0],
    setIsResolving = _useState6[1];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var fetchProducts = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var url, response, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              setIsResolving(true);
              _context.p = 1;
              url = '/wp-admin/admin-ajax.php?action=get_products';
              url += "&type=search&search=".concat(encodeURIComponent(searchTerm), "&perPage=20");
              _context.n = 2;
              return fetch(url);
            case 2:
              response = _context.v;
              _context.n = 3;
              return response.json();
            case 3:
              data = _context.v;
              setProducts(data.data);
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              setProducts([]);
            case 5:
              _context.p = 5;
              setIsResolving(false);
              return _context.f(5);
            case 6:
              return _context.a(2);
          }
        }, _callee, null, [[1, 4, 5, 6]]);
      }));
      return function fetchProducts() {
        return _ref5.apply(this, arguments);
      };
    }();

    // Debounce search
    var timeoutId = setTimeout(function () {
      fetchProducts();
    }, 300);
    return function () {
      return clearTimeout(timeoutId);
    };
  }, [searchTerm]);
  var selectedIds = selection.map(function (p) {
    return p.id;
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    onRequestClose: onRequestClose,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Product', 'englemond-products'),
    size: "large"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SearchControl, {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Search for a product', 'englemond-products'),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Search for a product', 'englemond-products'),
    value: searchTerm,
    onChange: setSearchTerm
  }), isResolving ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      right: '0',
      transform: 'translate(-50%, -50%)'
    }
  }, " ", /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null)) : null), products.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '400px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px',
      textAlign: 'center',
      color: '#666'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('No products found.', 'englemond-products'))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '10px',
      marginTop: '20px'
    },
    className: "englemond-products-modal__items"
  }, products.map(function (product) {
    return /*#__PURE__*/React.createElement(ProductModalItem, {
      key: product.id,
      product: product,
      isSelected: selectedIds.includes(product.id),
      onClick: function onClick() {
        onSelect(product);
      }
    });
  }))));
}
;
var ProductItem = function ProductItem(_ref6) {
  var _product$title;
  var product = _ref6.product,
    onRemove = _ref6.onRemove;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px',
      border: '1px solid #ddd',
      marginBottom: '4px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: product.thumbnail,
    alt: product.title,
    style: {
      width: '40px',
      height: '40px',
      marginRight: '10px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '100%'
    }
  }, ((_product$title = product.title) === null || _product$title === void 0 ? void 0 : _product$title.rendered) || product.title), onRemove && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
    icon: "minus",
    onClick: onRemove
  }));
};
var ProductModalItem = function ProductModalItem(_ref7) {
  var _product$title2, _product$title3;
  var product = _ref7.product,
    isSelected = _ref7.isSelected,
    onClick = _ref7.onClick;
  // Use thumbnail directly from product if available
  var thumbnail = product.thumbnail || '';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      border: isSelected ? '2px solid #0073aa' : '1px solid #ddd',
      padding: '10px',
      cursor: 'pointer',
      textAlign: 'center',
      borderRadius: '4px'
    }
  }, thumbnail && /*#__PURE__*/React.createElement("img", {
    src: thumbnail,
    alt: ((_product$title2 = product.title) === null || _product$title2 === void 0 ? void 0 : _product$title2.rendered) || product.title,
    style: {
      width: '100%',
      height: 'auto',
      marginBottom: '8px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      fontWeight: isSelected ? 'bold' : 'normal'
    }
  }, ((_product$title3 = product.title) === null || _product$title3 === void 0 ? void 0 : _product$title3.rendered) || product.title));
};
/**
 * Source placeholder component
 */
function SourcePlaceholder(_ref8) {
  var sourceType = _ref8.sourceType,
    postId = _ref8.postId,
    sourceTerm = _ref8.sourceTerm;
  var instructions = sourceType === 'meta' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Products will be loaded from post meta.', 'englemond-products') : sourceType === 'term' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select a product category to display products.', 'englemond-products') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use the sidebar to search and select products to display in this selection block.', 'englemond-products');
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Englemond Selection', 'englemond-products'),
    instructions: instructions
  });
}

/***/ },

/***/ "./assets/selection/templates.js"
/*!***************************************!*\
  !*** ./assets/selection/templates.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectionTemplate: () => (/* binding */ SelectionTemplate)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
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
 * Template component for rendering the selection block
 * Supports grid and carousel modes
 */
function SelectionTemplate(_ref) {
  var _selectedProducts$act, _selectedProducts$act2;
  var attributes = _ref.attributes,
    selectedProducts = _ref.selectedProducts,
    setAttributes = _ref.setAttributes,
    isSelected = _ref.isSelected,
    isLoadingProducts = _ref.isLoadingProducts;
  var view = attributes.view,
    source = attributes.source,
    title = attributes.title;
  var viewType = (view === null || view === void 0 ? void 0 : view.type) || 'carousel';
  var sourceType = (source === null || source === void 0 ? void 0 : source.type) || '';
  var columnsCount = (view === null || view === void 0 ? void 0 : view.columnsCount) || 3;
  var aspectRatio = (view === null || view === void 0 ? void 0 : view.aspectRatio) || '1:1';
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    activeIndex = _useState2[0],
    setActiveIndex = _useState2[1];
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    style: {
      '--aspect-ratio': aspectRatio.replace(':', '/')
    }
  });
  if (viewType === 'grid') {
    return /*#__PURE__*/React.createElement("div", blockProps, selectedProducts.map(function (product) {
      return /*#__PURE__*/React.createElement(Product, {
        product: product
      });
    }));
  }
  var viewAlign = view.align || 'right';
  var activeTitle = ((_selectedProducts$act = selectedProducts[activeIndex]) === null || _selectedProducts$act === void 0 || (_selectedProducts$act = _selectedProducts$act.title) === null || _selectedProducts$act === void 0 ? void 0 : _selectedProducts$act.rendered) || ((_selectedProducts$act2 = selectedProducts[activeIndex]) === null || _selectedProducts$act2 === void 0 ? void 0 : _selectedProducts$act2.title) || 'Selectiio Vide';
  var carouselStyle = {
    width: selectedProducts.length * 100 / Math.max(columnsCount, 1) + '%',
    marginLeft: activeIndex * -100 / Math.max(columnsCount, 1) + '%'
  };
  return /*#__PURE__*/React.createElement("div", blockProps, view.showHeader ? /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-selection__header"
  }, isSelected ? /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "wp-block-englemond-selection__title",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter title', 'englemond-products'),
    value: attributes.title,
    onChange: function onChange(title) {
      return setAttributes({
        title: stripTags(title)
      });
    },
    tagName: "h3"
  }) : /*#__PURE__*/React.createElement("h3", {
    className: "wp-block-englemond-selection__title"
  }, attributes.title), isSelected ? /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "wp-block-englemond-selection__description",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter description', 'englemond-products'),
    value: attributes.description,
    onChange: function onChange(description) {
      return setAttributes({
        description: stripTags(description)
      });
    },
    tagName: "p"
  }) : /*#__PURE__*/React.createElement("p", {
    className: "wp-block-englemond-selection__description"
  }, attributes.description)) : null, /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-selection__carousel " + (viewAlign === 'left' ? 'align-left' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-selection__carousel-viewport"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-selection__carousel-inner",
    style: carouselStyle
  }, selectedProducts.map(function (product) {
    return /*#__PURE__*/React.createElement(Product, {
      product: product,
      className: "wp-block-englemond-selection__carousel-item"
    });
  }))), /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-selection__carousel-controls"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveIndex(Math.max(0, activeIndex - 1));
    },
    disabled: activeIndex === 0,
    className: "wp-block-englemond-selection__carousel-control-prev"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveIndex(Math.min(selectedProducts.length - columnsCount, activeIndex + 1));
    },
    disabled: activeIndex >= selectedProducts - columnsCount.length,
    className: "wp-block-englemond-selection__carousel-control-next"
  })), view.showSidebar ? /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-selection__side"
  }, /*#__PURE__*/React.createElement("h5", null, activeTitle), isLoadingProducts && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null)) : null));
}
var Product = function Product(_ref2) {
  var product = _ref2.product,
    className = _ref2.className;
  return /*#__PURE__*/React.createElement("div", {
    className: "wp-block-englemond-selection__item " + className
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-block-englemond-selection__item-link"
  }, /*#__PURE__*/React.createElement("img", {
    src: product.thumbnail,
    alt: product.title
  }), /*#__PURE__*/React.createElement("h5", {
    className: "wp-block-englemond-selection__item-title"
  }, product.title)));
};
var stripTags = function stripTags(html) {
  return html;
};

/***/ },

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

/***/ "@wordpress/data"
/*!**************************!*\
  !*** external "wp.data" ***!
  \**************************/
(module) {

module.exports = wp.data;

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
/*!************************************!*\
  !*** ./assets/selection/editor.js ***!
  \************************************/
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
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./source */ "./assets/selection/source.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates */ "./assets/selection/templates.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



/**
 * Register block
 */

var getProducts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(source) {
    var _source$ids;
    var url, response, data;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          url = '/wp-admin/admin-ajax.php?action=get_products';
          if (source.type === 'term' && source.term) {
            url += "&type=term&term=".concat(encodeURIComponent(source.term), "&perPage=").concat(source.perPage || 5);
          }
          if (!source.type && ((_source$ids = source.ids) === null || _source$ids === void 0 ? void 0 : _source$ids.length) > 0) {
            url += "&type=ids&ids=".concat(encodeURIComponent(source.ids.join(',')));
          }
          if (source.type === 'search' && source.search) {
            url += "&type=search&search=".concat(encodeURIComponent(source.search));
          }
          _context.n = 1;
          return fetch(url);
        case 1:
          response = _context.v;
          _context.n = 2;
          return response.json();
        case 2:
          data = _context.v;
          return _context.a(2, data.data);
      }
    }, _callee);
  }));
  return function getProducts(_x) {
    return _ref.apply(this, arguments);
  };
}();
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('englemond/selection', {
  edit: function edit(_ref2) {
    var attributes = _ref2.attributes,
      setAttributes = _ref2.setAttributes,
      isSelected = _ref2.isSelected;
    var source = attributes.source,
      view = attributes.view,
      backgroundImage = attributes.backgroundImage;
    var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpen = _useState2[0],
      setModalOpen = _useState2[1];
    var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: 'wp-block-englemond-selection',
      style: backgroundImage !== null && backgroundImage !== void 0 && backgroundImage.url ? {
        backgroundImage: "url(".concat(backgroundImage.url, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}
    });

    // Fetch products via AJAX
    var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedProducts = _useState4[0],
      setSelectedProducts = _useState4[1];
    var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoadingProducts = _useState6[0],
      setIsLoadingProducts = _useState6[1];
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
      var fetchProducts = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
          var _products, _t;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.p = _context2.n) {
              case 0:
                if (source) {
                  _context2.n = 1;
                  break;
                }
                setSelectedProducts([]);
                return _context2.a(2);
              case 1:
                setIsLoadingProducts(true);
                _context2.p = 2;
                _context2.n = 3;
                return getProducts(source);
              case 3:
                _products = _context2.v;
                setSelectedProducts(_products);
                _context2.n = 5;
                break;
              case 4:
                _context2.p = 4;
                _t = _context2.v;
                console.error('Error fetching products:', _t);
                setSelectedProducts([]);
              case 5:
                _context2.p = 5;
                setIsLoadingProducts(false);
                return _context2.f(5);
              case 6:
                return _context2.a(2);
            }
          }, _callee2, null, [[2, 4, 5, 6]]);
        }));
        return function fetchProducts() {
          return _ref3.apply(this, arguments);
        };
      }();
      fetchProducts();
    }, [source]);
    // View controls
    var viewType = (view === null || view === void 0 ? void 0 : view.type) || 'grid';
    var columnsCount = (view === null || view === void 0 ? void 0 : view.columnsCount) || 3;
    var viewAlign = (view === null || view === void 0 ? void 0 : view.align) || 'right';
    var aspectRatio = (view === null || view === void 0 ? void 0 : view.aspectRatio) || '1:1';
    var onViewTypeChange = function onViewTypeChange(newType) {
      setAttributes({
        view: _objectSpread(_objectSpread({}, view), {}, {
          type: newType,
          columnsCount: newType === 'grid' ? columnsCount : view.columnsCount
        })
      });
    };
    var onColumnsCountChange = function onColumnsCountChange(value) {
      setAttributes({
        view: _objectSpread(_objectSpread({}, view), {}, {
          columnsCount: value ? parseInt(value) : 3
        })
      });
    };
    var onAlignChange = function onAlignChange(newAlign) {
      setAttributes({
        view: _objectSpread(_objectSpread({}, view), {}, {
          align: newAlign
        })
      });
    };
    var onRemoveProduct = function onRemoveProduct(productId) {
      if (source.type === 'term') {
        return;
      }
      var newIds = attributes.source.ids.filter(function (id) {
        return id !== productId;
      });
      setAttributes({
        source: _objectSpread(_objectSpread({}, attributes.source), {}, {
          ids: newIds
        })
      });
    };
    var onSelectProduct = function onSelectProduct(product) {
      var _source$ids2;
      if ((_source$ids2 = source.ids) !== null && _source$ids2 !== void 0 && _source$ids2.includes(product.id)) {
        return;
      }
      var newIds = _toConsumableArray(attributes.source.ids || []);
      newIds.push(product.id);
      setAttributes({
        source: {
          type: '',
          ids: newIds
        }
      });
      products.forEach(function (product) {
        if (!newIds.includes(product.id)) {
          newIds.push(product.id);
        }
      });
      setAttributes({
        source: _objectSpread(_objectSpread({}, source), {}, {
          ids: newIds
        })
      });
    };

    // Determine if we should show placeholder
    var shouldShowPlaceholder = selectedProducts.length === 0;
    return /*#__PURE__*/React.createElement(React.Fragment, null, viewType === 'carousel' && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
      icon: "align-pull-left",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Align Left', 'englemond-products'),
      isPressed: viewAlign === 'left',
      onClick: function onClick() {
        return onAlignChange('left');
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
      icon: "align-pull-right",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Align Right', 'englemond-products'),
      isPressed: viewAlign === 'right',
      onClick: function onClick() {
        return onAlignChange('right');
      }
    }))), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, /*#__PURE__*/React.createElement(_source__WEBPACK_IMPORTED_MODULE_5__.SourceControlsPanel, {
      attributes: attributes,
      setAttributes: setAttributes,
      selectedProducts: selectedProducts
    }), /*#__PURE__*/React.createElement(_source__WEBPACK_IMPORTED_MODULE_5__.ProductSelectionPanel, {
      isEditable: (source === null || source === void 0 ? void 0 : source.type) != 'term',
      onAddProduct: function onAddProduct() {
        return setModalOpen(true);
      },
      onRemoveProduct: onRemoveProduct,
      selectedProducts: selectedProducts
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('View', 'englemond-products')
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Display Mode', 'englemond-products'),
      value: viewType,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Grid', 'englemond-products'),
        value: 'grid'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Carousel', 'englemond-products'),
        value: 'carousel'
      }],
      onChange: onViewTypeChange
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Number of columns', 'englemond-products'),
      value: columnsCount,
      onChange: onColumnsCountChange,
      min: 1,
      max: 6,
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Number of columns in the grid layout.', 'englemond-products')
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      checked: view === null || view === void 0 ? void 0 : view.showSidebar,
      onChange: function onChange(v) {
        return setAttributes({
          view: _objectSpread(_objectSpread({}, view), {}, {
            showSidebar: v
          })
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show sidebar', 'englemond-products'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show the sidebar in the carousel.', 'englemond-products')
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      checked: view === null || view === void 0 ? void 0 : view.showHeader,
      onChange: function onChange(v) {
        return setAttributes({
          view: _objectSpread(_objectSpread({}, view), {}, {
            showHeader: v
          })
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show header', 'englemond-products'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show the header in the carousel.', 'englemond-products')
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Aspect Ratio', 'englemond-products'),
      value: aspectRatio,
      options: [{
        label: '1:1',
        value: '1:1'
      }, {
        label: '4:3',
        value: '4:3'
      }, {
        label: '16:9',
        value: '16:9'
      }, {
        label: '2:1',
        value: '2:1'
      }, {
        label: '3:4',
        value: '3:4'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          view: _objectSpread(_objectSpread({}, view), {}, {
            aspectRatio: value
          })
        });
      }
    }))), /*#__PURE__*/React.createElement(_templates__WEBPACK_IMPORTED_MODULE_6__.SelectionTemplate, {
      isLoadingProducts: isLoadingProducts,
      setAttributes: setAttributes,
      attributes: attributes,
      selectedProducts: selectedProducts,
      isSelected: isSelected
    }), modalOpen && /*#__PURE__*/React.createElement(_source__WEBPACK_IMPORTED_MODULE_5__.ProductSelectorModal, {
      selection: selectedProducts,
      onSelect: onSelectProduct,
      onRequestClose: function onRequestClose() {
        return setModalOpen(false);
      }
    }));
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