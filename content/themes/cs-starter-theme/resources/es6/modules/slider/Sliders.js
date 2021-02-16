import Utils from '../../modules/utils/Utils.js';

/**
 * Slider.
 */
class Slider {

    constructor() {
        let slider = $('#slick-slider');

        if (slider.length === 0) {
            return;
        }

        this.resetOnResize();
    }

    resetOnResize() {
        let timer;
        window.onresize = () => {
            clearTimeout(timer);

            timer = setTimeout(() => {
                this.init();
            }, 200);
        };
    }
}

class FcSlider extends Slider {

    init() {
        let slider = $('#slick-slider.fc-slider');

        let config = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            cssEase: 'ease-out',
            speed: 750
        };

        if (slider.length === 0 || slider.hasClass('slick-initialized')) {
            return;
        }

        slider.slick(config);
    }
}

class LogoSlider extends Slider {

    init() {

        let slider = $('#slick-slider.fc-logos-slider');

        if (slider.length === 0) {
            return;
        }

        if (slider.hasClass('slick-initialized')) {
            slider.slick('unslick');
        }

        if (Utils.breakpoint('md')) {

            slider.slick({
                infinite: true,
                rows: 2,
                slidesPerRow: 4,
                dots: false,
                cssEase: 'ease-out',
                speed: 750
            });
        }

        else if (Utils.breakpoint('sm')) {

            slider.slick({
                infinite: true,
                rows: 2,
                slidesPerRow: 3,
                dots: false,
                cssEase: 'ease-out',
                speed: 750
            });

        } else {

            slider.slick({
                infinite: true,
                dots: false,
                cssEase: 'ease-out',
                speed: 750,
                rows: 1,
                slidesPerRow: 1
            });
        }
    }
}

export {FcSlider, LogoSlider};
