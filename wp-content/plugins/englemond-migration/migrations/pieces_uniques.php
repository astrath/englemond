<?php 
global $wpdb;
$template = 'template-piece-unique-niveau-trois.php';

$idsByTemplate = $wpdb->get_results("SELECT post_id, p.post_type 
from $wpdb->postmeta pm join $wpdb->posts p on pm.post_id = p.ID 
where pm.meta_key = 'old_page_template'
 and pm.meta_value = '$template'     
 and p.post_status = 'publish'");
include __DIR__.'/post-pieces_uniques.php';
foreach ($idsByTemplate as $idByTemplate){
    em_migrate_post_pieces_uniques($idByTemplate->post_id);
    
}