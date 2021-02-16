<?php
/**
 * Website block - (Google) Maps.
 *
 * @author Floris Weijenburg.
 */
$address = get_field( 'wb_maps_address' );
$zoom    = get_field( 'wb_maps_zoom' ); ?>

<section class="trailer--double">
	<?php if ( ! empty( $address ) ) : ?>
        <div class="wb-maps">
            <iframe class="wb-maps__frame"
                    src="https://maps.google.com/maps?f=q&source=s_q&hl=nl&geocode=&q=<?php echo str_replace( ",", "", str_replace( " ", "+", $address ) ); ?>&z=<?php echo $zoom; ?>&output=embed"
                    width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
	<?php else: ?>
        <p>
			<?php _e( 'Please insert an address.' ); ?>
        </p>
	<?php endif; ?>
</section>
