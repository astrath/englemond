<?php
/**
 * Server-side rendering for the englemond/browser block
 *
 * @package EnglemondProducts
 */

if (!defined('ABSPATH')) {
	exit;
}

$products_per_page = isset($attributes['productsPerPage']) ? intval($attributes['productsPerPage']) : 12;
$show_category_tree = isset($attributes['showCategoryTree']) ? $attributes['showCategoryTree'] : true;
$show_search = isset($attributes['showSearch']) ? $attributes['showSearch'] : true;


$categories = englemond_browser_get_category_tree();

$wrapper_attributes = get_block_wrapper_attributes([
	'class' => 'wp-block-englemond-browser',
	'data-products-per-page' => esc_attr($products_per_page),
	'data-ajax-url' => esc_url(admin_url('admin-ajax.php')),
	'data-nonce' => wp_create_nonce('englemond_browser'),
]);

?>

<div <?php echo $wrapper_attributes; ?>>
    
<div class="wp-block-englemond-browser__sidebar">
    <button class="wp-block-englemond-browser__sidebar-close" aria-label="<?php esc_attr_e('Close filters', 'englemond-products'); ?>">
        &times;
    </button>
    <?php foreach ($categories as $category) : ?>
        <div class="wp-block-englemond-browser__panel">
            <h3 class="wp-block-englemond-browser__panel-title">
                <?php echo esc_html($category->name); ?>
            </h3>
            <ul class="wp-block-englemond-browser__panel-list">
                <?php foreach ($category->children as $child) : ?>
                <li>
                    <input type="checkbox" id="wp-block-englemond-browser__category-checkbox-<?php echo esc_attr($child->term_id); ?>" name="cats[]" value="<?php echo esc_attr($child->term_id); ?>" class="wp-block-englemond-browser__category-checkbox" data-category-id="<?php echo esc_attr($child->term_id); ?>" data-parent-category="<?php echo esc_attr($category->term_id); ?>">
                    <label for="wp-block-englemond-browser__category-checkbox-<?php echo esc_attr($child->term_id); ?>" class="wp-block-englemond-browser__category-link">
                        <?php echo esc_html($child->name); ?>
                    </label>
                </li>
                <?php endforeach; ?>
            </ul>
        </div>
        <?php endforeach; ?>

    </div>
    <div class="wp-block-englemond-browser__main">
        <div class="wp-block-englemond-browser__main-inner" style="position: sticky; top: 32px; z-index: 100;">
            <div class="wp-block-englemond-browser__filters">
                <?php if ($show_search) : ?>
                <div class="wp-block-englemond-browser__search">
                    <input 
                        value="<?= esc_attr(get_query_var('s') ?? ''); ?>"
                        type="search" 
                        class="wp-block-englemond-browser__search-input" 
                        placeholder="<?php esc_attr_e('Search products...', 'englemond-products'); ?>"
                        aria-label="<?php esc_attr_e('Search products', 'englemond-products'); ?>"
                    />
                    <button class="wp-block-englemond-browser__sidebar-toggle" aria-label="<?php esc_attr_e('Open filters', 'englemond-products'); ?>">
                        <?php esc_html_e('Filters', 'englemond-products'); ?>
                    </button>
                </div>
                <?php endif; ?>
            </div>
            <div class="wp-block-englemond-browser__content">
                <div class="wp-block-englemond-browser__products" role="region" aria-live="polite">
                    <div class="wp-block-englemond-browser__loading" style="display: none;">
                        <?php esc_html_e('Loading products...', 'englemond-products'); ?>
                    </div>
                    <div class="wp-block-englemond-browser__products-grid">
                        <!-- Products will be loaded here via AJAX -->
                    </div>
                    <div class="wp-block-englemond-browser__pagination">
                        <!-- Pagination will be rendered here -->
                    </div>
                    <div class="wp-block-englemond-browser__no-results" style="display: none;">
                        <?php esc_html_e('No products found.', 'englemond-products'); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
