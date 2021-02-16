<?php
/**
 * Flexible content block - Title Text.
 *
 * @author Floris Weijenburg.
 */
?>
<section class="fc-region fc-region--padding content-wrapper content-wrapper--large">

    <div class="fc-title-text row">
		<?php

		$columns        = (array) get_sub_field( 'fc_title_text_columns' );
		$column_count   = count( $columns );
		$column_classes = 'col-xs-12 col-sm-4 col-md-3';

		if ( have_rows( 'fc_title_text_columns' ) ):

			while ( have_rows( 'fc_title_text_columns' ) ) : the_row();

				$title     = get_sub_field( 'fc_title_text_columns_title' );
				$text      = get_sub_field( 'fc_title_text_columns_text' );
				$btn_label = get_sub_field( 'fc_title_text_columns_btn_label' );
				$btn_link  = get_sub_field( 'fc_title_text_columns_btn_link' );

				// different column width based on columns amount
				if ( $column_count === 1 ) {
					$column_classes = 'col-xs-12';
				}

				if ( $column_count === 2 ) {
					$column_classes = 'col-xs-12 col-sm-6';
				}

				if ( $column_count === 3 ) {
					$column_classes = 'col-xs-12 col-sm-4';
				}
				?>

                <div class="<?php echo $column_classes; ?> leader-inside trailer-outside fc-title-text--<?php echo $column_count; ?>-columns">

					<?php if ( ! empty( $title ) ) : ?>
                        <div class="fc-title-text__title trailer-xs gutters-xs">
                            <h3 class="title-h3"><?php echo $title; ?></h3>
                        </div>
					<?php endif; ?>

                    <div class="fc-title-text__text trailer-xs gutters-xs">
						<?php echo $text; ?>
                    </div>

					<?php if ( ! empty( $btn_label ) && ! empty( $btn_link['url'] ) ) : ?>
                        <div class="fc-title-text__cta trailer-xs gutters-xs">
                            <a class="button button--full button--center"
                               href="<?php echo $btn_link['url']; ?>"><?php echo $btn_label; ?></a>
                        </div>
					<?php endif; ?>

                </div>

			<?php endwhile; ?>

		<?php endif; ?>
    </div>
</section>
