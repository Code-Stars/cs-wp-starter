<script>
    if (typeof App.tracking !== 'undefined'
        && typeof App.tracking.add === 'function') {

		<?php
		$ga_id = get_field( 'tracking_google_analytics', 'options' );
		$hotjar_id = get_field( 'tracking_hotjar', 'options' );

		if ( ! empty( $ga_id ) ) : ?>
            App.tracking.add('Google Analytics', '<?php echo $ga_id; ?>');
		<?php endif; ?>
		<?php if ( ! empty( $hotjar_id ) ) : ?>
            App.tracking.add('Hotjar', '<?php echo $hotjar_id; ?>');
		<?php endif; ?>
    }
</script>
