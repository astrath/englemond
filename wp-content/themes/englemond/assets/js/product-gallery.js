import $ from 'jquery';

$.fn.englemondProductGallery = function() {
    const $gallery = $(this);
    const html = $gallery.html();
    const $images = $gallery.find('> .wp-block-image');
    
    $gallery.html(`<div class="is-style-gallery-product__inner">
        <div class="is-style-gallery-product__nav">
            ${html}
        </div>
        <div class="is-style-gallery-product__frame">
            <div class="is-style-gallery-product__viewport">
                ${html}
            </div>
        </div>
    </div>`);
    
    const $previewFrame = $gallery.find('.is-style-gallery-product__viewport');
    $previewFrame.css('width', `${$images.length * 100}%`);
    $gallery.find('.is-style-gallery-product__nav > .wp-block-image').on('click', function() {
        const index = $(this).index();
        $previewFrame.css('margin-left', `-${index * 100}%`);
    });
    $gallery.find('.is-style-gallery-product__viewport > .wp-block-image').on('mousemove', function(event) {
        const $el = $(this);
        const rect  = this.getBoundingClientRect();
        const cursorRelativePos = {
            x: (event.clientX - rect.left) / (rect.width +1),
            y: (event.clientY - rect.top) / (rect.height +1)
        }
        const imgWidth = $el.width();
        const imgHeight = $el.height();
        $el.find('img').css('transform', 'scale(2)')
        .css('transformOrigin', `${cursorRelativePos.x * 100}% ${cursorRelativePos.y * 100}%`);
    }).on('mouseleave', function() {
        $(this).find('img').css('transform', 'none');
    });
}

$(function() {
    $('.is-style-gallery-product').each(function() {
        $(this).englemondProductGallery();
    });
});