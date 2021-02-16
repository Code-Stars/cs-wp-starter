<?php
/**
 * Flexible content block - Parallax.
 *
 * @author Floris Weijenburg.
 */
$image_src = get_sub_field( 'fc_parallax_image', get_the_ID() );
?>

<section class="fc-region fc-parallax parallax-window" data-parallax="scroll" data-image-src="<?php echo $image_src; ?>">
    <img class="is-hidden" src="<?php echo $image_src; ?>" alt="Parallax image"/>
</section>