<?php
/**
 * Flexible content block - Header Columns.
 *
 * @author Floris Weijenburg.
 */
$title      = get_sub_field( 'fc_header_columns_title' );
$text       = get_sub_field( 'fc_header_columns_text' );
$visual_src = get_sub_field( 'fc_header_columns_visual' );
?>

<header class="fc-header-columns" style="background-image: url('<?php echo $visual_src; ?>');">

    <div class="content-wrapper content-wrapper--large">
        <div class="row">
            <div class="col-xs-12 col-sm-6">

                <div class="trailer-xs">
                    <h2 class="fc-header-columns__title">
						<?php echo $title; ?>
                    </h2>
                </div>

                <p class="fc-header-columns__text">
					<?php echo $text; ?>
                </p>
            </div>
        </div>
    </div>

	<?php if ( have_rows( 'fc_header_columns_column' ) ): ?>
        <div class="fc-header-columns__container">
            <div class="content-wrapper content-wrapper--large">
                <div class="row">
					<?php
					$index = 1;
					while ( have_rows( 'fc_header_columns_column' ) ) : the_row();
						$title = get_sub_field( 'fc_header_columns_column_title' );
						$text  = get_sub_field( 'fc_header_columns_column_text' );
						$link  = get_sub_field( 'fc_header_columns_column_link' );
						?>
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="fc-header-columns-box fc-header-columns-box--theme-<?php echo $index; ?>">
                                <div class="fc-header-columns-box__inner">
                                    <h3 class="fc-header-columns-box__title trailer-xs">
										<?php echo $title; ?>
                                    </h3>

                                    <p class="fc-header-columns-box__text trailer-xs-x2">
										<?php echo $text; ?>
                                    </p>

                                    <div class="fc-header-columns-box__footer">
                                        <a class="fc-header-columns-box__button" href="<?php echo $link; ?>">
                                            lees verder
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
						<?php $index ++;
					endwhile; ?>
                </div>
            </div>
        </div>
	<?php endif; ?>
</header>