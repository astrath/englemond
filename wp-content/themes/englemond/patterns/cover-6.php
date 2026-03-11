<?php
/**
 * Title: Couverture 6
 * Slug: englemond/cover-6
 * Categories: banner
 * keywords: couverture, image, piece unique
 * Description: Cover N°6
 */
$image = apply_filters('englemond/cover-6/background', ['url'=>'/wp-content/uploads/2020/12/Architecture-2CC.jpg', 'id'=>2036]);
$desc = apply_filters('englemond/cover-6/description', 'Les architectes construisent avec des pierres... Et les joailliers construisent autour d\'elles');
$image2 = apply_filters('englemond/cover-6/image', ['url'=>'/wp-content/uploads/2020/12/Architecture-2A-e1656747017169.jpg', 'id'=>1578]);
?>
<!-- wp:cover {"url":"<?=$image['url'];?>","id":<?=$image['id'];?>,"dimRatio":0,"contentPosition":"bottom center","sizeSlug":"full","metadata":{"name":"Couverture"},"align":"full","className":"pattern-cover-6","layout":{"type":"constrained"}} -->
<div class="wp-block-cover alignfull has-custom-content-position is-position-bottom-center pattern-cover-6"><img class="wp-block-cover__image-background wp-image-<?=$image['id'];?> size-full" alt="" src="<?=$image['url'];?>" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"lock":{"move":true,"remove":true},"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:post-title {"level":1} /-->

<!-- wp:paragraph -->
<p><?=$desc;?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:image {"sizeSlug":"full","linkDestination":"none","lock":{"move":true,"remove":true}} -->
<figure class="wp-block-image size-full"><img src="<?=$image2['url'];?>" alt=""/></figure>
<!-- /wp:image --></div></div>
<!-- /wp:cover -->
