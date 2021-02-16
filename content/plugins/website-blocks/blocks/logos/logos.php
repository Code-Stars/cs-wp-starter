<?php
/**
 * Website block - Logos.
 *
 * @author Floris Weijenburg.
 */
global $post;

$title  = get_field( 'wb_logos_title' );
$images = get_field( 'wb_logos_logos' );
$size   = 'large';
?>

<section class="wb-logos">
	<?php if ( $images ): ?>

		<?php if ( ! empty( $title ) ) : ?>
            <div class="trailer">
                <h3 class="wb-logos__title title-h3"><?php echo $title; ?></h3>
            </div>
		<?php endif; ?>

        <div class="row">
			<?php foreach ( $images as $image_id ) : ?>
                <div class="col-xs-6 col-sm-3 col-md-2">
                    <div class="wb-logos__logo">
                        <a class="wb-logos__logo-inner" href="javascript:;">
							<?php $image_src = wp_get_attachment_image_src( $image_id, 'original' )[0]; ?>
                            <figure class="wb-logos__visual">
                                <img src="<?php echo $image_src; ?>"
                                     alt="Logo"/>
                            </figure>
                        </a>
                    </div>
                </div>
			<?php endforeach; ?>
        </div>
	<?php else: ?>
        <p>
			<?php _e( 'Please insert some logos.' ); ?>
        </p>
	<?php endif; ?>
</section>
