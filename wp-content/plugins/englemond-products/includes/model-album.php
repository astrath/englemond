<?php

final class MLF_Album_Taxonomy {
	const TAXONOMY = 'album';
	const POST_TYPE = 'attachment';

	public static function init(): void {
		add_action('init', [__CLASS__, 'register_taxonomy']);
		add_action('restrict_manage_posts', [__CLASS__, 'restrict_manage_posts'], 10, 1);
		add_action('admin_enqueue_scripts', [__CLASS__, 'enqueue_media_frame_album_filter_script'], 100);
		add_filter('ajax_query_attachments_args', [__CLASS__, 'ajax_query_attachments_args'], 10, 1);
	}


	public static function register_taxonomy(): void {
		$labels = [
			'name' => __('Albums', 'media-library-filter'),
			'singular_name' => __('Album', 'media-library-filter'),
			'menu_name' => __('Albums', 'media-library-filter'),
			'search_items' => __('Search Albums', 'media-library-filter'),
			'all_items' => __('All Albums', 'media-library-filter'),
			'parent_item' => __('Parent Album', 'media-library-filter'),
			'parent_item_colon' => __('Parent Album:', 'media-library-filter'),
			'edit_item' => __('Edit Album', 'media-library-filter'),
			'update_item' => __('Update Album', 'media-library-filter'),
			'add_new_item' => __('Add New Album', 'media-library-filter'),
			'new_item_name' => __('New Album Name', 'media-library-filter'),
			'not_found' => __('No albums found.', 'media-library-filter'),
			'not_found_in_trash' => __('No albums found in Trash.', 'media-library-filter'),
		];

		register_taxonomy(
			self::TAXONOMY,
			[self::POST_TYPE],
			[
				'hierarchical' => true,
				'labels' => $labels,
				'public' => false, // Keep it admin-focused (attachments + filtering).
				'show_ui' => true,
				'show_admin_column' => true,
				'show_in_rest' => true,
				'rewrite' => [
					'slug' => 'album',
				],
			]
		);
	}

	public static function ajax_query_attachments_args(array $args): array {
		$original_args = isset( $_REQUEST['query'] ) ? (array) $_REQUEST['query'] : array();
		if ( isset( $original_args['tax_query'] ) ) {
			$args['tax_query'] = $original_args['tax_query'];
		}

		return $args;
	}

	/**
	 * Adds a dropdown filter above the Media Library table.
	 *
	 * Hook: restrict_manage_posts
	 */
	public static function restrict_manage_posts(string $post_type): void {
		if ($post_type !== self::POST_TYPE) {
			return;
		}

		$current = isset($_GET[self::TAXONOMY]) ? absint(wp_unslash($_GET[self::TAXONOMY])) : 0;

		$terms = get_terms(
			[
				'taxonomy' => self::TAXONOMY,
				'hide_empty' => false,
				'orderby' => 'name',
				'order' => 'ASC',
			]
		);

		echo '<select name="' . esc_attr(self::TAXONOMY) . '" id="filter-' . esc_attr(self::TAXONOMY) . '" class="postform">';
		echo '<option value="0">' . esc_html__('All Albums', 'media-library-filter') . '</option>';

		if (!is_wp_error($terms)) {
			foreach ($terms as $term) {
				printf(
					'<option value="%d"%s>%s</option>',
					(int) $term->term_id,
					selected($current, (int) $term->term_id, false),
					esc_html($term->name)
				);
			}
		}

		echo '</select>';
	}

	/**
	 * Applies the selected album filter to the Media Library query.
	 *
	 * Hook: pre_get_posts
	 */
	public static function pre_get_posts(\WP_Query $query): void {
		if (!is_admin() || !$query->is_main_query()) {
			return;
		}

		$post_type = $query->get('post_type');
		if (is_array($post_type)) {
			if (!in_array(self::POST_TYPE, $post_type, true)) {
				return;
			}
		} elseif ((string) $post_type !== self::POST_TYPE) {
			return;
		}

		$album = isset($_GET[self::TAXONOMY]) ? absint(wp_unslash($_GET[self::TAXONOMY])) : 0;
		if ($album <= 0) {
			return;
		}

		$tax_query = (array) $query->get('tax_query');
		$tax_query[] = [
			'taxonomy' => self::TAXONOMY,
			'field' => 'term_id',
			'terms' => [$album],
		];

		$query->set('tax_query', $tax_query);
	}

	/**
	 * Adds an "Album" dropdown to the Media Library modal/frame.
	 *
	 * We patch `wp.media.view.AttachmentsBrowser.prototype.createToolbar()`
	 * to add an extra <select> and bind it to `library.props.tax_query`.
	 */
	public static function enqueue_media_frame_album_filter_script(): void {
		if (!current_user_can('upload_files')) {
			return;
		}

		if (!taxonomy_exists(self::TAXONOMY)) {
			return;
		}

		$terms = get_terms(
			[
				'taxonomy' => self::TAXONOMY,
				'hide_empty' => false,
				'orderby' => 'name',
				'order' => 'ASC',
				'fields' => 'all',
			]
		);

		if (is_wp_error($terms)) {
			return;
		}

		$js_terms = [];
		foreach ($terms as $term) {
			$js_terms[] = [
				'term_id' => (int) $term->term_id,
				'name' => (string) $term->name,
			];
		}

		$js_all_albums = __('All Albums', 'media-library-filter');
		$js_filter_by_album = __('Filter by album', 'media-library-filter');

		$handle = 'mlf-album-filter';
		$script_path = plugin_dir_path(__FILE__) . 'build/englemond-album.js';
		$script_url = plugin_dir_url(__FILE__) . 'build/englemond-album.js';
		$version = file_exists($script_path) ? (string) filemtime($script_path) : '0.1.0';

		wp_enqueue_script($handle, $script_url, ['jquery'], $version, true);
		wp_localize_script(
			$handle,
			'MLFAlbumFilter',
			[
				'taxonomy' => self::TAXONOMY,
				'terms' => $js_terms,
				'l10n' => [
					'allAlbums' => $js_all_albums,
					'filterByAlbum' => $js_filter_by_album,
				],
			]
		);
	}
}

MLF_Album_Taxonomy::init();


function add_album_filter_to_media_grid() {
    ?>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            var AttachmentFilters = wp.media.view.AttachmentFilters;
            wp.media.view.AttachmentFilters.Album = AttachmentFilters.extend({
                id: 'media-attachment-album-filter',

                createFilters: function() {
                    var filters = {};

                    filters.all = {
                        text: 'All albums',
                        props: {
                            album: null
                        },
                        priority: 10
                    };

                    <?php
                    $terms = get_terms([
                        'taxonomy' => 'album',
                        'hide_empty' => false,
                    ]);

                    foreach ($terms as $term) {
                        echo "filters['{$term->slug}'] = {
                            text: '{$term->name}',
                            props: {
                                album: '{$term->slug}'
                            }
                        };";
                    }
                    ?>

                    this.filters = filters;
                }
            });

            var old = wp.media.view.AttachmentsBrowser;
            console.log({old})
            wp.media.view.AttachmentsBrowser = old.extend({
                createToolbar: function() {
                    old.prototype.createToolbar.apply(this, arguments);

                    this.toolbar.set('AlbumFilter', new wp.media.view.AttachmentFilters.Album({
                        controller: this.controller,
                        model:      this.collection.props,
                        priority:   -80
                    }).render());
                }
            });
        });
    </script>
    <?php
}
add_action('admin_footer-upload.php', 'add_album_filter_to_media_grid');