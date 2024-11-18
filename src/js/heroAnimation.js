import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default () => {
    const header = document.querySelector('.page-header');
    const heroTitle = document.querySelector('.hero__title');

    if(!heroTitle) return;

    const vh = (coef) => window.innerHeight * (coef/100);
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();

    gsap.set(".hero__image", { scale: 0 });
    gsap.set(".hero__title", { opacity: 1 });

    t2.to('.hero__back', {
        y: -vh(30),
        opacity: 0,
        duration: 5
    })

    t1.to('.hero__scrolling-element', {
            y: (-vh(100) + header.offsetHeight + 100 + heroTitle.offsetHeight),
            duration: 5,
        })
        .to('.hero__title', {
            opacity: 0,
            duration: 5,
            onStart: () => {
                document.querySelector('.hero__back').classList.add('hero__back--blacked')
            },
            onReverseComplete: () => {
                document.querySelector('.hero__back').classList.remove('hero__back--blacked')
            }
        })
        .to('.hero__image', {
            scale: 1.05,
            duration: 5,
        });

    ScrollTrigger.create({
        animation: t1,
        trigger: '.js-hero-scroll-trigger',
        start: `top top`,
        end: `bottom top`,
        scrub: 2.5,
        pin: true,
        pinSpacing: true,
        anticipatePin: 2.5
    });

    ScrollTrigger.create({
        animation: t2,
        trigger: '.js-hero-scroll-trigger-2',
        start: `top bottom-=${heroTitle.offsetHeight}`,
        end: `bottom top-=${heroTitle.offsetHeight}`,
        scrub: 5,
    });

    t1.eventCallback("onUpdate", myFunction, ["0.84"]);

    function myFunction(tweenProgress, end) {
        if ( this.progress() >= tweenProgress ) {
            document.querySelector('.hero__image').classList.remove('hero__image--aspect');
        } else {
            document.querySelector('.hero__image').classList.add('hero__image--aspect');
        }
    }
}
