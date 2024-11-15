import './lazyload';
import detectTouch from './detectTouch';

import setScrollbarWidth from './setScrollbarWidth';
import setHeaderPadding from './setHeaderPadding';
import setTitleHeight from './setTitleHeight';
import setFixedHeader from './setFixedHeader';

// import masks from './masks';
// import validation from './validation';
// import anchorLinks from './anchorLinks';
// import accordions from './accordions';
// import modals from './modals';
// import tabs from './tabs';
// import menu from './menu';

import heroAnimation from './heroAnimation';
import imageParallax from './imageParallax';
import reviewsCarousel from './reviewsCarousel';
import rangeSlider from './rangeSlider';
import catalogToggle from './catalogToggle';


document.addEventListener('DOMContentLoaded', function () {
    setHeaderPadding();
    setTitleHeight();
    setFixedHeader();

    const body = document.body;

    // activate transition:
    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

    // activate animations:
    setTimeout(() => {
        body.classList.remove('animated-trigger');
    }, 1000);

    detectTouch();
    setScrollbarWidth();
    // masks();
    // validation();
    // anchorLinks();
    // accordions();
    // modals();
    // tabs();
    // menu();

    heroAnimation();
    imageParallax();
    reviewsCarousel();
    rangeSlider();
    catalogToggle();
});
