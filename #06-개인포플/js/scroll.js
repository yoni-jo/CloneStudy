const nav = document.querySelector("nav")
const menu = nav.querySelector("ul")
const section = document.querySelectorAll("section")
const header=document.querySelector("header")

window.addEventListener('scroll',()=>{
    
const header_height = header.offsetHeight
    if(window.scrollY>header_height){
        header.classList.add("bg")
        header.lastChild.style.color="white"
    }else{
        header.classList.remove("bg")
    }
    
})


menu.addEventListener('click', (e) => {
    const menu_a = e.target
    const toggle = menu_a.dataset.toggle

    section.forEach((sections) => {
        let section_height = sections.offsetTop;
        // 클릭한 메뉴의 이름과 각 세션별 아이디 이름이 같을경우실행
        if (toggle === sections.id) {
            window.scrollTo({
                top: section_height,
                behavior: 'smooth'
            })
   
        }
    });
    e.preventDefault();
})