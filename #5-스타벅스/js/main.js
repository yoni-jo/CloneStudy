"use strict";

const searchEl = document.querySelector(".search")
const searchInput = searchEl.querySelector("input")
//seach아이콘 클릭 이벤트
searchEl.addEventListener("click", () => {

    searchInput.focus() //클릭시 커서가 해당 위치로 
})
//클릭했을때 검색창 활성화
searchInput.addEventListener("focus", () => {
    searchEl.classList.add("focused")
    searchInput.setAttribute('placeholder', '통합검색')
})
//다른곳을 클릭시 사라짐
searchInput.addEventListener("blur", () => {
    searchEl.classList.remove("focused")
    searchInput.setAttribute('placeholder', '')
})


const header = document.querySelector("header")
const badges = document.querySelector(".badges")

// <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
window.addEventListener("scroll", _.throttle(function () {
    //스크롤시 header 높이값을 초과했을경우 
    //뱃지부분이 사라짐.
    if (window.scrollY > header.offsetHeight) {

        gsap.to(badges, .2, {
            opacity: 0,
            display: 'none'
        })
        //다시 상단으로 스크롤시 나타남
    } else {
        gsap.to(badges, .2, {
            opacity: 1,
            display: 'block'
        })
    }
}, 300))



// 타이틀 이미지 순차적으로 나타나게하기
const fadeEls = document.querySelectorAll(".visual .fade-in")

fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    })
})

//공지사항 vertical슬라이드

const swiper = new Swiper('.notice-line .swiper-container', {
    // Optional parameters
    direction: 'vertical',
    autoplay: {
        delay: 4000
    },
    loop: true

});

//프로모션 이미지 슬라이드

new Swiper('.promotion .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3, //보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 스랄이드가 가운데 보이기 
    loop: true,
    autoplay: {
        delay: 5000
    },

    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요쇼 제어 

    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

//프로모션 클릭시 슬라이드 영역 사라지는 효과

const promotionEl = document.querySelector(".promotion")
const promotionToggleBtn = document.querySelector(".toggle-promotion")
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
    isHidePromotion = !isHidePromotion //true
    if (isHidePromotion) {
        //숨김처리
        promotionEl.classList.add("hide")

    } else {
        //보임 처리
        promotionEl.classList.remove("hide")
    }
})


//둥둥 떠다니는 이미지효과
function random(min, max) { 
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector,delay,size) {

    gsap.to(
        selector,//선택자
        random(1.5,2.5), //지속시간 =>여기선 애니메이션 동작 시간
        {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0,delay)
    });
}

floatingObject('.floating1',1,15)
floatingObject('.floating2',.5,15)
floatingObject('.floating3',1,20)



// 스크롤 할때마다 각 세션 이미지가 나타나는 효과

const spyEls = document.querySelectorAll('section.scroll-spy')

spyEls.forEach(function (spyEl){

new ScrollMagic
    .Scene({
        triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정 
        triggerHook: .8 // 위 triggerElement가 0.8위치에 걸리면 실행되게하는 옵션
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());

})