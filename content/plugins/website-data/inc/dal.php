<?php
// Use 'cs_' as prefix for the functions in this file
// to assure unique function names.

/**
 * Returns a list of post types.
 *
 * @return array
 */
function cs_get_post_types() {

	$types = get_post_types();

	return $types;
}

/**
 * Get all cases.
 *
 * @param int $limit
 *
 * @return int[]|WP_Post[]
 */
function cs_get_cases( $limit = - 1 ) {

	$args = array(
		'post_type'      => 'case',
		'posts_per_page' => $limit,
	);

	$posts = get_posts( $args );

	return $posts;
}

/**
 * Get all cases loop.
 *
 * @param int $limit
 *
 * @return WP_Query
 */
function cs_get_cases_loop( $limit = - 1 ) {

	$args = array(
		'post_type'      => 'case',
		'posts_per_page' => $limit
	);

	$loop = new WP_Query( $args );

	return $loop;
}

/**
 * Get all products in a category.
 *
 * @param string $cat_slug
 *
 * @return WP_Query
 */
function cs_get_products_in_category( $cat_slug ) {

	$args = array(
		'post_type'      => 'product',
		'posts_per_page' => 999,
		'order'          => 'ASC',
		'tax_query'      => array(
			array(
				'taxonomy' => 'product_categories',
				'field'    => 'slug',
				'terms'    => $cat_slug
			)
		)
	);

	return new WP_Query( $args );
}

/**
 * Get sub categories of a category.
 *
 * @param int $cat_id
 *
 * @return array|WP_Error
 */
function cs_get_sub_categories( $cat_id ) {
	return get_term_children( $cat_id, 'product_categories' );
}

/**
 * Get categories for a post.
 *
 * @param int|boolean $post_id
 * @param string $post_type
 *
 * @return array
 */
function cs_get_categories( $post_id = false, $post_type ) {

	if ( $post_id === false ) {
		$terms = get_terms( $post_type . '_categories' );
	} else {
		$terms = get_the_terms( $post_id, $post_type . '_categories' );
	}

	if ( ! is_array( $terms ) ) {
		return [];
	}

	return $terms;
}

/**
 * Get excerpt text limited by words.
 *
 * @param null $post
 * @param int $limit
 *
 * @return string
 */
function cs_get_excerpt_limited( $post = null, $limit = 99999 ) {

	$excerpt = explode( ' ', get_the_excerpt( $post ), $limit );

	if ( count( $excerpt ) >= $limit ) {
		array_pop( $excerpt );
		$excerpt = implode( " ", $excerpt ) . '...';
	} else {
		$excerpt = implode( " ", $excerpt );
	}

	return preg_replace( '`\[[^\]]*\]`', '', $excerpt );
}
