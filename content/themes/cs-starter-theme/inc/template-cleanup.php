<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package cs_starter_theme
 */

/**
 * Remove the Wordpress the blog section from the admin dashboard.
 */
function remove_dashboard_widgets() {
	remove_meta_box( 'dashboard_primary', 'dashboard', 'side' ); //WordPress.com Blog
}

add_action( 'wp_dashboard_setup', 'remove_dashboard_widgets' );

/**
 * Remove unwanted Wordpress Actions.
 */
function remove_unwanted_wordpress_actions() {

	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );

	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
}

add_action( 'after_setup_theme', 'remove_unwanted_wordpress_actions' );

/**
 * Remove unwanted adminbar CSS.
 */
function remove_admin_login_header() {
	remove_action( 'wp_head', '_admin_bar_bump_cb' );
}

add_action( 'get_header', 'remove_admin_login_header' );
