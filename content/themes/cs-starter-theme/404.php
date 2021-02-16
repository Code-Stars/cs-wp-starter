<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package cs_starter_theme
 */

global $wp;

// redirect the 404 page of /wordpress to /.
if ( $wp->request === 'wordpress' ) {
	wp_redirect( '/' );
	exit();
}

get_header(); ?>

    <div id="primary" class="content-area content-min-height">
        <main id="main" class="site-main">

            <div class="content-wrapper leader-inside--double">

                <header class="page-header gutters trailer leader--double">
                    <h1 class="title-h2"><?php _e( 'Page not found' ); ?></h1>
                </header>

                <div class="page-content gutters trailer--double">
                    <p>
						<?php
						$link = '<a href="' . get_site_root() . '">' . __( 'here', 'cs-starter-theme' ) . '</a>';
						printf( esc_html__( 'Deze pagina kon niet worden gevonden. Klik %1$s om terug te gaan naar de home.', 'cs-starter-theme' ), $link ); ?>
                    </p>
                </div>
            </div>

        </main>
    </div>

<?php

get_footer();
