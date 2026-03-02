<?php 
$ids = is_array($args['galleryIds']??[]) ? implode(',', $args['galleryIds']) : [];
if (!$ids){
    return;
}
?>
<!-- wp:group {"tagName":"section","align":"full","className":"aligfull","layout":{"type":"constrained"}} -->
<section class="wp-block-group alignfull aligfull"><!-- wp:group {"align":"wide","className":"is-style-title","layout":{"type":"default"}} -->
<div class="wp-block-group alignwide is-style-title"><!-- wp:heading {"textAlign":"<?= $args['textAlign']??'right' ?>"} -->
<h2 class="wp-block-heading has-text-align-<?= $args['textAlign']??'right' ?>"><?= $args['title']??'' ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"className":"has-text-align-<?= $args['textAlign']??'right' ?>"} -->
<p class="has-text-align-<?= $args['textAlign']??'right' ?>"><?= $args['subtitle']??'' ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:englemond/selection {"source":{"type":"","ids":[<?= $ids ?>]},"view":{"type":"carousel","align":"<?= $args['textAlign']??'right' ?>"},"align":"wide"} /--></section>
<!-- /wp:group -->