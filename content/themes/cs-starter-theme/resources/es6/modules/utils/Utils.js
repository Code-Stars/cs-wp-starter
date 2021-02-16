const Utils = {};

/**
 * Init percentage in viewport for elements
 * that matches given selector.
 *
 * @param {jQuery} element
 * @param {function} callback
 * @returns {Number} percentage
 */
Utils.percentWithinViewport = function (element, callback) {

    Utils.waitForElement(element, function() {

        let elementTop = element.offset().top,
            scrollTop = document.documentElement.scrollTop,
            spaceTop = elementTop - scrollTop,
            elementHeight = element.height(),
            screenHeight = jQuery(window).height(),
            scrollBottom = scrollTop + screenHeight,
            bottomElement = elementTop + elementHeight,
            spaceBottom = bottomElement - scrollBottom,
            heightInScreen = elementHeight - spaceBottom,
            percentage;

        if (spaceTop < 0) {
            heightInScreen -= spaceTop * -1;
        }

        if (spaceBottom < 0) {
            heightInScreen -= spaceBottom * -1;
        }

        percentage = Math.round(heightInScreen / screenHeight * 100);
        percentage = percentage < 0 ? 0 : percentage;

        element.attr('data-percent-viewport', percentage);

        callback(percentage);
    });
};

/**
 * Wait for element.
 *
 * @param {Element} element
 * @param {function} callback
 */
Utils.waitForElement = function (element, callback) {
    let ticks = setInterval(function () {
        if (element) {
            clearInterval(ticks);
            callback(element);
        }
    }, 10);
};

/**
 * Converts rem to pixels.
 *
 * @param rem
 * @returns {number}
 */
Utils.rem = function ( rem ) {
    return rem * parseFloat( getComputedStyle( document.documentElement ).fontSize );
};

/**
 * Get image lightness.
 *
 * @param {string} imageSrc
 * @param {function} callback
 */
Utils.getImageLightness = function (imageSrc, callback) {

    let img = document.createElement("img");
    let colorSum = 0;

    img.src = imageSrc;
    img.style.display = "none";
    document.body.appendChild(img);

    img.onload = function () {

        let canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;

        let ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);

        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let data = imageData.data;
        let r, g, b, avg;

        for (let x = 0, len = data.length; x < len; x += 4) {
            r = data[x];
            g = data[x + 1];
            b = data[x + 2];

            avg = Math.floor((r + g + b) / 3);
            colorSum += avg;
        }

        let brightness = Math.floor(colorSum / (this.width * this.height));
        callback(brightness);
    }
};

/**
 * Makes an image element full screen.
 *
 * @param {string} imageSrc
 * @param {number} delay
 * @param {function} callback
 */
Utils.resizeImageToFullScreen = function (imageSrc, delay, callback) {

    delay = delay || 500;

    let fullOverlay = $('<div id="full-overlay" style="background-image: url(' + imageSrc + ')" />');

    $('<img src="' + imageSrc + '" />').on('load', function () {

        fullOverlay.appendTo($('body'));

        fullOverlay.animate({opacity: 1}, 500, function () {
            setTimeout(function () {
                callback();
            }, delay)
        });
    });
};

/**
 * Set cookie.
 *
 * @param {string} cookieName
 * @param {string} value
 * @param {number} exDays
 * @param {string=} customPath
 */
Utils.setCookie = function (cookieName, value, exDays, customPath) {
    customPath = customPath || '/';
    let exDate = new Date();
    exDate.setDate(exDate.getDate() + exDays);
    let cookieValue = encodeURI(value) + ((exDays === null) ? "" : "; expires=" + exDate.toUTCString());

    document.cookie = cookieName + "=" + cookieValue + '; path=' + customPath;
};

/**
 * Get cookie.
 *
 * @param {string} cookieName
 * @returns {string}
 */
Utils.getCookie = function (cookieName) {
    let i, x, y, cookies = document.cookie.split(";");

    for (i = 0; i < cookies.length; i++) {
        x = cookies[i].substr(0, cookies[i].indexOf("="));
        y = cookies[i].substr(cookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");

        if (x === cookieName) {
            return decodeURI(y);
        }
    }
};

/**
 * Is breakpoint?
 *
 * @param {string} name options: xs, sm, md, lg
 * @returns {boolean}
 */
Utils.breakpoint = function (name) {

    let breakpoints = [];

    breakpoints['xs'] = '(max-width: 768px)';
    breakpoints['sm'] = '(min-width: 768px)';
    breakpoints['md'] = '(min-width: 992px)';
    breakpoints['lg'] = '(mix-width: 1200px)';

    return (window.matchMedia(breakpoints[name]).matches);
};

/**
 * Get request.
 *
 * @param {string} url
 * @param {function} callback
 */
Utils.get = function (url, callback) {

    let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (typeof callback === 'function') {
                callback(this.responseText);
            }
        }
    };

    req.open('GET', url, true);
    req.send();
};

/**
 * Get JSON.
 *
 * @param {string} url
 * @param {function} callback
 */
Utils.getJSON = function (url, callback) {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function () {
        let status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

/**
 * Add's a script tag with src to the page body.
 *
 * @param {string} src
 * @param {element=} target
 * @param {function=} callback
 */
Utils.addScript = function (src, target, callback) {
    target = typeof target === 'undefined' ? document.body : target;
    let s = document.createElement('script');
    s.setAttribute('src', src);
    s.onload = callback;
    target.appendChild(s);
};

/**
 * Add script inline to a target element.
 *
 * @param {string} script
 * @param {element=} target
 */
Utils.addScriptInline = function (script, target) {
    target = typeof target === 'undefined' ? document.body : target;
    let newScript = document.createElement('script'),
        inlineScript = document.createTextNode(script);
    newScript.appendChild(inlineScript);
    target.appendChild(newScript);
};

export default Utils;
