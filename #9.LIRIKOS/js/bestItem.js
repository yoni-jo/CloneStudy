"use strict"
//상품리스트 이미지
const item = [{
    img: 'FACIAL ERASER CLEANSING FORM.jpg',
    hover: 'FACIAL-ERASER-CLEANSING-FORM-hover.jpg'
}, {
    img: 'DEEP SEA WATERFALL TONER.jpg',
    hover: 'DEEP-SEA-WATERFALL-TONER-hover.jpg'
}, {
    img: 'FACIAL ERASER CLEANSING OIL FORM.jpg',
    hover: 'FACIAL-ERASER-CLEANSING-OIL-FORM-hover.jpg'
}, {
    img: 'TRUE AMPOULE MASK.jpg',
    hover: 'TRUE-AMPOULE-MASK-hover.jpg'
}, {
    img: '3-MINUTE CLAY MASK.jpg',
    hover: '3-MINUTE-CLAY-MASK-hover.jpg'
}, {
    img: 'DEEP SEA WATERFALL CREAM.jpg',
    hover: 'DEEP-SEA-WATERFALL-CREAM-hover.jpg'
}]

const best_sellers = document.querySelector(".best-sellers")
const items = document.querySelector(".items")
const front_Img_el = items.querySelectorAll(".front")

// 이미지파일 자동등록 
item.forEach((list, index) => {
    const img = item[index].img
    const hover = item[index].hover
    const figure_El = front_Img_el[index].parentNode

    front_Img_el[index].setAttribute('src', `./img/lirikos/best_sellers/${img}`)
    figure_El.style['background-image'] = `url(../img/lirikos//best_sellers/${hover})`

})