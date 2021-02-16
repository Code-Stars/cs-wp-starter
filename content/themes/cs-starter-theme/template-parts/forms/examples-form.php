<div class="trailer--double">

    <div class="trailer--double leader--double">
        <h4 class="title-h4">Developer Form Examples</h4>
    </div>

	<?php if ( ! Form::saved() ): ?>

		<?php Form::form( 'Examples Form' ); ?>

		<?php Form::hidden( 'contact_hidden' ); ?>

		<?php Form::partial( 'validation-message' ); ?>
		<?php Form::partial( 'plugin-message' ); ?>

        <div class="row">

            <div class="col-xs-12 col-sm-2 trailer">
				<?php Form::label( 'examples_form_text' ); ?>
            </div>

            <div class="col-xs-12 col-sm-4 trailer">
				<?php Form::input( 'examples_form_text' ); ?>
            </div>

        </div>

        <div class="row">

            <div class="col-xs-12 col-sm-2 trailer">
				<?php Form::label( 'examples_form_password' ); ?>
            </div>

            <div class="col-xs-12 col-sm-4 trailer">
				<?php Form::password( 'examples_form_password' ); ?>
            </div>

        </div>

        <div class="row">

            <div class="col-xs-12 col-sm-2 trailer">
				<?php Form::label( 'examples form textarea' ); ?>
            </div>

            <div class="col-xs-12 col-sm-4 trailer">
				<?php Form::textarea( 'Examples Form Textarea' ); ?>
            </div>

        </div>

        <div class="row">

            <div class="col-xs-12 col-sm-2 trailer">
				<?php Form::label( 'examples_form_email' ); ?>
            </div>

            <div class="col-xs-12 col-sm-4 trailer">
				<?php Form::email( 'examples_form_email' ); ?>
            </div>

        </div>

        <div class="row">

            <div class="col-xs-12 col-sm-2 trailer">
				<?php Form::label( 'examples_form_subject' ); ?>
            </div>

            <div class="col-xs-12 col-sm-4 trailer">
				<?php Form::select( 'examples_form_subject' ); ?>
            </div>

        </div>

        <div class="row">

            <div class="col-xs-12 col-sm-2 trailer">
				<?php Form::label( 'examples_form_file' ); ?>
            </div>

            <div class="col-xs-12 col-sm-4 trailer">
				<?php Form::file( 'examples_form_file' ); ?>
            </div>

        </div>

        <div class="row">

            <div class="col-xs-12 col-sm-2 trailer">
				<?php Form::label( 'examples_form_checkbox' ); ?>
            </div>

            <div class="col-xs-12 col-sm-4 df-trailer">
				<?php Form::checkboxes( 'examples_form_checkbox' ); ?>
            </div>

        </div>

        <div class="row">

            <div class="col-xs-12 col-sm-2 trailer">
				<?php Form::label( 'examples_form_recaptcha' ); ?>
            </div>

            <div class="col-xs-12 col-sm-4 df-trailer">
				<?php Form::recaptcha( 'examples_form_recaptcha' ); ?>
            </div>

        </div>

        <div class="row">

            <div class="col-xs-12 col-sm-2 trailer">
		        <?php Form::label( 'examples_form_honeypot' ); ?>
            </div>

            <div class="col-xs-12 col-sm-4 df-trailer">
		        <?php Form::honeypot( 'examples_form_honeypot' ); ?>
            </div>

        </div>

        <div class="row">

            <div class="col-xs-12 col-sm-4 col-sm-offset-2 trailer">
				<?php Form::submit( 'Aanmelden' ); ?>
            </div>

        </div>

		<?php Form::closure(); ?>

	<?php endif; ?>

	<?php Form::partial( 'success-message' ); ?>
</div>
