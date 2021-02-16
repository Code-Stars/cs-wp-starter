/**
 * Layout front-end functionality.
 */
class Layout {

    init() {
        Layout.setHasJs();
        Layout.detectShortScreen();
        this.initPartialScripts();
    }

    /**
     * Toggle 'no-js' or 'js' class on the page it's html tag.
     */
    static setHasJs() {
        let r = document.querySelectorAll("html")[0];
        r.className = r.className.replace(/(^|\s)no-js(\s|$)/, "$1js$2")
    }

    /**
     * For short laptop screens we add a class
     * so we can adjust our layout to it.
     */
    static detectShortScreen() {
        let screenHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

        if (screenHeight < 850) {
            let body = document.querySelectorAll("body")[0];

            body.classList.add('screen-short');
            console.warn('short screen detected', screenHeight);
        }
    }

    /**
     * Init responsive backgrounds.
     */
    initResponsiveBackgrounds() {

        if (typeof BgSrcset === 'undefined') {
            console.error('Class "BgSrcset" not found!');
            return;
        }

        let bgSrcset = new BgSrcset();

        bgSrcset.init('.set-srcset', function (element) {
            element.node.className += ' is-loaded';
        });
    }

    /**
     * Runs js from partial scripts
     * that have been added previously.
     */
    initPartialScripts() {

        if (typeof window.partial_scripts !== 'undefined'
            && window.partial_scripts.length > 0) {

            for (let i = 0; i < partial_scripts.length; i++) {
                let partial = window.partial_scripts[i];
                partial();
            }
        }
    }
}

export default Layout;