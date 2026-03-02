<?php 

add_action('init', 'englemond_joaillery_model_init');
add_action('admin_init', 'englemond_joaillery_model_admin_init');

function englemond_joaillery_model_init() {
    register_post_type('joaillery', [
        'label' => __('Joaillery', 'englemond-products'),
        'public' => true,
        'show_ui' => true,
        'has_archive' => true,
        'menu_title' => __('Joaillery', 'englemond-products'),
        'show_in_menu' => 'edit.php?post_type=page',
        'menu_icon' => 'dashicons-products',
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'show_in_rest' => true,
        'labels' => [
            'name' => __('Joaillery', 'englemond-products'),
            'singular_name' => __('Joaillery', 'englemond-products'),
            'menu_name' => __('Joaillery', 'englemond-products'),
            'all_items' => __('All Joaillery', 'englemond-products'),
            'add_new' => __('Add New', 'englemond-products'),
            'add_new_item' => __('Add New Joaillery', 'englemond-products'),
        ],
    ]);
}

function englemond_joaillery_model_admin_init() {
    add_action('current_screen', function() {
        $screen = get_current_screen();
        if ($screen->base == 'edit' && $screen->post_type == 'joaillery') {
            add_filter('manage_joaillery_posts_columns', 'englemond_joaillery_admin_columns');
            add_action('manage_joaillery_posts_custom_column', 'englemond_joaillery_admin_columns_content', 10, 2);
            ?>
                <style>
                    .column-thumbnail {
                        width: 100px;
                    }
                </style>
            <?php
        }
    });
}

function englemond_joaillery_admin_columns($columns) {
    $new_columns = [];
    $new_columns['cb'] = $columns['cb'];
    $new_columns['thumbnail'] = __('Thumbnail', 'englemond-products');
    $new_columns['title'] = $columns['title'];
    $new_columns['date'] = $columns['date'];
    return $new_columns;
}

function englemond_joaillery_admin_columns_content($column, $post_id) {
    switch ($column) {
        case 'thumbnail':
            if (has_post_thumbnail($post_id)) {
                echo get_the_post_thumbnail($post_id, 'thumbnail');
            } else {
                echo '—';
            }
            break;
    }
}
