<?php
/**
 * Flexible content block - Title Text CTA Image.
 *
 * @author Floris Weijenburg.
 */
$title          = get_sub_field( 'fc_title_text_cta_image_title' );
$text           = get_sub_field( 'fc_title_text_cta_image_text' );
$btn_label      = get_sub_field( 'fc_title_text_cta_image_label' );
$btn_link       = get_sub_field( 'fc_title_text_cta_image_link' );
$image_position = get_sub_field( 'fc_title_text_cta_image_position' );

$image_id        = get_sub_field( 'fc_title_text_cta_image_image', get_the_ID() );
$image_alt       = get_post_meta( $image_id, '_wp_attachment_image_alt', true );
$image_thumb_src = wp_get_attachment_image_src( $image_id, 'thumbnail' )[0];
$image_srcset    = wp_get_attachment_image_srcset( $image_id, 'original' );
?>
<section class="fc-region fc-region--padding content-wrapper content-wrapper--large">

    <div class="fc-title-text-cta-image row no-gap <?php echo ( $image_position === 'left' ) ? 'row--reverse ' : ''; ?>">

        <div class="fc-title-text-cta-image__content col-xs-12 col-sm-6 leader-inside trailer--double">
			<?php if ( ! empty( $title ) ) : ?>
                <div class="trailer">
                    <h3 class="fc-title-text-cta-image__title title-h3"><?php echo $title; ?></h3>
                </div>
			<?php endif; ?>

            <div class="fc-title-text-cta-image__text trailer">
				<?php echo $text; ?>
            </div>

			<?php if ( ! empty( $btn_label ) && ! empty( $btn_link['url'] ) ) : ?>
                <div class="fc-title-text-cta-image__cta">
                    <a class="button button--center" style="vertical-align: bottom;"
                       href="<?php echo $btn_link['url']; ?>"><?php echo $btn_label; ?></a>
                </div>
			<?php endif; ?>
        </div>

        <div class="col-xs-12 col-sm-6">
            <figure class="fc-title-text-cta-image__figure">
                <img class="fc-title-text-cta-image__img" src="<?php echo $image_thumb_src; ?>"
                     srcset="<?php echo $image_srcset; ?>" alt="<?php echo $image_alt; ?>"/>
            </figure>
        </div>

    </div>
</section>
