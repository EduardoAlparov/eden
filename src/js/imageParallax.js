import SimpleParallax from "simple-parallax-js/vanilla";

export default () => {
  const images = document.querySelectorAll('.parallax-image');

  images.forEach((image) => {
    if(window.matchMedia('(max-aspect-ratio: 4/3)').matches) return;

    new SimpleParallax(image, {
      orientation: 'up - down',
      transition: 'ease-out'
    });
  })
}
