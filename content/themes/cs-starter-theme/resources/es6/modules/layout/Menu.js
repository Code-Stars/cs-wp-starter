import Utils from '../../modules/utils/Utils.js';

/**
 * Menu.
 */
class Menu {

    init() {
        this.menuName = 'main-menu';
        this.menu = $( '.' + this.menuName );
        this.body = $( 'body' );

        // settings
        this.cloakEnabled = typeof this.menu.data( 'cloak-enabled' ) !== 'undefined';
        this.smWidth = typeof this.menu.data( 'sm-width' ) !== 'undefined' ? this.menu.data( 'sm-width' ) : $( window ).width() / 2;

        let burger = this.menu.find( '.' + this.menuName + '__burger' ),
            btnClose = this.menu.find( '.' + this.menuName + '__btn-close' ),
            closeLayer = this.menu.find( '.' + this.menuName + '__close-layer' );

        burger.add( btnClose ).add( closeLayer ).on( 'click', () => {
            this.menuToggleHandler();
        } );
    }

    /**
     * Opens and closes menu.
     *
     * @param {jQuery} menu
     * @param {string} action
     */
    menuToggle( menu, action ) {

        let width = '0%';

        if ( action === 'open' ) {

            let width = this.menuGetWidth();

            this.body.addClass( 'menu-open' );

            if ( this.cloakEnabled ) {
                this.addCloakLayer();
            }

            menu.stop().animate( { width: width }, 500, 'easeOutQuint', () => {

                menu.addClass( 'is-animated' );
                menu.css( 'overflow', 'visible' );

                this.addCloseLayer();
            } );
        }

        if ( action === 'close' ) {

            width = '0%';

            this.body.removeClass( 'menu-open' );

            if ( this.cloakEnabled ) {
                this.removeCloakLayer();
            }

            menu.stop().animate( { width: width }, 500, 'easeOutQuint', () => {

                menu.addClass( 'is-animated' );
                menu.css( 'overflow', 'visible' );

                menu.removeClass( 'is-animated' );
                this.removeCloseLayer();
            } );
        }
    }

    /**
     * Get the width of the menu
     * for the current viewport.
     *
     * @returns {number}
     */
    menuGetWidth() {
        let marginLeft = Utils.rem( 1 );
        let width = $( window ).width() - marginLeft;

        if ( Utils.breakpoint( 'sm' ) ) {
            width = this.smWidth;
        }

        return width;
    }

    /**
     * Handles the opening and closing action for the menu.
     */
    menuToggleHandler() {
        let menu = this.menu,
            action = menu.hasClass( 'is-closed' ) ? 'open' : 'close';

        this.menuToggle( menu, action );

        menu.toggleClass( 'is-closed is-open' );
    }

    /**
     * Handles the closing action of the menu.
     *
     * @param params
     */
    closeMenu( params ) {
        let widget = typeof params !== 'undefined' ? params.data.widget : this;

        if ( ! widget.menu.hasClass( 'is-open' ) )
            return;

        widget.menuToggle( widget.menu, 'close' );
        widget.menu.toggleClass( 'is-closed is-open' );
    }

    /**
     * Add's a layer to the document for the user to click on
     * for closing the menu.
     */
    addCloseLayer() {

        let screenWidth = $( window ).width();
        let closeLayer = $( '<div id="close-layer" style="width: ' + (screenWidth - this.menuGetWidth()) + 'px;" class="' + this.menuName + '__close-layer" />' );

        closeLayer.on( 'click', { widget: this }, this.closeMenu );

        $( '.main-menu' ).append( closeLayer );
    }

    /**
     * Removes the close layer.
     */
    removeCloseLayer() {
        $( '.' + this.menuName + '__close-layer' ).remove();
    }

    /**
     * Adds a cloak layer to the document
     * that makes the background darker.
     */
    addCloakLayer() {
        let cloakLayer = $( '<div id="cloak-layer" class="' + this.menuName + '__cloak-layer" />' );
        cloakLayer.on( 'click', { widget: this }, this.closeMenu );

        this.body.append( cloakLayer );
    }

    /**
     * Removes the cloak layer.
     */
    removeCloakLayer() {
        $( '.' + this.menuName + '__cloak-layer' ).remove();
    }
}

export default Menu;
