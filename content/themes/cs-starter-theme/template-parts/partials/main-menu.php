<?php
// get data
$mobile_menu_position = get_field( 'mobile_menu_position', 'options' );
$menu_cloak_enabled   = get_field( 'menu_cloak_enabled', 'options' );

$menu_modifier = ! empty( $mobile_menu_position ) ? 'main-menu--' . $mobile_menu_position : 'main-menu--left';
?>
<div class="main-menu <?php echo $menu_modifier; ?> is-closed"
	<?php if ( $menu_cloak_enabled === true ) {
		echo 'data-cloak-enabled';
	} ?>>

    <div class="mobile-menu show-mobile show-tablet">
        <a class="main-menu__burger gutters" href="javascript:;">
            <i class="fa fa-bars" title="Menu"></i>
        </a>
    </div>

	<?php // mobile logo ?>
    <div class="main-menu__logo gutters trailer--half leader">
		<?php the_custom_logo(); ?>
    </div>

	<?php // mobile close button ?>
    <a href="javascript:;" class="main-menu__btn-close">
        <i class="fa fa-times" title="Menu"></i>
    </a>

	<?php // main menu ?>
    <nav id="main-menu__nav">
		<?php wp_nav_menu( array(
			'theme_location' => 'menu-1',
			'menu_id'        => 'primary-menu',
			'menu_class'     => 'main-menu__body',
			'container'      => false
		) ); ?>
    </nav>
</div>
