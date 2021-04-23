const li = document.querySelectorAll(".list>li")
const detail = document.querySelectorAll(".detail>li")

li.forEach((lis, index) => {
    const linum = index;
    
    lis.style.zIndex="0"; 
    lis.addEventListener("click", () => {
        
        const img = detail[index].lastElementChild
        const imgnum = index
        detail.forEach((details, index) => {

        })
        
        if(linum==imgnum){
            detail[linum].style.zIndex = "10";
        }
    })
})