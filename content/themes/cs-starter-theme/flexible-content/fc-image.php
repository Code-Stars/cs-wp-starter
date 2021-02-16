<?php
/**
 * Flexible content block - Image.
 *
 * @author Floris Weijenburg.
 */
$image_id        = get_sub_field( 'fc_image_image', get_the_ID() );
$title           = get_sub_field( 'fc_image_title', get_the_ID() );
$image_alt       = get_post_meta( $image_id, '_wp_attachment_image_alt', true );
$image_title     = $image_alt;
$image_thumb_src = wp_get_attachment_image_src( $image_id, 'thumbnail' )[0];
$image_srcset    = wp_get_attachment_image_srcset( $image_id, 'original' );

?>
<section class="fc-region fc-region--padding content-wrapper content-wrapper--large">

    <figure class="fc-image__figure trailer-xs-x2">

        <img class="fc-image__img" src="<?php echo $image_thumb_src; ?>"
             title="<?php echo $image_title; ?>"
             srcset="<?php echo $image_srcset; ?>" alt="<?php echo $image_alt; ?>"/>

        <figcaption class="fc-image__title center">
            <?php echo $title; ?>
        </figcaption>

    </figure>

</section>