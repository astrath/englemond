<!-- wp:cover {"url":"<?= $args['backgroundImageUrl'] ?>","id":<?= $args['backgroundImageId'] ?>,"dimRatio":0,"customOverlayColor":"#e6e6e6","isUserOverlayColor":false,"minHeight":320,"minHeightUnit":"px","isDark":false,"sizeSlug":"full","align":"full","layout":{"type":"constrained"}} -->
<div class="wp-block-cover alignfull is-light" style="min-height:320px"><img class="wp-block-cover__image-background wp-image-<?= $args['backgroundImageId'] ?> size-full" alt="" src="<?= $args['backgroundImageUrl'] ?>" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim" style="background-color:#e6e6e6"></span><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"align":"center","placeholder":"Rédigez le titre…","fontSize":"large"} -->
<p class="has-text-align-center has-large-font-size"><?= $args['title'] ?></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"><?= $args['description'] ?></p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="http://localhost:7001/contactez-nous/">Contactez nous</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div></div>
<!-- /wp:cover -->