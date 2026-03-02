/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/contact-form/view.scss"
/*!***************************************!*\
  !*** ./assets/contact-form/view.scss ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!*************************************!*\
  !*** ./assets/contact-form/view.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.scss */ "./assets/contact-form/view.scss");
/**
 * Front-end script for englemond/contact-form block
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var contactForms = document.querySelectorAll('.wp-block-englemond-contact-form');
    contactForms.forEach(function (formBlock) {
      var displayType = formBlock.dataset.display || 'block';
      var form = formBlock.querySelector('form');
      if (!form) return;

      // Handle popup display
      if (displayType === 'popup') {
        var triggerButton = formBlock.querySelector('.wp-block-englemond-contact-form__trigger');
        var popup = formBlock.querySelector('.wp-block-englemond-contact-form__popup');
        var closeButton = formBlock.querySelector('.wp-block-englemond-contact-form__close');
        if (triggerButton && popup) {
          triggerButton.addEventListener('click', function (e) {
            e.preventDefault();
            popup.classList.add('is-open');
            document.body.style.overflow = 'hidden';
          });
        }
        if (closeButton) {
          closeButton.addEventListener('click', function (e) {
            e.preventDefault();
            popup.classList.remove('is-open');
            document.body.style.overflow = '';
          });
        }

        // Close on overlay click
        var overlay = formBlock.querySelector('.wp-block-englemond-contact-form__overlay');
        if (overlay) {
          overlay.addEventListener('click', function () {
            popup.classList.remove('is-open');
            document.body.style.overflow = '';
          });
        }

        // Close on ESC key
        document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape' && popup && popup.classList.contains('is-open')) {
            popup.classList.remove('is-open');
            document.body.style.overflow = '';
          }
        });
      }

      // Handle form submission
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var formData = new FormData(form);
        var submitButton = form.querySelector('button[type="submit"]');
        var originalText = submitButton ? submitButton.textContent : '';
        var errorMessage = formBlock.querySelector('.wp-block-englemond-contact-form__error');
        var successMessage = formBlock.querySelector('.wp-block-englemond-contact-form__success');

        // Get AJAX URL and nonce from data attributes
        var ajaxUrl = formBlock.dataset.ajaxUrl || '';
        var nonce = formBlock.dataset.nonce || '';
        if (!ajaxUrl || !nonce) {
          console.error('AJAX URL or nonce not found');
          return;
        }

        // Add action to form data (nonce is already in the form)
        formData.append('action', 'englemond_contact_form_submit');

        // Hide previous messages
        if (errorMessage) {
          errorMessage.style.display = 'none';
        }
        if (successMessage) {
          successMessage.style.display = 'none';
        }
        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = 'Sending...';
        }

        // Send form data via AJAX
        fetch(ajaxUrl, {
          method: 'POST',
          body: formData
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
          }
          if (data.success) {
            // Show success message
            if (successMessage) {
              successMessage.textContent = data.data.message || 'Thank you! Your message has been sent.';
              successMessage.style.display = 'block';
              setTimeout(function () {
                successMessage.style.display = 'none';
              }, 5000);
            }
            form.reset();

            // Close popup if it's open
            if (displayType === 'popup') {
              var _popup = formBlock.querySelector('.wp-block-englemond-contact-form__popup');
              if (_popup) {
                setTimeout(function () {
                  _popup.classList.remove('is-open');
                  document.body.style.overflow = '';
                }, 1500);
              }
            }
          } else {
            // Show error message
            if (errorMessage) {
              errorMessage.textContent = data.data.message || 'Sorry, there was an error sending your message. Please try again.';
              errorMessage.style.display = 'block';
            } else if (successMessage) {
              // Fallback to success message element for error display
              successMessage.textContent = data.data.message || 'Sorry, there was an error sending your message. Please try again.';
              successMessage.style.display = 'block';
              successMessage.classList.add('error');
            }
          }
        })["catch"](function (error) {
          console.error('Error:', error);
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
          }

          // Show error message
          if (errorMessage) {
            errorMessage.textContent = 'Sorry, there was an error sending your message. Please try again.';
            errorMessage.style.display = 'block';
          } else if (successMessage) {
            successMessage.textContent = 'Sorry, there was an error sending your message. Please try again.';
            successMessage.style.display = 'block';
            successMessage.classList.add('error');
          }
        });
      });
    });
  });
})();
})();

/******/ })()
;
//# sourceMappingURL=view.js.map