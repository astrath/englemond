<?php
/**
 * Plugin Name: URL Replacer
 * Description: A tool to replace URLs in WordPress content
 * Version: 1.0.0
 * Author: Aymen Jerbi
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: url-replacer
 */

if (!defined('ABSPATH')) {
	exit;
}

// Include admin page class
require_once plugin_dir_path(__FILE__) . 'includes/class-url-replacer-admin.php';

// Initialize the plugin
function url_replacer_init() {
	if (is_admin()) {
		new URL_Replacer_Admin();
	}
}
add_action('plugins_loaded', 'url_replacer_init');
