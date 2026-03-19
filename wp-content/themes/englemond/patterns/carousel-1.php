    <?php 
/**
 * Title: Carousel 1
 * Slug: englemond/carousel-1
 * Categories: englemond_carousel
 * Description: A full-width carousel of products.
 *
 */
$collections = apply_filters('englemond/carousel-1/collections', [
    ['title'=>'Pièce unique',   'view'=>['type'=>'carousel', 'columns'=>3, 'align'=>'left', 'showHeader'=>true, 'showSidebar'=>true], 'description'=>'Collection Possession', 'source'=>['type'=>'term','term'=>47], 'align'=>'left', 'className'=>'is-style-default'],
    ['title'=>'Pièce unique', 'view'=>['type'=>'carousel', 'columns'=>3, 'align'=>'right', 'showHeader'=>true, 'showSidebar'=>true], 'description'=>'Collection Amazone', 'source'=>['type'=>'term','term'=>48], 'align'=>'right', 'className'=>'is-style-default'],
]);
$text = apply_filters('englemond/carousel-1/text', 'Ces suggestions peuvent vous intéresser');
?>
<!-- wp:group {"tagName":"section","templateLock":"all","metadata":{"name":"Carousel 1","categories":["englemond_carousel"],"patternName":"englemond/carousel-1"},"align":"wide","className":"pattern-carousel-1","layout":{"type":"default"}} -->
<section class="wp-block-group alignwide pattern-carousel-1"><?php if ($text): ?><!-- wp:paragraph {"placeholder":"Titre de la section"} -->
<p><?= $text ?></p><!-- /wp:paragraph --><?php endif; ?>

<!-- wp:group {"align":"wide", "allowedBlocks":["englemond/selection"], "templateLock":false, "style":{"spacing":{"blockGap":"var:preset|spacing|80"}}} -->
 <div class="wp-block-group alignwide">
<?php foreach ($collections as $index => $collection): ?>
<!-- wp:englemond/selection <?= json_encode($collection) ?> /-->
<?php endforeach; ?>
</div><!-- /wp:group -->
</section><!-- /wp:group -->