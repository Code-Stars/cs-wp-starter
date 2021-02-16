<?php
/**
 * Flexible content block - Contact.
 *
 * @author Floris Weijenburg.
 */
$title = get_sub_field('fc_contact_us_title');
$text = get_sub_field('fc_contact_us_text');
$text_footer = get_sub_field('fc_contact_us_text_footer');
?>

<section class="fc-region fc-region--padding content-wrapper content-wrapper--large trailer--double gutters">

	<div class="fc-contact-us subtle-block is-closed">

		<div class="container container--main">

			<div class="container container--slave">

                <div class="gutters-xs">
                    <img class="subtle-block__icon" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/fek_vraag.png" alt="Location" />
                </div>

			</div><!--

		 --><div class="container container--master">

				<div class="gutters-xs">
					<h3 class="subtle-block__title"><?php echo $title; ?></h3>
					<p><?php echo $text; ?></p>
				</div>

				<div id="contact-form" class="gutters-xs leader-xs trailer-xs bleed--single">
					<!-- Contact form -->
					<?php
					set_query_var('text_footer', $text_footer);
					get_template_part('template-parts/forms/contact'); ?>
				</div>
			</div>
		</div><!--

	 --><div class="container container--aside">
			<div class="gutters-xs">
				<a id="btn-open" href="javascript:;" class="button right-float is-hidden">Formulier</a>
				<a id="btn-close" href="javascript:;" class="button button--alt right-float is-hidden">Sluiten &nbsp;<i class="fas fa-times"></i></a>
			</div>
		</div>

	</div>
</section>
