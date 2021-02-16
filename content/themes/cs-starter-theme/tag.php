<?php
/**
* The template for displaying Tag pages
*
* Used to display archive-type pages for posts in a tag.
*
* @link https://developer.wordpress.org/themes/basics/template-hierarchy/
*
 * @package cs_starter_theme
*/

get_header(); ?>

    <div id="primary" class="content-area content-spacing content-wrapper">
        <main id="main" class="site-main">

		<?php if ( have_posts() ) : ?>
            <header class="trailer">
                <h1 class="title-h1"><?php printf( __( 'Tag Archives: %s', 'twentytwelve' ), '<span>' . single_tag_title( '', false ) . '</span>' ); ?></h1>

				<?php if ( tag_description() ) : // Show an optional tag description ?>
                    <div class="archive-meta"><?php echo tag_description(); ?></div>
				<?php endif; ?>

            </header>

            <ul class="row">
	            <?php while ( have_posts() ) : the_post();
		            get_theme_template_part( 'template-parts/case/content', get_post_type() );
	            endwhile; ?>
            </ul>

		<?php else : ?>
			<?php get_template_part( 'template-parts/content', 'none' ); ?>
		<?php endif; ?>

    </main><!-- #content -->
</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>