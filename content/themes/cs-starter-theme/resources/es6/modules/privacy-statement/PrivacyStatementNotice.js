import Utils from '../../modules/utils/Utils.js';

class PrivacyStatementNotice {

    init() {
        let cookieBar = $( '.cs-cookie-bar' );
        let isClosed = Utils.getCookie( 'cs-cookie-banner.is-closed' );
        isClosed = (isClosed !== undefined);

        if ( ! isClosed ) {
            cookieBar.attr('style','display: block !important');
        }

        cookieBar.find( '#cs-cookie-bar-btn-close' ).on( 'click', function () {
            cookieBar.hide();
            Utils.setCookie( 'cs-cookie-banner.is-closed', 'true', 30 );
        } );
    }
}

export default PrivacyStatementNotice;