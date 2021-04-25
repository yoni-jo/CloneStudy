const list_button = document.querySelectorAll(".list>li")
const detail = document.querySelectorAll(".detail>li")

list_button.forEach((list_buttons, index) => {
        list_buttons.addEventListener("click", (event) => {
                event.preventDefault();
                const img = detail[index];

                detail.forEach((details) => {
                        details.style.removeProperty("z-index")
                })
                img.style.zIndex = '1'



        })
})