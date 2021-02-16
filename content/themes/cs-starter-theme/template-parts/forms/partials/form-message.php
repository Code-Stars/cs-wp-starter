<?php
$handler  = DFCore::get_instance()->messages();
$messages = $handler->getMessages('form');

if ( ! empty( $messages ) ): ?>
    <div class="trailer">
		<?php foreach ( $messages as $message ): ?>
            <div class="trailer-outside df-message df-message--<?php echo key( $message ); ?>">
                <p class="df-message__text gutters">
					<?php if ( ! empty( $message[ key( $message ) ]['title'] ) ): ?>
                        <strong><?php echo $message[ key( $message ) ]['title']; ?>:</strong>
					<?php endif; ?>
					<?php echo $message[ key( $message ) ]['message']; ?>
                </p>
            </div>
		<?php endforeach; ?>
    </div>
<?php endif;