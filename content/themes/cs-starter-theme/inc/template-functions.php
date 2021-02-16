<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package cs_starter_theme
 */

/**
 * Load template part with a custom
 * JavaScript file if it exists.
 *
 * @param string $slug
 * @param string|null $name
 */
function get_theme_template_part( $slug, $name = null ) {

	get_template_part( $slug, $name ); // load template file as usual

	$js_file_name = substr( strrchr( $slug, '/' ), 1 ) . '.js';
	if ( file_exists( get_template_directory() . '/js/template-parts/' . $js_file_name ) ) {
		wp_enqueue_script( $name, get_template_directory_uri() . '/js/template-parts/' . $js_file_name, array(), '20170101', true );
	}
}

/**
 * Show current template as a comment in page HTML.
 */
function show_template() {
	global $template;
	global $current_user;
	wp_get_current_user();

	if ( $current_user->user_level == 10 ) {
		echo '<!-- Template: ' . $template . '-->';
	}
}

add_action( 'wp_head', 'show_template' );

/**
 * Load flexible content by layout name.
 *
 * @param string $layout_name
 * @param string $layout_position
 */
function load_flexible_content( $layout_name, $layout_position = 'default' ) {

	$layout_name         = str_replace( 'fc_', '', $layout_name );
	$layout_name         = str_replace( '_', '-', $layout_name );
	$alt_layout_position = get_sub_field( 'alt_layout_position' );

	if ( $layout_position === 'shortcode' ) {
		return;
	}

	// load on default position
	if ( empty( $alt_layout_position ) && $layout_position === 'default' ) {
		get_template_part( 'flexible-content/fc-' . $layout_name );
	}

	// load on alternative position
	if ( ! empty( $alt_layout_position ) && $layout_position === $alt_layout_position ) {
		get_template_part( 'flexible-content/fc-' . $layout_name );
	}
}

/**
 * Get site root.
 *
 * @return string
 */
function get_site_root() {
	$path = str_replace( '/wordpress', '', get_site_url() );

	return $path;
}

/**
 * Retrieves the attachment ID from the file URL.
 *
 * @param string $src
 *
 * @return mixed
 */
function get_attachment_id_by_src( $src ) {

	$attachment_id = 0;
	$dir           = wp_upload_dir();

	if ( false !== strpos( $src, $dir['baseurl'] . '/' ) ) {

		$file       = basename( $src );
		$query_args = array(
			'post_type'   => 'attachment',
			'post_status' => 'inherit',
			'fields'      => 'ids',
			'meta_query'  => array(
				array(
					'value'   => $file,
					'compare' => 'LIKE',
					'key'     => '_wp_attachment_metadata',
				),
			)
		);

		$query = new WP_Query( $query_args );

		if ( $query->have_posts() ) {
			foreach ( $query->posts as $post_id ) {

				$meta                = wp_get_attachment_metadata( $post_id );
				$original_file       = basename( $meta['file'] );
				$cropped_image_files = wp_list_pluck( $meta['sizes'], 'file' );

				if ( $original_file === $file || in_array( $file, $cropped_image_files ) ) {
					$attachment_id = $post_id;
					break;
				}
			}
		}
	}

	return $attachment_id;
}

/**
 * Returns the Open Graph tags.
 *
 * @param string $image_path
 * @param string $description
 * @param string $title
 *
 * @return string
 */
function get_open_graph( $image_path = '/images/open-graph.jpg', $description = '', $title = '' ) {

	global $wp;

	if ( empty( $title ) ) {
		$title = get_the_title();
	}

	if ( empty( $description ) ) {
		$description = get_the_excerpt();
	}

	$html = '
		<meta property="og:title" content="' . $title . '" />
		<meta property="og:description" content="' . $description . '" />
	    <meta property="og:type" content="website" />
	    <meta property="og:image" content="' . $image_path . '" />
	    <meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="628" />
	    <meta property="og:url" content="' . home_url( $wp->request ) . '" />
	    <meta property="og:locale" content="nl_NL" />
	    <meta property="og:site_name" content="' . get_bloginfo( 'name' ) . '" />';

	return $html;
}

/**
 * Get JS version
 */
function get_js_version() {
	return file_get_contents( get_template_directory() . '/assets/js/dist/version.txt' );
}

/**
 * Get CSS version
 */
function get_css_version() {
	return file_get_contents( get_template_directory() . '/assets/css/dist/version.txt' );
}

/**
 * Load ajax localized scripts.
 *
 * @param string $handle
 */
function enqueue_ajax_scripts( $handle = 'app.min' ) {

	wp_localize_script( $handle, 'Ajax', array(
		'url'   => admin_url( 'admin-ajax.php' ),
		'nonce' => wp_create_nonce( 'code123' ),
	) );
}

/**
 * Get column class.
 *
 * Provides different column widths
 * based on the amount of columns.
 *
 * @param int $column_count
 *
 * @return string
 */
function theme_get_column_class( $column_count ) {

	$column_classes = '';

	if ( $column_count === 1 ) {
		$column_classes = 'col-xs-12';
	}

	if ( $column_count === 2 ) {
		$column_classes = 'col-xs-12 col-sm-6';
	}

	if ( $column_count === 3 ) {
		$column_classes = 'col-xs-12 col-sm-4';
	}

	return $column_classes;
}
