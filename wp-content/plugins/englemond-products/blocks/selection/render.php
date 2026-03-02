<?php
/**
 * Server-side rendering for the englemond/selection block
 *
 * @package EnglemondProducts
 */

if (!defined('ABSPATH')) {
	exit;
}
$source = wp_parse_args($attributes['source'], [
	'type' => '',
	'term' => null,
	'ids' => [],
	'perPage' => 8,
]);
$selected_products = [];
if ($source['type'] === 'term' && $source['term']) {
	$selected_products = get_posts([
			'post_type' => 'product',
			'posts_per_page' => $source['perPage'],
			'tax_query' => [
				[
					'taxonomy' => 'product_cat',
					'field' => 'term_id',
					'terms' => $source['term'],
				],
			],
		]);
} elseif ($source['type'] === '' && $source['ids']) {
	$selected_products = get_posts([
		'include' => $source['ids'],
		'post_type' => 'product',
		'numberposts' => count($source['ids']),
		'post_status' => 'publish',
	]);
}
// View settings (from attributes or fallback to _viewType/_columnsCount for ServerSideRender)
$view = wp_parse_args($attributes['view'], ['type' => 'carousel', 'columnsCount' => 3, 'aspectRatio' => '1:1']);
$viewType = in_array($view['type'], ['grid', 'carousel']) ? $view['type'] : 'carousel';

include __DIR__ . '/render-'. $view['type'] . '.php';

