<?php
/**
 * Flexible content block - Logos.
 *
 * @author Floris Weijenburg.
 */
global $post;

$title  = get_sub_field( 'fc_logos_title' );
$images = get_sub_field( 'fc_logos_logos' );
$size   = 'large';
?>

<?php if ( $images ): ?>
    <section class="fc-region fc-region--padding content-wrapper content-wrapper--large">

        <div class="fc-logos">

			<?php if ( ! empty( $title ) ) : ?>
                <div class="row trailer-xs gutters-xs">
                    <div class="col-xs-12">
                        <h3 class="fc-logos__title title-h3"><?php echo $title; ?></h3>
                    </div>
                </div>
			<?php endif; ?>

			<?php if ( ! empty( $images ) ) : ?>
                <div class="row gutters-xs">
					<?php foreach ( $images as $image_id ) : ?>
                        <div class="col-xs-6 col-sm-3 col-md-2">
                            <div class="fc-logos__logo is-relative">
                                <a class="fc-logos__logo-inner" href="javascript:;">
									<?php $image_src = wp_get_attachment_image_src( $image_id, 'original' )[0]; ?>
                                    <figure class="fc-logos__visual">
                                        <img src="<?php echo $image_src; ?>"
                                             alt="Logo"/>
                                    </figure>
                                </a>
                            </div>
                        </div>
					<?php endforeach; ?>
                </div>
			<?php endif; ?>
        </div>

    </section>
<?php endif; ?>