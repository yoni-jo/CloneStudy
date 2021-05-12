$(document).ready(
    function () {
        // quickmenu 슬라이드 토글
        $(".qnb>h2").mouseover(function () {
            const ul = $(this).siblings("ul")

            ul.slideDown();
            ul.mouseleave(function () {
                $(this).slideUp();
            })
        });

        // gnb안에 풀다운메뉴
        $(".gnb>ul:first-child>li>a").mouseover(function () {
            const fulldown_menu = $(this).parent().children(".fulldown_menu")
            fulldown_menu.slideDown();
            $(this).mouseleave(function () {
                fulldown_menu.slideUp();
            })
        })

        // 지자체장애현황팝업창 x박스 
        $(".error_current>h2>a").click(function () {
            $(".error_current").css("display", "none")
        })
    });