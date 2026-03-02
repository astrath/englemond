<?php
/**
 * Server-side rendering for the englemond/gallery block
 *
 * @package EnglemondProducts
 */

if (!defined('ABSPATH')) {
	exit;
}

$images = get_post_meta(get_the_ID(), 'gallery', true);
$iconSize = isset($attributes['iconSize']) ? $attributes['iconSize'] : '120px';

$wrapper_attributes = get_block_wrapper_attributes([
	'class' => 'wp-block-englemond-gallery', 
	'style' => '--thumbnail-size: ' . esc_attr($iconSize) . ';'
]);

if (empty($images)) {
	?>
	<div <?= $wrapper_attributes; ?>>
		<p><?php esc_html_e('No images found.', 'englemond-products'); ?></p></div>
	</div>
	<?php
	return;
}
?>
<div <?= $wrapper_attributes; ?>>
	<div class="wp-block-englemond-gallery__inner">
		<div class="wp-block-englemond-gallery__nav">
			<?php foreach ($images as $index => $image) : ?>
				<div 
					class="wp-block-englemond-gallery__nav-item<?php echo $index === 0 ? ' active' : ''; ?>" 
					role="button"
					tabindex="0"
				>
					<img 
						src="<?= $image['url']; ?>" 
						alt="<?= $image['alt']??''; ?>"
						class="wp-block-englemond-gallery__nav-item-image"
						loading="lazy"
					/>
				</div>
			<?php endforeach; ?>
		</div>
		<div class="wp-block-englemond-gallery__frame">
			<div class="wp-block-englemond-gallery__frame-inner" style="width: <?= count($images) * 100 ?>%;">
				<?php foreach ($images as $image) : ?>
					<div class="wp-block-englemond-gallery__frame-item">
						<img 
							src="<?= $image['url']; ?>" 
							alt="<?= $image['alt']??''; ?>"
							class="wp-block-englemond-gallery__frame-item-image"
							loading="lazy"
						/>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</div>	