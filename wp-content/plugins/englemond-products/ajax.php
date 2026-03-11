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
add_action('wp_ajax_nopriv_get_products', 'englemond_products_get_products');

add_action('wp_ajax_englemond_browser_get_category_tree', function(){
    $tree = array_values(englemond_browser_get_category_tree());
    wp_send_json_success($tree);
});
/**
 * Handle browser products AJAX request with pagination
 * 
 * Parameters:
 * - page: Current page number
 * - per_page: Number of products per page
 * - category: Category ID to filter by (optional)
 * - search: Search term (optional)
 */
function englemond_browser_get_products() {
	
	$page = isset($_GET['page']) ? max(1, intval($_GET['page'])) : 1;
	$per_page = isset($_GET['per_page']) ? max(1, intval($_GET['per_page'])) : 12;
	$search = isset($_GET['search']) ? sanitize_text_field($_GET['search']) : '';
	
	// Get categories from cats[] array
	$categories = [];
	if (isset($_GET['cats']) && is_array($_GET['cats'])) {
		$categories = array_map('intval', $_GET['cats']);
		$categories = array_filter($categories, function($cat) {
			return $cat > 0;
		});
	}
	
	$args = [
		'post_type' => 'product',
		'post_status' => 'publish',
		'posts_per_page' => $per_page,
		'paged' => $page,
	];
	
	// Add search
	if (!empty($search)) {
		$args['s'] = $search;
	}
	
	// Add category filter - support multiple categories
	if (!empty($categories)) {
		$args['tax_query'] = [
			[
				'taxonomy' => 'product_cat',
				'field' => 'term_id',
				'terms' => $categories,
				'operator' => 'IN',
			],
		];
	}
	
	$query = new WP_Query($args);
	
	$products = [];
	foreach ($query->posts as $post) {
		$thumbnail_id = get_post_thumbnail_id($post->ID);
		$thumbnail_url = $thumbnail_id ? wp_get_attachment_image_url($thumbnail_id, 'medium') : '';
		$price = get_post_meta($post->ID, 'displayedPrice', true);
		
		$products[] = [
			'id' => $post->ID,
			'title' => $post->post_title,
			'permalink' => get_permalink($post->ID),
			'thumbnail' => $thumbnail_url,
			'price' => $price ? esc_html($price) : '',
		];
	}
	
	// Calculate pagination info
	$total_pages = $query->max_num_pages;
	$pagination = [
		'current_page' => $page,
		'total_pages' => $total_pages,
		'total_products' => $query->found_posts,
		'per_page' => $per_page,
		'prev_page' => $page > 1 ? $page - 1 : null,
		'next_page' => $page < $total_pages ? $page + 1 : null,
	];
	
	wp_send_json_success([
		'products' => $products,
		'pagination' => $pagination,
	]);
}

// Register AJAX actions for both logged-in and non-logged-in users
add_action('wp_ajax_englemond_browser_get_products', 'englemond_browser_get_products');
add_action('wp_ajax_nopriv_englemond_browser_get_products', 'englemond_browser_get_products');