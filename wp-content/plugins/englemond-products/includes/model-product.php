<?php 

add_action('init', 'englemond_products_model_init');
add_action('admin_init', 'englemond_products_model_admin_init');

function englemond_products_model_init() {
    add_action('wp_ajax_englemond_products_update', 'englemond_products_update');
    
    register_post_type('product', [
        'label' => __('Product', 'englemond-products'),
        'public' => true,
        'label' => 'Products',
        'labels' => [
            'name' => __('Products', 'englemond-products'),
            'singular_name' => __('Product', 'englemond-products'),
            'menu_name' => __('Products', 'englemond-products'),
            'all_items' => __('All Products', 'englemond-products'),
            'add_new' => __('Add New', 'englemond-products'),
            'add_new_item' => __('Add New Product', 'englemond-products'),
        ],
        'menu_icon' => 'dashicons-products',
        'menu_position' => 5,
        'has_archive' => true,
        'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'show_in_rest' => true,
        'template' => [['core/pattern', ['slug' => 'englemond/content-product']]],
        'taxonomies' => ['product_cat'],
    ]);
    register_taxonomy('product_cat', 'product', [
        'label' => __('Category', 'englemond-products'),
        'labels' => [
            'name' => __('Categories', 'englemond-products'),
            'singular_name' => __('Category', 'englemond-products'),
        ],
        'show_in_rest' => true,
        'hierarchical' => true,
        'public' => true,
        'post_types' => ['product'],
    ]);

    register_post_meta('product', 'displayedPrice', [
        'type' => 'string',
        'single' => true,
        'label' => 'Displayed price',
        'show_in_rest' => true,
        'description' => 'Price of the product',
    ]);
    register_post_meta('product', 'reference', [
        'type' => 'string',
        'label' => 'Reference',
        'single' => true,
        'show_in_rest' => true,
        'description' => 'Price of the product',
    ]);
    register_post_meta('product', 'shortProductDescription', [
        'type' => 'string',
        'label' => 'Short Description',
        'single' => true,
        'show_in_rest' => true,
        'description' => 'Short description of the product',
    ]);
    register_post_meta('product', 'grammage', [
        'type' => 'string',
        'label' => 'Grammage',
        'single' => true,
        'show_in_rest' => true,
        'description' => 'Grammage of the product',
    ]);
    register_post_meta('product', 'cotation', [
        'type' => 'string',
        'label' => 'Cote',
        'default' => '--',
        'single' => true,
        'show_in_rest' => true,
        'description' => 'Cotation of the product',
    ]);
    register_post_meta('product', 'Caratage', [
        'type' => 'string',
        'label' => 'Caratage',
        'default' => '--',
        'single' => true,
        'show_in_rest' => true,
        'description' => 'Caratage of the product',
    ]);
    register_post_meta('product', 'gallery', [
        'type' => 'array',
        'label' => 'Gallery',
        'single' => true,
        'show_in_rest' => [
            'schema' => [
                'type' => 'array',
                'items' => [
                    'type' => 'object',
                    'properties' => [
                        'id' => ['type' => 'integer'],
                        'url' => ['type' => 'string'],
                        'alt' => ['type' => 'string'],
                    ],
                ],
            ],
        ],
        'description' => 'Gallery of the product',
    ]);
    ob_start();
    include plugin_dir_path(dirname(__FILE__)) . 'templates/content-product.php';
    $content = ob_get_clean();
    register_block_pattern('englemond/content-product', [
        'title' => __('Content Product', 'englemond-products'),
        'post_types' => ['product'],
        'description' => __('A pattern for a product content', 'englemond-products'),
        'content' => $content,
    ]);
}

function englemond_products_update() {
    
}

/**
 * AJAX handler to update product details (grammage, Caratage, cotation)
 */
function englemond_products_update_details() {
    check_ajax_referer('englemond_products_admin', 'nonce');
    
    $post_id = isset($_POST['post_id']) ? intval($_POST['post_id']) : 0;
    
    if (!$post_id || !current_user_can('edit_post', $post_id)) {
        wp_send_json_error(['message' => __('Permission denied.', 'englemond-products')]);
        return;
    }
    
    // Update metadata
    $fields = ['grammage', 'Caratage', 'cotation'];
    foreach ($fields as $field) {
        if (isset($_POST[$field])) {
            update_post_meta($post_id, $field, sanitize_text_field($_POST[$field]));
        }
    }
    
    wp_send_json_success(['message' => __('Details updated successfully.', 'englemond-products')]);
}
add_action('wp_ajax_englemond_products_update_details', 'englemond_products_update_details');

/**
 * AJAX handler to update product price
 */
function englemond_products_update_price() {
    check_ajax_referer('englemond_products_admin', 'nonce');
    
    $post_id = isset($_POST['post_id']) ? intval($_POST['post_id']) : 0;
    
    if (!$post_id || !current_user_can('edit_post', $post_id)) {
        wp_send_json_error(['message' => __('Permission denied.', 'englemond-products')]);
        return;
    }
    
    $price = isset($_POST['price']) ? sanitize_text_field($_POST['price']) : '';
    update_post_meta($post_id, 'displayedPrice', $price);
    
    wp_send_json_success(['message' => __('Price updated successfully.', 'englemond-products')]);
}
add_action('wp_ajax_englemond_products_update_price', 'englemond_products_update_price');

function englemond_products_model_admin_init() {
    add_action('current_screen', function() {
        $screen = get_current_screen();
        if ($screen->base == 'edit' && $screen->post_type == 'product') {
            add_filter('manage_product_posts_columns', 'englemond_products_admin_columns');
            add_action('manage_product_posts_custom_column', 'englemond_products_admin_columns_content', 10, 2);
            add_filter('manage_edit-product_sortable_columns', 'englemond_products_sortable_columns');
            ?>
                <style>
                    .column-thumbnail {
                        width: 100px;
                    }
                    .column-gallery {
                        width: 150px;
                    }
                    .englemond-gallery-column {
                        display: flex;
                        gap: 4px;
                        flex-wrap: wrap;
                    }
                    .englemond-gallery-thumb {
                        width: 40px;
                        height: 40px;
                        object-fit: cover;
                        border: 1px solid #ddd;
                        border-radius: 2px;
                    }
                    .column-detail {
                        width: 200px;
                    }
                    .englemond-detail-list {
                        margin: 0;
                        padding-left: 20px;
                        list-style-type: disc;
                    }
                    .englemond-detail-list {
                        cursor: pointer;
                    }
                    .englemond-detail-list:hover {
                        background-color: #f0f0f1;
                    }
                    .englemond-detail-list li {
                        margin-bottom: 4px;
                        font-size: 12px;
                        line-height: 1.4;
                    }
                </style>
            <?php
        }
    });
    
    // Add category filter dropdown
    add_action('restrict_manage_posts', 'englemond_products_add_category_filter');
}

function englemond_products_admin_columns($columns) {
    $new_columns = [];
    $new_columns['cb'] = $columns['cb'];
    $new_columns['thumbnail'] = __('Thumbnail', 'englemond-products');
    $new_columns['title'] = $columns['title'];
    $new_columns['category'] = __('Category', 'englemond-products');
    $new_columns['reference'] = __('Reference', 'englemond-products');
    $new_columns['price'] = __('Price', 'englemond-products');
    $new_columns['gallery'] = __('Gallery', 'englemond-products');
    $new_columns['detail'] = __('Detail', 'englemond-products');
    $new_columns['date'] = $columns['date'];
    return $new_columns;
}

function englemond_products_admin_columns_content($column, $post_id) {
    switch ($column) {
        case 'thumbnail':
            if (has_post_thumbnail($post_id)) {
                echo get_the_post_thumbnail($post_id, 'thumbnail');
            } else {
                echo '—';
            }
            break;
        case 'reference':
            $reference = get_post_meta($post_id, 'reference', true);
            echo $reference ? esc_html($reference) : '—';
            break;
        case 'price':
            $price = get_post_meta($post_id, 'displayedPrice', true);
            echo sprintf(
                '<span class="englemond-price-cell" data-post-id="%d" data-price="%s">%s</span>',
                $post_id,
                esc_attr($price),
                $price ? esc_html($price) : '—'
            );
            break;
        case 'gallery':
            $gallery = get_post_meta($post_id, 'gallery', true);
            if (!empty($gallery) && is_array($gallery)) {
                $gallery_items = array_slice($gallery, 0, 3); // Get up to 3 images
                echo '<div class="englemond-gallery-column">';
                foreach ($gallery_items as $item) {
                    if (isset($item['id']) && $item['id']) {
                        $image_url = wp_get_attachment_image_url($item['id'], 'thumbnail');
                        if ($image_url) {
                            printf(
                                '<img src="%s" alt="%s" class="englemond-gallery-thumb" />',
                                esc_url($image_url),
                                isset($item['alt']) ? esc_attr($item['alt']) : ''
                            );
                        } elseif (isset($item['url']) && $item['url']) {
                            // Fallback to URL if ID doesn't work
                            printf(
                                '<img src="%s" alt="%s" class="englemond-gallery-thumb" />',
                                esc_url($item['url']),
                                isset($item['alt']) ? esc_attr($item['alt']) : ''
                            );
                        }
                    } elseif (isset($item['url']) && $item['url']) {
                        // Use URL directly if no ID
                        printf(
                            '<img src="%s" alt="%s" class="englemond-gallery-thumb" />',
                            esc_url($item['url']),
                            isset($item['alt']) ? esc_attr($item['alt']) : ''
                        );
                    }
                }
                echo '</div>';
            } else {
                echo '—';
            }
            break;
        case 'detail':
            $details = [];
            foreach (['grammage', 'Caratage', 'cotation'] as $key) {
                $value = get_post_meta($post_id, $key, true);
                $details[] = sprintf('<li data-metakey="%s"><strong>%s:</strong><span>%s</span></li>', $key, __($key, 'englemond-products'), esc_html($value));
            }
            echo sprintf('<ul data-post-id="%s" class="englemond-detail-list">%s</ul>', $post_id, implode('', $details));
            break;
        case 'category':
            $html = [];
            foreach (wp_get_post_terms($post_id, 'product_cat') as $category) {
                $html[$category->term_id] = sprintf('<li>- <a href="%s">%s</a></li>', admin_url('edit.php?post_type=product&product_cat_filter=' . $category->term_id), esc_html($category->name));
            }
            ksort($html);
            echo sprintf('<ul style="line-height: 1">%s</ul>', implode('', $html));
            break;
    }
}

function englemond_products_sortable_columns($columns) {
    $columns['reference'] = 'reference';
    $columns['price'] = 'price';
    return $columns;
}

add_action('pre_get_posts', 'englemond_products_orderby_meta');
add_action('pre_get_posts', 'englemond_products_filter_by_category');

/**
 * Add category filter dropdown to products admin list
 */
function englemond_products_add_category_filter() {
    global $typenow;
    
    if ($typenow == 'product') {
        $selected = isset($_GET['product_cat_filter']) ? intval($_GET['product_cat_filter']) : 0;
        
        // Use wp_dropdown_categories which respects hierarchy
        wp_dropdown_categories([
            'show_option_all' => __('All Categories', 'englemond-products'),
            'taxonomy' => 'product_cat',
            'name' => 'product_cat_filter',
            'id' => 'product_cat_filter',
            'selected' => $selected,
            'hierarchical' => true,
            'show_count' => false,
            'hide_empty' => false,
            'value_field' => 'term_id',
        ]);
    }
}

function englemond_products_filter_by_category($query) {
    global $pagenow, $typenow;
    
    if ($pagenow == 'edit.php' && $typenow == 'product' && is_admin() && $query->is_main_query()) {
        $category_filter = isset($_GET['product_cat_filter']) ? intval($_GET['product_cat_filter']) : 0;
        
        if ($category_filter > 0) {
            $query->set('tax_query', [
                [
                    'taxonomy' => 'product_cat',
                    'field' => 'term_id',
                    'terms' => $category_filter,
                ],
            ]);
        }
    }
}

function englemond_products_orderby_meta($query) {
    if (!is_admin() || !$query->is_main_query()) {
        return;
    }
    
    if ($query->get('post_type') !== 'product') {
        return;
    }
    
    $orderby = $query->get('orderby');
    
    if ($orderby === 'reference') {
        $query->set('meta_key', 'reference');
        $query->set('orderby', 'meta_value');
    } elseif ($orderby === 'price') {
        $query->set('meta_key', 'displayedPrice');
        $query->set('orderby', 'meta_value_num');
    }
}


function englemond_browser_get_category_tree() {
    global $wpdb;
    $sql = $wpdb->prepare("SELECT t.term_id, t.name, t.slug, tt.taxonomy FROM {$wpdb->term_taxonomy} tt join {$wpdb->terms} t on tt.term_id = t.term_id WHERE parent = 0 and taxonomy = 'product_cat'");
    $root = $wpdb->get_results($sql);
    $tree = [];
    foreach ($root as $term) {
        $term->children = [];
        $tree[$term->term_id] = $term;
    }
    $rootIds = array_keys($tree);
    $sql = $wpdb->prepare("SELECT t.term_id, tt.parent, t.name, t.slug, tt.taxonomy FROM {$wpdb->term_taxonomy} tt join {$wpdb->terms} t on tt.term_id = t.term_id WHERE parent in (" . implode(',', $rootIds) . ") and taxonomy = 'product_cat'");
    $children = $wpdb->get_results($sql);
    foreach ($children as $child) {
        $tree[$child->parent]->children[] = $child;
    }
    foreach ($tree as $id =>$term) {
        if (empty($term->children)) {
            unset($tree[$id]);
        }
        else{
            usort($term->children, function($a, $b) {
                return $a->name <=> $b->name;
            });
        }
    }
    return $tree;
}