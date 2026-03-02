<?php
/**
 * Customizes WordPress admin dashboard.
 *
 * @package Englemond
 * @since Englemond 1.0
 */

// Remove the Quick Draft (Quick Press) metabox from dashboard.
add_action( 'wp_dashboard_setup', 'englemond_remove_draft_metabox' );
function englemond_remove_draft_metabox() {
	remove_meta_box( 'dashboard_quick_press', 'dashboard', 'side' );
}

// Remove all comment-related metaboxes from dashboard.
add_action( 'wp_dashboard_setup', 'englemond_remove_comments_dashboard_metaboxes' );
function englemond_remove_comments_dashboard_metaboxes() {
	remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'normal' );
	remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'side' );
}
