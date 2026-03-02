<?php
/**
 * Admin page for URL Replacer
 */

if (!defined('ABSPATH')) {
	exit;
}

class URL_Replacer_Admin {

	public function __construct() {
		add_action('admin_menu', array($this, 'add_admin_menu'));
		add_action('admin_init', array($this, 'handle_form_submission'));
	}

	/**
	 * Add admin menu under Tools
	 */
	public function add_admin_menu() {
		add_management_page(
			__('URL Replacer', 'url-replacer'),
			__('URL Replacer', 'url-replacer'),
			'manage_options',
			'url-replacer',
			array($this, 'render_admin_page')
		);
	}

	/**
	 * Handle form submission
	 */
	public function handle_form_submission() {
		if (!isset($_POST['url_replacer_submit']) || !current_user_can('manage_options')) {
			return;
		}

		check_admin_referer('url_replacer_action', 'url_replacer_nonce');

		$old_url = isset($_POST['old_url']) ? esc_url_raw($_POST['old_url']) : '';
		$new_url = isset($_POST['new_url']) ? esc_url_raw($_POST['new_url']) : '';
		$replace_in_content = isset($_POST['replace_in_content']) ? true : false;
		$replace_in_excerpt = isset($_POST['replace_in_excerpt']) ? true : false;
		$replace_in_meta = isset($_POST['replace_in_meta']) ? true : false;

		if (empty($old_url)) {
			add_action('admin_notices', function() {
				echo '<div class="notice notice-error"><p>' . esc_html__('Please provide both old and new URLs.', 'url-replacer') . '</p></div>';
			});
			return;
		}

		$results = $this->replace_urls($old_url, $new_url, $replace_in_content, $replace_in_excerpt, $replace_in_meta);

		// Store results in transient to display on page reload
		set_transient('url_replacer_results', $results, 60);

		// Redirect to avoid resubmission
		wp_redirect(add_query_arg(array(
			'page' => 'url-replacer',
			'replaced' => '1'
		), admin_url('tools.php')));
		exit;
	}

	/**
	 * Replace URLs in content
	 */
	private function replace_urls($old_url, $new_url, $replace_in_content, $replace_in_excerpt, $replace_in_meta) {
		global $wpdb;

		$results = array(
			'posts_updated' => 0,
			'excerpts_updated' => 0,
			'meta_updated' => 0,
			'errors' => array()
		);

		// Replace in post content
		if ($replace_in_content) {
			$posts_updated = $wpdb->query($wpdb->prepare(
				"UPDATE {$wpdb->posts} SET post_content = REPLACE(post_content, %s, %s) WHERE post_content LIKE %s",
				$old_url,
				$new_url,
				'%' . $wpdb->esc_like($old_url) . '%'
			));

			if ($posts_updated !== false) {
				$results['posts_updated'] = $posts_updated;
			} else {
				$results['errors'][] = __('Error updating post content.', 'url-replacer');
			}
		}

		// Replace in post excerpts
		if ($replace_in_excerpt) {
			$excerpts_updated = $wpdb->query($wpdb->prepare(
				"UPDATE {$wpdb->posts} SET post_excerpt = REPLACE(post_excerpt, %s, %s) WHERE post_excerpt LIKE %s",
				$old_url,
				$new_url,
				'%' . $wpdb->esc_like($old_url) . '%'
			));

			if ($excerpts_updated !== false) {
				$results['excerpts_updated'] = $excerpts_updated;
			} else {
				$results['errors'][] = __('Error updating post excerpts.', 'url-replacer');
			}
		}

		// Replace in post meta
		if ($replace_in_meta) {
			$meta_updated = $wpdb->query($wpdb->prepare(
				"UPDATE {$wpdb->postmeta} SET meta_value = REPLACE(meta_value, %s, %s) WHERE meta_value LIKE %s",
				$old_url,
				$new_url,
				'%' . $wpdb->esc_like($old_url) . '%'
			));

			if ($meta_updated !== false) {
				$results['meta_updated'] = $meta_updated;
			} else {
				$results['errors'][] = __('Error updating post meta.', 'url-replacer');
			}
		}

		// Clear cache
		wp_cache_flush();

		return $results;
	}

	/**
	 * Render admin page
	 */
	public function render_admin_page() {
		$results = get_transient('url_replacer_results');
		if ($results !== false) {
			delete_transient('url_replacer_results');
		}

		$old_url = isset($_POST['old_url']) ? esc_url($_POST['old_url']) : '';
		$new_url = isset($_POST['new_url']) ? esc_url($_POST['new_url']) : '';
		?>
		<div class="wrap">
			<h1><?php echo esc_html(get_admin_page_title()); ?></h1>
			<p><?php esc_html_e('Use this tool to replace URLs throughout your WordPress content. This will search and replace URLs in posts, pages, excerpts, and post meta.', 'url-replacer'); ?></p>

			<?php if ($results): ?>
				<div class="notice notice-success is-dismissible">
					<p><strong><?php esc_html_e('Replacement completed!', 'url-replacer'); ?></strong></p>
					<ul>
						<?php if ($results['posts_updated'] > 0): ?>
							<li><?php printf(esc_html__('Posts/Pages updated: %d', 'url-replacer'), $results['posts_updated']); ?></li>
						<?php endif; ?>
						<?php if ($results['excerpts_updated'] > 0): ?>
							<li><?php printf(esc_html__('Excerpts updated: %d', 'url-replacer'), $results['excerpts_updated']); ?></li>
						<?php endif; ?>
						<?php if ($results['meta_updated'] > 0): ?>
							<li><?php printf(esc_html__('Meta fields updated: %d', 'url-replacer'), $results['meta_updated']); ?></li>
						<?php endif; ?>
					</ul>
					<?php if (!empty($results['errors'])): ?>
						<ul>
							<?php foreach ($results['errors'] as $error): ?>
								<li style="color: #d63638;"><?php echo esc_html($error); ?></li>
							<?php endforeach; ?>
						</ul>
					<?php endif; ?>
				</div>
			<?php endif; ?>

			<div class="card" style="max-width: 800px;">
				<form method="post" action="">
					<?php wp_nonce_field('url_replacer_action', 'url_replacer_nonce'); ?>
					
					<table class="form-table">
						<tbody>
							<tr>
								<th scope="row">
									<label for="old_url"><?php esc_html_e('Old URL', 'url-replacer'); ?></label>
								</th>
								<td>
									<input type="url" id="old_url" name="old_url" value="<?php echo esc_attr($old_url); ?>" class="regular-text" required />
									<p class="description"><?php esc_html_e('The URL you want to replace (e.g., https://oldsite.com)', 'url-replacer'); ?></p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<label for="new_url"><?php esc_html_e('New URL', 'url-replacer'); ?></label>
								</th>
								<td>
									<input type="url" id="new_url" name="new_url" value="<?php echo esc_attr($new_url); ?>" class="regular-text" />
									<p class="description"><?php esc_html_e('The new URL to replace it with (e.g., https://newsite.com)', 'url-replacer'); ?></p>
								</td>
							</tr>
							<tr>
								<th scope="row">
									<?php esc_html_e('Replace in', 'url-replacer'); ?>
								</th>
								<td>
									<fieldset>
										<label>
											<input type="checkbox" name="replace_in_content" value="1" checked />
											<?php esc_html_e('Post/Page Content', 'url-replacer'); ?>
										</label><br>
										<label>
											<input type="checkbox" name="replace_in_excerpt" value="1" />
											<?php esc_html_e('Post Excerpts', 'url-replacer'); ?>
										</label><br>
										<label>
											<input type="checkbox" name="replace_in_meta" value="1" />
											<?php esc_html_e('Post Meta Fields', 'url-replacer'); ?>
										</label>
									</fieldset>
								</td>
							</tr>
						</tbody>
					</table>

					<p class="submit">
						<input type="submit" name="url_replacer_submit" id="submit" class="button button-primary" value="<?php esc_attr_e('Replace URLs', 'url-replacer'); ?>" />
					</p>
				</form>
			</div>

			<div class="card" style="max-width: 800px; margin-top: 20px; background-color: #fff3cd; border-left-color: #ffb900;">
				<h2 style="margin-top: 0;"><?php esc_html_e('⚠️ Important Warning', 'url-replacer'); ?></h2>
				<p><?php esc_html_e('This operation cannot be undone. It is highly recommended to:', 'url-replacer'); ?></p>
				<ul>
					<li><?php esc_html_e('Backup your database before proceeding', 'url-replacer'); ?></li>
					<li><?php esc_html_e('Test on a staging site first', 'url-replacer'); ?></li>
					<li><?php esc_html_e('Double-check the URLs you enter', 'url-replacer'); ?></li>
				</ul>
			</div>
		</div>
		<?php
	}
}
