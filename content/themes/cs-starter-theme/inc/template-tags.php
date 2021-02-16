<?php
/**
 * Custom template tags for this theme
 *
 * @package cs_starter_theme
 */

/**
 * Prints HTML with meta information for
 * the current post-date/time and author.
 */
function cs_posted_on() {
	$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';

	if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
		$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time>';
	}

	$time_string = sprintf( $time_string,
		esc_attr( get_the_date( 'c' ) ),
		esc_html( get_the_date() )
	);

	$posted_on = sprintf(
		esc_html_x( 'Posted on: %s', 'post date', 'cs-starter-theme' ),
		'<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
	);

	$byline = sprintf(
		esc_html_x( 'by %s', 'post author', 'cs-starter-theme' ),
		'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
	);

	echo '<span class="posted-on">' . $posted_on . '</span><span class="byline"> ' . $byline . '</span>';
}

/**
 * Prints HTML with meta information for the categories,
 * tags and comments.
 */
function cs_entry_footer() {

	if ( 'post' === get_post_type() ) {
		// Hide category and tag text for pages.

		$categories_list = preg_replace( '/<a /', '<a class="badge"', get_the_category_list( ' ' ) );
		if ( $categories_list ) {
			printf( '<div class="cat-links trailer--half">' . esc_html__( 'Posted in: %1$s', 'cs-starter-theme' ) . '</div>', $categories_list );
		}

		$tags_list = preg_replace( '/<a /', '<a class="badge"', get_the_tag_list( '', ' ' ) );
		if ( $tags_list ) {
			printf( '<div class="tag-links trailer--half">' . esc_html__( 'Tagged: %1$s', 'cs-starter-theme' ) . '</div>', $tags_list );
		}
	}
}

/**
 *
 * Get tag list.
 *
 * @param array $items
 *
 * @return string
 */
function cs_get_tag_list( $items ) {

	$html = '';

	foreach ( $items as $category_id ) :
		$category = get_term( $category_id );
		$html     .= '<span class="tag">' . $category->name . '</span>, ';
	endforeach;

	return rtrim( $html, ', ' );
}


/**
 *
 * Get tag list links
 *
 * @param array $items
 * @param string $separator
 *
 * @return string
 */
function cs_get_tag_list_links( $items, $separator = ' ' ) {

	$html = '';

	foreach ( $items as $item_id ) {
		$term = get_term( $item_id );
		$href = get_term_link( $term );
		$html .= '<a class="badge" href="' . $href . '">' . $term->name . '</a>' . $separator;
	}

	if ( empty( $items ) ) {
		$html .= '-';
	}

	return rtrim( $html, ', ' );
}