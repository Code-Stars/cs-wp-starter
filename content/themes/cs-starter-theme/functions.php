<?php

/**
 * Loading template-wide files.
 */
require 'inc/template-html-compression.php';
require 'inc/template-auto-child-page-menu.php';
require 'inc/template-custom-login.php';
require 'inc/template-smtp.php';
require 'inc/template-error-handling.php';
require 'inc/template-cleanup.php';
require 'inc/template-functions.php';
require 'inc/template-filters.php';
require 'inc/template-tags.php';
require 'inc/template-category-images.php';

/**
 * Loading site-wide data from plugin.
 * @see Plugin 'Website Data'.
 */

/**
 * Basic theme setup.
 */
function cs_starter_theme_setup() {

	// makes theme available for translation
	load_theme_textdomain( 'cs-starter-theme', get_template_directory() . '/languages' );

	// register menus
	register_nav_menus( array(
		'menu-1'        => esc_html__( 'Primary' ),
		'footer-menu-1' => esc_html__( 'Footer Menu' )
	) );

	// enable Features
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption'
	) );

	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'category-thumbnails', array( 'post' ) );
	add_theme_support( 'responsive-embeds' );

	// add options page
	if ( function_exists( 'acf_add_options_page' ) ) {
		acf_add_options_page();
	}

	// Developer Forms plugin settings
	if ( function_exists( 'df_apply_settings' ) ) {
		df_apply_settings( [
			'client_validation' => 'parsley',
			'button_class'      => 'button button--submit'
		] );
	}
}

add_action( 'after_setup_theme', 'cs_starter_theme_setup' );

/**
 * Load front-end stylesheets.
 */
function load_theme_stylesheet() {
	//$version = '1.0';
	$version = get_css_version();
	$unique  = time();

	if ( is_env() === 'local' ) {
		/** development */

		// use 'gulp build' command for creating a new vendor.css
		wp_enqueue_style( 'vendor', get_template_directory_uri() . '/assets/css/dist/vendor.css', array(), $version );

		// use 'gulp' command for creating a new app.css on watch
		wp_enqueue_style( 'app', get_template_directory_uri() . '/assets/css/dist/app.css', array(), $unique );
	} else {

		/** production */
		// vendor
		wp_enqueue_style( 'vendor.min', get_template_directory_uri() . '/assets/css/dist/vendor.min.css', array(), $version );

		// custom
		wp_enqueue_style( 'app.min', get_template_directory_uri() . '/assets/css/dist/app.min.css', array(), $version );
	}
}

add_action( 'wp_enqueue_scripts', 'load_theme_stylesheet' );

/**
 * Enqueue scripts and styles for the front-end.
 */
function load_theme_scripts() {
	//$version = '1.0';
	$version = get_js_version();
	$unique  = time();

	wp_enqueue_script( 'jquery' );

	if ( is_env() === 'local' ) {
		/** development */

		// use 'gulp build' command for creating a vendor.js
		wp_enqueue_script( 'vendor',
			get_template_directory_uri() . '/assets/js/dist/vendor.js',
			array(),
			$unique,
			true
		);

		// use 'gulp' command for creating a new app.js on watch
		wp_enqueue_script( 'cs-app',
			get_template_directory_uri() . '/assets/js/dist/app.js',
			array(),
			$unique,
			true
		);

		enqueue_ajax_scripts( 'app' );

	} else {
		/** production */

		// use 'gulp build' command for creating a new vendor.min.js
		wp_enqueue_script( 'vendor.min', get_template_directory_uri() . '/assets/js/dist/vendor.min.js', array(), $version, true );

		// use 'gulp build' command for creating a new app.min.js
		wp_enqueue_script( 'app.min', get_template_directory_uri() . '/assets/js/dist/app.min.js', array(), $version, true );

		enqueue_ajax_scripts( 'app.min' );
	}
}

add_action( 'wp_enqueue_scripts', 'load_theme_scripts' );