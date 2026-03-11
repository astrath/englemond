/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/englemond-modifs.js"
/*!***************************************!*\
  !*** ./assets/js/englemond-modifs.js ***!
  \***************************************/
() {

const {
  addFilter
} = wp.hooks;
const {
  PanelBody,
  ButtonGroup,
  Button
} = wp.components;
const {
  InspectorControls
} = wp.blockEditor;
const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;

/**
 * Clean className by removing all motif classes
 */
const cleanMotifClasses = className => {
  if (!className) return '';
  return className.split(/\s+/).filter(cls => !cls.match(/^has-bg-motif-[123]$/)).join(' ').trim();
};

/**
 * Get current motif number from className
 */
const getCurrentMotif = className => {
  if (!className) return null;
  const motifMatch = className.match(/\bhas-bg-motif-([123])\b/);
  return motifMatch ? parseInt(motifMatch[1]) : null;
};

/**
 * Motif Selection Panel Component
 * Adds a panel to block settings to select motif classes (has-bg-motif-1, has-bg-motif-2, has-bg-motif-3)
 */
function MotifPanel({
  attributes,
  setAttributes
}) {
  const currentClassName = attributes?.className || '';
  const activeMotif = getCurrentMotif(currentClassName);

  /**
   * Set the selected motif
   */
  const setMotif = motifNumber => {
    // Clean existing motif classes
    let newClassName = cleanMotifClasses(currentClassName);

    // Add the new motif class if a motif is selected (not null)
    if (motifNumber !== null) {
      const motifClass = `has-bg-motif-${motifNumber}`;
      newClassName = newClassName ? `${newClassName} ${motifClass}` : motifClass;
    }

    // Update the block attributes
    setAttributes({
      className: newClassName
    });
  };
  return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
    title: __('Motif Selection', 'englemond'),
    initialOpen: true
  }, wp.element.createElement(ButtonGroup, null, wp.element.createElement(Button, {
    isPrimary: activeMotif === 1,
    isPressed: activeMotif === 1,
    onClick: () => setMotif(activeMotif === 1 ? null : 1)
  }, __('Motif 1', 'englemond')), wp.element.createElement(Button, {
    isPrimary: activeMotif === 2,
    isPressed: activeMotif === 2,
    onClick: () => setMotif(activeMotif === 2 ? null : 2)
  }, __('Motif 2', 'englemond')), wp.element.createElement(Button, {
    isPrimary: activeMotif === 3,
    isPressed: activeMotif === 3,
    onClick: () => setMotif(activeMotif === 3 ? null : 3)
  }, __('Motif 3', 'englemond')))));
}

/**
 * Add motif panel to group blocks via filter
 */
addFilter('editor.BlockEdit', 'englemond/motif-selection', BlockEdit => {
  return props => {
    // Only show motif panel for group blocks
    if (props.name !== 'core/group') {
      return wp.element.createElement(BlockEdit, props);
    }
    return wp.element.createElement(Fragment, null, wp.element.createElement(BlockEdit, props), wp.element.createElement(MotifPanel, {
      attributes: props.attributes,
      setAttributes: props.setAttributes
    }));
  };
});

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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**************************************!*\
  !*** ./assets/js/englemond-admin.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _englemond_modifs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./englemond-modifs */ "./assets/js/englemond-modifs.js");
/* harmony import */ var _englemond_modifs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_englemond_modifs__WEBPACK_IMPORTED_MODULE_0__);

/*
const {registerBlockBindingsSource} = wp.blocks
const { __ } = wp.i18n;
wp.domReady(function(){
    const getValue = (args) => {
        return SHOPDATA[args.key] || args.key + 'Non configured' ;
    }
    wp.blocks.registerBlockBindingsSource( {
    name: 'englemond/shop',
    label: __( 'Shop Information', 'englemond' ),
    getValues({bindings}) {
        const newValues = {};
		for ( const [ attributeName, binding ] of Object.entries( bindings ) ) {
			newValues[ attributeName ] = getValue( binding.args );
		}
		return newValues;
    },
    canUserEditValue( { select, context } ) {
        return true;
    },
    getFieldsList(fieldListArgs) {
        const fields = [
            {
                default: SHOPDATA.phone,
                name: 'phone',
                args: {key: 'phone'},
                label: __( 'Phone', 'englemond' ),
                type: 'string',
            },
            {
                default: SHOPDATA.orderButtonText,
                name: 'order-text',
                args: {key: 'orderButtonText'},
                label: __( 'Order Text', 'englemond' ),
                type: 'string',
            },
        ];
        console.log({fields});
        return fields;
    },
});
});

*/
})();

/******/ })()
;
//# sourceMappingURL=englemond-admin.js.map