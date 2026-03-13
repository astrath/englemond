<?php
/**
 * Title: Header
 * Slug: englemond/header
 * Categories: header
 * Block Types: core/template-part/header
 * Description: Site header with site title and navigation.
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Five
 * @since Twenty Twenty-Five 1.0
 */

?>
<!-- wp:group {"tagName":"header","align":"wide","style":{"spacing":{"padding":{"top":"var:preset|spacing|30","bottom":"var:preset|spacing|30"}}},"layout":{"type":"constrained"}} -->
<header class="wp-block-group alignwide" style="padding-top:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--30)"><!-- wp:group {"align":"wide","layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"right"}} -->
<div class="wp-block-group alignwide"><!-- wp:search {"label":"Rechercher","showLabel":false,"placeholder":"Rechercher","width":220,"buttonText":"Rechercher","buttonUseIcon":true} /-->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">bookmark</a></div>
<!-- /wp:button -->

<!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">connect</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->

<!-- wp:site-logo {"width":224,"shouldSyncIcon":false,"align":"center","className":"is-style-logo-header"} /-->

<!-- wp:navigation {"ref":4788,"openSubmenusOnClick":true,"overlayBackgroundColor":"base","overlayTextColor":"contrast","align":"full","className":"is-style-nav-header","style":{"layout":{"selfStretch":"fill","flexSize":null}},"layout":{"type":"flex","justifyContent":"center","flexWrap":"wrap"}} /--></header>
<!-- /wp:group -->