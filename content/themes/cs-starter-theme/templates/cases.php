<?php
/*
 * Template Name: Cases
 */

global $post;
$cases = cs_get_cases_loop();

get_header(); ?>

    <div id="primary" class="content-area content-spacing content-wrapper content-wrapper--large page">
        <main id="main" class="site-main">

            <div class="page__content trailer">
                <?php echo apply_filters( 'the_content', $post->post_content ); ?>
            </div>

            <ul class="tile row" <?php post_class(); ?>>

                <?php while ( $cases->have_posts() ) : $cases->the_post();
                    get_theme_template_part( 'template-parts/case/content', get_post_type() );
                endwhile; ?>

            </ul><!-- #post-<?php the_ID(); ?> -->

        </main>
    </div>

<?php get_footer();
