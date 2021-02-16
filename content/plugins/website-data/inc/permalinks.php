<?php

/**
 * Changes routes of specific page.
 */
function cwd_pages_rewrite_rule() {
	add_rewrite_rule( 'video-test/([-a-z]+)/?$', 'index.php?pagename=video-test&username=$matches[1]', 'top' );

	//flush_rewrite_rules(); // for development
}

//add_action( 'init', 'cwd_pages_rewrite_rule' );

function cwd_query_vars( $query_vars ) {
	$query_vars[] = 'username';

	return $query_vars;
}

//add_filter( 'query_vars', 'cwd_query_vars' );
