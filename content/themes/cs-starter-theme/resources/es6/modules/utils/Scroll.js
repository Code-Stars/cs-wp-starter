/**
 * Scroll class.
 *
 * @constructor
 */
function Scroll() {

    $('.main-menu-item__link').on('click',
        this.handleMenuScroll.bind(this)
    );
}

/**
 * Handle menu scroll.
 */
Scroll.prototype.handleMenuScroll = function (event) {

    event.preventDefault();

    var target = event.currentTarget || event.target || event.srcElement;
    var targetName = $(target).data('section');
    var targetSection = $('section[data-section="' + targetName + '"]');

    this.scrollToElement(targetSection, 64, function () {

        window.history.pushState(null, '', App.base + targetName);
        $(window).trigger('scroll-finished');

        if ($('.main-menu').hasClass('is-open')) {
            App.menu.closeMenu();
        }
    });
};

/**
 * Scroll to element.
 *
 * @param element {HTMLElement}
 * @param offset {number}
 * @param callback {function}
 */
Scroll.prototype.scrollToElement = function (element, offset, callback) {

    offset = offset || 0;

    if (!element.hasOwnProperty('length') || element.length === 0) {
        console.warn('Scroller could not find element');
        return;
    }

    $('html, body').animate({
        scrollTop: element.offset().top - offset
    }, 1000, callback);
};
