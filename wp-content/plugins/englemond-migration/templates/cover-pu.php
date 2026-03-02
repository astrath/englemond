<!-- wp:cover {"url":"<?= $args['backgroundImageUrl'] ?>","id":<?= $args['backgroundImageId'] ?>,"dimRatio":0,"contentPosition":"center left","sizeSlug":"full","align":"full","className":"is-style-left","layout":{"type":"constrained"}} -->
<div class="wp-block-cover alignfull has-custom-content-position is-position-center-left is-style-left"><img class="wp-block-cover__image-background wp-image-<?= $args['backgroundImageId'] ?> size-full" alt="" src="<?= $args['backgroundImageUrl'] ?>" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:post-title {"level":1} /-->

<!-- wp:paragraph -->
<p><?= $args['description'] ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
<?php if ($args['secondaryImageId']??null): ?>
<!-- wp:image {"id":<?= $args['secondaryImageId'] ?>,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="<?= $args['secondaryImageUrl'] ?>" alt="" class="wp-image-<?= $args['secondaryImageId'] ?>"/></figure>
<!-- /wp:image -->
<?php endif; ?></div></div>
<!-- /wp:cover -->