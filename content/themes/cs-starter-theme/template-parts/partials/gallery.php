<?php
// get field data
$gallery_post_id = get_query_var( 'gallery_post_id' );
$gallery_title   = get_field( 'photo_gallery_title', $gallery_post_id );

if ( have_rows( 'photo_gallery_images' ) ): ?>

	<?php if ( ! empty( $gallery_title ) ) : ?>
        <div class="trailer">
            <h2 class="title-h2"><?php echo $gallery_title; ?></h2>
        </div>
	<?php endif; ?>

    <ul class="gallery trailer row">

		<?php while ( have_rows( 'photo_gallery_images' ) ) : the_row();

			// get sub field data
			$title         = get_sub_field( 'photo_gallery_images_title' );
			$attachment_id = get_sub_field( 'photo_gallery_images_image' );

			$thumbnail_src = wp_get_attachment_image_src( $attachment_id, 'thumbnail' )[0];
			$original_src  = wp_get_attachment_image_src( $attachment_id, 'original' )[0];
			$image_srcset  = wp_get_attachment_image_srcset( $attachment_id ); ?>

            <li class="gallery__item col-xs-12 col-sm-4 col-md-3 trailer-outside">
                <a data-cs-dialog="image" data-title="<?php echo $title; ?>"
                   data-image-url="<?php echo $original_src; ?>"
                   href="javascript:;">

                    <figure class="gallery__image set-srcset"
                            style="background-image: url('<?php echo $thumbnail_src; ?>');"
                            data-bg-srcset="<?php echo $image_srcset; ?>">

                        <img class="is-hidden" src="<?php echo $thumbnail_src; ?>" alt="<?php echo $title; ?>"/>

                        <?php if ( ! empty( $title ) ) : ?>
                            <figcaption class="gallery__figcaption"><?php echo $title; ?></figcaption>
						<?php endif; ?>
                    </figure>
                </a>
            </li>
		<?php endwhile; ?>
    </ul>

<?php else :

	// no rows found

endif;