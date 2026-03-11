<?php 
/**
 * Settings for Englemond Products plugin
 */

add_action('admin_menu', 'englemond_shop_settings_menu');
add_action('admin_init', 'englemond_shop_settings_init');
add_action( 'init', 'englemond_register_block_bindings' );



function englemond_shop_settings_menu() {
	add_options_page(
		__('Englemond Shop Settings', 'englemond-products'),
		__('Englemond Shop', 'englemond-products'),
		'manage_options',
		'englemond-shop-settings',
		'englemond_shop_settings_page'
	);
}

function englemond_shop_settings_init() {
	register_setting(
		'englemond_shop_settings_group',
		'englemond_shop_settings',
		[
			'type' => 'array',
			'sanitize_callback' => 'englemond_shop_settings_sanitize',
		'default' => [
			'phone' => '',
			'orderButtonText' => __('Order', 'englemond-products'),
			'contactEmail' => '',
		],
		]
	);

	add_settings_section(
		'englemond_shop_settings_section',
		__('Shop Information', 'englemond-products'),
		'englemond_shop_settings_section_callback',
		'englemond-shop-settings'
	);

	add_settings_field(
		'phone',
		__('Phone Number', 'englemond-products'),
		'englemond_shop_settings_phone_callback',
		'englemond-shop-settings',
		'englemond_shop_settings_section'
	);

	add_settings_field(
		'orderButtonText',
		__('Order Button Text', 'englemond-products'),
		'englemond_shop_settings_order_button_text_callback',
		'englemond-shop-settings',
		'englemond_shop_settings_section'
	);

	add_settings_field(
		'contactEmail',
		__('Contact Email', 'englemond-products'),
		'englemond_shop_settings_contact_email_callback',
		'englemond-shop-settings',
		'englemond_shop_settings_section'
	);


}

function englemond_shop_settings_sanitize($input) {
	$sanitized = [];
	
	if (isset($input['phone'])) {
		$sanitized['phone'] = sanitize_text_field($input['phone']);
	}
	
	if (isset($input['orderButtonText'])) {
		$sanitized['orderButtonText'] = sanitize_text_field($input['orderButtonText']);
	}
	
	if (isset($input['contactEmail'])) {
		$sanitized['contactEmail'] = sanitize_email($input['contactEmail']);
	}
	
	return $sanitized;
}

function englemond_shop_settings_section_callback() {
	echo '<p>' . esc_html__('Configure shop information settings.', 'englemond-products') . '</p>';
}

function englemond_shop_settings_phone_callback() {
	$options = get_option('englemond_shop_settings', []);
	$phone = isset($options['phone']) ? $options['phone'] : '';
	?>
	<input type="text" 
		name="englemond_shop_settings[phone]" 
		value="<?php echo esc_attr($phone); ?>" 
		class="regular-text" 
		placeholder="<?php echo esc_attr__('e.g., +33 1 23 45 67 89', 'englemond-products'); ?>"
	/>
	<p class="description"><?php echo esc_html__('Enter the shop phone number.', 'englemond-products'); ?></p>
	<?php
}

function englemond_shop_settings_order_button_text_callback() {
	$options = get_option('englemond_shop_settings', []);
	$orderButtonText = isset($options['orderButtonText']) ? $options['orderButtonText'] : __('Order', 'englemond-products');
	?>
	<input type="text" 
		name="englemond_shop_settings[orderButtonText]" 
		value="<?php echo esc_attr($orderButtonText); ?>" 
		class="regular-text" 
		placeholder="<?php echo esc_attr__('e.g., Commander', 'englemond-products'); ?>"
	/>
	<p class="description"><?php echo esc_html__('Enter the text for the order button.', 'englemond-products'); ?></p>
	<?php
}

function englemond_shop_settings_contact_email_callback() {
	$options = get_option('englemond_shop_settings', []);
	$contactEmail = isset($options['contactEmail']) ? $options['contactEmail'] : '';
	?>
	<input type="email" 
		name="englemond_shop_settings[contactEmail]" 
		value="<?php echo esc_attr($contactEmail); ?>" 
		class="regular-text" 
		placeholder="<?php echo esc_attr__('e.g., contact@example.com', 'englemond-products'); ?>"
	/>
	<p class="description"><?php echo esc_html__('Enter the default contact email address for form submissions.', 'englemond-products'); ?></p>
	<?php
}

function englemond_shop_settings_page() {
	if (!current_user_can('manage_options')) {
		return;
	}

	if (isset($_GET['settings-updated'])) {
		add_settings_error(
			'englemond_shop_settings_messages',
			'englemond_shop_settings_message',
			__('Settings Saved', 'englemond-products'),
			'updated'
		);
	}

	settings_errors('englemond_shop_settings_messages');
	?>
	<div class="wrap">
		<h1><?php echo esc_html(get_admin_page_title()); ?></h1>
		<form action="options.php" method="post">
			<?php
			settings_fields('englemond_shop_settings_group');
			do_settings_sections('englemond-shop-settings');
			submit_button(__('Save Settings', 'englemond-products'));
			?>
		</form>
	</div>
	<?php
}


function englemond_register_block_bindings() {
	register_block_bindings_source('englemond/shop',[
			'label'              => get_option('englemond_shop_phone'),
			'get_value_callback' =>function($args) {
				switch ($args['key']) {
					case 'phone':
						return 'tel:'.get_option('englemond_shop_phone');
						break;
					case 'orderButtonText':
						return get_option('englemond_shop_order_button_text');
						break;
				}
			},
		]
	);
	register_block_bindings_source('englemond/order-text',[
		'label'              => get_option('englemond_order_text'),
		'get_value_callback' => function() {
			return get_option('englemond_order_text');
		}
	]);
}
