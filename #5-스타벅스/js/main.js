"use strict";

const searchEl = document.querySelector(".search")
const searchInput = searchEl.querySelector("input")

searchEl.addEventListener("click", ()=>{

    searchInput.focus()//클릭시 커서가 해당 위치로 
})

searchInput.addEventListener("focus",()=>{
    searchEl.classList.add("focused")
    searchInput.setAttribute('placeholder','통합검색')
})
searchInput.addEventListener("blur",()=>{
    searchEl.classList.remove("focused")
    searchInput.setAttribute('placeholder','')
})