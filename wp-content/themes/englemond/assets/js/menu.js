import $ from 'jquery';

$.fn.englemondSubmenuPanoramaMenu = function() {
    const $menu = $(this);
    $(this).find(' > ul').each(function() {
        const cls = $(this).attr('class');
        $(this).attr('class', 'iis-style-submenu-panorama__items');
        $(this).wrap('<div class="is-style-submenu-panorama__container '+cls+'">');
    });

    $(this).find(' > .is-style-submenu-panorama__container ').append('<div class="is-style-panorama-subitem-panorama__preview">');
    const $preview = $menu.find('.is-style-panorama-subitem-panorama__preview');
    $(this).find('.has-image').on('mouseenter', function() {
        const imgUrl = $(this).find('img').attr('src');
        const desc = $(this).find('.wp-block-navigation-item__description').html();
        const title = $(this).find('.wp-block-navigation-item__label').html();
        $menu.find('.has-preview').removeClass('has-preview');
        $(this).addClass('has-preview');
        
        $preview.html(`<h4>${title}</h4><p>${desc}</p><img src="${imgUrl}"}">`);
    });
    

}

$(function() {
    $('.is-style-submenu-panorama').each(function() {
        $(this).englemondSubmenuPanoramaMenu();
    });
    $(document).on('click', '.wp-block-navigation-submenu__toggle', function(e) {
        $('.menu-is-open').removeClass('submenu-is-open');
        $(this).parent().toggleClass('submenu-is-open');
    });
    $(document).on('click', '.main-menu-toggle', function(e) {
        $('.wp-block-navigation__responsive-container-open').click();
    });
    
});         
