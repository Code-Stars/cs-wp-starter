<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package cs_starter_theme
 */

get_header(); ?>

    <div id="primary" class="content-area  content-spacing content-wrapper content-wrapper--large gutters-xs trailer-xs-x2">

        <main id="main" class="site-main ">

			<?php if ( have_posts() ) :

				while ( have_posts() ) : the_post();
					get_theme_template_part( 'template-parts/' . get_post_type() . '/content', get_post_type() );
				endwhile;

			else:
				get_template_part( 'template-parts/content', 'none' );
			endif; ?>

        </main>
    </div>

<?php get_footer();
