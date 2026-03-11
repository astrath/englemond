<?php
/**
 * Contact form template
 *
 * @package EnglemondProducts
 * @var string $contact_email The contact email address
 */

if (!defined('ABSPATH')) {
	exit;
}
?>

<form class="wp-block-englemond-contact-form__form" method="post">
	<?php wp_nonce_field('englemond_contact_form', 'contact_form_nonce'); ?>
	<input type="hidden" name="contact_email" value="<?php echo esc_attr($contact_email); ?>" />
	
	<div class="wp-block-englemond-contact-form__field">
		<label class="wp-block-englemond-contact-form__label" for="contact-name">
			<?php esc_html_e('Name', 'englemond-products'); ?>
		</label>
		<input 
			type="text" 
			id="contact-name" 
			name="name" 
			class="wp-block-englemond-contact-form__input" 
			required 
		/>
	</div>
	
	<div class="wp-block-englemond-contact-form__field">
		<label class="wp-block-englemond-contact-form__label" for="contact-email">
			<?php esc_html_e('Email', 'englemond-products'); ?>
		</label>
		<input 
			type="email" 
			id="contact-email" 
			name="email" 
			class="wp-block-englemond-contact-form__input" 
			required 
		/>
	</div>
	
	<div class="wp-block-englemond-contact-form__field">
		<label class="wp-block-englemond-contact-form__label" for="contact-subject">
			<?php esc_html_e('Subject', 'englemond-products'); ?>
		</label>
		<input 
			type="text" 
			id="contact-subject" 
			name="subject" 
			class="wp-block-englemond-contact-form__input" 
			required 
		/>
	</div>
	
	<div class="wp-block-englemond-contact-form__field">
		<label class="wp-block-englemond-contact-form__label" for="contact-message">
			<?php esc_html_e('Message', 'englemond-products'); ?>
		</label>
		<textarea 
			id="contact-message" 
			name="message" 
			class="wp-block-englemond-contact-form__textarea" 
			maxlength="4000"
			required
		></textarea>
	</div>
	
	<button type="submit" class="wp-block-englemond-contact-form__submit">
		<?php esc_html_e('Send Message', 'englemond-products'); ?>
	</button>
	
	<div class="wp-block-englemond-contact-form__error" style="display: none;"></div>
	<div class="wp-block-englemond-contact-form__success" style="display: none;">
		<?php esc_html_e('Thank you! Your message has been sent.', 'englemond-products'); ?>
	</div>
</form>
