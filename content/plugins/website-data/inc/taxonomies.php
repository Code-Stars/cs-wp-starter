<?php

function register_taxonomies() {
	register_taxonomy(
		'case_categories',
		'case',
		array(
			'hierarchical' => true, /* enables parent taxonomy selection */
			'label'        => __( 'Case Categories' ),
			'rewrite'      => array( 'slug' => __( 'cases/category' ) ),
			'supports'     => array( 'thumbnail' )
		)
	);
}

//add_action( 'after_setup_theme', 'register_taxonomies' );
