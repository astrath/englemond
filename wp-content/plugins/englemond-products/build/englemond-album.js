/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!*******************************!*\
  !*** ./assets/album/album.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

(function () {
  if (window.MLFAlbumFilter && window.MLFAlbumFilter._patched) {
    return;
  }
  window.MLFAlbumFilter = window.MLFAlbumFilter || {};
  window.MLFAlbumFilter._patched = true;
  function patch() {
    if (!window.wp || !wp.media || !wp.media.view || !wp.media.view.AttachmentsBrowser) {
      return false;
    }
    var AttachmentsBrowser = wp.media.view.AttachmentsBrowser;
    if (AttachmentsBrowser.prototype._mlfAlbumFilterPatched) {
      return true;
    }
    AttachmentsBrowser.prototype._mlfAlbumFilterPatched = true;
    var originalCreateToolbar = AttachmentsBrowser.prototype.createToolbar;
    AttachmentsBrowser.prototype.createToolbar = function () {
      originalCreateToolbar.apply(this, arguments);
      try {
        var terms = window.MLFAlbumFilter && window.MLFAlbumFilter.terms ? window.MLFAlbumFilter.terms : [];
        if (!terms || !terms.length) {
          return;
        }

        // `collection` is the attachments collection; `collection.props` is a Backbone model used for the query.
        var propsModel = this.collection && this.collection.props ? this.collection.props : null;
        if (!propsModel) {
          return;
        }
        var selectId = 'media-attachment-album-filters-' + this.cid;
        var taxonomy = window.MLFAlbumFilter.taxonomy || 'album';
        var l10n = window.MLFAlbumFilter.l10n || {};
        var AlbumSelect = wp.media.View.extend({
          tagName: 'select',
          className: 'attachment-filters',
          events: {
            change: 'onChange'
          },
          initialize: function initialize(options) {
            options = options || {};
            this.model = options.model;
            this.terms = options.terms || [];
            this.id = options.id || 'media-attachment-album-filters';
            this.taxonomy = options.taxonomy || 'album';
            this.l10n = options.l10n || {};
            this.listenTo(this.model, 'change:tax_query', this.syncFromTaxQuery);
            this.render();
            this.syncFromTaxQuery();
          },
          render: function render() {
            // Ensure unique id per view instance.
            this.$el.attr('id', this.id);
            this.$el.empty();
            this.$el.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<option/>', {
              value: 0,
              text: this.l10n.allAlbums || 'All Albums'
            }));
            for (var i = 0; i < this.terms.length; i++) {
              var term = this.terms[i];
              this.$el.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()('<option/>', {
                value: term.term_id,
                text: term.name
              }));
            }
            return this;
          },
          syncFromTaxQuery: function syncFromTaxQuery() {
            var selected = 0;
            var taxQuery = this.model ? this.model.get('tax_query') : null;
            if (taxQuery && Array.isArray(taxQuery) && taxQuery.length) {
              var first = taxQuery[0];
              if (first && first.taxonomy === this.taxonomy && first.terms && first.terms.length) {
                selected = parseInt(first.terms[0], 10) || 0;
              }
            }
            this.$el.val(selected);
          },
          onChange: function onChange() {
            var val = parseInt(this.$el.val(), 10) || 0;
            if (!val) {
              // Backbone + media.query omit null args, removing the taxonomy constraint.
              this.model.set('tax_query', null);
              return;
            }
            this.model.set('tax_query', [{
              taxonomy: this.taxonomy,
              field: 'term_id',
              terms: [val]
            }]);
          }
        });
        this.toolbar.set('albumFilterLabel', new wp.media.view.Label({
          value: l10n.filterByAlbum || 'Filter by album',
          attributes: {
            'for': selectId
          },
          priority: -76
        }).render());
        this.toolbar.set('albumFilter', new AlbumSelect({
          model: propsModel,
          terms: terms,
          id: selectId,
          taxonomy: taxonomy,
          l10n: l10n,
          priority: -76
        }).render());
      } catch (e) {
        // Silently ignore if WP internals changed.
      }
    };
    return true;
  }
  var attempts = 0;
  var maxAttempts = 50; // ~10 seconds
  var timer = window.setInterval(function () {
    attempts++;
    if (patch() || attempts >= maxAttempts) {
      window.clearInterval(timer);
    }
  }, 200);
})();
})();

/******/ })()
;
//# sourceMappingURL=englemond-album.js.map