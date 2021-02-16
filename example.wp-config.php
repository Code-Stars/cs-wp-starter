<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

/** Custom error handling */
define( 'ERROR_HANDLING', is_env() === 'production' );
define( 'ERROR_HANDLING_EMAIL', 'contact@codestars.nl' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/** Increase upload limit */
define( 'WP_MEMORY_LIMIT', '512M' );

if ( is_env() === 'local' ) {
	define( 'WP_HOME', 'http://cs-wp-starter.local' );
	define( 'WP_SITEURL', 'http://cs-wp-starter.local/wordpress' );
	define( 'WP_CONTENT_URL', 'http://cs-wp-starter.local/content' );
	define( 'DB_USER', 'cswpstarternl' );
	define( 'DB_PASSWORD', '***' );
	define( 'DB_HOST', 'vps.codestars.nl:3306' );
	define( 'DB_NAME', 'wp_cs_starter' );
}

if ( is_env() === 'staging' ) {
	define( 'WP_HOME', 'http://staging.codestars.nl/[project_name]/' );
	define( 'WP_SITEURL', 'http://staging.codestars.nl/[project_name]/wordpress' );
	define( 'WP_CONTENT_URL', 'http://staging.codestars.nl/[project_name]/content' );
	define( 'DB_USER', 'cswpstarternlstaging' );
	define( 'DB_PASSWORD', '***' );
	define( 'DB_HOST', 'localhost' );
	define( 'DB_NAME', 'wp_staging_[project_name]' );
}

if ( is_env() === 'production' ) {
	define( 'WP_HOME', 'https://[project_name].nl' );
	define( 'WP_SITEURL', 'https://[project_name].nl/wordpress' );
	define( 'WP_CONTENT_URL', 'https://[project_name].nl/content' );
	define( 'DB_USER', '***' );
	define( 'DB_PASSWORD', '***' );
	define( 'DB_HOST', 'localhost' );
	define( 'DB_NAME', 'wp_[project_name]' );
	define( 'FORCE_SSL_ADMIN', true );
}

function is_env() {
	switch ( $_SERVER['HTTP_HOST'] ) {
		case 'cs-wp-starter.local':
			$env = 'local';
			break;
		case 'staging.codestars.nl':
			$env = 'staging';
			break;
		default:
			$env = 'production';
	}

	return $env;
}

/**
 * Setup local SMTP.
 */
define( 'SMTP_USER', '***' );
define( 'SMTP_PASS', '***' );
define( 'SMTP_HOST', 'smtp.gmail.com' );
define( 'SMTP_FROM', '***@gmail.com' );
define( 'SMTP_NAME', 'localhost SMTP' );
define( 'SMTP_PORT', '587' );
define( 'SMTP_SECURE', 'tls' );
define( 'SMTP_AUTH', true );
define( 'SMTP_DEBUG', 1 );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY', 'put your unique phrase here' );
define( 'SECURE_AUTH_KEY', 'put your unique phrase here' );
define( 'LOGGED_IN_KEY', 'put your unique phrase here' );
define( 'NONCE_KEY', 'put your unique phrase here' );
define( 'AUTH_SALT', 'put your unique phrase here' );
define( 'SECURE_AUTH_SALT', 'put your unique phrase here' );
define( 'LOGGED_IN_SALT', 'put your unique phrase here' );
define( 'NONCE_SALT', 'put your unique phrase here' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_starter_';

/**
 * Set custom paths.
 */
define( 'WP_CONTENT_DIR', dirname( __FILE__ ) . '/content' );

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', is_env() !== 'production' );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );