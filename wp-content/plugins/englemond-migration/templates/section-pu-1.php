<!-- wp:group {"tagName":"section","layout":{"type":"constrained"}} -->
<section class="wp-block-group"><!-- wp:media-text {"mediaId":<?= $args['imageId'] ?>,"mediaLink":"<?= $args['link'] ?>","mediaType":"image","className":"is-style-bg-square"} -->
<div class="wp-block-media-text is-stacked-on-mobile is-style-bg-square"><figure class="wp-block-media-text__media"><img src="<?= $args['imageUrl'] ?>" alt="" class="wp-image-<?= $args['imageId'] ?> size-full"/></figure><div class="wp-block-media-text__content"><!-- wp:heading -->
<h2 class="wp-block-heading"><?= $args['title'] ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><?= $args['description'] ?><br></p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:media-text --></section>
<!-- /wp:group -->