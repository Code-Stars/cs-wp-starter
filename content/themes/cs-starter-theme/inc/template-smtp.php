<?php

/**
 * This function will connect wp_mail to your authenticated
 * SMTP server. This improves reliability of wp_mail, and
 * avoids many potential problems.
 *
 * Values are constants set in wp-config.php
 *
 * @param \PHPMailer\PHPMailer\PHPMailer $phpMailer
 */
function wp_phpmailer_init( \PHPMailer\PHPMailer\PHPMailer $phpMailer ) {
	$phpMailer->Host       = SMTP_HOST;
	$phpMailer->Port       = SMTP_PORT;
	$phpMailer->Username   = SMTP_USER;
	$phpMailer->Password   = SMTP_PASS;
	$phpMailer->SMTPAuth   = SMTP_AUTH;
	$phpMailer->SMTPSecure = SMTP_SECURE;
	$phpMailer->From       = SMTP_FROM;
	$phpMailer->FromName   = SMTP_NAME;
	$phpMailer->IsSMTP();
	$phpMailer->addReplyTo( get_option( 'admin_email' ) );
}

if ( defined( 'SMTP_ENABLED' ) && SMTP_ENABLED === true ) {
	add_action( 'phpmailer_init', 'wp_phpmailer_init' );
}

/**
 * Show e-mail errors on screen to admins.
 *
 * @param $wp_error
 */
function on_mail_error_show_to_admins( $wp_error ) {
	if ( is_admin() ) {
		echo "<pre>";
		print_r( $wp_error );
		echo "</pre>";
		die();
	}
}

add_action( 'wp_mail_failed', 'on_mail_error_show_to_admins', 10, 1 );