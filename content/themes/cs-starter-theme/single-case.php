<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package cs_starter_theme
 */


get_header(); ?>

    <div id="primary" class="content-area content-spacing">
        <main id="main" class="site-main">

			<?php while ( have_posts() ) : the_post();

				get_theme_template_part( 'template-parts/' . get_post_type() . '/single', get_post_type() );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; ?>

        </main>
    </div>

<?php get_footer();
