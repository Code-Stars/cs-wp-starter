import Utils from '../utils/Utils';

/**
 * Tracking scripts
 */
class Tracking {

    constructor() {
        this.services = []; // [{ name: 'Google Analytics', id: 'UA-***'}]
        this.target = document.head;
    }

    init() {
        this.target = document.getElementById('tracking-scripts');
        this.addToPage();
    }

    /**
     * Add service to tracking.
     *
     * @param {string} servicesName
     * @param {string} serviceId
     */
    add(servicesName, serviceId) {
        let service = {
            name: servicesName,
            id: serviceId
        };
        this.services.push(service);
    }

    /**
     * Add every service's script
     * to the tracking container on the page.
     */
    addToPage() {
        this.services.forEach((service) => {
            if (service.name === 'Google Analytics') {
                Tracking.addGoogleAnalyticsScript(service.id, this.target);
            }

            if (service.name === 'Hotjar') {
                Tracking.addHotjarScript(service.id, this.target);
            }
        });
    }

    /**
     * Add Google Analytics script to target element.
     *
     * @param {string} id
     * @param {element} target
     */
    static addGoogleAnalyticsScript(id, target) {
        Utils.addScript('https://www.googletagmanager.com/gtag/js?id=' + id);
        Utils.addScriptInline('window.dataLayer = window.dataLayer || []; ' +
            'function gtag(){dataLayer.push(arguments);} ' +
            'gtag("js", new Date()); ' +
            'gtag("config", "' + id + '");',
            target);
    }

    /**
     * Add Hotjar script to target element.
     *
     * @param {string} id
     * @param {element} target
     */
    static addHotjarScript(id, target) {
        Utils.addScriptInline('(function(h,o,t,j,a,r){ ' +
            'h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; ' +
            'h._hjSettings={hjid:' + id + ',hjsv:6}; ' +
            'a=o.getElementsByTagName(\'head\')[0]; ' +
            'r=o.createElement(\'script\');r.async=1; ' +
            'r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; ' +
            'a.appendChild(r);' +
            '})(window,document,\'https://static.hotjar.com/c/hotjar-\',\'.js?sv=\');',
            target);
    }
}

export default Tracking;
