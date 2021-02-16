<?php
/**
 * Flexible content block - Slider.
 *
 * @author Floris Weijenburg.
 */
$slider_title  = get_sub_field( 'fc_slider_title', get_the_ID() );
$slider_images = get_sub_field( 'fc_slider_gallery', get_the_ID() );

if ( $slider_images ): ?>

    <section class="fc-region fc-region--padding leader-xs content-wrapper content-wrapper--large trailer-xs-x2">

        <div class="fc-slider">
            <?php if ( ! empty( $slider_title ) ) : ?>
                <div class="trailer-xs gutters-xs">
                    <h2 class="title-h3"><?php echo $slider_title; ?></h2>
                </div>
            <?php endif; ?>

            <ul id="slick-slider" class="fc-slider">
                <?php foreach ( $slider_images as $i => $image ):
                    $image_srcset = wp_get_attachment_image_srcset( $image['id'], 'large' ); ?>
                    <li>
                        <a data-cs-dialog="image" data-image-url="<?php echo $image['sizes']['large']; ?>" href="javascript:;">
                            <div class="slider__item" style="background-image: url('<?php echo $image['sizes']['large']; ?>');">
                                <img src="<?php echo $image['sizes']['medium_large']; ?>"
                                     srcset="<?php echo $image_srcset; ?>" alt=""/>
                            </div>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>

    </section>

<?php endif; ?>