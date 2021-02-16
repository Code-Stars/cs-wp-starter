<?php get_header(); ?>

<div id="primary" class="content-area content-spacing content-wrapper content-wrapper--large page">
    <main id="main" class="site-main">

        <div class="trailer--double">
            <i class="icon fas fa-less-than"></i> <a href="<?php echo get_permalink(get_page_by_path('cases')->ID); ?>">Terug</a>
        </div>

        <ul class="tile row" <?php post_class(); ?>>
            <?php while ( have_posts() ) : the_post();
                get_theme_template_part( 'template-parts/' . get_post_type() . '/content', get_post_type() );
            endwhile; ?>
        </ul>

        <!-- Flexible Content Start -->
        <?php if ( have_rows( 'flexible_content' ) ):
            while ( have_rows( 'flexible_content' ) ) : the_row();
                load_flexible_content( get_row_layout() );
            endwhile; ?>
        <?php endif; ?>
        <!-- Flexible Content End -->

    </main><!-- #main -->
</div><!-- #primary -->

<?php get_footer();
