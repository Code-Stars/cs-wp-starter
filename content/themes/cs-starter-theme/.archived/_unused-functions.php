<?php
/**
 * This is were all the useful but unused
 * functionality goes for this website.
 */

/**
 * Get posts by word.
 */
function get_posts_by_with_title_like() {
	check_ajax_referer( 'code123', 'security' );

	global $wpdb;

	$post_ids     = array();
	$search_query = 'SELECT ID FROM wp_posts WHERE post_type = "blog" AND post_title LIKE "%s"';

	$results = $wpdb->get_results( $wpdb->prepare( $search_query, '%' . $_POST['title'] . '%' ) );

	foreach ( $results as $post ) {
		$post_ids[] = $post->ID;
	}

	echo json_encode( $post_ids );

	exit();
}

// example
// add_action( 'wp_ajax_nopriv_get_posts_by_with_title_like', 'get_posts_by_with_title_like' );
// add_action( 'wp_ajax_get_posts_by_with_title_like', 'get_posts_by_with_title_like' );

/**
 * Load page via Ajax call.
 */
function load_page() {
	check_ajax_referer( 'code123', 'security' );

	$path = $_GET['href'];
	$id   = url_to_postid( $path );

	if ( $id === 0 ) {
		// fallback for /post URLS
		$post_path = str_replace( get_site_url(), get_site_url() . '/post', $path );
		$id        = url_to_postid( $post_path );

		if ( $id === 0 ) {
			// fallback for /page URLS
			$page_path = str_replace( get_site_url(), get_site_url() . '/page', $path );
			$id        = url_to_postid( $page_path );
		}
	}

	$post = get_post( $id );

	set_query_var( 'post', $post );

	get_template_part( 'page-ajax' );

	exit();
}

// example
// add_action( 'wp_ajax_nopriv_load_page', 'load_page' );
// add_action( 'wp_ajax_load_page', 'load_page' );


/**
 * Get all cases.
 *
 * @param int $limit
 *
 * @return int[]|WP_Post[]
 */
function get_cases( $limit = - 1 ) {

	$args = array(
		'post_type'      => 'case',
		'posts_per_page' => $limit,
	);

	$posts = get_posts( $args );

	return $posts;
}

/**
 * Get all cases loop.
 *
 * @param int $limit
 *
 * @return WP_Query
 */
function get_cases_loop( $limit = - 1 ) {

	$args = array(
		'post_type'      => 'case',
		'posts_per_page' => $limit
	);

	$loop = new WP_Query( $args );

	return $loop;
}

/*
 * Register product categories.
 */
function product_categories_init() {

	register_taxonomy(
		'product_categories',
		'product',
		array(
			'hierarchical' => true, /* enables parent taxonomy selection */
			'label'        => __( 'Product Categories' ),
			'rewrite'      => array( 'slug' => __( 'product-category' ) )
		)
	);
}

// example
//add_action( 'init', 'product_categories_init' );

/**
 * Change default permalink of posts and pages.
 */
function custom_permalinks() {
	global $wp_rewrite;

	$wp_rewrite->page_structure = $wp_rewrite->root . '/page/%pagename%/';
	$wp_rewrite->set_permalink_structure( $wp_rewrite->root . '/%postname%/' );

	//$wp_rewrite->flush_rules();
}

// example
//add_action( 'init', 'custom_permalinks' );

/**
 * Localize permalink slugs by adding a settings field
 * to the permalink page.
 */
function localize_permalink_slugs() {
	if ( isset( $_POST['permalink_structure'] ) ) {
		update_option( 'permalinks_slug_cases', sanitize_title_with_dashes( $_POST['permalinks_slug_cases'] ) );
	}

	add_settings_field( 'permalinks_slug_cases', 'Cases Slug', 'permalinks_slug_cases_field_callback', 'permalink', 'optional' );
}

// example
//add_action( 'load-options-permalink.php', 'localize_permalink_slugs' );

function permalinks_slug_cases_field_callback() {
	$value = get_option( 'permalinks_slug_cases' );
	echo '<input type="text" value="' . esc_attr( $value ) . '" name="permalinks_slug_cases" class="regular-text" />';
}

// example
// stop auto redirecting
//remove_action( 'template_redirect', 'redirect_canonical' );

/**
 * Remove Elementor 'Go Pro' message.
 */
function remove_elementor_pro_menu() {
	remove_submenu_page( 'elementor', 'go_elementor_pro' );
}

if ( defined( 'ELEMENTOR_VERSION' ) ) {
	//add_action( 'admin_init', 'remove_elementor_pro_menu' );
}

/*
 * Fix containers by remove the added whitespaces.
 */
function remove_space_between_containers( $content ) {
	return preg_replace( '/[\s]{0,}<!--[\s]{0,}-->[\s]{0,}/', '<!---->', $content );
}

//add_filter( 'post_content', 'remove_space_between_containers' );

/*
 * Add class to menu links.
 */
function remove_whitespaces_from_menu_items( $html ) {
	return preg_replace( "/[\s\n]*?(\<(\/ul>|li[\s>]))/i", "$1", $html );
}

//add_filter( 'wp_nav_menu', 'remove_whitespaces_from_menu_items' );

function wpse28145_add_custom_types( $query ) {
	if ( is_tag() && $query->is_main_query() ) {

		// this gets all post types:
		//$post_types = get_post_types();

		// alternately, you can add just specific post types using this line instead of the above:
		$post_types = array( 'post', 'case' );

		$query->set( 'post_type', $post_types );
	}
}

//add_filter( 'pre_get_posts', 'wpse28145_add_custom_types' );


/**
 * Register widget area.
 */
function wp_starter_widgets_init() {

	register_sidebar( array(
		'name'          => esc_html( 'Main Sidebar' ),
		'id'            => 'sidebar-main',
		'description'   => esc_html__( 'Add widgets here.', 'cs-starter-theme' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title title title--widget">',
		'after_title'   => '</h2>'
	) );

	register_sidebar( array(
		'name'          => esc_html( 'Footer Copyright Text' ),
		'id'            => 'footer-copyright-text',
		'description'   => esc_html__( 'Add widgets here.', 'cs-starter-theme' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '',
		'after_title'   => ''
	) );

	register_sidebar( array(
		'name'          => esc_html( 'Footer Contact' ),
		'id'            => 'footer-contact',
		'description'   => esc_html__( 'Add widgets here.', 'cs-starter-theme' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '',
		'after_title'   => ''
	) );
}

// use ACF options instead
//add_action( 'widgets_init', 'wp_starter_widgets_init' );

/**
 * Checks if a page has child pages.
 *
 * @param int $parent_post_id
 *
 * @return bool
 */
function page_has_children( $parent_post_id ) {
	$children = get_pages( 'child_of=' . $parent_post_id );

	return count( $children ) != 0;
}

/**
 * Get child pages of a parent page.
 *
 * @param int $post_id
 *
 * @return array|false
 */
function page_get_children( $post_id ) {
	return get_pages( 'child_of=' . $post_id );
}

/**
 * Changes the more link into a more readable format.
 *
 * @param string $more_link
 * @param string $more_link_text
 *
 * @return string
 */
function change_more_link( $more_link, $more_link_text ) {
	$more_link = str_replace( 'meer', 'Lees meer', $more_link );
	$more_link = str_replace( '(', '', $more_link );
	$more_link = str_replace( ')', '', $more_link );
	$more_link = str_replace( '&hellip;', '', $more_link );
	$more_link = str_replace( 'more-link', 'more-link', $more_link );
	$more_link = str_replace( '>', ' class="button button--submit >', $more_link );

	return $more_link;
}

//add_filter( 'the_content_more_link', 'change_more_link', 10, 2 );


/**
 * Add cookie notice.
 */
function add_cookie_bar() {
	ob_start();

	echo '<div id="main-cookie-bar">';
	get_template_part( 'template-parts/partials/cookie-bar-standalone' );
	echo '</div>';

	$output = ob_get_contents();
	ob_end_clean();

	echo $output;
}

//add_action( 'wp_footer', 'add_cookie_bar' );
