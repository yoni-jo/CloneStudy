$(document).ready(function () {
    const header = $('header')

    // 스크롤 내렸을때 header 값 유지
    if ($(window).scrollTop() > header.height()) {
        $(header).addClass('bg');
        $("nav ul li a").addClass('change')

    }
    // 스크롤 내렸을때 


    let num = 0;
    var li = $("#portfolio ul li")

    $(window).scroll(function () {

        console.log(
            $(window).scrollTop())
        // header 배경색,글씨색변경
        if ($(window).scrollTop() > header.height()) {
            $(header).addClass('bg');
            $("nav ul li a").addClass('change')
            $("nav ul li").addClass('change')
           
        } else {
            $(header).removeClass('bg');
            $("nav ul li a").removeClass('change')
            $("nav ul li").removeClass('change')
           
        }
        if($(window).scrollTop()>=$("#about").offset().top){
            $(".story ul li.profile div.skill ul li span").css({animationName:"Gauge",animationDelay:"0.8s"})
         
        }else if($(window).scrollTop()<$("#about").offset().top){
            $(".story ul li.profile div.skill ul li span").css({animationName:"none",animationDelay:"none"})
        }

    })


    // 메뉴클릭시 해당 seciton으로 스크롤 다운
    $("nav ul>li").click(function () {
       
        let scrollPosition = $($(this).children("a").attr("data-toggle")).offset().top

        $('html,body').animate({
            scrollTop: scrollPosition

        }, 1500)
        
        if($(this).children("a").attr("data-toggle")==="#about"){
            $(".story ul li.profile div.skill ul li span").css({animationName:"Gauge"})
           
        }
    })
})