<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package cs_starter_theme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('media content-wrapper content-wrapper--large row'); ?>>

    <header class="post__header col-xs-12">

        <div class="trailer">
            <i class="icon fas fa-less-than"></i> <a href="<?php echo get_permalink(get_page_by_path('cases')->ID); ?>">Terug</a>
        </div>

        <div class="trailer">
            <?php the_title( '<h1 class="title title--page">', '</h1>' ); ?>
        </div>

    </header>

    <div class="col-xs-12 col-md-8">

        <div class="trailer">
            <?php the_content( sprintf(
                wp_kses(
                    __( 'Continue reading', 'cs-starter-theme' ),
                    array(
                        'span' => array(
                            'class' => array(),
                        ),
                    )
                )
            ) );

            wp_link_pages( array(
                'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'cs-starter-theme' ),
                'after'  => '</div>',
            ) );
            ?>
        </div>
    </div>

    <aside class="col-xs-12 col-md-4">

        <a class="figure__link trailer" data-cs-dialog="image" data-cs-title="<?php echo get_the_title(); ?>" data-cs-image-url="<?php echo get_the_post_thumbnail_url(null, 'original'); ?>" href="javascript:;">
            <figure class="figure">
                <?php the_post_thumbnail( 'original' ); ?>
            </figure>
        </a>

        <footer class="post__footer">
	        <?php
            // show categories list
	        $categories = cs_get_categories( get_the_ID(), 'case' );

	        if ( $categories > 0 ) : ?>

                <div class="trailer">
                    <h4><?php _e('Categories') ?>:</h4>
                    <?php echo cs_get_tag_list_links( $categories ); ?>
                </div>

	        <?php endif; ?>

	        <?php
            // show tags list
	        $tags = get_the_tags( get_the_ID() );

	        if ( $tags > 0 ) : ?>
                <div class="trailer">
                    <h4><?php _e( 'Tags' ) ?>:</h4>
			        <?php echo cs_get_tag_list_links( $tags ); ?>
                </div>
	        <?php endif; ?>
        </footer>

    </aside>

</article><!-- #post-<?php the_ID(); ?> -->
