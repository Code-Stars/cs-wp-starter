/**
 * App.js es6 version.
 *
 * @author Floris Weijenburg <https://github.com/Code-Stars>
 * @version 07-11-2019
 */
$ = $ || jQuery;

import Application from './core/Application';

(function () {

    // init app with modules
    const modules = [
        'Utils',
        'Menu',
        'Forms',
        'Layout',
        'FcSlider',
        'Tracking',
        'PrivacyStatementNotice'
    ];

    let app = new Application(modules);
    app.initModules();

    // make accessible for website.
    window.App = {
        dialog: app.dialog,
        tracking: app.modules['tracking'],
        utils: app.modules['utils']
    };

    window.partial_scripts = [];
})();
