import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const header = document.querySelector('.page-header');

    if(!header) return;
    const vh = (coef) => window.innerHeight * (coef/100);

    if(header.classList.contains('page-header--main')) {
        const strHeader = ScrollTrigger.create({
            trigger : document.querySelector('.page-content'),
            start: vh(200) + ' top',
            onUpdate: (self) => {
                header.classList.add('page-header--fixed');
            },
            onLeaveBack: () => {
                header.classList.remove('page-header--fixed');
            },
            // markers: true,
        });
    } else {
        const strHeader = ScrollTrigger.create({
            trigger : document.querySelector('.page-content'),
            start: vh(5) + ' top',
            onUpdate: (self) => {
                header.classList.add('page-header--fixed');
            },
            onLeaveBack: () => {
                header.classList.remove('page-header--fixed');
            },
            // markers: true,
        });
    }
}
