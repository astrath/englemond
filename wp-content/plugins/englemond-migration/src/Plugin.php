<?php

namespace Astrath\EnglemondMigration;

/**
 * Main plugin class.
 */
class Plugin {

    /**
     * Run the plugin.
     */
    public function run() {
        $this->set_locale();
        $this->define_admin_hooks();
        $this->define_public_hooks();
    }

    /**
     * Load the plugin text domain for translation.
     */
    private function set_locale() {
        load_plugin_textdomain(
            'englemond-migration',
            false,
            dirname(dirname(plugin_basename(__FILE__))) . '/languages/'
        );
    }

    /**
     * Register all of the hooks related to the admin area functionality.
     */
    private function define_admin_hooks() {
        // Add admin hooks here
    }

    /**
     * Register all of the hooks related to the public-facing functionality.
     */
    private function define_public_hooks() {
        add_action('init', [PostTypes::class, 'register']);
    }
}
