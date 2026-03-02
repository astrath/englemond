<?php
/**
 * Englemond functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Englemond
 * @since Englemond 1.0
 */

// Disables comments on the site.
require_once get_template_directory() . '/includes/disable-comments.php';

// Disables the draft metabox in the admin dashboard.
require_once get_template_directory() . '/includes/customize-wp.php';

// Adds theme support for post formats.
if ( ! function_exists( 'englemond_post_format_setup' ) ) :
	/**
	 * Adds theme support for post formats.
	 *
	 * @since Englemond 1.0
	 *
	 * @return void
	 */
	function englemond_post_format_setup() {
		add_theme_support( 'post-formats', array( 'aside', 'audio', 'chat', 'gallery', 'image', 'link', 'quote', 'status', 'video' ) );
	}
endif;
add_action( 'after_setup_theme', 'englemond_post_format_setup' );

// Enqueues editor-style.css in the editors.
if ( ! function_exists( 'englemond_editor_style' ) ) :
	/**
	 * Enqueues editor-style.css in the editors.
	 *
	 * @since Englemond 1.0
	 *
	 * @return void
	 */
	function englemond_editor_style() {
		add_editor_style( 'assets/css/editor-style.css' );
		add_editor_style( 'build/englemond.css' );
		add_editor_style( 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap' );
	}
endif;
add_action( 'after_setup_theme', 'englemond_editor_style' );

// Enqueues the theme stylesheet on the front.
if ( ! function_exists( 'englemond_enqueue_styles' ) ) :
	/**
	 * Enqueues the theme stylesheet on the front.
	 *
	 * @since Englemond 1.0
	 *
	 * @return void
	 */
	function englemond_enqueue_styles() {
		$suffix = SCRIPT_DEBUG ? '' : '.min';
		$src    = 'style' . $suffix . '.css';

		wp_enqueue_style(
			'englemond-style',
			get_parent_theme_file_uri( $src ),
			array(),
			wp_get_theme()->get( 'Version' )
		);
		wp_enqueue_style(
			'englemond-style-build',
			get_template_directory_uri() . '/build/englemond.css',
			array(),
			wp_get_theme()->get( 'Version' )
		);
		
		wp_style_add_data(
			'englemond-style',
			'path',
			get_parent_theme_file_path( $src )
		);

		wp_enqueue_script(
			'englemond-script',
			get_template_directory_uri() . '/build/englemond.js',
			array('jquery'),
			wp_get_theme()->get( 'Version' ),
			true
		);
		wp_enqueue_style(
			'englemond-fonts',
			'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap',
			array(),
			wp_get_theme()->get( 'Version' )
		);

	}
endif;
add_action( 'wp_enqueue_scripts', 'englemond_enqueue_styles' );

// Registers custom block styles.
if ( ! function_exists( 'englemond_block_styles' ) ) :
	/**
	 * Registers custom block styles.
	 *
	 * @since Englemond 1.0
	 *
	 * @return void
	 */
	function englemond_block_styles() {
		register_block_style(
			'core/list',
			array(
				'name'         => 'checkmark-list',
				'label'        => __( 'Checkmark', 'englemond' ),
				'inline_style' => '
				ul.is-style-checkmark-list {
					list-style-type: "\2713";
				}

				ul.is-style-checkmark-list li {
					padding-inline-start: 1ch;
				}',
			)
		);
	}
endif;
add_action( 'init', 'englemond_block_styles' );

// Registers pattern categories.
if ( ! function_exists( 'englemond_pattern_categories' ) ) :
	/**
	 * Registers pattern categories.
	 *
	 * @since Englemond 1.0
	 *
	 * @return void
	 */
	function englemond_pattern_categories() {

		register_block_pattern_category(
			'englemond_page',
			array(
				'label'       => __( 'Pages', 'englemond' ),
				'description' => __( 'A collection of full page layouts.', 'englemond' ),
			)
		);

		register_block_pattern_category(
			'englemond_post-format',
			array(
				'label'       => __( 'Post formats', 'englemond' ),
				'description' => __( 'A collection of post format patterns.', 'englemond' ),
			)
		);
	}
endif;
add_action( 'init', 'englemond_pattern_categories' );

// Registers block binding sources.
if ( ! function_exists( 'englemond_register_block_bindings' ) ) :
	/**
	 * Registers the post format block binding source.
	 *
	 * @since Englemond 1.0
	 *
	 * @return void
	 */
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
		]
	);
	}
endif;
add_action( 'init', 'englemond_register_block_bindings' );

// Registers block binding callback function for the post format name.
if ( ! function_exists( 'englemond_format_binding' ) ) :
	/**
	 * Callback function for the post format name block binding source.
	 *
	 * @since Englemond 1.0
	 *
	 * @return string|void Post format name, or nothing if the format is 'standard'.
	 */
	function englemond_format_phone_binding() {
		return 'tel:'.get_option('englemond_shop_phone');
	}

endif;

add_action('render_block_core/navigation-link', 'englemond_navigation_link_render_callback', 10, 4);
function englemond_navigation_link_render_callback($block_content, $block, $parsed_block, $x=null) 
{
	
	$id = $block['attrs']['id']??null;
	if (!$id){
		return $block_content;
	}
	$img = get_the_post_thumbnail_url($id, 'medium');
	if (!$img) {
		return $block_content;
	}
	$block_content = str_replace('wp-block-navigation-item__content', 'wp-block-navigation-item__content has-image', $block_content);
	$desc  = get_the_excerpt($id);
	$img  =sprintf('<img src="%s" alt="%s" class="wp-block-navigation-item__icon" /><p class="wp-block-navigation-item__description">%s</p><span class="wp-block-navigation-item__label">', $img, $block['attrs']['label']??null, $desc);
	$block_content = str_replace('<span class="wp-block-navigation-item__label">', $img, $block_content);
	return $block_content;
}

add_action('admin_enqueue_scripts', 'englemond_admin_enqueue_scripts');
function englemond_admin_enqueue_scripts() {
	$current_screen = get_current_screen();
	wp_enqueue_script(
		'englemond-admin-script',
		get_template_directory_uri() . '/build/englemond-admin.js',
		array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-data'),
		wp_get_theme()->get( 'Version' ),
		true
	);
	wp_localize_script(
		'englemond-admin-script',
		'SHOPDATA',
		[
			'phone' => get_option('englemond_shop_phone'),
			'orderButtonText' => get_option('englemond_shop_order_button_text', 'commander au ...'),
		]
	);
}

// Removes Posts from admin menu.
if ( ! function_exists( 'englemond_remove_posts_menu' ) ) :
	/**
	 * Removes the Posts menu item from the WordPress admin menu.
	 *
	 * @since Englemond 1.0
	 *
	 * @return void
	 */
	function englemond_remove_posts_menu() {
		remove_menu_page( 'edit.php' );
	}
endif;
add_action( 'admin_menu', 'englemond_remove_posts_menu' );


add_action('wp_footerz', function(){
	?>
	<script>
		jQuery(function(){
			setTimeout(function(){
				jQuery('.wp-block-navigation__responsive-container').addClass('has-modal-open is-menu-open')
			}, 1000);
		})
	</script>
	
	<?php
});