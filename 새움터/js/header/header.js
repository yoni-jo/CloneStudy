

$(document).ready(
    function () {
      // quickmenu 슬라이드 토글
      $(".qnb>h2").click(function () {
        $(".qnb>ul").slideToggle();
      });

      // gnb안에 풀다운메뉴
      $(".gnb>ul>li").hover(function(){
        $(this).children(".fulldown_menu").slideToggle();
      })

      // 지자체장애현황 x박스 

      $(".error_current>h2>a").click(function(){
        $(".error_current").css("display","none")
      })
    });