<?php
/*
 * Template Name: Categories Cases
 */

global $post;
$cases_categories = cs_get_categories(false, 'case');

get_header(); ?>

	<div id="primary" class="content-area content-spacing content-wrapper content-wrapper--large page">
		<main id="main" class="site-main">

			<header class="page__header trailer">
				<h1 class="title-h1"><?php echo $post->post_title; ?></h1>
			</header>

			<div class="page__content trailer">
				<?php echo apply_filters( 'the_content', $post->post_content ); ?>
			</div>

			<ul class="tile row bleed--half" <?php post_class(); ?>>

				<?php foreach ( $cases_categories as $category) :
					setup_postdata($category);
					get_theme_template_part( 'template-parts/partials/windows', get_post_type() );
				endforeach; ?>

			</ul><!-- #post-<?php the_ID(); ?> -->

		</main>
	</div>

<?php get_footer();
