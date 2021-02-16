<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package cs_starter_theme
 */

/**
 * Add CSS-classes to menu items.
 *
 * @param array $atts
 * @param $item
 * @param object $args
 *
 * @return mixed
 */
function add_specific_menu_location_css( $atts, $item, $args ) {
	$footer_locations = array(
		'footer'
	);

	if ( in_array( $args->theme_location, $footer_locations ) ) {
		$atts['class'] = 'footer-menu__item';
	}

	if ( $args->theme_location === 'main-menu' ) {
		$atts['class'] = 'main-menu-item';
	}

	return $atts;
}

add_filter( 'nav_menu_css_class', 'add_specific_menu_location_css', 10, 3 );

/**
 * Add CSS-classes to menu links.
 *
 * @param array $atts
 * @param $item
 * @param object $args
 *
 * @return mixed
 */
function add_specific_menu_location_atts( $atts, $item, $args ) {
	$footer_locations = array(
		'footer',
	);

	if ( in_array( $args->theme_location, $footer_locations ) ) {
		$atts['class'] = 'footer-menu__link';
	}

	if ( $args->theme_location === 'menu-1' ) {
		$atts['class'] = 'main-menu-item__link';
	}

	return $atts;
}

add_filter( 'nav_menu_link_attributes', 'add_specific_menu_location_atts', 10, 3 );

/**
 * Add class to menu items.
 *
 * @param array $classes
 *
 * @return array
 */
function my_nav_special_class( $classes ) {
	$classes[] = 'main-menu-item';

	return $classes;
}

add_filter( 'nav_menu_css_class', 'my_nav_special_class', 10, 2 );

/**
 * Change class of sub menus.
 *
 * @param string $menu
 *
 * @return mixed
 */
function change_submenu_class( $menu ) {
	return preg_replace( '/ class="sub-menu"/', ' class="main-menu-sub"', $menu );
}

add_filter( 'wp_nav_menu', 'change_submenu_class' );

/**
 * Checks if given sidebar has at least one widget.
 *
 * @param string $sidebar_id
 *
 * @return string
 */
function sidebar_has_widget( $sidebar_id = 'sidebar-main' ) {
	ob_start();

	dynamic_sidebar( $sidebar_id );

	return ob_get_clean();
}

/*
 * Adds SVG extension.
 */
function my_myme_types( $mime_types ) {
	$mime_types['svg'] = 'image/svg+xml';

	return $mime_types;
}

/**
 * Allow SVG images through file uploader.
 */
add_filter( 'upload_mimes', 'my_myme_types', 1, 1 );

/**
 * Change default excerpt Length.
 */
add_filter( 'excerpt_length', function () {
	return 60;
} );

/**
 * Change export more text.
 */
add_filter( 'excerpt_more', function () {
	return '...';
} );

/**
 * Adds custom post type to the content of the tag template.
 *
 * @param object $query
 */
function add_custom_types_to_tag_template( $query ) {

	if ( is_tag() && $query->is_main_query() ) {

		$post_types = get_post_types();

		// alternately, you can add just specific post types using this line instead of the above:
		// $post_types = array( 'post', 'your_custom_type' );

		$query->set( 'post_type', $post_types );
	}
}

add_filter( 'pre_get_posts', 'add_custom_types_to_tag_template' );

/**
 * Change custom logo classes.
 *
 * @param $html
 *
 * @return mixed
 */
function change_logo_class( $html ) {

	$html = str_replace( 'custom-logo', 'main-logo', $html );
	$html = str_replace( 'custom-logo-link', 'main-logo__link', $html );

	return $html;
}

add_filter( 'get_custom_logo', 'change_logo_class' );