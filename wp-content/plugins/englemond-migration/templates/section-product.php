<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:columns {"align":"wide"} -->
<div class="wp-block-columns alignwide"><!-- wp:column {"width":"50%"} -->
<div class="wp-block-column" style="flex-basis:50%"><!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:gallery {"linkTo":"none","className":"is-style-gallery-product"} -->
<figure class="wp-block-gallery has-nested-images columns-default is-cropped is-style-gallery-product">
    <?php foreach ($args['gallery']??[] as $image): ?>
    <!-- wp:image {"id":<?= $image['id'] ?>,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="<?= $image['url'] ?>" alt="" class="wp-image-<?= $image['id'] ?>"/></figure>
<!-- /wp:image -->
 <?php endforeach; ?>
</figure>
<!-- /wp:gallery --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:post-title /-->

<!-- wp:paragraph {"metadata":{"bindings":{"content":{"source":"core/post-meta","args":{"key":"reference"}}}}} -->
<p></p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->