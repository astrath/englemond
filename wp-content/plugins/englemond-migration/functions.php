<?php 
function em_post_meta($post_id) {
    $metas = get_post_meta($post_id);
    foreach ($metas as $key => $meta) {
        if ($key[0] === '_' && array_key_exists(substr($key, 1), $metas)) {
                unset($metas[$key]);
                continue;
        }
        $metas[$key] = maybe_unserialize($meta[0]);
    }
    return $metas;
}

function em_add_admin_bar_link($wp_admin_bar) {
    $queried_object = get_queried_object();
    
    // Vérifier si l'objet interrogé est un post WordPress
    if ($queried_object instanceof WP_Post) {
        $post_id = $queried_object->ID;
        $url = 'https://englemond.com?p=' . $post_id;
        
        $wp_admin_bar->add_node(array(
            'id'    => 'englemond-view',
            'title' => 'Voir sur Englemond',
            'href'  => $url,
            'meta'  => array(
                'target' => '_blank'
            )
        ));
    }
}
add_action('admin_bar_menu', 'em_add_admin_bar_link', 100);
