<?php 

function em_migrate_post_pierres($postId){
    global $wpdb;
    $metas = em_post_meta($postId);
    $content = '';
    $content .= em_migrate_cover_pierres([
        'title' => $metas['titre_banniere_pierre_n3'],
        'backgroundImageId' => $metas['background_pierre_n3'],
        'secondaryImageId' => $metas['image_perles_n3'],
    ]);
    $align = 0;
    
    if ($metas['affichage_perle_1'] === '1'){
        $content .= em_migrate_section_product_carousel_pierres([
            'title' => $metas['titre_perles_1'],
            'subtitle' => $metas['sous_titre_perles_1'],
            'galleryIds' => $metas['produit_perle_1'],
            'textAlign' => $align ? 'right' : 'left',
        ]);
        $align = 1-$align;
    }

    if ($metas['affichage_perle_2'] === '1'){
        $content .= em_migrate_section_product_carousel_pierres($args=[
            'title' => $metas['titre_perles_2'],
            'subtitle' => $metas['sous_titre_perles_2'],
            'galleryIds' => $metas['produit_perle_2'],
            'textAlign' => $align ? 'right' : 'left',
        ]);
        $align = 1-$align;
    }
    if ($metas['affichage_perle_3'] === '1'){
        $content .= em_migrate_section_product_carousel_pierres($args=[
            'title' => $metas['titre_perles_3'],
            'subtitle' => $metas['sous_titre_perles_3'],
            'galleryIds' => $metas['produit_perle_3'],
            'textAlign' => $align ? 'right' : 'left',
        ]);
        $align = 1-$align;
    }

    
    $content .= em_migrate_cta_pierres([
        'title' => $metas['titre_banniere_idee_n3'],
        'description' => $metas['description_banniere_idee_n3'],
        'backgroundImageId' => $metas['background_banniere_idee_n3'],
    ]);


    $wpdb->update($wpdb->posts, [
        'post_type'=>'page',
        'post_parent'=>28,
        'post_content' => $content
    ], ['ID' => $postId]);
}

function em_migrate_cover_pierres($args){
    ob_start();
    if ($args['backgroundImageId']){
        $args['backgroundImageUrl'] = wp_get_attachment_url($args['backgroundImageId']);
    }
    if ($args['secondaryImageId']){
        $args['secondaryImageUrl'] = wp_get_attachment_url($args['secondaryImageId'], 'full');
    }
    include ENGLEMOND_MIGRATION_PLUGIN_DIR . 'templates/cover-pierres.php';
    return ob_get_clean();
}

function em_migrate_section_product_carousel_pierres($args){
    ob_start();
    include ENGLEMOND_MIGRATION_PLUGIN_DIR . 'templates/section-product.carousel.php';
    return ob_get_clean();
}

function em_migrate_cta_pierres($args){
    if ($args['backgroundImageId']){
        $args['backgroundImageUrl'] = wp_get_attachment_url($args['backgroundImageId']);
    }
    ob_start();
    include ENGLEMOND_MIGRATION_PLUGIN_DIR . 'templates/cta.php';
    return ob_get_clean();
}