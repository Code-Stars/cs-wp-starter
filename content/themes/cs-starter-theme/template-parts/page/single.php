<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package cs_starter_theme
 */

?>

<article class="page" id="page-<?php the_ID(); ?>" <?php post_class(); ?>>

    <div class="content-wrapper content-wrapper--large content-wrapper--bg">

        <header class="page__header trailer gutters-xs">
            <h1 class="title-h1"><?php echo get_the_title(); ?></h1>
        </header>

        <div class="page__content trailer gutters-xs">
			<?php echo apply_filters( 'the_content', get_the_content() ); ?>
        </div>
    </div>

	<?php if ( have_rows( 'flexible_content' ) ): ?>
        <div class="page__fc">
			<?php while ( have_rows( 'flexible_content' ) ) : the_row();
				load_flexible_content( get_row_layout() );
			endwhile; ?>
        </div>
	<?php endif; ?>

	<?php wp_link_pages( array(
		'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'cs-starter-theme' ),
		'after'  => '</div>',
	) ); ?>

</article><!-- #page-<?php the_ID(); ?> -->
