import Utils from '../../modules/utils/Utils.js';

/**
 * Dialog super class.
 */
class Dialog {
    constructor() {
        this.dialog = new CsDialog({
            effect: {
                fade: true
            },
            position: 'fixed'
        });
    }
}

/**
 * Privacy statement.
 */
class PrivacyStatement extends Dialog {

    constructor() {
        super();

        this.themePath = '/content/themes/cs-starter-theme/';
        this.config = null;

        this.loadConfig();
    }

    init() {
        if (typeof Utils.getCookie('avg.options.set') === 'undefined') {
            this.showDialog();
        }
    }

    showDialog() {
        let url = this.themePath + 'template-parts/partials/privacy-statement.php';

        Utils.get(url, (html) => {
            let content = this.replaceVariables(html);

            this.dialog.openWithContent('', content);
        });
    }

    replaceVariables(html) {
        html = this.replaceAll(html, '{title}', this.config.title);
        html = this.replaceAll(html, '{pathLogo}', this.config.pathLogo);
        html = this.replaceAll(html, '{companyName}', this.config.company.name);
        html = this.replaceAll(html, '{companyEmail}', this.config.company.email);
        html = this.replaceAll(html, '{companyDetailsUrl}', this.config.company.details.url);
        html = this.replaceAll(html, '{companyDetailsPhone}', this.config.company.details.phone);
        html = this.replaceAll(html, '{companyDetailsAddress}', this.config.company.details.address);
        html = this.replaceAll(html, '{intro}', this.config.nl.intro);
        html = this.replaceList(html, '{personalDetails}', this.config.nl.personalDetails);

        return html;
    }

    loadConfig() {
        let url = this.themePath + 'config/privacy-statement.json';

        Utils.getJSON(url, (status, response) => {
            this.config = (response);
        });
    }

    replaceList(element, search, array) {
        let replacement = '<ul>';
        for (let i = 0; i < array.length; i++) {
            replacement += '<li> - ' + array[i] + '</li>';
        }
        replacement += '</ul>';
        return this.replaceAll(element, search, replacement);
    }

    replaceAll(element, search, replacement) {
        return element.split(search).join(replacement);
    }
}


export default PrivacyStatement;
