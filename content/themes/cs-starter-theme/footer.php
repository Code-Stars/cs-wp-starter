<?php
/**
 * The footer for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package cs_starter_theme
 */

// get data
$copyright_text            = get_field( 'copyright_text', 'options' );
$footer_logo_attachment_id = get_field( 'footer_logo', 'options' );
$footer_logo_src           = wp_get_attachment_image_src( $footer_logo_attachment_id, 'medium' )[0];
?>

</div><!-- #content -->

<footer id="main-footer" class="main-footer leader-sm-x2" role="contentinfo">

    <div class="content-wrapper content-wrapper--large">

        <div class="row top-sm">

            <div class="col-xs-12 col-sm-2">
                <a href="<?php echo get_site_root(); ?>" class="trailer--double">
                    <img class="main-footer__logo trailer"
                         src="<?php echo $footer_logo_src; ?>"
                         alt="Footer logo"/>
                </a>
            </div>

            <div class="col-xs-12 col-sm-10 end-sm">
				<?php if ( has_nav_menu( 'footer-menu-1' ) ) : ?>
					<?php wp_nav_menu( array(
						'menu'           => 'footer-menu',
						'theme_location' => 'footer',
						'menu_class'     => 'footer-menu',
						'depth'          => 0,
						'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
					) );
				endif; ?>
            </div>
        </div>
    </div>

</footer>

<?php if ( ! empty( $copyright_text ) ) : ?>
    <div id="main-copyright" class="content-wrapper content-wrapper--large trailer-xs-x0-5">
        <div class="row">
            <div class="col-xs-12 center-xs leader-xs">
				<?php echo $copyright_text; ?>
            </div>
        </div>
    </div>
<?php endif; ?>

<?php // Social media icons ?>
<div class="content-wrapper content-wrapper--large">
    <div id="row social-media-icons">
        <div class="col-xs-12 center-xs">
			<?php get_template_part( 'template-parts/partials/social-media', 'icons' ); ?>
        </div>
    </div>
</div>

<?php // Flexible footer content start ?>
<?php if ( have_rows( 'flexible_content' ) ):
	while ( have_rows( 'flexible_content' ) ) : the_row();
		load_flexible_content( get_row_layout(), 'footer' );
	endwhile; ?>
<?php endif; ?>

</div><!-- .site-content-contain -->
</div><!-- #page -->

<?php wp_footer(); ?>

<?php // Cookie bar ?>
<div id="main-cookie-bar">
	<?php get_template_part( 'template-parts/partials/cookie-bar' ); ?>
</div>

<?php // Tracking scripts ?>
<div id="tracking-scripts">
	<?php get_template_part( 'template-parts/partials/tracking-scripts' ); ?>
</div>

</body>
</html>
