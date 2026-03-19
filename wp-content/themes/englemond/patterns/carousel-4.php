<?php 
/** 
 * Title: Carousel 4
 * Slug: englemond/carousel-4
 * Categories: englemond_carousel
 * Description: A full-width carousel of products.
 *
 */
$collections = apply_filters('englemond/carousel-4/collections', [
    ['title'=>'Diamants', 'view'=>['type'=>'carousel', 'columns'=>1, 'align'=>'left', 'showHeader'=>true, 'showSidebar'=>true], 'source'=>['type'=>'term','term'=>153], 'align'=>'left', 'className'=>'is-style-carousel-4'],
    ['title'=>'Saphir', 'view'=>['type'=>'carousel', 'columns'=>1, 'align'=>'right', 'showHeader'=>true, 'showSidebar'=>true], 'source'=>['type'=>'term','term'=>201], 'align'=>'right', 'className'=>'is-style-carousel-4'],
]);
?>
<!-- wp:group {"tagName":"section","templateLock":"all","metaData":{"name":"Carousel 4","categories":["englemond_carousel"],"patternName":"englemond/carousel-4"},"align":"wide","className":"pattern-carousel-4","layout":{"type":"default"}} -->
<section class="wp-block-group alignwide pattern-carousel-4"><!-- wp:group {"align":"wide", "allowedBlocks":["englemond/selection"], "templateLock":false} -->
 <div class="wp-block-group alignwide">
<?php foreach ($collections as $index => $collection): ?>
<!-- wp:englemond/selection <?= json_encode($collection) ?> /-->
<?php endforeach; ?>
</div><!-- /wp:group -->
</section><!-- /wp:group -->