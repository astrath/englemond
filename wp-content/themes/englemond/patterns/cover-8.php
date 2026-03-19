<?php
/**
 * Title: Couverture 8
 * Slug: englemond/cover-8
 * Categories: banner
 * Description: A full-width cover section with a large background image and an oversized heading.
 */

 $image = apply_filters('englemond/cover-8/background', ['url'=>'/wp-content/uploads/2020/12/Resille-1CC.jpg', 'id'=>2054]);
 $desc = apply_filters('englemond/cover-8/description', 'Depuis le XVIème, parure des rois, aujourd’hui ils habillent avec grâce vos poignets.');
 $image2 = apply_filters('englemond/cover-8/image', ['url'=>'/wp-content/uploads/2020/12/Resille-1A-scaled-e1655224601744.jpg', 'id'=>2055]);
?>
<!-- wp:cover {"metadata":{"name":"Couverture 8"},"templateLock":"all","url":"<?=$image['url'];?>","id":<?=$image['id'];?>,"dimRatio":0,"contentPosition":"bottom center","sizeSlug":"full","align":"full","className":"pattern-cover-8","layout":{"type":"default"}} -->
<div class="wp-block-cover alignfull has-custom-content-position is-position-bottom-center pattern-cover-8"><img class="wp-block-cover__image-background wp-image-<?=$image['id'];?> size-full" alt="" src="<?=$image['url'];?>" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"templateLock":false,"layout":{"type":"default"}} -->
<div class="wp-block-group"><!-- wp:post-title {"level":1} /-->

<!-- wp:paragraph -->
<p><?=$desc;?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:image {"sizeSlug":"full","linkDestination":"none","lock":{"move":true,"remove":true}} -->
<figure class="wp-block-image size-full"><img src="<?=$image2['url'];?>" alt=""/></figure>
<!-- /wp:image --></div></div>
<!-- /wp:cover -->