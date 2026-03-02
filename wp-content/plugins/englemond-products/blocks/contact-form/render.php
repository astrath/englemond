<?php
/**
 * Server-side rendering for the englemond/contact-form block
 *
 * @package EnglemondProducts
 */

if (!defined('ABSPATH')) {
	exit;
}

$display = isset($attributes['display']) ? $attributes['display'] : 'block';
$contact_email = isset($attributes['contactEmail']) ? $attributes['contactEmail'] : '';

$wrapper_attributes = get_block_wrapper_attributes([
	'class' => 'wp-block-englemond-contact-form',
	'data-display' => esc_attr($display),
	'data-contact-email' => esc_attr($contact_email),
	'data-ajax-url' => esc_url(admin_url('admin-ajax.php')),
	'data-nonce' => wp_create_nonce('englemond_contact_form'),
]);

if ($display === 'popup') :
	?>
	<div <?php echo $wrapper_attributes; ?>>
		<button class="wp-block-englemond-contact-form__trigger">
			<?php esc_html_e('Contact Us', 'englemond-products'); ?>
		</button>
		
		<div class="wp-block-englemond-contact-form__popup">
			<div class="wp-block-englemond-contact-form__overlay"></div>
			<div class="wp-block-englemond-contact-form__popup-content">
				<button class="wp-block-englemond-contact-form__close" aria-label="<?php esc_attr_e('Close', 'englemond-products'); ?>">
					&times;
				</button>
				
				<h2><?php esc_html_e('Contact Us', 'englemond-products'); ?></h2>
				<?php include __DIR__ . '/form.php'; ?>
			</div>
		</div>
	</div>
	<?php
else :
	?>
	<div <?php echo $wrapper_attributes; ?>>
		<h2><?php esc_html_e('Contact Us', 'englemond-products'); ?></h2>
		
		<?php include __DIR__ . '/form.php'; ?>
	</div>
	<?php
endif;
?>
