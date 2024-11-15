import Swiper from 'swiper/bundle';

export default () => {
    const carousels = document.querySelectorAll('.js-carosel-swiper');

    carousels.forEach((carousel) => {
        const sCon = carousel.querySelector('.carousel__swiper.swiper')

        new Swiper(sCon, {
            slidesPerView: 1,
            spaceBetween: 10,
            speed: 700,

            navigation: {
                nextEl: carousel.querySelector('.carousel__btn--next'),
                prevEl: carousel.querySelector('.carousel__btn--prev'),
            },

            breakpoints: {
              992: {
                slidesPerView: 1.8,
                spaceBetween: 20
              },

              1200: {
                slidesPerView: 2.8
              },

            }
        })
    })
}
