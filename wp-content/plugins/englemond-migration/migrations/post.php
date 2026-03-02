<?php 
namespace Astrath\EnglemondMigration;
$post = get_post($postId);
$migrate = $_GET['migrate']??null;
if ($migrate==='debug'){
    dd((em_post_meta($postId)));
}
$posttype = $post->post_type;
include __DIR__ . '/post-'.$posttype.'.php';