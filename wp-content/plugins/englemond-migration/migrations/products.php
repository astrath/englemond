<?php 
global $wpdb;
$sql = sprintf("SELECT * FROM %s WHERE post_type = 'product' AND post_status = 'publish'", $wpdb->posts);
$products = $wpdb->get_results($sql);
foreach ($products as $product){
    
    $excerpt = strip_tags($product->post_excerpt);
    if ($excerpt){
        //remove all white spaces and line breaks
        //remove all line breaks
        $excerpt = preg_replace('/\n+/', ' ', $excerpt);
        $excerpt = preg_replace('/\r+/', ' ', $excerpt);
        $excerpt = trim(str_replace('&nbsp;', ' ', $excerpt));
        update_post_meta($product->ID, 'reference', $excerpt);
    }
    $price = get_post_meta($product->ID, '_price', true);
    if (!$price){
        $price = 'Prix sur demande';
    }
    else{
        $price = sprintf('%.2f €', $price);
    }
    update_post_meta($product->ID, 'shortProductDescription', get_post_meta($product->ID, 'description_page_produit', true));
    update_post_meta($product->ID, 'grammage', get_post_meta($product->ID, 'grammage_page_produit', true));
    update_post_meta($product->ID, 'cotation', get_post_meta($product->ID, 'cote_page_produit', true));
    update_post_meta($product->ID, 'Caratage', get_post_meta($product->ID, 'caratage_page_produit', true));
    update_post_meta($product->ID, 'displayedPrice', $price);
    $galleryIds = [''.get_post_meta($product->ID, '_thumbnail_id', true)];
    $galleryIds = array_merge($galleryIds,explode(',',get_post_meta($product->ID, '_product_image_gallery', true)));
    $galleryIds = array_filter(array_unique($galleryIds));
    if (!$galleryIds){
        dump($product->ID);
    }
    $gallery = [];
    foreach ($galleryIds as $galleryId){
        if (!$galleryId){
            continue;
        }
        $gallery[] = [
            'id' => $galleryId,
            'url' => wp_get_attachment_url($galleryId,'large'),
            'alt' => get_post_meta($galleryId, '_wp_attachment_image_alt', true),
        ];
    }
    $wpdb->update($wpdb->posts, ['post_content' => '<!-- wp:pattern {"slug":"englemond/content-product"} /-->'], ['ID' => $product->ID]);
    ob_start();
    include __DIR__.'/../../englemond-products/templates/content-product.php';
    $content = ob_get_clean();
    $wpdb->update($wpdb->posts, ['post_content' => $content], ['ID' => $product->ID]);
    update_post_meta($product->ID, 'gallery', $gallery);
}
dd('ok');