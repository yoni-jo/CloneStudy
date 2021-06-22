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



// 타이틀 순차적으로 이미지가 나타나게하기
const fadeEls = document.querySelectorAll(".visual .fade-in")

fadeEls.forEach(function (fadeEl, index){
gsap.to(fadeEl,1,{
    delay:(index +1)*.7,
    opacity:1
})
})