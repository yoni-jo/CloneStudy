"use strict";

const searchEl = document.querySelector(".search")
const searchInput = searchEl.querySelector("input")

searchEl.addEventListener("click", () => {

    searchInput.focus() //클릭시 커서가 해당 위치로 
})

searchInput.addEventListener("focus", () => {
    searchEl.classList.add("focused")
    searchInput.setAttribute('placeholder', '통합검색')
})
searchInput.addEventListener("blur", () => {
    searchEl.classList.remove("focused")
    searchInput.setAttribute('placeholder', '')
})


const header = document.querySelector("header")
const badges = document.querySelector(".badges")

// <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
window.addEventListener("scroll", _.throttle(function () {
    console.log(window.scrollY)
    if (window.scrollY > header.offsetHeight) {

        gsap.to(badges, .2, {
            opacity: 0,
            display: 'none'
        })

    } else {
        gsap.to(badges, .2, {
            opacity: 1,
            display: 'block'
        })
    }
}, 300))

