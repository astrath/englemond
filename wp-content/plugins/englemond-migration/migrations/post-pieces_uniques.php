<?php 
function em_migrate_post_pieces_uniques($postId){
    global $wpdb;
    $metas = em_post_meta($postId);
    $content = '';
    if (get_post($postId)->post_name !== 'tolerance'){
        return;
    }
    $post = get_post($postId);

    $content .= em_migrate_cover_pieces_uniques([
        'secondaryImageId' => $metas['image_banniere_pu_n3'],
        'backgroundImageId' => $metas['background_banniere_pu_n3'],
        'description' => nl2br($post->post_excerpt),
    ]);
    $content .= em_migrate_section_pu_1([
        'imageId' => $metas['background_description_pu_n3'],
        'title' => $metas['titre_description_pu_n3'],
        'description' => $metas['text_description_pu_n3'],
    ]);



    $content .= em_migrate_section_product_carousel_pieces_uniques([
        'title' => $metas['titre_pu_n3'],
        'subtitle' => $metas['sous_titre_pu_n3'],
        'galleryIds' => $metas['produit_pu_n3'],
        'textAlign' => 'right',
    ]);

    $content .= '<!-- wp:block {"ref":4975} /-->';


    $align = 1;

    
    
    if ($metas['affichage_suggestion1_pu_n3'] === '1'){
        $content .= em_migrate_section_product_carousel_pieces_uniques([
            'title' => $metas['titre_suggestion1_pu_n3'],
            'subtitle' => $metas['sous_titre_perles_1sous_titre_suggestion1_pu_n3'],
            'galleryIds' => $metas['produit_suggestion1_pu_n3'],
            'textAlign' => $align ? 'right' : 'left',
        ]);
        $align = 1-$align;
    }

    if ($metas['affichage_suggestion2_pu_n3'] === '1'){
        $content .= em_migrate_section_product_carousel_pieces_uniques($args=[
            'title' => $metas['titre_suggestion2_pu_n3'],
            'subtitle' => $metas['sous_titre_suggestion2_pu_n3'],
            'galleryIds' => $metas['produit_suggestion2_pu_n3'],
            'textAlign' => $align ? 'right' : 'left',
        ]);
        $align = 1-$align;
    }
    if ($metas['affichage_suggestion3_pu_n3'] === '1'){
        $content .= em_migrate_section_product_carousel_pieces_uniques($args=[
            'title' => $metas['titre_suggestion3_pu_n3'],
            'subtitle' => $metas['sous_titre_suggestion3_pu_n3'],
            'galleryIds' => $metas['produits_suggestion3_pu_n3'],
            'textAlign' => $align ? 'right' : 'left',
        ]);
        $align = 1-$align;
    }

    
    $content .= em_migrate_cta_pieces_uniques([
        'title' => $metas['titre_banniere_pierres_pu_n3'],
        'description' => $metas['description_banniere_pierres_pu_n3'],
        'backgroundImageId' => $metas['background_banniere_pierres_pu_n3'],
    ]);

    
    $wpdb->update($wpdb->posts, [
        'post_type'=>'page',
        'post_parent'=>10,
        'post_content' => $content
    ], ['ID' => $postId]);
}

function em_migrate_cover_pieces_uniques($args){
    ob_start();
    if ($args['backgroundImageId']){
        $args['backgroundImageUrl'] = wp_get_attachment_url($args['backgroundImageId']);
    }
    if ($args['secondaryImageId']){
        $args['secondaryImageUrl'] = wp_get_attachment_url($args['secondaryImageId']);
    }
    include ENGLEMOND_MIGRATION_PLUGIN_DIR . 'templates/cover-pu.php';
    return ob_get_clean();
}

function em_migrate_section_product_carousel_pieces_uniques($args){
    if (is_string($args['galleryIds'])){
        dd($args['galleryIds']);
    }
    ob_start();
    include ENGLEMOND_MIGRATION_PLUGIN_DIR . 'templates/section-product.carousel.php';
    return ob_get_clean();
}

function em_migrate_cta_pieces_uniques($args){
    if ($args['backgroundImageId']){
        $args['backgroundImageUrl'] = wp_get_attachment_url($args['backgroundImageId']);
    }
    ob_start();
    include ENGLEMOND_MIGRATION_PLUGIN_DIR . 'templates/cta.php';
    return ob_get_clean();
}

function em_migrate_section_pu_1($args){
    if ($args['imageId']){
        $args['imageUrl'] = wp_get_attachment_url($args['imageId'], 'large');
    }
    ob_start();
    include ENGLEMOND_MIGRATION_PLUGIN_DIR . 'templates/section-pu-1.php';
    return ob_get_clean();
}