<?php
/**
 * Flexible content block - Counters.
 *
 * @author Floris Weijenburg.
 */
$title = get_sub_field( 'fc_counters_main_title' );
?>
<section class="fc-region fc-region--padding content-wrapper content-wrapper--large">

    <div class="fc-counters">

		<?php if ( ! empty( $title ) ) : ?>
            <div class="fc-counters__title trailer-xs-x2 gutters-xs">
                <h2 class="title-h3"><?php echo $title; ?></h2>
            </div>
		<?php endif; ?>

        <div class="row">

			<?php while ( have_rows( 'fc_counters_columns' ) ) : the_row();

				$icon  = get_sub_field( 'fc_counters_icon' );
				$count = get_sub_field( 'fc_counters_count' );
				$title = get_sub_field( 'fc_counters_title' ); ?>

                <div class="col-xs-12 col-sm-6 trailer-xs-x2">
                    <div class="fc-counters__icon">
						<?php if ( ! empty( $icon ) ) : ?>
                            <i class="fas <?php echo $icon; ?>"></i>
						<?php endif; ?>
                    </div>
                    <div class="fc-counters__content">
                        <span data-count="<?php echo $count; ?>" class="fc-counters__count count">
                            0
                        </span>
						<?php if ( ! empty( $title ) ) : ?>
                            <h3 class="fc-counters__title">
								<?php echo $title; ?>
                            </h3>
						<?php endif; ?>
                    </div>
                </div>

			<?php endwhile; ?>
        </div>

        <script>
            var Counters = {

                init: function () {
                    var resizeTimer,
                        self = this;

                    $( '.fc-counters' ).each( function ( index, container ) {
                        self.countUpWhenInScreen( container );

                        jQuery( window ).on( 'scroll', function () {
                            clearTimeout( resizeTimer );
                            resizeTimer = setTimeout( function () {
                                self.countUpWhenInScreen( container );
                            }, 100 );
                        } );
                    } );
                },

                countUpWhenInScreen: function ( container ) {
                    container = jQuery( container );

                    if ( typeof window.App.utils === 'undefined' ) {
                        return;
                    }

                    window.App.utils.percentWithinViewport( container, function ( inScreenPercentage ) {
                        if ( inScreenPercentage > 15 ) {
                            this.countUp( container );
                        }
                    }.bind( this ) );
                },

                countUp: function ( container ) {
                    if ( container.hasClass( 'is-counting' ) ) {
                        return;
                    }

                    container.addClass( 'is-counting' );
                    container.find( '.count' ).each( function ( index, counter ) {

                        counter = $( counter );
                        var value = counter.data( 'count' );

                        setTimeout( function () {
                            counter.animate( {
                                counter: value
                            }, {
                                duration: 1500,
                                easing: 'swing',
                                step: function ( now ) {
                                    counter.text( Math.ceil( now ) );
                                },
                                complete: function () {
                                    container.removeClass( 'is-counting' )
                                }
                            } );
                        }, 200 );
                    } );
                }
            };

            jQuery( function () {
                Counters.init();
            } );
        </script>
    </div>
</section>
