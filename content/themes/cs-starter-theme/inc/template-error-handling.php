<?php

/**
 * Only use this error handler when it is enabled.
 */
if ( ! defined( 'ERROR_HANDLING' ) || ERROR_HANDLING !== true ) {
	return;
}

/**
 * Show all errors for local and staging environments.
 */
if ( is_env() !== 'production' ) {
	ini_set( 'display_errors', 1 );
	ini_set( 'display_startup_errors', 1 );
	error_reporting( E_ALL );
}

/**
 * Let's ignore errors that are triggered by cron jobs.
 */
if ( isset( $_SERVER ) && $_SERVER['SCRIPT_NAME'] === '/wordpress/wp-cron.php' ) {
	return false;
}

/**
 * Email errors on live environment to the developer e-mail.
 *
 * @param string $error_number
 * @param string $error_string
 * @param string $error_file
 * @param string $error_line
 *
 * @return bool
 */
function custom_error_handler( $error_number, $error_string, $error_file, $error_line ) {

	// Let's ignore errors that are in the plugins dir.
	if ( strpos( $error_file, 'content/plugins/' ) !== false ) {
		return false;
	}

	// Let's ignore error that are in the wordpress admin dir.
	if ( strpos( $error_file, '/wordpress/wp-admin/' ) !== false ) {
		return false;
	}

	$error_message = 'Error message: ' . $error_number . ' - ' . $error_string . '<br />';
	$error_message .= ' on line' . $error_line . ' in file ' . $error_file;

	if ( ! empty( $error_string ) && is_env() === 'production' ) {
		wp_mail( ERROR_HANDLING_EMAIL, 'Wordpress error', $error_message );
	}

	return false;
}

set_error_handler( 'custom_error_handler' );

/**
 * Email shutdown errors on live environment to the developer e-mail.
 */
function custom_wp_shutdown_error_handler() {

	$error       = error_get_last();
	$protocol    = ( ( ! empty( $_SERVER['HTTPS'] ) && $_SERVER['HTTPS'] != 'off' ) || $_SERVER['SERVER_PORT'] == 443 ) ? "https://" : "http://";
	$current_url = $protocol . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

	if ( ( $error['type'] === E_ERROR ) || ( $error['type'] === E_USER_ERROR ) ||
	     ( $error['type'] === E_USER_NOTICE ) || $error['type'] === E_PARSE
	) {

		$error_message = "Error message on shutdown: " . $error['message'] .
		                 " in file " . $error['file'] . " on line " . $error['line'] . " at URL: " . $current_url;

		if ( is_env() === 'production' ) {
			wp_mail( ERROR_HANDLING_EMAIL, 'Wordpress error', $error_message );
		}
	}
}

register_shutdown_function( 'custom_wp_shutdown_error_handler' );
