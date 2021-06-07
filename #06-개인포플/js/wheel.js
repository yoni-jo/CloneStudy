window.onload = function () {
    var elm = ".wheel";
      var num=0
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        
        $(this).on("mousewheel DOMMouseScroll", function (e) {
        
            e.preventDefault();
            var delta = 0;
            if (!e) e = window.event;
            if (e.wheelDelta) {
                console.log(e.wheelDelta)
                delta = e.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (e.detail)
                delta = -e.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            var de = $(elm).parent()[1].children[index];
       
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
              
                if ($(elm).next() != undefined) {
                   
                    try {
                        if(num<=3){
                        moveTop = $(elmSelecter).next().offset().top;
                        console.log($(elm)[num])
                        }else{
                            moveTop = $(de).offset().top
                        }
                       
                    } catch (e) {
                       
                    }
                    num++
                }
                // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try {
                       
                            moveTop = $(elmSelecter).prev().offset().top;
                       
                    
                      
                        
                    } catch (e) {
                    }
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800,
                complete: function () {}
            });
        });
    });
}