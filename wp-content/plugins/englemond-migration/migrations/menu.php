<?php 

global $wpdb;
$sql = sprintf("SELECT * FROM %s WHERE post_type = 'wp_navigation'", $wpdb->posts);
$navigations = $wpdb->get_results($sql);
foreach ($navigations as $navigation){
    $content = preg_replace('/https?:\/\/englemond\.com/', '', $navigation->post_content);
    $content = preg_replace('/http:\/\/localhost:\d+/', '', $content);
    $wpdb->update($wpdb->posts, [
        'post_content' => $content,
    ], [
        'ID' => $navigation->ID,
    ]);
}