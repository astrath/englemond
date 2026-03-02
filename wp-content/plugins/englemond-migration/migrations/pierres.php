<?php 
global $wpdb;
$template = 'template-pierre-niveau-trois.php';
$idsByTemplate = $wpdb->get_results("SELECT post_id, p.post_type 
from $wpdb->postmeta pm join $wpdb->posts p on pm.post_id = p.ID 
where pm.meta_key = 'old_page_template'
 and pm.meta_value = '$template'     
 and p.post_status = 'publish'");
include __DIR__.'/post-pierres.php';

foreach ($idsByTemplate as $idByTemplate){
    em_migrate_post_pierres($idByTemplate->post_id);
    
}