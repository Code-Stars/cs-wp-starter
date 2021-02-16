<?php

/**
 * Change failed login URL to custom path.
 *
 * @return bool|null
 */
function change_login_fail_url_to_custom_path() {

	if ( ! empty( $_POST ) ) {
		wp_safe_redirect( home_url() . '/cms?login=failed' );
		exit;
	}

	return null;
}

add_action( 'wp_login_failed', 'change_login_fail_url_to_custom_path', 1, 1 );