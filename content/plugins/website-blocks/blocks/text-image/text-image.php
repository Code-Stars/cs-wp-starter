<?php
/**
 * Website block - Text Image.
 *
 * @author Floris Weijenburg.
 */
$title           = get_field( 'wb_text_image_title' );
$content         = get_field( 'wb_text_image_text' );
$visual_src      = get_field( 'wb_text_image_visual' );
$reverse_columns = get_field( 'wb_text_image_reverse_columns' );

$wp_class_names = '';
if ( ! empty( $block['className'] ) ) {
	$wp_class_names .= ' ' . $block['className'];
}

if ( ! empty( $block['align'] ) ) {
	$wp_class_names .= ' align' . $block['align'];
} ?>

<section class="trailer--double">

    <div class="wb-text-image <?php echo $wp_class_names; ?> row no-gap <?php echo ( $reverse_columns ) ? 'row--reverse' : ''; ?>">

        <div class="col-xs-12 col-sm-6 start-sm">

            <div class="wb-text-image__overlay" style="background-image: url('<?php echo $visual_src; ?>');">
                <div class="gutters">
                    <h2 class="wb-text-image__title">
						<?php echo $title; ?>
                    </h2>
                </div>
            </div>

            <div class="wb-text-image__text gutters trailer">
				<?php echo apply_filters( 'the_content', $content ); ?>
            </div>

        </div>

        <div class="col-xs-12 col-sm-6 start-xs">

            <figure class="wb-text-image__thumb" style="background-image: url('<?php echo $visual_src; ?>');">
                <img src="<?php echo $visual_src; ?>" alt="<?php echo $title; ?>"/>
            </figure>

        </div>

    </div>

</section>
