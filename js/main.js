import Modal from "./modules/Modal.js";
import Map from "./modules/Map.js";

import validation from './modules/validation.js';
import masks from './modules/masks.js';
import lazyload from './modules/lazyload.js';

import fancybox from './modules/fancybox.js';

import setHeaderPadding from './modules/setHeaderPadding.js';

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // activate transition:
    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

    // inits modals:
    const modal = new Modal({
        isOpen: (modal) => {
        },
        isClose: (modal) => {
        },
    });

    // inits map:
    if(document.getElementById('yamapsId')) {
        const map = new Map('yamapsId', {
            // map center:
            center: [55.77, 49.15],
            // map zoom value:
            zoom: 14,
            // placemarks:
            coords: [
                [55.767398, 49.150961]
            ],
            // map control elements:
            controls: [

            ]
        })
    }

    // masks and validation:
    // validation();
    // masks();

    // lazyload for images, videos, iframes and objects:
    // lazyload();

    // fancybox images modals:
    // fancybox();

    // other scripts:
    setHeaderPadding();
})
