<?php
/**
 * Flexible content block - Title Text CTA.
 *
 * @author Floris Weijenburg.
 */
?>
<section class="fc-region fc-region--padding content-wrapper content-wrapper--large">

    <div class="fc-title-text-cta row">
		<?php
		$columns      = (array) get_sub_field( 'fc_title_text_cta_columns' );
		$column_count = count( $columns );

		if ( have_rows( 'fc_title_text_cta_columns' ) ):

			while ( have_rows( 'fc_title_text_cta_columns' ) ) : the_row();

				$group = get_sub_field( 'fc_title_text_cta_group' );
				$text  = get_sub_field( 'fc_title_text_cta_columns_text' );
				?>
                <div class="<?php echo theme_get_column_class( $column_count ); ?> leader-inside trailer-outside fc-title-text-cta--<?php echo $column_count; ?>-columns">

					<?php if ( ! empty( $group['fc_title_text_cta_columns_title'] ) ) : ?>
                        <div class="trailer gutters-xs">
                            <h3 class="fc-title-text-cta__title title-h3"><?php echo $group['fc_title_text_cta_columns_title']; ?></h3>
                        </div>
					<?php endif; ?>

                    <div class="fc-title-text-cta__text trailer-xs gutters-xs">
						<?php echo $text; ?>
                    </div>

					<?php if ( ! empty( $group['fc_title_text_cta_columns_label'] ) && ! empty( $group['fc_title_text_cta_columns_link']['url'] ) ) : ?>
                        <div class="fc-title-text-cta__cta trailer-xs gutters-xs">
                            <a class="button button--full button--center"
                               href="<?php echo $group['fc_title_text_cta_columns_link']['url']; ?>"><?php echo $group['fc_title_text_cta_columns_label']; ?></a>
                        </div>
					<?php endif; ?>

                </div>

			<?php endwhile; ?>

		<?php endif; ?>
    </div>
</section>
