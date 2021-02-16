<?php
/**
 * Plugin Name: Website Data
 * Description: Required data container for this website.
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

/**
 * Here we include more functionality for the this site data plugin.
 */
require_once plugin_dir_path( __FILE__ ) . 'inc/dal.php';
require_once plugin_dir_path( __FILE__ ) . 'inc/permalinks.php';
require_once plugin_dir_path( __FILE__ ) . 'inc/post-types.php';
require_once plugin_dir_path( __FILE__ ) . 'inc/taxonomies.php';
