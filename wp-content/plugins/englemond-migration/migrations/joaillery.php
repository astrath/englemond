<?php 
global $wpdb;
$sql = sprintf("SELECT p.ID, pm.meta_value as template FROM %s p
join %s pm on pm.post_id = p.ID and pm.meta_key = 'old_page_template'
WHERE p.post_type = 'joaillery' AND p.post_status = 'publish'", $wpdb->posts, $wpdb->postmeta);
$entries = $wpdb->get_results($sql);
include __DIR__.'/post-joaillery.php';

foreach ($entries as $entry){
    em_migrate_post_joaillery($entry->ID);
}