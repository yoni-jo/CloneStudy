"use strict"


const search_Btn = document.querySelector(".search");
const globalSearch = document.querySelector(".global__Search");
const nav = document.querySelector(".nav")
const close_Btn = document.querySelector('.close-btn')

let SLIDEEVENT;
// header안 search 클릭시 
function search(event) {

    SLIDEEVENT = 'slideDown'
    nav.classList.toggle('hide')
    globalSearch.classList.add(SLIDEEVENT);
    close_Btn.addEventListener("click", close)
}
search_Btn.addEventListener("click", search)



function close(event) {
    const parent = this.parentElement.parentElement
    parent.classList.remove(SLIDEEVENT)
    nav.classList.toggle('hide')
}