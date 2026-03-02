<?php
/**
 * AJAX handlers for Englemond Products plugin
 *
 * @package EnglemondProducts
 */

if (!defined('ABSPATH')) {
	exit;
}

/**
 * Handle get_products AJAX request
 * 
 * Parameters:
 * - type: Type of query ('ids' or 'term')
 * - ids: Comma-separated product IDs (when type is 'ids')
 * - term: Term ID for category (when type is 'term') or search term
 * - perPage: Number of products per page
 */
function englemond_products_get_products() {
	// Verify nonce for security (optional but recommended)
	// check_ajax_referer('englemond_products_nonce', 'nonce');
	
	// Get parameters
    $search = isset($_GET['search']) ? sanitize_text_field($_GET['search']) : '';
	$type = isset($_GET['type']) ? sanitize_text_field($_GET['type']) : '';
	$ids = isset($_GET['ids']) ? array_map('intval', explode(',', sanitize_text_field($_GET['ids']))) : [];
	$term = isset($_GET['term']) ? sanitize_text_field($_GET['term']) : '';
	$perPage = isset($_GET['perPage']) ? intval($_GET['perPage']) : -1;
	
	// Remove empty values from ids array
	$ids = array_filter($ids);
	
	$posts = [];
    if ($type === 'search') {
        $posts = get_posts([
            's' => $_GET['search']??'',
            'post_type' => 'product',
            'post_status' => 'publish',
            'per_page' => 20,
        ]);   
    }  elseif ($type === 'term') {
        if ($term) {
            $posts = get_posts([
                'post_type' => 'product',
                'post_status' => 'publish',
                'posts_per_page' => $perPage,
                'tax_query' => [
                    [
                        'taxonomy' => 'product_cat',
                        'field' => 'term_id',
                        'terms' => $term,
                    ],
                ],
            ]);
        }
    }
    elseif (!empty($ids)){
        $posts = get_posts([
            'post_type' => 'product',
            'post_status' => 'publish',
            'posts_per_page' => $perPage > 0 ? $perPage : -1,
            'post__in' => $ids,
            'orderby' => 'post__in',
        ]);
    }
    $products = [];
    foreach ($posts as $post) {
        $products[] = [
            'id' => $post->ID,
            'title' => $post->post_title,
            'thumbnail' => get_the_post_thumbnail_url($post->ID, 'medium'),
        ];
    }
	wp_send_json_success($products);
}

// Register AJAX actions for both logged-in and non-logged-in users
add_action('wp_ajax_get_products', 'englemond_products_get_products');
