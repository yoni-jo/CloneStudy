"use strict"


const search_Btn = document.querySelector(".search");
const globalSearch = document.querySelector(".global__Search");
const nav = document.querySelector(".nav")
const close_Btn = document.querySelectorAll('.close-btn')
const ham_Btn = document.querySelector('.ham-Btn')
const global_Menu = document.querySelector(".global__Menu")

let SLIDEEVENT;
const HIDE="hide"


// header안 search 클릭시 
function search() {
    SLIDEEVENT = 'slideDown'
    nav.classList.add(HIDE)
    globalSearch.classList.add(SLIDEEVENT);
}
search_Btn.addEventListener("click", search)


//header 햄버거버튼 클릭시 
function global() {
    SLIDEEVENT = "slideLeft"
    global_Menu.classList.add(SLIDEEVENT)
    nav.classList.add(HIDE)
}
ham_Btn.addEventListener("click", global)

// 닫힘버튼눌렀을때
function close() {
    const parent = this.parentElement
    parent.classList.remove(SLIDEEVENT)
    nav.classList.remove('hide')
}
close_Btn.forEach((closebtn) => {
    closebtn.addEventListener("click", close)
})