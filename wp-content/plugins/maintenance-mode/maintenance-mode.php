<?php
/**
 * Plugin Name: Maintenance Mode
 * Description: Set a maintenance page that only non-logged-in users will see
 * Version: 1.0.0
 * Author: Aymen Jerbi
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: maintenance-mode
 */

if (!defined('ABSPATH')) {
	exit;
}

// Include admin settings class
require_once plugin_dir_path(__FILE__) . 'includes/class-maintenance-mode-admin.php';
require_once plugin_dir_path(__FILE__) . 'includes/class-maintenance-mode-frontend.php';

// Initialize the plugin
function maintenance_mode_init() {
	if (is_admin()) {
		new Maintenance_Mode_Admin();
	} else {
		new Maintenance_Mode_Frontend();
	}
}
add_action('plugins_loaded', 'maintenance_mode_init');
