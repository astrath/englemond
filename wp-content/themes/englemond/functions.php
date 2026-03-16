<?php
// Disables comments on the site.
require_once get_template_directory() . '/includes/disable-comments.php';

// Disables the draft metabox in the admin dashboard.
require_once get_template_directory() . '/includes/customize-wp.php';

add_action('after_setup_theme', function(){
	add_editor_style( 'build/englemond.css' );
	add_editor_style( 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap' );
});

// Enqueues the theme stylesheet on the front.
add_action('wp_enqueue_scripts', function(){
	wp_enqueue_style('englemond-fonts', 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap', [], wp_get_theme()->get( 'Version' ));
	wp_enqueue_style('englemond-style', get_template_directory_uri() . '/build/englemond.css', [], wp_get_theme()->get( 'Version' ));
	wp_enqueue_script('englemond-script', get_template_directory_uri() . '/build/englemond.js', ['jquery'], wp_get_theme()->get( 'Version' ), true);
});

// Registers custom block styles.
add_action('init', function(){
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
});

// Registers pattern categories.
add_action('init', function(){
		register_block_pattern_category('englemond_content', [
			'label'       => __( 'Content', 'englemond' ),
			'description' => __( 'A collection of content layouts.', 'englemond' )
		]);
		register_block_pattern_category('englemond_section', [
			'label'       => __( 'Sections', 'englemond' ),
			'description' => __( 'A collection of section layouts.', 'englemond' )
		]);
		register_block_pattern_category('englemond_carousel', [
			'label'       => __( 'Carousels', 'englemond' ),
			'description' => __( 'A collection of carousel layouts.', 'englemond' )
		]);
});

add_action('render_block_core/navigation-link', function($block_content, $block, $parsed_block, $x=null){
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
}, 10, 4);

add_action('admin_enqueue_scripts', function(){
	$current_screen = get_current_screen();
	wp_enqueue_script('englemond-admin-script', get_template_directory_uri() . '/build/englemond-admin.js', ['wp-blocks', 'wp-i18n', 'wp-element', 'wp-data', 'wp-hooks', 'wp-components', 'wp-block-editor'], wp_get_theme()->get( 'Version' ), true);
});

// Replaces WordPress logo with Englemond logo on wp-login screen (uses Site Identity logo).
add_action('login_enqueue_scripts', function () {
	$custom_logo_id = get_theme_mod('custom_logo');
	if (!$custom_logo_id) {
		return;
	}
	$logo_url = wp_get_attachment_image_url($custom_logo_id, 'medium');
	if (!$logo_url) {
		return;
	}
	$logo_url = esc_url($logo_url);
	?>
	<style type="text/css">
		body.login h1 a {
			background-color: #FFF;
			background-image: url(<?php echo $logo_url; ?>);
			background-size: contain;
			background-position: center center;
			width: 100%;
			height: 80px;
		}
	</style>
	<?php
});
add_filter('login_headerurl', function () {
	return home_url();
});
add_filter('login_headertext', function () {
	return get_bloginfo('name') . ' - ' . get_bloginfo('description');
});

// Removes Posts from admin menu.
add_action('admin_menu', function(){
	remove_menu_page( 'edit.php' );
});

// Expose featured_media_url on REST API responses for products.
add_action('rest_api_init', function () {
	register_rest_field(
		'product',
		'featured_media_url',
		array(
			'get_callback' => function ( $object ) {
				$post_id   = isset( $object['id'] ) ? (int) $object['id'] : 0;
				$thumbnail = $post_id ? get_the_post_thumbnail_url( $post_id, 'medium' ) : '';

				return $thumbnail ? esc_url_raw( $thumbnail ) : null;
			},
			'schema'      => array(
				'description' => __( 'URL of the featured image for this product.', 'englemond' ),
				'type'        => 'string',
				'context'     => array( 'view', 'edit' ),
			),
		)
	);
});

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