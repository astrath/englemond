<?php 

function em_migrate_post_joaillery($postId){
    global $wpdb;
    $metas = em_post_meta($postId);
    $content = '';
    $content .= em_migrate_cover([
        'backgroundImageId' => $metas['background_banniere_jo_n3'],
        'description' => $metas['description_banniere_jo_n3'],
    ]);
    $align = 0;
    
    if ($metas['affichage_sugg1_jo_n3'] === '1'){
        $content .= em_migrate_section_product_carousel([
            'title' => $metas['joailleries1_titre_n3'],
            'subtitle' => $metas['joailleries1_description_n3'],
            'galleryIds' => $metas['produits_joailleries1_n3'],
            'textAlign' => $align ? 'right' : 'left',
        ]);
        $align = 1-$align;
    }

    if ($metas['affichage_sugg2_jo_n3'] === '1'){
        $content .= em_migrate_section_product_carousel($args=[
            'title' => $metas['joailleries2_titre_n3'],
            'subtitle' => $metas['joailleries2_description_n3'],
            'galleryIds' => $metas['produits_joailleries2_n3'],
            'textAlign' => $align ? 'right' : 'left',
        ]);
        $align = 1-$align;
    }
    if ($metas['affichage_sugg3_jo_n3'] === '1'){
        $content .= em_migrate_section_product_carousel($args=[
            'title' => $metas['joailleries3_titre_n3'],
            'subtitle' => $metas['joailleries3_description_n3'],
            'galleryIds' => $metas['produits_joailleries3_n3'],
            'textAlign' => $align ? 'right' : 'left',
        ]);
        $align = 1-$align;
    }

    
    $content .= '<!-- wp:block {"ref":5037} /-->';


    $wpdb->update($wpdb->posts, ['post_content' => $content], ['ID' => $postId]);

}

function em_migrate_cover($args){
    ob_start();
    if ($args['backgroundImageId']){
        $args['backgroundImageUrl'] = wp_get_attachment_url($args['backgroundImageId']);
    }
    include ENGLEMOND_MIGRATION_PLUGIN_DIR . 'templates/cover-jewel.php';
    return ob_get_clean();
}

function em_migrate_section_product_carousel($args){
    ob_start();
    include ENGLEMOND_MIGRATION_PLUGIN_DIR . 'templates/section-product.carousel.php';
    return ob_get_clean();
}

function em_migrate_cta($args){
    if ($args['backgroundImageId']){
        $args['backgroundImageUrl'] = wp_get_attachment_url($args['backgroundImageId']);
    }
    ob_start();
    include ENGLEMOND_MIGRATION_PLUGIN_DIR . 'templates/cta.php';
    return ob_get_clean();
}