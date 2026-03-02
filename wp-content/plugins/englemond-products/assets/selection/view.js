import $ from 'jquery';
import './view.scss';

/**
 * Front-end script for englemond/selection block carousel
 */
(function($) {
	'use strict';

	$(document).ready(function() {
		$('.wp-block-englemond-selection__carousel').each(function() {
			const $carousel = $(this);
			const $viewport = $carousel.find('.wp-block-englemond-selection__carousel-viewport');
			const $inner = $carousel.find('.wp-block-englemond-selection__carousel-inner');
			const $items = $carousel.find('.wp-block-englemond-selection__carousel-item');
			const $prevBtn = $carousel.find('.wp-block-englemond-selection__carousel-control-prev');
			const $nextBtn = $carousel.find('.wp-block-englemond-selection__carousel-control-next');
			const $sideLinks = $carousel.find('.wp-block-englemond-selection__side a[data-index]');
			
			if ($items.length === 0) {
				return;
			}

			// Get columns count from the inner width calculation
			// The width is set as a percentage: (total items * 100) / columnsCount
			function getColumnsCount() {
				const windowWidth = $(window).width();
				// Override to 1 column if window width is less than 600px
				if (windowWidth < 600) {
					return 1;
				}
				const innerWidth = parseFloat($inner.css('width')) || 0;
				const viewportWidth = $viewport.width();
				const itemsPerView = Math.round(viewportWidth / (innerWidth / $items.length));
				return itemsPerView || 3;
			}
			
			let columnsCount = getColumnsCount();
			let currentIndex = 0;
			const totalItems = $items.length;
			let maxIndex = Math.max(0, totalItems - columnsCount);

			// Calculate item width percentage
			let itemWidthPercent = 100 / columnsCount;

			/**
			 * Update carousel position
			 */
			function updateCarousel() {
				// Recalculate columns count on each update to handle window resize
				columnsCount = getColumnsCount();
				itemWidthPercent = 100 / columnsCount;
				maxIndex = Math.max(0, totalItems - columnsCount);
				$inner.css('width', `${totalItems*100/columnsCount}%`);
				// Ensure currentIndex doesn't exceed maxIndex
				if (currentIndex > maxIndex) {
					currentIndex = maxIndex;
				}
				
				const offset = -(currentIndex * itemWidthPercent);
				$inner.css('margin-left', `${offset}%`);
				
				// Update button states
				$prevBtn.prop('disabled', currentIndex <= 0);
				$nextBtn.prop('disabled', currentIndex >= maxIndex);
				
				// Update active link in side panel
				$sideLinks.removeClass('active');
				$sideLinks.filter(`[data-index="${currentIndex}"]`).addClass('active');
			}

			/**
			 * Go to specific index
			 */
			function goToIndex(index) {
				currentIndex = Math.max(0, Math.min(index, maxIndex));
				updateCarousel();
			}

			/**
			 * Go to previous slide
			 */
			function goToPrev() {
				if (currentIndex > 0) {
					currentIndex--;
					updateCarousel();
				}
			}

			/**
			 * Go to next slide
			 */
			function goToNext() {
				if (currentIndex < maxIndex) {
					currentIndex++;
					updateCarousel();
				}
			}

			// Event handlers
			$prevBtn.on('click', function(e) {
				e.preventDefault();
				goToPrev();
			});

			$nextBtn.on('click', function(e) {
				e.preventDefault();
				goToNext();
			});

			$sideLinks.on('click', function(e) {
				const index = parseInt($(this).data('index'), 10);
				if (!isNaN(index)) {
					e.preventDefault();
					goToIndex(index);
				}
			});

			// Keyboard navigation
			$carousel.on('keydown', function(e) {
				if (e.key === 'ArrowLeft' || e.keyCode === 37) {
					e.preventDefault();
					goToPrev();
				} else if (e.key === 'ArrowRight' || e.keyCode === 39) {
					e.preventDefault();
					goToNext();
				}
			});

			// Touch/swipe support
			let touchStartX = 0;
			let touchEndX = 0;

			$viewport.on('touchstart', function(e) {
				touchStartX = e.changedTouches[0].screenX;
			});

			$viewport.on('touchend', function(e) {
				touchEndX = e.changedTouches[0].screenX;
				handleSwipe();
			});

			function handleSwipe() {
				const swipeThreshold = 50;
				const diff = touchStartX - touchEndX;
				
				if (Math.abs(diff) > swipeThreshold) {
					if (diff > 0) {
						// Swipe left - go next
						goToNext();
					} else {
						// Swipe right - go prev
						goToPrev();
					}
				}
			}

			// Window resize listener to update column count
			let resizeTimeout;
			$(window).on('resize', function() {
				clearTimeout(resizeTimeout);
				resizeTimeout = setTimeout(function() {
					updateCarousel();
				}, 100);
			});

			// Initialize
			updateCarousel();
		});
	});
})(jQuery);
