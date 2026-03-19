<?php 
/** 
 * Title: Carousel 5
 * Slug: englemond/carousel-5
 * Categories: englemond_carousel
 * Description: A full-width carousel of products.
 *
 */
$collections = apply_filters('englemond/carousel-5/collections', [
    ['title'=>'Diamants', 'view'=>['type'=>'carousel', 'columnsCount'=>1, 'align'=>'left', 'showHeader'=>true, 'showSidebar'=>true], 'source'=>['type'=>'term','term'=>153], 'align'=>'left', 'className'=>'is-style-selection-5'],
    ['title'=>'Saphir', 'view'=>['type'=>'carousel', 'columnsCount'=>1, 'align'=>'right', 'showHeader'=>true, 'showSidebar'=>true], 'source'=>['type'=>'term','term'=>201], 'align'=>'right', 'className'=>'is-style-selection-5'],
]);
?>
<!-- wp:group {"metadata":{"name":"Liste de selections"},"tagName":"section","templateLock":"all","metaData":{"name":"Carousel 5","categories":["englemond_carousel"],"patternName":"englemond/carousel-5"},"align":"wide","className":"pattern-carousel-5","layout":{"type":"default"}} -->
<section class="wp-block-group alignwide pattern-carousel-5"><!-- wp:group {"align":"wide", "allowedBlocks":["englemond/selection"], "templateLock":false} -->
 <div class="wp-block-group alignwide">
<?php foreach ($collections as $index => $collection): ?>
<!-- wp:englemond/selection <?= json_encode($collection) ?> /-->
<?php endforeach; ?>
</div><!-- /wp:group -->
</section><!-- /wp:group -->