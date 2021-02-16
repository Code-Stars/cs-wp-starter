<?php
$cookie_bar             = get_field( 'cookie_bar', 'options' );
$cookie_bar_text        = get_field( 'cookie_bar_text', 'options' );
$cookie_bar_button_text = get_field( 'cookie_bar_button_text', 'options' );
?>

<?php if ( ! empty( $cookie_bar ) ): ?>
    <div class="cs-cookie-bar is-hidden">
		<?php
		$cookie_bar_text        = ! empty( $cookie_bar_text ) ? $cookie_bar_text : 'This site uses cookies: <a href="' . get_site_root() . '/privacy-policy">find out more</a>.';
		$cookie_bar_button_text = ! empty( $cookie_bar_button_text ) ? $cookie_bar_button_text : 'Okay, thanks';
		$cookie_bar_contents = str_replace( 'href="/', 'href="' . get_site_root() . '/', $cookie_bar_text ); ?>

        <div class="row gutters middle-xs">
            <div class="col-xs-12 col-sm-9">
	            <div class="trailer--half leader--half">
		            <?php echo $cookie_bar_contents; ?>
                </div>
            </div>
            <div class="col-xs-12 col-sm-3">
                <div class="trailer--half leader--half">
                    <a id="cs-cookie-bar-btn-close" class="button" href="javascript:;"><?php echo $cookie_bar_button_text; ?></a>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>
