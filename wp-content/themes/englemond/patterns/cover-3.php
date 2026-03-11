<?php
/**
 * Title: Couverture 3
 * Slug: englemond/cover-3
 * Categories: banner
 * Description: Cover N°3
 *
 */

 $description = apply_filters('englemond/cover-3/description', 'XDepuis le XVIème, parure des rois, aujourd’hui ils habillent avec grâce vos poignets.');
 $image = apply_filters('englemond/cover-3/background', ['url'=>'/wp-content/uploads/2020/12/Lovaine-A1-2-scaled-e1659006269938.jpg', 'id'=>3059]);
?>
<!-- wp:cover {"url":"<?=$image['url'];?>","id":<?=$image['id'];?>,"dimRatio":0,"contentPosition":"bottom center","sizeSlug":"full","align":"full","className":"pattern-cover-3","layout":{"type":"constrained"}} -->
<div class="wp-block-cover alignfull has-custom-content-position is-position-bottom-center pattern-cover-3"><img class="wp-block-cover__image-background wp-image-<?=$image['id'];?> size-full" alt="" src="<?=$image['url'];?>" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:post-title {"textAlign":"center","level":1} /-->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-t ext-align-center"><?=$description;?></p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:cover -->