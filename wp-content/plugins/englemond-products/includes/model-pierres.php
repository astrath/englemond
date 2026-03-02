<?php 

add_action('init', 'englemond_pierres_model_init');
add_action('admin_init', 'englemond_pierres_model_admin_init');

function englemond_pierres_model_init() {
    register_post_type('pierres', [
        'label' => __('Pierres', 'englemond-products'),
        'public' => true,
        'show_ui' => true,
        'has_archive' => true,
        'menu_title' => __('Stones', 'englemond-products'),
        'show_in_menu' => 'edit.php?post_type=page',
        'menu_icon' => 'dashicons-products',
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'show_in_rest' => true,
        'publicly_queryable' => false,
        
        'template' => [['core/pattern', ['slug' => 'englemond/content-pierres']]],
        'labels' => [
            'name' => __('Pierres', 'englemond-products'),
            'singular_name' => __('Pierre', 'englemond-products'),
            'menu_name' => __('Pierres', 'englemond-products'),
            'all_items' => __('All Pierres', 'englemond-products'),
            'add_new' => __('Add New', 'englemond-products'),
            'add_new_item' => __('Add New Pierre', 'englemond-products'),
        ],
    ]);
}

function englemond_pierres_model_admin_init() {
    add_action('current_screen', function() {
        $screen = get_current_screen();
        if ($screen->base == 'edit' && $screen->post_type == 'pierres') {
            add_filter('manage_pierres_posts_columns', 'englemond_pierres_admin_columns');
            add_action('manage_pierres_posts_custom_column', 'englemond_pierres_admin_columns_content', 10, 2);
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

function englemond_pierres_admin_columns($columns) {
    $new_columns = [];
    $new_columns['cb'] = $columns['cb'];
    $new_columns['thumbnail'] = __('Thumbnail', 'englemond-products');
    $new_columns['title'] = $columns['title'];
    $new_columns['date'] = $columns['date'];
    return $new_columns;
}

function englemond_pierres_admin_columns_content($column, $post_id) {
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
