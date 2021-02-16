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

    <div id="primary" class="content-area content-spacing">
        <main id="main" class="content__container">

            <?php if ( have_posts() ) :

                while ( have_posts() ) : the_post();
                    get_theme_template_part( 'template-parts/' . get_post_type() . '/single', get_post_type() );

                    // If comments are open or we have at least one comment, load up the comment template.
                    if ( comments_open() || get_comments_number() ) :
                        comments_template();
                    endif;

                endwhile;

	           else : ?>

	            <?php get_template_part( 'template-parts/' . get_post_type() . '/content', 'none' ); ?>

            <?php endif; ?>

        </main>
    </div>

<?php get_footer();
