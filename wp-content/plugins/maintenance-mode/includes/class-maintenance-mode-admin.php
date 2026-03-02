<?php
/**
 * Admin settings for Maintenance Mode
 */

if (!defined('ABSPATH')) {
	exit;
}

class Maintenance_Mode_Admin {

	public function __construct() {
		add_action('admin_menu', array($this, 'add_admin_menu'));
		add_action('admin_init', array($this, 'register_settings'));
	}

	/**
	 * Add admin menu under Settings
	 */
	public function add_admin_menu() {
		add_options_page(
			__('Maintenance Mode', 'maintenance-mode'),
			__('Maintenance Mode', 'maintenance-mode'),
			'manage_options',
			'maintenance-mode',
			array($this, 'render_settings_page')
		);
	}

	/**
	 * Register settings
	 */
	public function register_settings() {
		register_setting(
			'maintenance_mode_settings_group',
			'maintenance_mode_settings',
			array(
				'type' => 'array',
				'sanitize_callback' => array($this, 'sanitize_settings'),
				'default' => array(
					'enabled' => false,
					'maintenance_page_id' => 0,
				),
			)
		);

		add_settings_section(
			'maintenance_mode_settings_section',
			__('Maintenance Page Settings', 'maintenance-mode'),
			array($this, 'settings_section_callback'),
			'maintenance-mode'
		);

		add_settings_field(
			'enabled',
			__('Enable Maintenance Mode', 'maintenance-mode'),
			array($this, 'enabled_field_callback'),
			'maintenance-mode',
			'maintenance_mode_settings_section'
		);

		add_settings_field(
			'maintenance_page_id',
			__('Maintenance Page', 'maintenance-mode'),
			array($this, 'maintenance_page_field_callback'),
			'maintenance-mode',
			'maintenance_mode_settings_section'
		);
	}

	/**
	 * Sanitize settings
	 */
	public function sanitize_settings($input) {
		$sanitized = array();

		$sanitized['enabled'] = isset($input['enabled']) && $input['enabled'] === '1';
		$sanitized['maintenance_page_id'] = isset($input['maintenance_page_id']) ? absint($input['maintenance_page_id']) : 0;

		return $sanitized;
	}

	/**
	 * Settings section callback
	 */
	public function settings_section_callback() {
		echo '<p>' . esc_html__('Configure which page should be displayed to non-logged-in users when maintenance mode is enabled. Logged-in users (especially administrators) will still be able to access the full site.', 'maintenance-mode') . '</p>';
	}

	/**
	 * Enabled field callback
	 */
	public function enabled_field_callback() {
		$options = get_option('maintenance_mode_settings', array());
		$enabled = isset($options['enabled']) ? $options['enabled'] : false;
		?>
		<label>
			<input type="checkbox" name="maintenance_mode_settings[enabled]" value="1" <?php checked($enabled, true); ?> />
			<?php esc_html_e('Enable maintenance mode', 'maintenance-mode'); ?>
		</label>
		<p class="description"><?php esc_html_e('When enabled, only the selected maintenance page will be visible to non-logged-in users.', 'maintenance-mode'); ?></p>
		<?php
	}

	/**
	 * Maintenance page field callback
	 */
	public function maintenance_page_field_callback() {
		$options = get_option('maintenance_mode_settings', array());
		$page_id = isset($options['maintenance_page_id']) ? $options['maintenance_page_id'] : 0;

		$pages = get_pages(array(
			'post_status' => ['private'],
			'sort_column' => 'post_title',
			'sort_order' => 'ASC',
		));
		?>
		<select name="maintenance_mode_settings[maintenance_page_id]" id="maintenance_page_id">
			<option value="0"><?php esc_html_e('-- Select a page --', 'maintenance-mode'); ?></option>
			<?php foreach ($pages as $page): ?>
				<option value="<?php echo esc_attr($page->ID); ?>" <?php selected($page_id, $page->ID); ?>>
					<?php echo esc_html($page->post_title); ?>
				</option>
			<?php endforeach; ?>
		</select>
		<p class="description"><?php esc_html_e('Select the page that should be displayed to non-logged-in users during maintenance.', 'maintenance-mode'); ?></p>
		<?php
	}

	/**
	 * Render settings page
	 */
	public function render_settings_page() {
		if (!current_user_can('manage_options')) {
			return;
		}

		if (isset($_GET['settings-updated'])) {
			add_settings_error(
				'maintenance_mode_settings_messages',
				'maintenance_mode_settings_message',
				__('Settings saved successfully.', 'maintenance-mode'),
				'updated'
			);
		}

		settings_errors('maintenance_mode_settings_messages');
		?>
		<div class="wrap">
			<h1><?php echo esc_html(get_admin_page_title()); ?></h1>
			<form action="options.php" method="post">
				<?php
				settings_fields('maintenance_mode_settings_group');
				do_settings_sections('maintenance-mode');
				submit_button(__('Save Settings', 'maintenance-mode'));
				?>
			</form>
		</div>
		<?php
	}
}
