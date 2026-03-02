<?php 

add_action('template_redirect', function() {
    global $post;
    ?>
    <div style="display: flex; flex-direction: row; gap: 10px;">
    <div>    
    <?php dump(em_post_meta($post->ID)); ?>
</div>    
<div>
    <?php dump($post); ?>
</div>
</div>
</div>
<?php
dd();
});
?>