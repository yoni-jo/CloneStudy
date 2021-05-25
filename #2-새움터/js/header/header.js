$(document).ready(
    function () {
        // quickmenu 슬라이드 토글
        $(".qnb>h2").mouseover(function () {
            var ul = $(this).siblings("ul")

            ul.slideDown();
            console.log(ul.parent())
            ul.parent().mouseleave(function () {
               
                ul.slideUp();
            })
        });

        // gnb안에 풀다운메뉴

        $(".gnb>ul:first-child li>a").mouseover(function () {
            var fulldown_menu = $(this).siblings("div.fulldown_menu")

           
                fulldown_menu.slideDown();

            fulldown_menu.parent().mouseleave(function () {
                fulldown_menu.slideUp();
            })
        })

        // 지자체장애현황팝업창 x박스 
        $(".error_current>h2>a").click(function () {
            $(".error_current").css("display", "none")
        })
    });