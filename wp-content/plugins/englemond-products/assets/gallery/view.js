import $ from 'jquery';
/**
 * Front-end script for englemond/gallery block
 */
import './view.scss';
(function($) {
	'use strict';

	$(document).ready(function() {
		$('.wp-block-englemond-gallery').each(function() {
			const $gallery = $(this);
			const $frameInner = $gallery.find('.wp-block-englemond-gallery__frame-inner');
			const $navItems = $gallery.find('.wp-block-englemond-gallery__nav-item');
			const $frameItems = $gallery.find('.wp-block-englemond-gallery__frame-item');
			$navItems.on('click', function() {
				$navItems.removeClass('active');
				$(this).addClass('active');
				const index = $(this).index();
				$frameInner.css('margin-left', `-${index * 100}%`);
			});
			$frameItems.on('mousemove', function(e) {
				const rect  = this.getBoundingClientRect();
				const cursorRelativePosition = {
					x: (e.clientX - rect.left) / rect.width,
					y: (e.clientY - rect.top) / rect.height,
				};
				console.log(cursorRelativePosition);
				$(this).find('img').css('transform', `scale(2)`).css('transform-origin', `${cursorRelativePosition.x * 100}% ${cursorRelativePosition.y * 100}%`);
			}).on('mouseleave', function() {
				$(this).find('img').css('transform', `none`).css('transform-origin', 'center center');
			});	
		});
	});
})(jQuery);
