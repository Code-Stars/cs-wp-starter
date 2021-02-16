<?php

global $category;

// get data
$category  = ! empty( $category ) ? $category : get_category( get_query_var( 'cat' ) );
$cat_id    = $category->term_id;
$image_id  = get_term_meta( $cat_id, 'category-image-id', true );
$image_src = wp_get_attachment_image_src( $image_id, 'large' )[0];
?>

<a href="<?php echo get_term_link( $category ); ?>" class="window__col-sm-4 col-xs-6 col-sm-4">
    <div class="window" style="background-image: url('<?php echo $image_src; ?>');">
        <h2 class="window__title">
			<?php echo $category->name; ?>

            <span class="window__counter">
                (<?php echo $category->count; ?>)
            </span>
        </h2>
    </div>
</a>
