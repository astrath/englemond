<?php 
$metas = em_post_meta($postId);
$galleryIds = [$metas['_thumbnail_id']];
$galleryIds = array_merge($galleryIds,explode(',',$metas['_product_image_gallery']));
$args = ['gallery' => []];
foreach ($galleryIds as $galleryId){
    if (!$galleryId){
        continue;
    }
    $args['gallery'][] = [
        'id' => $galleryId,
        'url' => wp_get_attachment_url($galleryId,'large'),
    ];
}
ob_start();
include ENGLEMOND_MIGRATION_PLUGIN_DIR . 'templates/section-product.php';
$content = ob_get_clean();
wp_update_post([
    'ID' => $postId,
    'post_content' => $content,
]);