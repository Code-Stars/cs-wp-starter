import './compatibility'; // support for older browsers
import ModuleFactory from './ModuleFactory';

/**
 * CodeStars custom JavaScript.
 * Functionality separated in module classes.
 */
class Application {

    constructor(modules) {

        this.base = '';
        this.modules = {};

        this.dialog = new CsDialog({
            effect: {
                fade: true
            },
            position: 'fixed'
        });

        modules.forEach((moduleName) => {
            this.modules[moduleName.toLowerCase()] = ModuleFactory(moduleName);
        });
    }

    initModules() {

        document.addEventListener('DOMContentLoaded', () => {

            let base = document.getElementsByTagName('base')[0];
            this.base = base.href;

            Object.entries(this.modules).forEach(([key, module]) => {

                if (typeof module === 'undefined') {
                    //console.warn('Module was undefined: ' + key);
                } else {
                    if (typeof module.init === 'function') {
                        module.init();
                    }
                }
            });
        });
    }
}

export default Application;
