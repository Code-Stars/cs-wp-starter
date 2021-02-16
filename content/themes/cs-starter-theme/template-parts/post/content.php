<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package cs_starter_theme
 */

?>

<article class="row trailer" id="post-<?php the_ID(); ?>" <?php post_class('media'); ?>>

    <div class="col-xs-12 col-md-8">

        <header class="entry-header media__header">
            <?php the_title( '<h2 class="title-h2 post__title trailer--half"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );

            if ( 'post' === get_post_type() ) : ?>
                <div class="media__meta trailer--half">
                    <?php cs_posted_on(); ?>
                </div>
            <?php endif; ?>
        </header>

        <div class="post__content trailer--half">
            <?php echo get_the_excerpt(); ?>

            <?php wp_link_pages( array(
                'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'cs-starter-theme' ),
                'after'  => '</div>',
            ) );
            ?>
        </div>
    </div>

    <aside class="col-xs-12 col-md-4">

        <a class="figure__link trailer--half" href="<?php echo esc_url( get_permalink() ); ?>" rel="bookmark">
            <figure class="figure figure--cover">
                <?php the_post_thumbnail( 'large' ); ?>
            </figure>
        </a>

        <footer class="post__footer trailer">
            <?php cs_entry_footer(); ?>
        </footer>

    </aside>

</article><!-- #post-<?php the_ID(); ?> -->
