<?php
/**
 * Disables comments on the site.
 *
 * @package Englemond
 * @since Englemond 1.0
 */

// Disable support for comments and trackbacks in post types.
add_action( 'admin_init', 'englemond_disable_comments_post_types_support' );
function englemond_disable_comments_post_types_support() {
	$post_types = get_post_types();
	foreach ( $post_types as $post_type ) {
		if ( post_type_supports( $post_type, 'comments' ) ) {
			remove_post_type_support( $post_type, 'comments' );
			remove_post_type_support( $post_type, 'trackbacks' );
		}
	}
}

// Close comments on the front-end.
add_filter( 'comments_open', '__return_false', 20, 2 );
add_filter( 'pings_open', '__return_false', 20, 2 );

// Hide existing comments.
add_filter( 'comments_array', '__return_empty_array', 10, 2 );

// Remove comments page in menu.
add_action( 'admin_menu', 'englemond_remove_comments_admin_menu' );
function englemond_remove_comments_admin_menu() {
	remove_menu_page( 'edit-comments.php' );
}

// Remove comments links from admin bar.
add_action( 'init', 'englemond_remove_comments_admin_bar' );
function englemond_remove_comments_admin_bar() {
	if ( is_admin_bar_showing() ) {
		remove_action( 'admin_bar_menu', 'wp_admin_bar_comments_menu', 60 );
	}
}

// Remove comments metabox from dashboard.
add_action( 'admin_init', 'englemond_remove_comments_dashboard' );
function englemond_remove_comments_dashboard() {
	remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'normal' );
}

// Remove comments metabox from edit screens.
add_action( 'admin_init', 'englemond_remove_comments_metabox' );
function englemond_remove_comments_metabox() {
	remove_meta_box( 'commentstatusdiv', 'post', 'normal' );
	remove_meta_box( 'commentsdiv', 'post', 'normal' );
	remove_meta_box( 'trackbacksdiv', 'post', 'normal' );
	remove_meta_box( 'commentstatusdiv', 'page', 'normal' );
	remove_meta_box( 'commentsdiv', 'page', 'normal' );
	remove_meta_box( 'trackbacksdiv', 'page', 'normal' );
}

// Remove comments column from posts list.
add_filter( 'manage_posts_columns', 'englemond_remove_comments_column' );
function englemond_remove_comments_column( $columns ) {
	unset( $columns['comments'] );
	return $columns;
}

// Remove comments column from pages list.
add_filter( 'manage_pages_columns', 'englemond_remove_comments_column' );

// Redirect any user trying to access comments page.
add_action( 'admin_init', 'englemond_redirect_comments_page' );
function englemond_redirect_comments_page() {
	global $pagenow;
	if ( $pagenow === 'edit-comments.php' ) {
		wp_safe_redirect( admin_url() );
		exit;
	}
}
