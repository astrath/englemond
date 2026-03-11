<?php
/**
 * Title: Couverture 4
 * Slug: englemond/cover-4
 * Categories: banner
 * keywords: couverture, image, piece unique
 * Description: Cover N°4
 */
$image = apply_filters('englemond/cover-4/background', ['url'=>'/wp-content/uploads/2020/12/Resille-1CC.jpg', 'id'=>2054]);
$desc = apply_filters('englemond/cover-4/description', 'Une structure de fils afin d\'accueillir vos gemmes avec "presque rien"');
$image2 = apply_filters('englemond/cover-4/image', ['url'=>'/wp-content/uploads/2020/12/Resille-1A-scaled-e1655224601744.jpg', 'id'=>2055]);
?>
<!-- wp:cover {"url":"<?=$image['url'];?>","id":<?=$image['id'];?>,"dimRatio":0,"contentPosition":"bottom center","sizeSlug":"full","metadata":{"name":"Couverture"},"align":"full","className":"pattern-cover-4","layout":{"type":"constrained"}} -->
<div class="wp-block-cover alignfull has-custom-content-position is-position-bottom-center pattern-cover-4"><img class="wp-block-cover__image-background wp-image-<?=$image['id'];?> size-full" alt="" src="<?=$image['url'];?>" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"lock":{"move":true,"remove":true},"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:post-title {"level":1} /-->

<!-- wp:paragraph -->
<p><?=$desc;?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:image {"sizeSlug":"full","linkDestination":"none","lock":{"move":true,"remove":true}} -->
<figure class="wp-block-image size-full"><img src="<?=$image2['url'];?>" alt=""/></figure>
<!-- /wp:image --></div></div>
<!-- /wp:cover -->