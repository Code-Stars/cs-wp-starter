'use strict';

// utils
import Utils from '../modules/utils/Utils';

// layout
import Layout from '../modules/layout/Layout';
import Menu from '../modules/layout/Menu';

// forms
import Forms from '../modules/forms/Forms';

// sliders
import {FcSlider, LogoSlider} from '../modules/slider/Sliders';

// stats
import Tracking from '../modules/stats/Tracking';

// privacy statement
import PrivacyStatementNotice from '../modules/privacy-statement/PrivacyStatementNotice';
import PrivacyStatementDialog from '../modules/privacy-statement/PrivacyStatementDialog';

/**
 * Here the classes get loaded.
 *
 * @param {string} moduleName
 * @returns {object}
 */
export default function ModuleFactory(moduleName) {

    // all available modules
    const classes = {
        Utils,
        Layout,
        Menu,
        FcSlider,
        LogoSlider,
        Forms,
        Tracking,
        PrivacyStatementNotice,
        PrivacyStatementDialog
    };

    if (typeof classes[moduleName] === 'function') {
        // return instance
        return new classes[moduleName];

    } else {
        // return object
        return classes[moduleName];
    }
}
