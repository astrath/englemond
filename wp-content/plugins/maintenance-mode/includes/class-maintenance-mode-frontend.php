<?php
/**
 * Frontend functionality for Maintenance Mode
 */

if (!defined('ABSPATH')) {
	exit;
}

class Maintenance_Mode_Frontend {

	private $maintenance_page_id = 0;
	private $should_activate = false;

	public function __construct() {
		add_action('init', array($this, 'check_maintenance_mode'));
		add_filter('the_posts', array($this, 'replace_posts_with_maintenance_page'), 10, 2);
		add_action('wp', [$this, 'setup_maintenance_page']);
	}

	/**
	 * Check if maintenance mode is enabled
	 */
	public function check_maintenance_mode() {
		// Allow logged-in users to access the site
		if (is_user_logged_in()) {
			return;
		}

		// Allow access to admin, login, and AJAX
		$pagenow = isset($GLOBALS['pagenow']) ? $GLOBALS['pagenow'] : '';
		$is_login_page = in_array($pagenow, array('wp-login.php', 'wp-register.php'));
		if (is_admin() || $is_login_page || wp_doing_ajax() || wp_doing_cron()) {
			return;
		}

		$options = get_option('maintenance_mode_settings', array());
		// Check if maintenance mode is enabled
		if (!isset($options['enabled']) || !$options['enabled']) {
			return;
		}

		$this->maintenance_page_id = isset($options['maintenance_page_id']) ? absint($options['maintenance_page_id']) : 0;
		
		// If no page is selected, don't do anything
		if ($this->maintenance_page_id === 0) {
			return;
		}

		$this->should_activate = true;
	}

	/**
	 * Setup maintenance page after query
	 */
	public function setup_maintenance_page() {
		if (!$this->should_activate) {
			return;
		}

		global $wp_query, $post;

		// Get the maintenance page
		$maintenance_page = get_post($this->maintenance_page_id);
		if (!$maintenance_page) {
			return;
		}

		// Set up the query to think it's a single page
		$wp_query->is_page = true;
		$wp_query->is_singular = true;
		$wp_query->is_archive = false;
		$wp_query->is_home = false;
		$wp_query->is_front_page = false;
		$wp_query->is_404 = false;
		$wp_query->posts = array($maintenance_page);
		$wp_query->post_count = 1;
		$wp_query->found_posts = 1;
		$wp_query->max_num_pages = 1;
		$wp_query->queried_object = $maintenance_page;
		$wp_query->queried_object_id = $this->maintenance_page_id;

		// Set the global post
		$post = $maintenance_page;
		setup_postdata($maintenance_page);
	}

	/**
	 * Replace posts with maintenance page
	 */
	public function replace_posts_with_maintenance_page($posts, $query) {
		if (!$this->should_activate) {
			return $posts;
		}

		// Only affect the main query
		if (!$query->is_main_query()) {
			return $posts;
		}

		// Get the maintenance page
		$maintenance_page = get_post($this->maintenance_page_id);
		if ($maintenance_page) {
			return array($maintenance_page);
		}

		return $posts;
	}
}
