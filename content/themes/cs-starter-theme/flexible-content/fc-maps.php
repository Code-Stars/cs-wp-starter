<?php
/**
 * Flexible content block - (Google) Maps.
 *
 * @author Floris Weijenburg.
 */
$address = get_sub_field( 'fc_maps_address' );
$zoom    = get_sub_field( 'fc_maps_zoom' );

if ( ! empty( $address ) ) : ?>

    <section class="fc-region">
        <div class="fc-maps">
            <iframe class="fc-maps__frame"
                    src="https://maps.google.com/maps?f=q&source=s_q&hl=nl&geocode=&q=<?php echo str_replace( ",", "", str_replace( " ", "+", $address ) ); ?>&z=<?php echo $zoom; ?>&output=embed"
                    width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
    </section>

<?php endif; ?>