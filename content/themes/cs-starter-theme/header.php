<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package cs_starter_theme
 */

// get data
$description = get_bloginfo( 'description', 'display' );

?>
<!doctype html>
<html class="no-js" <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
	<?php wp_head(); ?>
	<?php /*echo get_open_graph( get_stylesheet_directory_uri() . '/assets/images/open-graph.png',
		'[desc]', '[title]' );*/ ?>
    <base href="<?php $base_url = ! empty( getenv( 'BASE_PATH' ) ) ? getenv( 'BASE_PATH' ) : '/';
	echo $base_url; ?>"/>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">

    <header id="main-header" class="main-header">

        <div class="content-wrapper content-wrapper--large">

            <div class="row middle-md">

                <div class="col-xs-6 col-sm-2">
					<?php // main logo ?>
                    <div class="main-logo">
						<?php the_custom_logo(); ?>
                    </div>
                </div>

                <div class="col-xs-6 col-sm-3">
                        <span class="main-header__title gutters">
                            <a href="<?php echo esc_url( home_url( '/' ) ); ?>"
                               rel="home"><?php bloginfo( 'name' ); ?></a>
                        </span>

					<?php if ( ! empty( $description ) ) : ?>
                        <p class="main-header__slogan"><?php echo $description; ?></p>
					<?php endif; ?>
                </div>

                <div class="col-xs-12 col-sm-7">
					<?php get_template_part( 'template-parts/partials/main-menu' ); ?>
                </div>
            </div>
        </div>

    </header>

	<?php // flexible header content starts here
	if ( have_rows( 'flexible_content' ) ):
		while ( have_rows( 'flexible_content' ) ) : the_row();
			load_flexible_content( get_row_layout(), 'header' );
		endwhile; ?>
	<?php endif; ?>

    <div id="content" class="site-content content">
