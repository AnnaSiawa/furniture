import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.product-swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    watchOverflow: true,
    loop: true,
    slidesPerGroup: 1,
    breakpoints: {
        1620: {
            slidesPerView: 5,
            spaceBetween: 60,
        },
        1380: {
            slidesPerView: 4,
            spaceBetween: 60,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        768: {
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 60,
        },
        300: {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 60,
        }
    }
});

// const sum = require("./module/sum.js");
// // const sum = (a, b) => a + b;
// console.log(sum(1, 10));
// console.log(sum(12, 5));
