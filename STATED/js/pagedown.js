"use strict"
const nav = document.querySelector(".gnb")
const section = document.querySelectorAll("section")
const title = document.querySelector("#title_opactie").offsetTop

// gnb메뉴 클릭했을때 이벤트 설정
nav.addEventListener("click", slideanimation)
// gnb메뉴 클릭했을때 함수실행
function slideanimation(e) {
    // home 메뉴 클릭시 실행
    if(e.target.text ==="home"){
        window.scrollTo({top:title,behavior:"smooth"})
    // home 버튼을 제외한 메뉴 클릭시 실행
    }else{
        section.forEach((sections) => {
            let section_height = sections.offsetTop;
    // 클릭한 메뉴의 이름과 각 세션별 아이디 이름이 같을경우실행
            if (e.target.text === sections.id) {
               
                window.scrollTo({
                    top: section_height,
                    behavior: 'smooth'
                })
            }
        });
    }
   


}

    
