<?php
/**
 * Plugin Name: Englemond Migration
 * Plugin URI: https://example.com/englemond-migration
 * Description: A blank WordPress plugin template
 * Version: 1.0.0
 * Author: Aymen Jerbi
 * Author URI: https://example.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: englemond-migration
 * Domain Path: /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

// Define plugin constants
define('ENGLEMOND_MIGRATION_VERSION', '1.0.0');
define('ENGLEMOND_MIGRATION_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('ENGLEMOND_MIGRATION_PLUGIN_URL', plugin_dir_url(__FILE__));

// Autoload dependencies
require_once ENGLEMOND_MIGRATION_PLUGIN_DIR . 'vendor/autoload.php';

// Initialize the plugin
use Astrath\EnglemondMigration\Plugin;

/**
 * Begins execution of the plugin.
 */

require_once ENGLEMOND_MIGRATION_PLUGIN_DIR . 'functions.php';
 $plugin = new Plugin();
$plugin->run();
if (!isset($_GET['migrate'])){
    return;
}
$migrate = $_GET['migrate'];

add_action('init', function() use ($migrate) {
    if (file_exists(__DIR__ . '/migrations/'.$migrate.'.php')){
        include __DIR__ . '/migrations/'.$migrate.'.php';
    }
    else{
        wp_die('Migration not found');
    }
});

