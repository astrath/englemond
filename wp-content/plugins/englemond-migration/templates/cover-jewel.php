<!-- wp:cover {"className":"is-style-bottom", "url":"<?= $args['backgroundImageUrl'] ?>","id":<?= $args['backgroundImageId'] ?>,"dimRatio":0,"contentPosition":"bottom center","sizeSlug":"full","align":"full","layout":{"type":"constrained"}} -->
<div class="wp-block-cover is-style-bottom alignfull has-custom-content-position is-position-bottom-center"><img class="wp-block-cover__image-background wp-image-<?= $args['backgroundImageId'] ?> size-full" alt="" src="<?= $args['backgroundImageUrl'] ?>" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:post-title {"textAlign":"center", "level":1} /-->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"><?= $args['description'] ?></p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:cover -->