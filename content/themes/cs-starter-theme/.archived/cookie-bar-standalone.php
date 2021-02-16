<?php

/**
 * Cookie bar - Standalone version
 * @author Floris Weijenburg <contact@codestars.nl>
 */
$cookie_bar             = get_field( 'cookie_bar', 'options' );
$cookie_bar_text        = get_field( 'cookie_bar_text', 'options' );
$cookie_bar_button_text = get_field( 'cookie_bar_button_text', 'options' );
?>

<?php if ( ! empty( $cookie_bar ) ): ?>
    <style>
        .cs-cookie-bar {
            position: fixed;
            display: table;
            vertical-align: middle;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 60px;
            color: #ccc;
            padding: 0;
            text-align: center;
            font-size: 14px;
            z-index: 10;
        }

        .cs-cookie-bar .row {
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            margin: 0 30px;
            background: rgba(50, 52, 55, 0.8);
        }

        .cs-cookie-bar__contents {
            display: table;
            width: 100%;
            height: 60px;
        }

        .cs-cookie-bar p {
            display: table-cell;
            margin: 0;
            height: 60px;
            vertical-align: middle;
        }

        .cs-cookie-bar a {
            display: inline-block;
            color: #ccc;
        }

        .cs-cookie-bar .button {
            vertical-align: middle;
            color: #fff;
            max-width: none;
            width: 100%;
            background: linear-gradient(-35deg, #e0427f 0%, #854e8f 100%);
            -webkit-box-shadow: 0 2px 2px 0 rgba(201, 75, 150, 0.14), 0 3px 1px -2px rgba(201, 75, 150, 0.2), 0 1px 5px 0 rgba(201, 75, 150, 0.12);
            box-shadow: 0 2px 2px 0 rgba(201, 75, 150, 0.14), 0 3px 1px -2px rgba(201, 75, 150, 0.2), 0 1px 5px 0 rgba(201, 75, 150, 0.12);
            border-radius: 3px;
            height: 40px;
            line-height: 40px;
            margin: 10px 0;
        }
    </style>

    <div class="cs-cookie-bar">
		<?php
		$cookie_bar_text        = ! empty( $cookie_bar_text ) ? $cookie_bar_text : 'This site uses cookies: <a href="' . get_site_root() . '/privacy-policy">find out more</a>.';
		$cookie_bar_button_text = ! empty( $cookie_bar_button_text ) ? $cookie_bar_button_text : 'Okay, thanks';
		$cookie_bar_contents    = str_replace( 'href="/', 'href="' . get_site_root() . '/', $cookie_bar_text ); ?>

        <div class="row gutters">
            <div class="col-xs-12 col-sm-9">
                <div class="cs-cookie-bar__contents trailer--half leader--half">
					<?php echo $cookie_bar_contents; ?>
                </div>
            </div>
            <div class="col-xs-12 col-sm-3">
                <div class="trailer--half leader--half">
                    <a id="cs-cookie-bar-btn-close" class="button button--submit"
                       href="javascript:;"><?php echo $cookie_bar_button_text; ?></a>
                </div>
            </div>
        </div>
    </div>

    <script>
        var setCookie = function ( cookieName, value, exDays, customPath ) {
            customPath = customPath || '/';
            let exDate = new Date();
            exDate.setDate( exDate.getDate() + exDays );
            let cookieValue = encodeURI( value ) + ((exDays === null) ? "" : "; expires=" + exDate.toUTCString());

            document.cookie = cookieName + "=" + cookieValue + '; path=' + customPath;
        };

        var getCookie = function ( cookieName ) {
            let i, x, y, cookies = document.cookie.split( ";" );

            for ( i = 0; i < cookies.length; i ++ ) {
                x = cookies[ i ].substr( 0, cookies[ i ].indexOf( "=" ) );
                y = cookies[ i ].substr( cookies[ i ].indexOf( "=" ) + 1 );
                x = x.replace( /^\s+|\s+$/g, "" );

                if ( x === cookieName ) {
                    return decodeURI( y );
                }
            }
        };

        ((function ( $ ) {
            var cookieBar = $( '.cs-cookie-bar' );

            cookieBar.find( '#cs-cookie-bar-btn-close' ).on( 'click', function () {
                cookieBar.hide();
                setCookie( 'cs-cookie-banner.is-closed', 'true', 30 );
            } );

            if ( getCookie( 'cs-cookie-banner.is-closed' ) === 'true' ) {
                cookieBar.hide();
            }
        }))( jQuery );
    </script>
<?php endif; ?>
