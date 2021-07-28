"use strict"


// main slide
new Swiper('.main__slide .swiper-container', {
    direction: 'horizontal', //수평이동
    speed: 1000,
    loop: true, //반복설정
    autoplay: {
        delay: 3000
    },
    slidesPerView: 1, //보여줄 슬라이드 개수
    centeredSlides: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.main__slide .swiper-pagination',
        type: 'progressbar',

    },
    navigation: {
        prevEl: '.main__slide .swiper-button-prev',
        nextEl: '.main__slide .swiper-button-next'
    }
});
// progressbar 위치 하단이동
const main__slide = document.querySelector(".main__slide")
const swiper_Pagination = main__slide.querySelector(".swiper-pagination")
const TOP = "calc(100% - 4px)"

swiper_Pagination.style.top = `${TOP}`