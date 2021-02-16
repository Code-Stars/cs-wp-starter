<?php
/**
 * Plugin Name: Website blocks
 * Description: Website blocks for this website.
 * Author: Floris Weijenburg <floris@bluedragon.nl>
 * Author URI: https://BlueDragon-sc.nl
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CS
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( function_exists( 'acf_register_block_type' ) ) {
	add_action( 'acf/init', 'register_acf_block_types' );
}

/**
 * Register blocks.
 */
function register_acf_block_types() {

	// TEXT IMAGE
	acf_register_block_type( [
		'name'            => 'wb_text_image',
		'title'           => __( 'Text Image' ),
		'description'     => __( 'A custom text image block.' ),
		'render_template' => plugin_dir_path( __FILE__ ) . 'blocks/text-image/text-image.php',
		'icon'            => 'editor-paste-text',
		'keywords'        => [ 'text', 'image', 'blue-dragon', 'codestars' ]
	] );

	// MAPS
	acf_register_block_type( [
		'name'            => 'wb_maps',
		'title'           => __( 'Maps' ),
		'description'     => __( 'A custom maps block.' ),
		'render_template' => plugin_dir_path( __FILE__ ) . 'blocks/maps/maps.php',
		'icon'            => 'editor-paste-text',
		'keywords'        => [ 'maps', 'map', 'blue-dragon', 'codestars' ]
	] );

	// LOGOS
	acf_register_block_type( [
		'name'            => 'wb_logos',
		'title'           => __( 'Logos' ),
		'description'     => __( 'A custom logos block.' ),
		'render_template' => plugin_dir_path( __FILE__ ) . 'blocks/logos/logos.php',
		'icon'            => 'editor-paste-text',
		'keywords'        => [ 'logos', 'blue-dragon', 'codestars' ]
	] );
}

/**
 * Register block styles.
 */
function init_styles() {

	$version = '1.0';

	wp_enqueue_style( 'website-blocks', plugin_dir_url( __FILE__ ) . '/assets/css/dist/blocks.css', array( 'vendor' ), $version );
}

add_action( 'init', 'init_styles' );

/**
 * Register styling in editor.
 */
add_action( 'enqueue_block_editor_assets', function () {

	$version = '1.0';

	// includes bootstrap
	wp_enqueue_style( 'vendor', trailingslashit( get_template_directory_uri() ) . 'assets/css/dist/vendor.min.css', array(), $version, 'all' );
} );