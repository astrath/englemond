import $ from 'jquery';
import './admin.scss';

$(document).ready(function() {
	// Handle Escape key to close modals
	$(document).on('keydown', function(e) {
		// Check if Escape key is pressed
		if (e.key === 'Escape' || e.keyCode === 27) {
			// Close any open modal overlays
			$('.englemond-detail-modal-overlay, .englemond-price-modal-overlay').remove();
		}
	});
	
	// Handle click on detail column list
	$(document).on('click', '.englemond-detail-list', function(e) {
		e.preventDefault();
		const $list = $(this);
		const postId = $list.data('post-id');
		
		// Get current values
		const values = {};
		$list.find('li').each(function() {
			const $li = $(this);
			const key = $li.data('metakey');
			const value = $li.find('span').text().trim();
			values[key] = value;
		});
		
		// Show modal
		showDetailEditModal(postId, values, $list);
	});
	
	// Handle click on price column
	$(document).on('click', '.englemond-price-cell', function(e) {
		e.preventDefault();
		const $cell = $(this);
		const postId = $cell.data('post-id');
		const currentPrice = $cell.data('price') || '';
		
		// Show price edit modal
		showPriceEditModal(postId, currentPrice, $cell);
	});
	
	function showDetailEditModal(postId, values, $list) {
		// Create modal HTML
		const modalHtml = `
			<div class="englemond-detail-modal-overlay">
				<div class="englemond-detail-modal">
					<div class="englemond-detail-modal-header">
						<h2>Edit Product Details</h2>
						<button class="englemond-detail-modal-close">&times;</button>
					</div>
					<div class="englemond-detail-modal-body">
						<div class="englemond-detail-field">
							<label for="detail-grammage">Grammage:</label>
							<input type="text" id="detail-grammage" name="grammage" value="${escapeHtml(values.grammage || '')}" />
						</div>
						<div class="englemond-detail-field">
							<label for="detail-Caratage">Caratage:</label>
							<textarea id="detail-Caratage" name="Caratage" rows="4">${escapeHtml(values.Caratage || '')}</textarea>
						</div>
						<div class="englemond-detail-field">
							<label for="detail-cotation">Cotation:</label>
							<input type="text" id="detail-cotation" name="cotation" value="${escapeHtml(values.cotation || '')}" />
						</div>
					</div>
					<div class="englemond-detail-modal-footer">
						<button class="button button-secondary englemond-detail-modal-cancel">Cancel</button>
						<button class="button button-primary englemond-detail-modal-save">Save</button>
					</div>
				</div>
			</div>
		`;
		
		const $modal = $(modalHtml);
		$('body').append($modal);
		
		// Close handlers
		$modal.find('.englemond-detail-modal-close, .englemond-detail-modal-cancel, .englemond-detail-modal-overlay').on('click', function(e) {
			if (e.target === this) {
				$modal.remove();
			}
		});
		
		// Save handler
		$modal.find('.englemond-detail-modal-save').on('click', function() {
			const newValues = {
				grammage: $modal.find('#detail-grammage').val(),
				Caratage: $modal.find('#detail-Caratage').val(),
				cotation: $modal.find('#detail-cotation').val()
			};
			
			saveProductDetails(postId, newValues, $list, $modal);
		});
		
		// Prevent closing when clicking inside modal
		$modal.find('.englemond-detail-modal').on('click', function(e) {
			e.stopPropagation();
		});
	}
	
	function saveProductDetails(postId, values, $list, $modal) {
		const $saveButton = $modal.find('.englemond-detail-modal-save');
		$saveButton.prop('disabled', true).text('Saving...');
		
		$.ajax({
			url: englemondProductsAdmin.ajaxurl,
			type: 'POST',
			data: {
				action: 'englemond_products_update_details',
				post_id: postId,
				grammage: values.grammage,
				Caratage: values.Caratage,
				cotation: values.cotation,
				nonce: englemondProductsAdmin.nonce
			},
			success: function(response) {
				if (response.success) {
					// Update the list display
					updateDetailList($list, values);
					$modal.remove();
				} else {
					alert('Error saving details: ' + (response.data || 'Unknown error'));
					$saveButton.prop('disabled', false).text('Save');
				}
			},
			error: function() {
				alert('Error saving details. Please try again.');
				$saveButton.prop('disabled', false).text('Save');
			}
		});
	}
	
	function updateDetailList($list, values) {
		$list.find('li').each(function() {
			const $li = $(this);
			const key = $li.data('metakey');
			if (values.hasOwnProperty(key)) {
				$li.find('span').text(values[key] || '');
			}
		});
	}
	
	function showPriceEditModal(postId, currentPrice, $cell) {
		// Create modal HTML
		const modalHtml = `
			<div class="englemond-price-modal-overlay">
				<div class="englemond-price-modal">
					<div class="englemond-price-modal-header">
						<h2>Edit Product Price</h2>
						<button class="englemond-price-modal-close">&times;</button>
					</div>
					<div class="englemond-price-modal-body">
						<div class="englemond-price-field">
							<label for="price-value">Price:</label>
							<input type="text" id="price-value" name="displayedPrice" value="${escapeHtml(currentPrice)}" />
						</div>
					</div>
					<div class="englemond-price-modal-footer">
						<button class="button button-secondary englemond-price-modal-cancel">Cancel</button>
						<button class="button button-primary englemond-price-modal-save">Save</button>
					</div>
				</div>
			</div>
		`;
		
		const $modal = $(modalHtml);
		$('body').append($modal);
		
		// Close handlers
		$modal.find('.englemond-price-modal-close, .englemond-price-modal-cancel, .englemond-price-modal-overlay').on('click', function(e) {
			if (e.target === this) {
				$modal.remove();
			}
		});
		
		// Save handler
		$modal.find('.englemond-price-modal-save').on('click', function() {
			const newPrice = $modal.find('#price-value').val();
			saveProductPrice(postId, newPrice, $cell, $modal);
		});
		
		// Prevent closing when clicking inside modal
		$modal.find('.englemond-price-modal').on('click', function(e) {
			e.stopPropagation();
		});
		
		// Focus on input
		$modal.find('#price-value').focus().select();
	}
	
	function saveProductPrice(postId, price, $cell, $modal) {
		const $saveButton = $modal.find('.englemond-price-modal-save');
		$saveButton.prop('disabled', true).text('Saving...');
		
		$.ajax({
			url: englemondProductsAdmin.ajaxurl,
			type: 'POST',
			data: {
				action: 'englemond_products_update_price',
				post_id: postId,
				price: price,
				nonce: englemondProductsAdmin.nonce
			},
			success: function(response) {
				if (response.success) {
					// Update the cell display
					$cell.data('price', price);
					$cell.text(price || '—');
					$modal.remove();
				} else {
					alert('Error saving price: ' + (response.data || 'Unknown error'));
					$saveButton.prop('disabled', false).text('Save');
				}
			},
			error: function() {
				alert('Error saving price. Please try again.');
				$saveButton.prop('disabled', false).text('Save');
			}
		});
	}
	
	function escapeHtml(text) {
		const map = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&#039;'
		};
		return text.replace(/[&<>"']/g, m => map[m]);
	}
});
