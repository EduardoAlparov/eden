import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const header = document.querySelector('.page-header');
    const heroTitle = document.querySelector('.hero__title');

    if(!heroTitle) return;

    const vh = (coef) => window.innerHeight * (coef/100);
    const tl = gsap.timeline();
    const t2 = gsap.timeline();

    gsap.set(".hero__image", { scale: 0 });
    gsap.set(".hero__title", { opacity: 1 });

    tl.to('.hero__scrolling-element', {
            y: (-vh(100) + header.offsetHeight + 100 + heroTitle.offsetHeight),
            duration: 2,
        })
        .to('.hero__title', {
            opacity: 0,
            duration: 1,
            onStart: () => {
                document.querySelector('.hero__back').classList.add('hero__back--blacked')
            },
            onReverseComplete: () => {
                document.querySelector('.hero__back').classList.remove('hero__back--blacked')
            }
        })
        .to('.hero__image', {
            scale: 1.05,
            duration: 2.5,

            onStart: () => {
                setTimeout(() => {
                    document.querySelector('.hero__image').classList.remove('hero__image--aspect');
                }, 1200);
            },

            onReverseComplete: () => {
                setTimeout(() => {
                    document.querySelector('.hero__image').classList.add('hero__image--aspect');
                }, 1200);
            }
        });

    t2.to('.hero__back', {
        y: -vh(100),
        duration: 1.5
    })

    ScrollTrigger.create({
        animation: tl,
        trigger: '.js-hero-scroll-trigger',
        start: `top top`,
        end: `bottom top`,
        scrub: 1.5,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1.5,
    });

    ScrollTrigger.create({
        animation: t2,
        trigger: '.js-hero-scroll-trigger-2',
        start: `top bottom-=${heroTitle.offsetHeight}`,
        end: `bottom top-=${heroTitle.offsetHeight}`,
        scrub: 1.5,
    });

}
