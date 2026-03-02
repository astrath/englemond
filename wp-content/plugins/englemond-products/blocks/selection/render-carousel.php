<?php 
/**
 * Server-side rendering for the englemond/selection block in carousel view
 *
 * @package EnglemondProducts
 */

if (!defined('ABSPATH')) {
	exit;
}
$view = wp_parse_args($attributes['view'], ['type' => 'carousel', 'columnsCount' => 3, 'aspectRatio' => '1:1']);
$width = count($selected_products) * 100 / max((int)$view['columnsCount'], 1);
$align = $view['align'] ?? 'right';
$aspect_ratio = isset($view['aspectRatio']) ? str_replace(':', '/', $view['aspectRatio']) : '1/1';
preg_match('/is-style-([a-z0-9_-]+)/', $attributes['className']??'', $matches);
$extra_classes = ['has-align-' . $align];
if (empty($matches[1])) {
	$extra_classes[] = 'is-style-default';
}

$wrapper_attributes = get_block_wrapper_attributes([
	'class' => implode(' ', $extra_classes),
	'style' => '--aspect-ratio: ' . esc_attr($aspect_ratio) . ';'
]);
?>
<div <?= $wrapper_attributes; ?>>
	<div class="wp-block-englemond-selection__carousel">
		<div class="wp-block-englemond-selection__carousel-viewport">
            <div class="wp-block-englemond-selection__carousel-inner" style="width: <?= $width; ?>%;">
				<?php foreach ($selected_products as $product) : ?>
					<div class="wp-block-englemond-selection__carousel-item wp-block-englemond-selection__item">
                        <a class="wp-block-englemond-selection__item-link" href="<?= get_permalink($product->ID); ?>">
                            <?= get_the_post_thumbnail($product->ID, 'medium'); ?>
						<h5 class="wp-block-englemond-selection__item-title"><?= $product->post_title; ?></h5>
						</a>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
		<div class="wp-block-englemond-selection__carousel-controls">
			<button class="wp-block-englemond-selection__carousel-control-prev">
				<span class="screen-reader-text"><?= esc_html__('Previous', 'englemond-products'); ?></span>
			</button>
			<button class="wp-block-englemond-selection__carousel-control-next">
				<span class="screen-reader-text"><?= esc_html__('Next', 'englemond-products'); ?></span>
			</button>
		</div>
	<?php if (empty($view['hideText']) || !$view['hideText'] ): ?>
			<div class="wp-block-englemond-selection__side">
				<h3><?= $attributes['title']; ?></h3>
				<h5>
					<?php foreach ($selected_products as $index => $product) : ?>
						<a class="<?= $index === 0 ? 'active' : ''; ?>" data-index="<?= $index; ?>" href="<?= get_permalink($product->ID); ?>">
							<?= $product->post_title; ?>
						</a>
					<?php endforeach; ?>
				</h5>
        </div>
		<?php endif; ?>
	</div>
</div>