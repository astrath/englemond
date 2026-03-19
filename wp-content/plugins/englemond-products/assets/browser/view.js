/**
 * Frontend JavaScript for the englemond/browser block
 */
import $ from 'jquery';
import './view.scss';

(function($) {
	'use strict';

	// Initialize all browser blocks on the page
	function initBrowserBlocks() {
		$('.wp-block-englemond-browser').each(function() {
			const $block = $(this);
			
			// Skip if already initialized
			if ($block.data('initialized') === true) {
				return;
			}
			
			$block.data('initialized', true);
			new ProductBrowser($block);
		});
	}

	class ProductBrowser {
		constructor($container) {
			this.$container = $container;
			this.productsPerPage = parseInt($container.data('products-per-page')) || 12;
			this.currentPage = 1;
			this.currentCategories = [];
			this.currentSearch = $container.find('.wp-block-englemond-browser__search-input').val().trim();
			this.ajaxUrl = $container.data('ajax-url');
			this.nonce = $container.data('nonce');
			
			this.$productsGrid = $container.find('.wp-block-englemond-browser__products-grid');
			this.$pagination = $container.find('.wp-block-englemond-browser__pagination');
			this.$loading = $container.find('.wp-block-englemond-browser__loading');
			this.$noResults = $container.find('.wp-block-englemond-browser__no-results');
			
			this.init();
		}

		init() {
			const self = this;
			
			// Search input handler with debounce
			const $searchInput = this.$container.find('.wp-block-englemond-browser__search-input');
			if ($searchInput.length) {
				let searchTimeout;
				$searchInput.on('input', function() {
					clearTimeout(searchTimeout);
					searchTimeout = setTimeout(function() {
						self.currentSearch = $(this).val().trim();
						self.currentPage = 1;
						self.loadProducts();
					}.bind(this), 300);
				});
			}

			// Category checkbox handlers
			this.$container.on('change', '.wp-block-englemond-browser__category-checkbox', function() {
				const $checkbox = $(this);
				const categoryId = $checkbox.val();
				const parentCategory = $checkbox.data('parent-category');
				const isAll = $checkbox.hasClass('wp-block-englemond-browser__category-checkbox--all');
				
				if (isAll && $checkbox.is(':checked')) {
					// If "All" is checked, uncheck all other checkboxes in this group
					self.$container.find('.wp-block-englemond-browser__category-checkbox[data-parent-category="' + parentCategory + '"]')
						.not($checkbox)
						.prop('checked', false);
					self.currentCategories = self.currentCategories.filter(function(cat) {
						return cat.parentCategory !== parentCategory;
					});
				} else if (isAll && !$checkbox.is(':checked')) {
					// If "All" is unchecked, do nothing special
				} else {
					// If a specific category is checked/unchecked
					if ($checkbox.is(':checked')) {
						// Uncheck "All" for this parent category
						self.$container.find('.wp-block-englemond-browser__category-checkbox--all[data-parent-category="' + parentCategory + '"]')
							.prop('checked', false);
						
						// Add to categories array if not already present
						const categoryIdInt = parseInt(categoryId);
						if (self.currentCategories.indexOf(categoryIdInt) === -1) {
							self.currentCategories.push(categoryIdInt);
						}
					} else {
						// Remove from categories array
						const categoryIdInt = parseInt(categoryId);
						self.currentCategories = self.currentCategories.filter(function(cat) {
							return cat !== categoryIdInt;
						});
					}
				}
				
				// Update currentCategories from all checked checkboxes
				self.updateCategoriesFromCheckboxes();
				self.currentPage = 1;
				self.loadProducts();
			});

			this.$container.on('click',  '.wp-block-englemond-browser__sidebar-toggle', function() {	
				self.$container.find('.wp-block-englemond-browser__sidebar').toggleClass('active');
			});
			this.$container.on('click', '.wp-block-englemond-browser__sidebar-close', function() {
				self.$container.find('.wp-block-englemond-browser__sidebar').removeClass('active');
			});

			// Initial load
			this.loadProducts();
		}

		updateCategoriesFromCheckboxes() {
			const self = this;
			this.currentCategories = [];
			
			this.$container.find('.wp-block-englemond-browser__category-checkbox:checked').each(function() {
				const $checkbox = $(this);
				const categoryId = $checkbox.val();
				
				// Skip "all" checkboxes
				if (categoryId !== 'all') {
					const categoryIdInt = parseInt(categoryId);
					if (categoryIdInt && self.currentCategories.indexOf(categoryIdInt) === -1) {
						self.currentCategories.push(categoryIdInt);
					}
				}
			});
		}

		loadProducts() {
			const self = this;
			this.showLoading();
			this.hideNoResults();

			const params = {
				action: 'englemond_browser_get_products',
				nonce: this.nonce,
				page: this.currentPage,
				per_page: this.productsPerPage,
			};

			// Add categories as array
			if (this.currentCategories.length > 0) {
				params.cats = this.currentCategories;
			}

			// Add search
			if (this.currentSearch) {
				params.search = this.currentSearch;
			}

			$.ajax({
				url: this.ajaxUrl,
				type: 'GET',
				data: params,
				dataType: 'json',
				success: function(response) {
					self.hideLoading();
					
					if (response.success && response.data) {
						self.renderProducts(response.data.products || []);
						self.renderPagination(response.data.pagination || {});
					} else {
						self.showNoResults();
					}
				},
				error: function(xhr, status, error) {
					console.error('Error loading products:', error);
					self.hideLoading();
					self.showNoResults();
				}
			});
		}

		renderProducts(products) {
			if (products.length === 0) {
				this.showNoResults();
				this.$productsGrid.empty();
				return;
			}

			const html = products.map(function(product) {
				const thumbnail = product.thumbnail || '';
				const title = product.title || '';
				const permalink = product.permalink || '#';
				const price = product.price || '';

				let productHtml = '<article class="wp-block-englemond-browser__product">';
				productHtml += '<a href="' + permalink + '" class="wp-block-englemond-browser__product-link">';
				
				if (thumbnail) {
					productHtml += '<div class="wp-block-englemond-browser__product-thumbnail">';
					productHtml += '<img src="' + thumbnail + '" alt="' + title.replace(/"/g, '&quot;') + '" loading="lazy" />';
					productHtml += '</div>';
				}
				
				productHtml += '<div class="wp-block-englemond-browser__product-content">';
				productHtml += '<h3 class="wp-block-englemond-browser__product-title">' + title + '</h3>';
				
				if (price) {
					productHtml += '<div class="wp-block-englemond-browser__product-price">' + price + '</div>';
				}
				
				productHtml += '</div>';
				productHtml += '</a>';
				productHtml += '</article>';
				
				return productHtml;
			}).join('');

			this.$productsGrid.html(html);
		}

		renderPagination(pagination) {
			if (!pagination || !pagination.total_pages || pagination.total_pages <= 1) {
				this.$pagination.empty();
				return;
			}

			const self = this;
			const current_page = pagination.current_page;
			const total_pages = pagination.total_pages;
			const prev_page = pagination.prev_page;
			const next_page = pagination.next_page;
			const pages = [];

			// Previous button
			if (prev_page) {
				pages.push(
					'<button class="wp-block-englemond-browser__pagination-button wp-block-englemond-browser__pagination-button--prev" ' +
					'data-page="' + prev_page + '" ' +
					'aria-label="' + this.getText('Previous page') + '">' +
					this.getText('Previous') +
					'</button>'
				);
			}

			// Page numbers
			const maxVisible = 5;
			let startPage = Math.max(1, current_page - Math.floor(maxVisible / 2));
			let endPage = Math.min(total_pages, startPage + maxVisible - 1);

			if (endPage - startPage < maxVisible - 1) {
				startPage = Math.max(1, endPage - maxVisible + 1);
			}

			if (startPage > 1) {
				pages.push('<button class="wp-block-englemond-browser__pagination-button" data-page="1">1</button>');
				if (startPage > 2) {
					pages.push('<span class="wp-block-englemond-browser__pagination-ellipsis">...</span>');
				}
			}

			for (let i = startPage; i <= endPage; i++) {
				const activeClass = i === current_page ? ' is-active' : '';
				pages.push(
					'<button class="wp-block-englemond-browser__pagination-button' + activeClass + '" ' +
					'data-page="' + i + '">' + i + '</button>'
				);
			}

			if (endPage < total_pages) {
				if (endPage < total_pages - 1) {
					pages.push('<span class="wp-block-englemond-browser__pagination-ellipsis">...</span>');
				}
				pages.push('<button class="wp-block-englemond-browser__pagination-button" data-page="' + total_pages + '">' + total_pages + '</button>');
			}

			// Next button
			if (next_page) {
				pages.push(
					'<button class="wp-block-englemond-browser__pagination-button wp-block-englemond-browser__pagination-button--next" ' +
					'data-page="' + next_page + '" ' +
					'aria-label="' + this.getText('Next page') + '">' +
					this.getText('Next') +
					'</button>'
				);
			}

			this.$pagination.html(pages.join(''));

			// Add click handlers
			this.$pagination.on('click', '.wp-block-englemond-browser__pagination-button', function(e) {
				e.preventDefault();
				const page = parseInt($(this).data('page'));
				if (page && page !== self.currentPage) {
					self.currentPage = page;
					self.loadProducts();
					// Scroll to top of products grid
					$('html, body').animate({
						scrollTop: self.$productsGrid.offset().top - 100
					}, 500);
				}
			});
		}

		showLoading() {
			if (this.$loading.length) {
				this.$loading.show();
			}
			if (this.$productsGrid.length) {
				this.$productsGrid.css('opacity', '0.5');
			}
		}

		hideLoading() {
			if (this.$loading.length) {
				this.$loading.hide();
			}
			if (this.$productsGrid.length) {
				this.$productsGrid.css('opacity', '1');
			}
		}

		showNoResults() {
			if (this.$noResults.length) {
				this.$noResults.show();
			}
		}

		hideNoResults() {
			if (this.$noResults.length) {
				this.$noResults.hide();
			}
		}

		getText(key) {
			// Simple text mapping - can be enhanced with i18n
			const texts = {
				'Previous': 'Previous',
				'Next': 'Next',
				'Previous page': 'Previous page',
				'Next page': 'Next page',
			};
			return texts[key] || key;
		}
	}

	// Initialize on DOM ready
	$(document).ready(function() {
		initBrowserBlocks();
	});

	// Re-initialize for dynamically loaded content
	if (typeof wp !== 'undefined' && wp.domReady) {
		wp.domReady(initBrowserBlocks);
	}
})(jQuery);
