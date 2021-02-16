<?php

/**
 * Register custom post types.
 */
function create_posttypes() {

	register_post_type( 'case',
		array(
			'hierarchical' => true, // needs to be true for parent selecting
			'labels'       => array(
				'name'          => __( 'Cases' ),
				'singular_name' => __( 'Case' )
			),
			'taxonomies'   => array( 'category', 'post_tag' ),
			'public'       => true,
			'has_archive'  => false, // so that 'cases' itself can be a page
			'rewrite'      => array(
				'slug'       => 'cases',
				'with_front' => true, // important for the slug to work when fetching the post object
			),
			'supports'     => array(
				'page-attributes', // make a parent select box
				'title',
				'editor',
				'excerpt',
				'thumbnail',
				'revisions'
			)
		)
	);

	// Enable excerpts for pages and events.
	add_post_type_support( 'page', 'excerpt' );
}

add_action( 'init', 'create_posttypes' );
