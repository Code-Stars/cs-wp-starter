<?php
/**
 * Flexible content block - Text Image.
 *
 * @author Floris Weijenburg.
 */
$title      = get_sub_field( 'fc_text_image_title' );
$content    = get_sub_field( 'fc_text_image_text' );
$visual_src = get_sub_field( 'fc_text_image_visual' );
?>

<section class="fc-region fc-region--padding content-wrapper content-wrapper--large">

    <div class="leader-inside trailer--double">

        <div class="fc-text-image row no-gap">

            <div class="col-xs-12 col-md-6 start-md">

                <div class="fc-text-image__overlay" style="background-image: url('<?php echo $visual_src; ?>');">
                    <div class="gutters">
                        <h2 class="fc-text-image__title">
							<?php echo $title; ?>
                        </h2>
                    </div>
                </div>

                <div class="fc-text-image__text gutters trailer">
					<?php echo apply_filters( 'the_content', $content ); ?>
                </div>

            </div>

            <div class="col-xs-12 col-md-6 start-xs">

                <figure class="fc-text-image__thumb" style="background-image: url('<?php echo $visual_src; ?>');">
                    <img class="is-hidden" src="<?php echo $visual_src; ?>" alt="<?php echo $title; ?>"/>
                </figure>

            </div>
        </div>
    </div>

</section>
