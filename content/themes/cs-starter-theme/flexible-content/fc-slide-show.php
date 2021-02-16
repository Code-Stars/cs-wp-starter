<?php
/**
 * Flexible content block - Slide Show.
 *
 * @author Floris Weijenburg.
 */
$title = get_sub_field('fc_slide_show_title');
$references  = get_slide_show_slides('reference', -1);
?>
<section class="fc-region is-relative fc-region--padding section section--padding <?php if ( ! is_front_page() ): echo 'section--slide-show'; endif; ?>" id="references">

    <div class="content-wrapper content-wrapper--large">

		<div class="trailer gutters">
			<h2 class="title title--section center"><?php echo $title; ?></h2>
		</div>

        <nav class="fc-slide-show trailer-outside gutters">
            <div class="fc-slide-show__content">
                <ul class="fc-slide-show__list">
                    <?php foreach ( $references as $index => $reference ) : ?><!--
                        --><li class="fc-slide-show__li <?php echo $index >= 4 ? 'extra' : ''; ?>">
                            <div class="gutters">
                                <a class="fc-slide-show__figure" style="background-image: url('<?php echo get_the_post_thumbnail_url($reference); ?>');" href="<?php echo get_permalink( $reference->ID ); ?>">
                                    <div class="fc-slide-show__figure-inner">
                                        <span class="fc-slide-show__label"><?php echo $reference->post_title; ?></span>
                                    </div>
                                </a>
                            </div>
                        </li><!--
                 --><?php endforeach; ?>
                </ul>
            </div>
        </nav>

		<div class="fc-slide-show__range-slider trailer gutters">
			<input type="range" min="0" max="100" value="0"  data-rangeslider />
		</div>
	</div>

    <footer class="fc-slide-show__footer">
        <a data-text="Meer referenties" data-text-alt="Minder referenties" href="javascript:;" class="fc-slide-show__footer-text fc-slide-show--open">
            Meer referenties
        </a>

        <a href="javascript:;" class="fc-slide-show__more fc-slide-show--open">
            &nbsp;
        </a>
    </footer>

</section>

<script>
    jQuery(function () {
        var slideShow = $('.fc-slide-show'),
            label = $('.fc-slide-show__footer-text'),
            labelText = '';

        $('.fc-slide-show--open').on('click', function () {
            slideShow.toggleClass('is-open');

            labelText = slideShow.hasClass('is-open') ? label.data('text-alt') : label.data('text');
            label.text(labelText);
        });
    });
</script>