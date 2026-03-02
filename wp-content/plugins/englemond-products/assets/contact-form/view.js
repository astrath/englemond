/**
 * Front-end script for englemond/contact-form block
 */
import './view.scss';

(function() {
	'use strict';

	document.addEventListener('DOMContentLoaded', function() {
		const contactForms = document.querySelectorAll('.wp-block-englemond-contact-form');
		
		contactForms.forEach(function(formBlock) {
			const displayType = formBlock.dataset.display || 'block';
			const form = formBlock.querySelector('form');
			
			if (!form) return;

			// Handle popup display
			if (displayType === 'popup') {
				const triggerButton = formBlock.querySelector('.wp-block-englemond-contact-form__trigger');
				const popup = formBlock.querySelector('.wp-block-englemond-contact-form__popup');
				const closeButton = formBlock.querySelector('.wp-block-englemond-contact-form__close');
				
				if (triggerButton && popup) {
					triggerButton.addEventListener('click', function(e) {
						e.preventDefault();
						popup.classList.add('is-open');
						document.body.style.overflow = 'hidden';
					});
				}

				if (closeButton) {
					closeButton.addEventListener('click', function(e) {
						e.preventDefault();
						popup.classList.remove('is-open');
						document.body.style.overflow = '';
					});
				}

				// Close on overlay click
				const overlay = formBlock.querySelector('.wp-block-englemond-contact-form__overlay');
				if (overlay) {
					overlay.addEventListener('click', function() {
						popup.classList.remove('is-open');
						document.body.style.overflow = '';
					});
				}

				// Close on ESC key
				document.addEventListener('keydown', function(e) {
					if (e.key === 'Escape' && popup && popup.classList.contains('is-open')) {
						popup.classList.remove('is-open');
						document.body.style.overflow = '';
					}
				});
			}

			// Handle form submission
			form.addEventListener('submit', function(e) {
				e.preventDefault();
				
				const formData = new FormData(form);
				const submitButton = form.querySelector('button[type="submit"]');
				const originalText = submitButton ? submitButton.textContent : '';
				const errorMessage = formBlock.querySelector('.wp-block-englemond-contact-form__error');
				const successMessage = formBlock.querySelector('.wp-block-englemond-contact-form__success');
				
				// Get AJAX URL and nonce from data attributes
				const ajaxUrl = formBlock.dataset.ajaxUrl || '';
				const nonce = formBlock.dataset.nonce || '';
				
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
				})
				.then(function(response) {
					return response.json();
				})
				.then(function(data) {
					if (submitButton) {
						submitButton.disabled = false;
						submitButton.textContent = originalText;
					}
					
					if (data.success) {
						// Show success message
						if (successMessage) {
							successMessage.textContent = data.data.message || 'Thank you! Your message has been sent.';
							successMessage.style.display = 'block';
							setTimeout(function() {
								successMessage.style.display = 'none';
							}, 5000);
						}
						
						form.reset();
						
						// Close popup if it's open
						if (displayType === 'popup') {
							const popup = formBlock.querySelector('.wp-block-englemond-contact-form__popup');
							if (popup) {
								setTimeout(function() {
									popup.classList.remove('is-open');
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
				})
				.catch(function(error) {
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
