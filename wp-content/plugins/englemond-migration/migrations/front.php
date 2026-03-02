<?php 

add_action('template_redirect', function() {
    global $post;
    $template = get_post_meta($post->ID, 'old_page_template', true);
    switch ($template) {
        case 'template-pierre-niveau-trois.php':
            include __DIR__.'/post-pierres.php';
            migrate_post_pierres($post->ID);
            break;
        case 'template-piece-unique-niveau-trois.php':
            include __DIR__.'/post-pieces_uniques.php';
            em_migrate_post_pieces_uniques($post->ID);
            break;

        case 'template-joaillery-niveau-trois.php':
            include __DIR__.'/post-joaillery.php';
            em_migrate_post_joaillery($post->ID);
            break;
    }
});