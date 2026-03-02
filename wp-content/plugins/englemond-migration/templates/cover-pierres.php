<!-- wp:cover {"url":"<?= $args['backgroundImageUrl'] ?>","id":<?= $args['backgroundImageId'] ?>,"dimRatio":0,"contentPosition":"center center","sizeSlug":"full","align":"full","className":"is-style-image","layout":{"type":"constrained"}} -->
<div class="wp-block-cover alignfull is-style-image"><img class="wp-block-cover__image-background wp-image-<?= $args['backgroundImageId'] ?> size-full" alt="" src="<?= $args['backgroundImageUrl'] ?>" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"metadata":{"name":"Texte"},"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:heading {"level":1} -->
<h1 class="wp-block-heading"><?= $args['title'] ?></h1>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:image {"id":<?= $args['secondaryImageId'] ?>,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="<?= $args['secondaryImageUrl'] ?>" alt="" class="wp-image-<?= $args['secondaryImageId'] ?>"/></figure>
<!-- /wp:image --></div></div>
<!-- /wp:cover -->