<?php

if ( ! Form::saved() ) :

	Form::form( 'Contact Form' );

	Form::partial( 'validation-message' );
	Form::partial( 'plugin-message' ); ?>

    <div class="row leader-xs-x2">
        <div class="col-xs-12 col-sm-2 df-trailer">
			<?php Form::label( 'contact_form_first_name' ); ?>
        </div>

        <div class="col-xs-12 col-sm-10 df-trailer">
			<?php Form::input( 'contact_form_first_name' ); ?>
        </div>

    </div>

    <div class="row">

        <div class="col-xs-12 col-sm-2 df-trailer">
			<?php Form::label( 'contact_form_last_name' ); ?>
        </div>

        <div class="col-xs-12 col-sm-10 df-trailer">
			<?php Form::input( 'contact_form_last_name' ); ?>
        </div>

    </div>

    <div class="row">

        <div class="col-xs-12 col-sm-2 df-trailer">
			<?php Form::label( 'contact_form_email' ); ?>
        </div>

        <div class="col-xs-12 col-sm-10 df-trailer">
			<?php Form::email( 'contact_form_email' ); ?>
        </div>

    </div>

    <div class="row">

        <div class="col-xs-12 col-sm-2 df-trailer">
			<?php Form::label( 'contact_form_message' ); ?>
        </div>

        <div class="col-xs-12 col-sm-10 df-trailer">
			<?php Form::textarea( 'contact_form_message' ); ?>
        </div>

    </div>

    <div class="row">

        <div class="col-xs-12 col-sm-10 col-sm-offset-2 df-trailer">
			<?php Form::honeypot( 'contact_form_trap' ); ?>

			<?php Form::submit( __( 'Send', 'cs-starter-theme' ) ); ?>
        </div>

    </div>

	<?php Form::closure(); ?>

<?php endif; ?>

<?php Form::partial( 'success-message' ); ?>