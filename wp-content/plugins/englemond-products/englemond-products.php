<?php 
/**
 * Plugin Name: Englemond Products
 * Description: A plugin to manage products for the Englemond theme
 * Version: 1.0.0
 * Author: Aymen Jerbi
 * Author URI: https://example.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: englemond-products
 * Domain Path: /languages
 */

if (!defined('WPINC')) {
	die;
}
require_once __DIR__ . '/includes/model-product.php';
require_once __DIR__ . '/includes/model-joaillery.php';
require_once __DIR__ . '/includes/settings.php';
require_once __DIR__ . '/includes/mailer.php';
require_once __DIR__ . '/ajax.php';

add_action('admin_enqueue_scripts', 'englemond_products_admin_enqueue_scripts');
function englemond_products_admin_enqueue_scripts() {
	$screen = get_current_screen();
	$isProductEditScreen = $screen->base == 'edit' && $screen->post_type == 'product';
	if (!$isProductEditScreen) {
		return;
	}
	wp_enqueue_script('englemond-products-admin', plugins_url('build/englemond-products.js', __FILE__), ['jquery'], '1.0.0', true);
	wp_enqueue_style('englemond-products-admin', plugins_url('build/englemond-products.css', __FILE__), [], '1.0.0');
	
	// Localize script with AJAX URL and nonce
	wp_localize_script('englemond-products-admin', 'englemondProductsAdmin', [
		'ajaxurl' => admin_url('admin-ajax.php'),
		'nonce' => wp_create_nonce('englemond_products_admin'),
	]);
}	


/**
 * Register blocks
 */
function englemond_products_register_blocks() {
	$blocks = [
		'gallery',
		'selection',
		'contact-form',
	];
	
	foreach ($blocks as $block_name) {
		$block_path = __DIR__ . '/blocks/' . $block_name;
		
		if (file_exists($block_path . '/block.json')) {
			register_block_type_from_metadata($block_path);
		}
	}
}
add_action('init', 'englemond_products_register_blocks');

