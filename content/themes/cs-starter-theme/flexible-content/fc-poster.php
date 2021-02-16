<?php
/**
 * Flexible content block - Poster.
 *
 * @author Floris Weijenburg.
 */
$poster_title     = get_sub_field( 'fc_poster_title' );
$poster_image_src = get_sub_field( 'fc_poster_image' ); ?>

<?php if ( ! empty( $poster_image_src ) ) : ?>
    <section class="fc-region">
        <figure class="fc-poster" style="background-image: url('<?php echo $poster_image_src; ?>');">
            <img class="is-hidden" src="<?php echo $poster_image_src; ?>" alt="<?php the_title(); ?>"/>

			<?php if ( ! empty( $poster_title ) ) : ?>
                <figcaption class="fc-poster__figcaption"><?php echo $poster_title; ?></figcaption>
			<?php endif; ?>
        </figure>
    </section>
<?php endif; ?>
