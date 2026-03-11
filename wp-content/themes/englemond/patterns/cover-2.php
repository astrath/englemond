<?php
/**
 * Title: Couverture 2
 * Slug: englemond/cover-2
 * Categories: banner
 * keywords: En tête, englemond, Cover, Banner, Bannière
 * Description: A full-width media-text section with a large background image and an oversized heading.
 *
 */
$background = apply_filters('englemond/cover-2/background', ['url'=>'/wp-content/uploads/2022/07/ENGLEMOND-LOGO-E4-1024x724.jpg', 'id'=>2803]);
$image = apply_filters('englemond/cover-2/image', ['url'=>'/wp-content/uploads/2022/07/ENGLEMOND-LOGO-F1-773x1024.jpg', 'id'=>2785]);
$title = apply_filters('englemond/cover-2/title', 'Notre travail héraldique');
$description = apply_filters('englemond/cover-2/description', 'Notre graveur est Meilleur Ouvrier de France et perpétue la noblesse des armes');
?>
<!-- wp:group {"templateLock":"all", "metadata":{"name":"Couverture 2","categories":["banner"],"patternName":"englemond/cover-image-2"},"align":"full","className":"pattern-cover-3","layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"stretch","justifyContent":"left"}} -->
<div class="wp-block-group alignfull pattern-cover-3"><!-- wp:cover {"url":"<?=$background['url'];?>","id":<?=$background['id'];?>,"dimRatio":50,"customOverlayColor":"#f2f2f6","isUserOverlayColor":false,"contentPosition":"center left","isDark":false,"sizeSlug":"large","align":"wide","style":{"layout":{"selfStretch":"fill","flexSize":null}},"layout":{"type":"constrained","contentSize":"700px"}} -->
<div class="wp-block-cover alignwide is-light has-custom-content-position is-position-center-left"><img class="wp-block-cover__image-background wp-image-2803 size-large" alt="" src="/wp-content/uploads/2022/07/ENGLEMOND-LOGO-E4-1024x724.jpg" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim" style="background-color:#f2f2f6"></span><div class="wp-block-cover__inner-container"><!-- wp:heading {"textAlign":"left","level":1,"fontSize":"xx-large"} -->
<h1 class="wp-block-heading has-text-align-left has-xx-large-font-size"><?=$title;?></h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|accent-3"}}}},"textColor":"accent-3"} -->
<p class="has-acc   ent-3-color has-text-color has-link-color"><?=$description;?><br></p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:cover -->
<!-- wp:image {"id":<?=$image['id'];?>,"sizeSlug":"large","linkDestination":"none","lock":{"move":true,"remove":true},"className":"pattern-cover-3\u002d\u002dimage","style":{"layout":{"selfStretch":"fixed","flexSize":"380px"}}} -->
<figure class="wp-block-image size-large pattern-cover-3--image"><img src="<?=$image['url'];?>" alt="" class="wp-image-<?=$image['id'];?>"/></figure>
<!-- /wp:image --></div>
<!-- /wp:group -->