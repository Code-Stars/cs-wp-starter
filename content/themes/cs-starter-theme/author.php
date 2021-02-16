<?php
/**
 * The template for displaying Author archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package cs_starter_theme
 */
get_header(); ?>

    <div id="primary" class="content-area content-spacing content-wrapper gutters trailer--double">

        <main id="main" class="site-main">

			<?php if ( have_posts() ) : the_post(); ?>

				<header class="archive-header trailer">
					<h1 class="title-h1 trailer--half">
						<?php printf( __( 'All posts by %s', 'wp_cs_starter' ), get_the_author() ); ?>
					</h1>

					<?php if ( get_the_author_meta( 'description' ) ) : ?>
						<div class="author-description"><?php the_author_meta( 'description' ); ?></div>
					<?php endif; ?>
				</header>

				<?php
				/*
				 * Since we called the_post() above, we need to rewind
				 * the loop back to the beginning that way we can run
				 * the loop properly, in full.
				 */
				rewind_posts();

				while ( have_posts() ) : the_post();
					get_template_part( 'template-parts/post/content', get_post_format() );
				endwhile;

				// Previous/next page navigation.
				// twentyfourteen_paging_nav();
			else :
				get_template_part( 'content', 'none' );
			endif; ?>
		</main>
	</div>

<?php get_footer();