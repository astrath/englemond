<?php 

namespace Astrath\EnglemondMigration;

class PostTypes {
    static $types= [
    ];
    public static function register() {
        foreach (self::$types as $type) {
            register_post_type($type, [
                'label' => $type,
                        'capability_type'    => 'page', // behave like page

                'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
                'show_in_nav_menus' => true,
                'public' => true,
                 'publicly_queryable' => true,
                'show_ui' => true,
                'has_archive' => true,
                'show_in_rest' => true,
            ]);
        }
    }

    public static function getTypesInDb() {
        global $wpdb;
        return $wpdb->get_col("SELECT DISTINCT post_type FROM {$wpdb->posts}");
    }

    public static function getTaxonomiesInDb() {
        global $wpdb;
        return $wpdb->get_col("SELECT DISTINCT taxonomy FROM {$wpdb->term_taxonomy}");
    }
}